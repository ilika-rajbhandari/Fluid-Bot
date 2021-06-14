# FluidBot

## Short Description
An Efficient AI based Solution to manage pipelined distribution system and take corrective measures.

## What's the problem?
In our day to day life, news headlines of water main/pipeline breaks are seen at an ever increasing rate. Leaks, emissions, and other damage from pipelines can destroy vegetation, harm local wildlife, and add to local water and air pollution levels. With water main/pipeline breaks increasing, unpredictable service outages, costly repairs, and highly disruptive road closures also increasing. To rectify this, it is hard to deploy large forces to monitor each area manually for a longer duration & that too will not ensure maximum utilization of resources.
It prompted us to seek innovative strategies that would improve service reliability while minimizing repair and replacement costs.

## How can technology help?
Our solution helps to simplify the job of all the teams by efficiently utilizing the water & sewage pipeline distribution system using real-time monitoring and control.
Solution helps to be more proactive in water/sewage infrastructure management and prioritize pipes that needs the greatest attention.

## The idea
The idea is to build a state of the art solution, which can help in pre-identification of defect/burst in pipe lines and also predict Remaining Useful Life of pipe line. These are the pipe lines, which carry water, sewage, petroleum or PNG. Damage to the nature is significant in case of a burst in these pipes.

## Demo Video

## Detailed Video

## The Architecture

## Long Description
Water/Pipeline distribution systems contain different types of buried pipes (i.e., cast iron, ductile iron, asbestos cement, polyethylene, and polyvinyl chloride). As pipeline infrastructure becomes older, its structural condition, hydraulic capacity and performance deteriorates.
FluidBot, an efficient AI based management system to manage complex distribution networks is planned, as shown in the above architecture. It is a complete solution by which the pipes will be continuously captured for any leakage, damage and at the same time various sensors will give real time monitoring of the pipes parameters such as flow rate, area, and diameter. Also the pipes deterioration prediction, risk analysis and remaining useful life will be done. Based on the alarming situation in each area their respective Local Administrators can be informed using a Text Message/Email Services. We can compare the statistics of different areas and figure out which region needs more attention based on the data. 

Solution can be described in 3 Sections:

### Section -1
AI Based Data Modelling
IOT hardware with drone/camera feed will be an input to the model for detecting the flow rate, diameter, area, corrosion and remaining useful life of the pipeline. The data will be analyzed per frame and can be stored in central server/repository. The Model is based on python tensor flow neural networks. IOT hardware will help in determining the flow rate of the pipeline and camera/video recording will help in determining the diameter and area of the pipeline. As of now, data for the flow rate is randomly generated. If current flow rate is less than normal flow rate value then chances of leakage and clogging are there in the pipeline. If current flow rate is greater than expected then chances of pipeline burst is there.
### Section -2
Data Filtration
Raw Data obtained from Section-1 is stored in central server/database/repository. When end-user requests to view the statistics from UI, raw data is fetched for requested location from central server and cumulative data is prepared using Global API's which gives the information about the flow rate, pipe deterioration prediction, remaining useful life  of the pipeline within the requested area/zone.
### Section -3
User Interface
Authorized user/administrators can view the data using our website. On Successful login in the specified zone, google API will request for the location and display the user's location data. Other Regions data can also be seen by selecting the location on google map. Based on the region selection the data will be fetched from central server along with the live feed. Statistics of different regions can be compared. For alarming situations SMS/Email can be sent to the designated person.


