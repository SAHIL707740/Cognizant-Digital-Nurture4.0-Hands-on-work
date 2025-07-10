# JWT Authentication Service

This is a simple Spring Boot application that provides a JWT token when valid user credentials are passed using HTTP Basic Authentication.

## How to Build and Run

1. Open terminal or PowerShell
2. Navigate to the project folder:
   ```
   cd path/to/jwt-auth
   ```
3. Run the application:
   ```
   mvn spring-boot:run
   ```

The server will start on:  
```
http://localhost:8090
```

## Test the Endpoint

Once the server is running, use the following curl command to authenticate and receive a JWT:

```
curl.exe -s -u user:pwd http://localhost:8090/authenticate
```

### Expected Output:
```
{"token":"<jwt-token-value>"}
```

## Endpoint

- `GET /authenticate`  
  Requires HTTP Basic Auth with:
  - Username: `user`
  - Password: `pwd`  
  Returns a JWT token if credentials are valid.

## Dependencies

- spring-boot-starter-web  
- spring-boot-starter-security  
- jjwt (0.9.1)

## Notes

- This is a basic example for learning JWT.
- The credentials and secret key are hardcoded for demonstration.
- Token is generated using HS256 algorithm.

