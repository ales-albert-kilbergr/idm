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

section MVP I.
Basic web service                 :milestone, 2022-11-20, 0d
Generate empty application        :done,      2022-11-20,2h
Healthcheck basics                :done,      2022-11-21,1h
Logging basics                    :done,      2022-11-21,1h
Configuration basics              :done,      2022-11-21,1h
Swagger module basics             :done,      2022-11-21,0.5h
Root controller basics            :done,      2022-11-21,0.5h
Dockerize                         :done,      2022-11-21,3h

section MVP II Public API.
Public api basic                  :milestone, 2022-11-21, 0d
Init empty public api module      :active,    2022-11-21,3h
Setup api endpoints structure     :           2022-11-22,3h
Public api sign in                :milestone, 2022-11-24, 0d

```

Web service basics : milestone, m1, 20.11.2022

## Backlog
