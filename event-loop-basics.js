
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


// new timers, tasks, and operations are recording when one runs a file
const shouldContinue = () => {
  // check one: any pending setTimeout, setInterval, or setImmediate?
  // check two: any pending OS tasks? (like a server listening to a port?)
  // check three: any pending long running operations, like fs module?
  return pendingTimers.length || pendingOSTasks.length || pendingOSTasks.length;
}

while (shouldContinue()) {
  //1) Node looks at pendingTimers and see if any functions are ready to be called. setTimeout, setInterval

  //2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

  //3) Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - new pendingOperation is done
  // - time is about to complete

  //4) Look at pendingTimers, but only setImmediate

  //5) Handle any 'close' events.
}
