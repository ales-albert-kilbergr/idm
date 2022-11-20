---
sidebar_label: 'Identity'
sidebar_position: 2
---

# Identity

User identity

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
  }

  Identity "1" --> "1" IdentityProfile
```

## Basic properties

### `{string}` fullname

We use a fullname as one property because it is the most generic approach to
respect all cultural differences. Fullname can contains family name, middle name
or any kind of name combinations.

### `{string}` identifier

An identifier is a hash created from a combination of indetifier type and identity
unique value. If an identifier type is an email than the value is an actual user email.

### `{string}` identifierType
