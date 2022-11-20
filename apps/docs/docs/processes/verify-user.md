---
sidebar_label: 'Verify User'
sidebar_position: 3
---

# Verify User

User identification is a process, when an unknown user is recognized by a proving
himself via one of many identity means. Most common way is an identification via
email. User identifies himself by proving that he has access to an email mailbox
by clicking on a link in recieved in an email or writing a code from mail manualy.

Other way could be to write a code from SMS to identify via phone number or another
one would be to identify via postal adress by putting in a code from a physical letter.

## Verification via email

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
