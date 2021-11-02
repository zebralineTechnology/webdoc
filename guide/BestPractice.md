# Best Practice

## Blob
1. create two containers for bus picture and user picture (buspicture, userpicture)
2. access tier = cool
3. picture file name = ozUser.ID , ozBus.ID

## How bus keep update system

### 1. When driver trigger start button
    1.1 update ozRoute.RouteStepStatusID=RouteBusStart
    1.2 insert ozRouteHistory and RouteStepStatusID=Start (also update ozRouteHistory.RouteStepStatusID=ForceStop IF status still is RouteStepStatusID=Start)
    1.3 insert ozRouteStepHistory
    1.4 check if exist Radis.key (ozRoute.ID {routeID=2:*}) then delete
    1.5 create Radis.key (ozRouteID.ID { routeID=2:routeHistoryID=256 }) with Radis.value (json format with bus location timeStamp), set expire for 1hr

### 2. driver update system in every 3 sec.
    2.1 update ozRouteHistory.LastUpdateDt , ozRouteHistory.CurrentLocation
    2.2 insert ozRouteStepHistory
    2.3 udpate Radis.value with latest location if exist Radis.key (ozRouteID.ID { routeID=2:routeHistoryID=256 }) , else insert Radis.key, set expire for 1hr

### 3. passenger trigger bus location button
    3.1 query if exist Radis.key , then return bus location (in json format)

### 4. driver trigger stop button
    4.1 update ozRoute.RouteStepStatusID=RouteBusStop
    4.2 update ozRouteHistory.RouteStepStatusID=Stop
    4.3 insert ozRouteStepHistory
    4.4 check if exist Radis.key (ozRoute.ID {routeID=2:*}) then delete

## Radis key definition
 `key` <Badge text="routeID=123:routeHistoryID=789" type="tip" vertical="middle"/>
 
 `value` <Badge text="json format included timestamp, bus location,  userRoute records" type="tip" vertical="middle"/>

 ## test

![Alt text](https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.15752-9/251089987_565782504492237_5534445321066902006_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=VWtVNYPXcdkAX9370wj&_nc_ht=scontent.fmkz1-1.fna&oh=188e974ded9c1b1a16cc3ce9c3c4304c&oe=61A73F27)


![Alt text](https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.15752-9/248362103_378802537302590_7417410148217976081_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nN3W_5r65dAAX-kgUZl&_nc_ht=scontent.fmkz1-1.fna&oh=f3c520d8594cb339c0d4085b13a03258&oe=61A73962)

