# table structure

## Table of Contents
[[toc]]

### ozUser
::: tip
Represent active user, when user register the APP, then here is the first touch table 
:::

* ID=Auto incremental
* GUID=Auto generate
* Name=User name, free text
* ICNumber=Identity card Number, free text , but need to remove space
* MobileNumber=mobile number, will make used of this number to push sms
* CountryCodeTypeID=Malaysia*/Singapore
* LanguageTypeID=English*/Chinese/Malay/Tamal
* CreationDt=Creation datetime
* LastUpdateDt=update timestamp
* UserStatusID=represent current user status
* UserStepStatusID=user step status
* ~~Image=user photo~~ ** Replaced by** `blob`

### ozUserHistory
::: tip
history of user status/step
:::

* ID=Auto incremental
* UserID=User Identification
* CreationDt=Creation datetime
* UserStatusID=represent current user status
* UserStepStatusID=user step status

### ozUserDetailHistory
::: tip
history of user profile changes, first time register also need to be recorded.
:::

* ID=Auto incremental
* GUID=Auto generate
* UserID=User Identification
* MobileNumber=mobile number, will make used of this number to push sms
* Name=User name, free text
* ICNumber=Identity card Number, free text , but need to remove space
* CreationDt=Creation datetime
* image=Url link of user profile image
* UserStatusID=represent current user status
* UserStepStatusID=user step status


### ozRoute
::: tip
route information, which input by user
one user can have multiple route
:::

* ID=Auto incremental
* Name=Route name
* DestinationAddress=bus destination address
* CreationDt=Creation Datetime
* UserID=Creator ID
* RouteStatusID=Route Status ID
* DriverUserID=Driver User ID
* LastUpdateDt=Last update datetime
* BusID=Bus ID
* AutoRegisterStatusID=Auto/Manual register status ID {auto/manual}
* RouteStepStatusID=Route Step Status ID{ In/Out}

### ozRouteDetailHistory
::: tip
to keep the Route changes information when user modified the record.
:::

* ID=Auto incremental
* RouteID=Auto generate route ID
* Name=User name
* DestinationAddress=Destination Longtitude and Latitude
* DestinationName=Name of the destination
* UserID=Creator ID
* RouteStatusID=RouteStatusID
* DriverUserID=DriverUserID
* LastUpdateDt=LastUpdateDt
* BusID=Bus ID
* AutoRegisterStatusID=Auto/Manual register status ID {auto/manual}
* RouteStepStatusID=Route Step Status ID{ In/Out}


### ozRouteHistory
::: tip
to record current bus location and status (WIP), one record per route round trip
to avoid ozRoute table over hit and table lock; 
this table will update every 3 sec
:::

* ID=Auto incremental
* RouteID=Auto generate route ID
* RouteStatusID=RouteStatusID
* RouteStepStatusID=Route Step Status ID{ In/Out}
* DriverUserID=DriverUser's ID
* BusID=Bus ID
* DestinationAddress=Destination's address
* CurrentAddress=Bus's current address
* LastUpdateDt=Bus last update time

### ozRouteStepHistory
::: tip
every 3 sec will insert bus location into this table, which for future reporting purpose.
this table will grow extremely fast.
:::

* ID=Auto incremental
* RouteID=Auto generate route ID
* BusID=Bus ID
* RouteStepStatusID=Route Step Status ID{ In/Out}
* DriverUserID=Driver User ID
* RouteHistoryID=Route History ID
* DestinationAddress=Destination's address
* CurrentAddress=Bus current location
* LastUpdateDt=Bus last update


### ozBus
::: tip
bus info, busID + routeID = BusRouteKey
:::

* ID=Auto incremental
* PlateNumber=freeText, but need to remove space, plateNumber allow in another userID
* UserID=cretorID
* CreationDt=creation datetime
* BusStatusID=Active/Inactive
* Image=Bus picture

