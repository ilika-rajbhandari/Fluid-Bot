# FluidBot

## Contents


## Short Description
An Efficient AI based Solution to manage pipelined distribution system and take corrective measures.

## What's the problem?
In our day to day life, we come across the news regarding pipeline accidents and after effects. Structural deterioration of pipes in urban distribution network has presented great challenges to the utilities all over the world. When the deterioration of a pipe exceeds its resiliency, the pipe will leak or burst, leading to both significant economic and social costs. For example:
* It is estimated that 32 billion cubic meters of treated water is lost through water distribution network all over the world.
* The New York City has spent $54.5 million to manage its break pipes in a time span of 10 years. 
* Some severe accidents caused by pipe breaks even lead to death and heavy causalities. 
* Leaks, emissions, and other damage from pipelines destroy vegetation, harm local wildlife, and add to local water and air pollution levels.

It is almost impossible to check all pipes in the network routinely in reality due to high consequential cost of checking a single pipe.

It prompted us to seek innovative strategies that would improve service reliability while minimizing repair and replacement costs.

## How can technology help?
Our solution helps to simplify the job of all the teams by efficiently utilizing the pipeline distribution system using real-time monitoring and control.
* Solution helps to be more proactive in pipeline infrastructure management.
* Prioritize pipes that needs the greatest attention.
* Predictions for Remaining Useful life of the pipe
* Reduce impacts by targeting the most critical and deteriorated pipes.
* Reduce overall probability of pipeline failure.


## The idea
The idea is to build a state of the art solution, which can help in pre-identification of defect/burst in pipe lines and also predict Remaining Useful Life of pipe line. These are the pipe lines, which carry water, sewage, petroleum or PNG. Damage to the nature is significant in case of a burst in these pipes.

## Demo Video

## Detailed Video

## The Architecture

## Long Description
Water/Pipeline distribution systems contain different types of buried pipes (i.e., cast iron, ductile iron, asbestos cement, polyethylene, and polyvinyl chloride). As pipeline infrastructure becomes older, its structural condition, hydraulic capacity and performance deteriorates.

*Fluid-Bot* is a preventive and predictive AI Based solution ,which can continuously monitor the health of  complex Pipeline infrastructure . It is a complete solution where Pipelines will be scrutinized for blockage, leakage, corrosion and defects. Flow Sensors will be mounted on the hardware to measure the fluid flow rate. Complete Pipeline conditions can be analyzed by Local Administrators  and necessary corrective measures can be taken. End Users can see the Pipeline condition of their respective area and can file a complaint in case of any damage.    

Solution can be described in 3 Sections:

### Section -1
AI Based Data Modelling

IOT hardware with drone/camera feed will be an input to the model for detecting the flow rate, Pipe diameter, Pipe area, Pipe Blockage, Corrosion, Pipe Breakage using tensor flow neural networks . Flow Sensors(Hardware) mounted on drone/camera  will  add to Fluid Flow rate .  The Stats will be used for estimating the Remaining Useful life of the Pipe based on few more factors such as soil components, safety measures, geographical location, fluid type. Recommendations regarding the type of pipes to be used in specific area can also be done.
### Section -2
Data Filtration

Processed Data obtained from Section-1 is stored in central server/database/repository. When end-user requests to view the statistics from UI, raw data is fetched for requested location from central server and cumulative data is prepared using Global API's which gives the information about the flow rate, pipe deterioration prediction, remaining useful life  of the pipeline within the requested area/zone and recommendations 
### Section -3
User Interface

Authorized user/administrators can view the data using our website. On Successful login in the specified zone, google API will request for the location and display the user's location data. Other Regions data can also be seen by selecting the location on google map. Based on the region selection the data will be fetched from central server along with the live feed. Statistics of different regions can be compared. For alarming situations SMS/Email can be sent to the designated person.End user has a read only access to the UI  and can file a complaint in case of any damage in their respective area  

## Project RoadMap

## Getting Started

## Live Demo

## Built with

## Contributing

## Versioning

## Authors

## Licence

## Acknowledgements

