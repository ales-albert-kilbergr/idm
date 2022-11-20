---
sidebar_position: 1
---

# Identity Management (IDM)

**IDM** is a service to authenticate (only) a user and associate him with an identity.

**IDM** is not referring to permissions, roles manangement nor to any kind of authorization.

## Features

### Setup new identity

An identity is supposed to contain basic sets of informations about a user.

### Authenticate via password and email

### Recover forgotten password

### Identify via email

## Roadmap

### MVP

- authenticate user by password and email
- help user to recover forgotten password
- allow user to create new identity
- verify that identity via email.
- issue a jwt access token upon succesfull authentication.
- sends user emails
- implements oAuth with hardcoded application api keys (Support one application only based on env variables)
- logout process
- forgotting process

### Backlog

- magic links, paswordless authentication
- allow to register applications with api keys for oAuth/openId connect (Simple by hardcoded api authorization managed by admins)

### Monorepo or
