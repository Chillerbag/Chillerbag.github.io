---
layout: post
slug: Rust-RFC865-Server
category: projects
---

This project was my first major project in Rust. I've been learning it through the Rust Programming language 2nd Edition, which is a really good textbook!
RFC 865 describes the QOTD protocol over UDP and TCP, which is for serving quotes of the day to users from a server! Which is fun! As such, I have written a server over TCP to handle serving users quotes over a network on port 17.
I wanted to use my knowledge of TCP and multithreading to overkill it a bit, so the server uses the TCP protocol, and has the following features:

- Multithreading for isolating user threads from admin threads on the server - This allows admins to send non blocking commands to the server! Such as adding quotes, changing rate limits, etc.
- Thread pooling for users, so we can support multiple concurrent user requests at a time
- Command execution through packet reading - We interpret and read commands in a safe way to manipulate server properties
- rate limiting for IPs - to stop getting DDoSed on my home network!

It was a great experience, and once all the code is cleaned up, I'll give a more detailed report here.

I really enjoy the developer experience of writing in Rust. Type, thread, and memory safety is so relaxing. And once I've resolved all the compiler complaints, everything always works so beautifully.
Right now, there's a bunch of unwraps in the code, which I am working on fixxing, please be patient!
---
{: data-content="links"}

- [Github Repo](https://github.com/Chillerbag/Rust-RFC865-Server)
