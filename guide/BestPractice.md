# Best Practice

## Blob
1. create two containers for bus picture and user picture (buspicture, userpicture)
2. access tier = cool
3. picture file name = ozUser.ID , ozBus.ID

## How bus keep update system

### 1. When driver trigger start button
    1.1 update ozRoute.RouteStepStatusID=RouteBusStart
    1.2 insert ozRouteHistory
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
    4.2 insert ozRouteHistory
    4.3 insert ozRouteStepHistory
    4.4 check if exist Radis.key (ozRoute.ID {routeID=2:*}) then delete

## Radis key definition
 `key` <Badge text="routeID=123:routeHistoryID=789" type="tip" vertical="middle"/>
 
 `value` <Badge text="json format included timestamp, bus location,  userRoute records" type="tip" vertical="middle"/>