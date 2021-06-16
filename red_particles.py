import numpy as np
import skimage
import cv2
import matplotlib.pyplot as plt
from skimage import morphology
from skimage import feature
import warnings

np.set_printoptions(precision=3,suppress=True)


def scale_image(img_path,max_size):
    warnings.filterwarnings('ignore')
    image = cv2.cvtColor(cv2.imread(img_path),cv2.COLOR_BGR2RGB)
    size = image[:,:,0].size
    if  size > max_size:
        scale = np.sqrt(max_size/float(size))
        rescaled = skimage.transform.rescale(image,scale,mode='reflect',preserve_rane=True)
        rescaled = rescaled.astype(np.ubyte)
        return padding(rescaled)
    return padding(image)


def calculate_glcm(gray,dist=5,ang=0):
    gray = cv2.cvtColor(gray,cv2.COLOR_RGB2GRAY)
    glcm = feature.greycomatrix(gray,[dist],[ang],symmetric=True,normed=True)
    energy = feature.greycoprops(glcm,prop="energy")
    return energy[0][0]

def padding(array,required=(8,8)):
	current = np.asarray(array.shape[0:2])
	required = np.asarray(required)
	over = np.mod(current,required)
	add = np.mod(required-over,required)
	width = ((0,add[0]),(0,add[1]),(0,0))
	return skimage.util.pad(array,tuple(width),'edge')

def color_coded_block(img,index,depth,value,col):
	h,w = index
	row,column = skimage.draw.polygon(np.array([h,h,h+depth,h+depth]),np.array([w,w+depth,w+depth,w]))
	skimage.draw.set_color(img,(row,column),col,alpha=value)
	return img

def get_blocks(img,depth):
    blocks = []; index = []
    for h in range(0,img.shape[0],depth):
        for w in range(0,img.shape[1],depth):
            if len(img.shape)== 2:
                block = img[h:h+depth,w:w+depth]
            else:
                block = img[h:h+depth,w:w+depth,:]
            blocks.append(block)
            index.append((h,w))
    return blocks,index

def color_coded_blocks(img,index,depth,value):
	out_image = np.copy(img)
	col = np.array([128,255,0])
	for i in range(len(index)):
		out_image = color_coded_block(out_image,index[i],depth,value[i],col)
	return out_image


def red_blocks(image,mask,depth,block_threshold):
    red_blocks = []; red_index = []
    blocks,inds = get_blocks(image,depth)
    for i in range(len(blocks)):
        x,y = inds[i]
        bmask = mask[x:x+depth,y:y+depth,:]
        prop = np.sum(bmask[:,:,0]) / depth**2
        if prop > block_threshold and bmask.shape[:2] == (depth,depth):
            red_blocks.append(blocks[i])
            red_index.append(inds[i])
    return red_blocks,red_index

def energy_gLCM(image,depth,thresh_hold,distance,thresh):
    red_block , red_index = red_blocks(image,non_red(image),depth,thresh_hold)
    print("1")
    energy = []
    keep_blocks = []
    keep_index = []
    for i in range(len(red_block)):
        print("2 %s" % i)
        if red_block[i].shape[0] == red_block[i].shape[1]:
            energy_out = calculate_glcm(red_block[i],dist=distance)
            print("i %s energy out done" % i)
            if energy_out < thresh:
                print("%s inside if "% i)
                energy.append(energy_out)
                print("%s energy.append " % i)
                keep_blocks.append(red_block[i])
                print("%s keep_blocks.append " % i)
                keep_index.append(red_index[i])
                print("%s keep_index.append " % i)
    masked = mask_image(image,non_red(image))
    energy = np.asarray(energy)
    if energy.size > 0:
        drawn = color_coded_blocks(masked,keep_index,depth,0.5*energy / np.amax(energy))
    else:
        drawn = masked
   
    fig = plt.figure()
    ay1 = fig.add_axes([0.1,0.3,0.5,50])
    ay2 = fig.add_axes([0.1,-1,0.5,50])
    ay1.imshow(image)
    ay2.imshow(drawn)
    plt.tight_layout()
    plt.show()
    return


def mask_image(img,mask):    
	masked = np.copy(img)
	if img.ndim == 3 and mask.ndim == 2:
		mask = np.stack([mask,mask,mask],axis=-1).astype(bool)
	elif img.ndim == 2 and mask.ndim == 3:
		mask = mask[:,:,0]
	masked[np.logical_not(mask)] = 0
	return masked


# labels segmented regions of image
def label(mask):
	return skimage.measure.label(mask.astype(int),connectivity=1,return_num=True)

def red_mask(img):
    hsv = cv2.cvtColor(img,cv2.COLOR_RGB2HSV)
    lower_range = np.array([2,75,100])
    upper_range = np.array([20,250,250])
    return cv2.inRange(hsv,lower_range,upper_range)


def non_red(img):
    flag = True
    minimum_pixel = 64
    radius =4
    masked = red_mask(img)
    if flag: 
        masked = morphology.remove_small_objects(label(masked)[0],min_size=minimum_pixel)
        masked = morphology.remove_small_holes(label(masked)[0],area_threshold=minimum_pixel)
        selem  = morphology.disk(radius)
        masked = morphology.binary_closing(masked,selem = selem)
    return np.stack([masked,masked,masked],axis=-1).astype(bool)
