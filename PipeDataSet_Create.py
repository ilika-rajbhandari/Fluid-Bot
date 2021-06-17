import os
import numpy as np
import pandas as pd 
from csv import writer
from csv import reader

def pipeData(path):
	csv_file = os.path.join(path, "pipeData.csv")
	csv_file_pipe_data = os.path.join(path, "Pipe1.csv")
	# Set the seed so that the numbers can be reproduced.
	df1 = pd.DataFrame(np.random.randint(1 , 153, 27), columns=['PipeAge'])
	
	#diameter
	df2 = pd.DataFrame(np.random.randint(20, 3900, 27), columns=['PipeDiameter'])
	
	#Length
	df3  = pd.DataFrame(np.random.uniform(0.15, 6557.6, 27), columns=['PipeLength'])
	
	#breakage
	df4 = pd.DataFrame(np.random.randint(0,20, 27), columns=['PipeBreakage'])
	
	#wall los
	df5 = pd.DataFrame(np.random.randint(1 ,45, 27), columns=['PipeWallos'])
	df = pd.concat([df1, df2,df3,df4,df5], axis=1)
	
	df.to_csv(csv_file_pipe_data, index=False)
	
	mylist = ['Polyetheylene', 'CI','DI','PVC','Steel','Concrete','Asbestos']
	with open(csv_file_pipe_data, 'r') as read_obj, \
			open(csv_file, 'w', newline='') as write_obj:
		csv_reader = reader(read_obj)
		csv_writer = writer(write_obj)
		row_0 = next(csv_reader)
		row_0.append('PipeMaterial')
		csv_writer.writerow(row_0)
	
		for row in csv_reader:
			a = np.random.randint(0,6)
			data = mylist[a]
			row.append(data)
			csv_writer.writerow(row)
			
	
	df = pd.read_csv(csv_file)
	
	x = df.drop('PipeWallos',axis=1)
	Materials=pd.get_dummies(x,drop_first=True)
	x= x.drop('PipeMaterial',axis=1) 
	# concatation of independent variables and new cateorical variable.
	x=pd.concat([x,Materials],axis=1)
	x.to_csv(csv_file, index=False)

		
		
		