epsile - an anonymous one-to-one chat
====

epsile got it name from epsilon, and it's an open-source clone of Omegle. It's using a node.js express+socket.io combo as server backend.

Demo
---
http://djazz.se:8001/

Installation
---
When you have cloned this repository, install express and socket.io like so:
```
$ npm install express socket.io
```
Then run the server:
```
$ node epsile-server
```

Features
---
Compared to Omegle, epsile isn't close to it in features
* You can chat with another stranger. If there is no other stranger you'll have to wait.
* If you don't have the tab focused you'll get a popup if someone sends you a message.
* URLs in chat messages are clickable, and opens in a new tab when clicked. Don't click on links from strangers you don't trust!
* If you start your message with "/me " you will send an action. An example is if you write "/me ate a cookie" it will look like "*** Stranger ate a cookie" for the stranger.

TODO
---
In no particular order:
* Add interests (see how Omegle does it)
* Add Omegle integration (chat with a stranger from Omegle inside epsile)
* Add custom styling/other themes (light/dark for example)
* Add question mode (discuss a topic with other strangers)
* Add collaboration features, like a simple drawing surface that both strangers can draw on
* Add webcam and voice support (it will most likely not happen)
* Better URL matching
* Audio notification & title notification

License
---
GNU General Public License V3
