"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

const {MinPriorityQueue} = require('@datastructures-js/priority-queue')

module.exports = async(logSources, printer) => {
  const logsHeap = new MinPriorityQueue((log) => log?.date)
  for (let i = 0; i < logSources.length; i++) {
    const currentLog = await logSources[i].popAsync()
    logsHeap.enqueue(currentLog)
  }
  logsHeap.toArray().forEach((log) => printer.print(log))
  printer.done()
  return new Promise((resolve, reject) => {
    resolve(console.log("Async sort complete."));
  });
};
