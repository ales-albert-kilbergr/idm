---
sidebar_label: 'Password'
sidebar_position: 3
---

# Password

## Password hashing

We are using the `argon2` hashing algorithm because it had been proven as one
of the [most secure one](link-one).

An implementation for nodejs taken from this [library](link-two).

[link-one]: https://medium.com/analytics-vidhya/password-hashing-pbkdf2-scrypt-bcrypt-and-argon2-e25aaf41598e
[link-two]: https://www.npmjs.com/package/argon2

## Password length

We limit a password maximum length to **64 bytes**.

- The reason why to limit a password length is to prevent a
  [Long password denial of service](denial-of-service).
- The reason why to limit a password length to exact size of **64 bytes** is
  that a hashing function hashing block is limited to a size of 64 bytes and
  longer passwords would nees to be pre-hashed by some fast hashing algorhitm
  first.

[denial-of-service]: https://www.acunetix.com/vulnerabilities/web/long-password-denial-of-service/
