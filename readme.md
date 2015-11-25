## Channel demo using the RxJs library

```
This demo uses a service containing an array of 'channels', one representing
each data stream, that can be injected into any app components and posted
to or subscribed to to send or receive messages.

Each 'channel' contains an observable that can emit an event using its .onNext()
function, or receive an event using its .subscribe() function. Using
ReplaySubjects, the channels are persistent.
```

## Setup

```
npm install
npm start
```


