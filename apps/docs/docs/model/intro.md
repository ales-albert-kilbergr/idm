---
sidebar_label: 'Intro'
sidebar_position: 1
---

# Intro

```mermaid
classDiagram

  class Identity {
    +uuid id
    +string identifierHash
    +Date createdAt
    +Date? anonymizedAt
  }

  class IdentityProfile {
    +string fullaname
    +string identifier
    +IdentifierType identifierType
    +email? email
    +string? phoneNumber
  }

  class IdentityPassword {
    +string passwordHash
    +number entropy
    +Date createdAt
    +Date? updatedAt
    +Date? expiresAt
  }

  Identity "1" --> "1" IdentityProfile
  Identity "1" --> "1" IdentityPassword
```
