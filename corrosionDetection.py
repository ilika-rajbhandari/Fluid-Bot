# -*- coding: utf-8 -*-

import sys
import os
import xlsxwriter
import tensorflow
import tensorflow.keras
from tensorflow.keras.applications import VGG16
from tensorflow.keras import models
from tensorflow.keras import layers
from tensorflow.keras import optimizers
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
from time import time
import red_particles
con_base = VGG16(weights='imagenet',include_top=False,input_shape=(150, 150, 3))
con_base.summary()

XLS_WRITER = False
REPORT_DICT = {}

def writeXlsxFile(path):
    workbook_name = os.path.join(path, "rust_check_report.xlsx")
    print("Writing the data to xlsx file")
    with xlsxwriter.Workbook(workbook_name) as workbook :
        #Add worksheet
        worksheet = workbook.add_worksheet()

        #Write headers.
        worksheet.write(0, 0, 'File Name')
        worksheet.write(0, 1, 'Rusted/Not Rusted')

        #Write dict data
        for number_of_frame, (frame_name, result) in enumerate(REPORT_DICT.items(), start=1):
            worksheet.write(number_of_frame, 0, frame_name)
            worksheet.write(number_of_frame, 1, result)

def prototyping():
    prototype = models.Sequential()
    prototype.add(con_base)
    prototype.add(layers.Flatten())
    prototype.add(layers.Dense(256, activation='relu'))
    prototype.add(layers.Dense(1, activation='sigmoid'))
    prototype.compile(optimizer='adadelta', loss='binary_crossentropy', metrics=['accuracy'])
    prototype.summary()
    return prototype

def train_model():
    
    train_loc = os.path.join(os.getcwd(), "image-set", "rustnonrust", "train")
    validation_loc = os.path.join(os.getcwd(), "image-set","rustnonrust","validation")
    print ("train_loc = %s" % train_loc)
    print ("validation_loc = %s" % validation_loc)
    train_dataset = ImageDataGenerator(rescale=1./255,rotation_range=30,width_shift_range=0.2,height_shift_range=0.2,shear_range=0.2,zoom_range=0.2,horizontal_flip=True,fill_mode='nearest')
    test_dataset = ImageDataGenerator(rescale=1./255)
    trainner = train_dataset.flow_from_directory(train_loc,target_size=(150, 150),batch_size=4,class_mode='binary')
    validator = test_dataset.flow_from_directory(validation_loc,target_size=(150, 150),batch_size=16,class_mode='binary')
    return trainner, validator

def rust_check(image_to_check):
    model = prototyping()
    trainner, validator = train_model()
    tensor_board = tensorflow.keras.callbacks.TensorBoard(log_dir='output/{}'.format(time()))
    model.compile(loss='binary_crossentropy',optimizer=optimizers.RMSprop(learning_rate=2e-5),metrics=['acc'])
    print("trainner = %s" % trainner)
    print ("tensor_board = %s" % tensor_board)
    print ("validation_data = %s" % validator)
    model.fit(x=trainner,steps_per_epoch=10,epochs=10,validation_data=validator,validation_steps=20,verbose=2,callbacks=[tensor_board])
    image_path = image_to_check
    input_image = image.load_img(image_path, target_size=(150, 150))
    image_test = image.img_to_array(input_image)
    image_test = image_test.reshape((1,) + image_test.shape)
    image_test =image_test.astype('float32') / 255
    rust_prob = model.predict(image_test)
    image_name = os.path.basename(image_path)
    if (rust_prob > 0.50):
        REPORT_DICT.update({'%s' % image_name: 'RUSTED'})
        print("There is Rust in the image %s" % image_name)
        depth = 15
        thresh_hold = 0.8
        distance = 5
        thresh = 0.07
        img = red_particles.scale_image(image_path, max_size=1000000)
        # red_particles.energy_gLCM(img,depth,thresh_hold,distance,thresh)
    else:
        REPORT_DICT.update({'%s' % image_name : 'NOT RUSTED'})
        print("This is a no Rust in the image")

def traverse_image(path):
    for f in os.listdir(path):
        if f.endswith('.jpg'):
            image_check_path = os.path.join(path, f)
            rust_check(image_check_path)
            print ("Completed rust check for images : %s" % f)
    print ("Results : %s" % REPORT_DICT)
    writeXlsxFile(path)
    return
