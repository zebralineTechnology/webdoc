# command

## Redis

### CLI-Tool
Use the Redis command-line tool with Azure Cache for Redis
[redis-cli-tool](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-how-to-redis-cli-tool) 
[redis-cli-zip](https://github.com/microsoftarchive/redis/archive/refs/tags/win-3.2.100.zip)
[redis-clie-NodeJS] (https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-nodejs-get-started)

### Redis connection
```
> redis-cli.exe -h zeoRedis20.redis.cache.windows.net -p 6379 -a Primary-access-key
```


### CLIENT LIST
The CLIENT LIST command returns information and statistics about the client connections server in a mostly human readable format. [client-list](https://redis.io/commands/client-list)

```
> Client List
```

### INFO
The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans. [info](https://redis.io/commands/info)

```
> info
> keys *
```

### SET, GET, DEL, GETRANGE   
commonly use key command [strings-keys](https://www.tutorialspoint.com/redis/redis_strings.htm)

```
> SET tutorialspoint redis 
> GET tutorialspoint
> DEL tutorialspoint
> GETRANGE key start end
> APPEND key new-value
```

### EXISTS key,PEXPIRE key,KEYS pattern, MOVE key db, TTL key expire status   
advance key features [advance-keys](https://www.tutorialspoint.com/redis/redis_keys.htm)

```
> EXISTS key
> KEYS pattern
> TTL key
> PEXPIRE tutorialspoint TIME_IN_SECONDS
> FLUSH ALL/DB
```

### Others

```
> SELECT 0..15 //switch redis DB
> RENAME key new-key-name //rename
> MOVE key DB_ID //move key to another DB
> PERSIST key //remove expire for key
> PING // check for connection

```