### ozCompany
::: tip
when first time user create route and bus, then this company record will also created
:::

* ID=Auto incremental
* UserID=Creator ID
* CompanyCode=4 unique and random number
* CompanyName=Company name
* CompanyAddress=Company address

### ozDriverRoute
::: tip
driver and route relationship
when first time driver create route and bus, then driverRoute also need to be added
:::

* ID=Auto incremental
* RouteID=Route ID
* DriverUserID=Bus driver user ID
* CreationDt=Create date and time
* DriverRouteStatusID=Active/Inactive

### ozUserRoute
::: tip
keep the relationship in between user and route
:::
* ID=Auto incremental
* RouteID=Route ID
* UserID=Creator ID
* CreationDt=Route creation date and time
* UserRouteStatusID=Active/InActive/PendingAproval/Reject
* LastUpdateDt=Last update date and time
* PickupAddress=Passenger pickup address
* LastChatID=LastChatID

### ozChat
::: tip
chat route history
:::

* ID=auto incremental
* Value=Content of the messages
* CreationDt=Date and time the messages was created
* RouteID=RouteID
* UserID=Creator ID

### luChatReason
::: tip
default chatReason, which will easy for user.
:::

* ID=Auto incremental 
* LanguageTypeID=Language Type
* Value=content value

### luVar
::: warning
key-pair value table, keep those setting variables
:::

* ID=auto incremental
* Key=Key column
* Value=Value column
* CreationDt=record create datetime

### luVersion
::: danger IMPORTANT
system version, which included major, patch and hotfix
:::

* ID=auto incremental
* Value=value column
* CreationDt=Creation datetime
* ReleaseVersionTypeID= release category {Major,Patch,Hotfix}



## Status definition (luStatus)

| Name | Description | Value | StatusGroupName  |
| ---- | ----------- | ----- | ---------------  |
| Active | Active account | 1 | UserStatus  |
| InActive | InActive account | 0 | UserStatus  |
| Login | User login | 0 | UserStepStatus  |
| Logout | User logoff | 1 | UserStepStatus  |
| Active | Active status | 1 | BusStatus  |
| InActive | InActive status | 0 | BusStatus  |
| Start | Route Bus start | 1 | RouteStepStatus  |
| Stop | Route Bus stop | 0 | RouteStepStatus  |
| ForceStop | Route Bus Force stop | 2 | RouteStepStatus  |
| Active | Active route | 1 | RouteStatus  |
| InActive | InActive route | 0 | RouteSatus  |
| Active | Active route user relationship | 1 | DriverRouteStatus  |
| InActive | InActive route user relationship | 0 | DriverRouteStatus  |
| Auto | Auto register | 1 | RouteAutoRegisterStatus  |
| Manual | Auto register | 0 | RouteAutoRegisterStatus  |
| Active | Company active | 1 | CompanyStatus  |
| InActive | Company inactive | 0 | CompanyStatus  |
| Active | Active user | 1 | UserRouteStatus  |
| InActive | InActive user | 0 | UserRouteStatus  |
| PendingApproval | Pending approval user | 2 | UserRouteStatus  |
| Rejected | Rejected user request | 3 | UserRouteStatus  |

## Type definition (luType)

| ID | Name | Description | Value | TypeGroupName |
| - | ----- | ----------- | ----- | ------------- |
| 1 | Malaysia | Malaysia Country Code (+60) | 1 | CountryCode |
| 2 | Singapore | Singapore Country Code (+65) | 2 | CountryCode |
| 3 | Chinese | Chinese Language | 1 | Language |
| 4 | Malay | Malay Language | 2 | Language |
| 5 | English | English Language | 3 | Language |
| 6 | Tamil | Tamil Language | 4 | Language |
| 7 | Major | Major release | 1 | ReleaseVersion |
| 8 | Hotfix | Hotfix release | 2 | ReleaseVersion |
| 9 | Patch | Pacth release | 3 | ReleaseVersion |