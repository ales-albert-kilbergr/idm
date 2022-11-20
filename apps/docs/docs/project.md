---
sidebar_position: 3
sidebar_label: 'Project'
---

# Project

- **Setup web service basics**
- **Implement a basic application model** with apps info taken from env var and config
- **Register user process**: implement a register user process with basic
  authentication methods (password, email OTP, magic link)
- **Authenticate user process**: implement user authentication, wich will
  redirect to an registered app upon succesfull authentication.
- **Implement a password recovery**
- **Implement account api**:
- **Implement apps management** includes app scopes.

## Gant

```mermaid
gantt

title      A IDM project gantt
dateFormat YYY-MM-DD

section MVP
Generate empty application        :active, 2022-11-20,2h
Healthcheck basics                :2h
Logging basics                    :2h
Configuration basics              :3h
Swagger module basics             :1h
Root controller basics            :1h
Basic web service                 :milestone, 2022-11-28, 0d

```

Web service basics : milestone, m1, 20.11.2022

## Backlog
