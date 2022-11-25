# nest-csrf

## Draft:

- sets csrf public token pair in response
- sets a REST middleware to validate the csrf against http only cookie header
- sets a http only csrf session

### How to set init a csrf session

- we will use a middleware, which will check for an http header and if missing
  it will generate one
-

## how to set, revoke or rewrite csrf secret

- set-csrf-secret interfeptor which allows to setup a csrf secret

## how to set csrf

- a decorator/interceptor over route

## how to validate route

- csrf guard as decorator over route or handler

```ts
// Allow to set a csrf cookie secret over given controller
// if another cookie secret already exists and the path is not the same
// this interceptor will override it.
@UseCsrfCookieSecret()
class MyCsrfInitController {}
```
