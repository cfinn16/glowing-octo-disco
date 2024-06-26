"use strict";

const {MinPriorityQueue} = require('@datastructures-js/priority-queue')

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const logsHeap = new MinPriorityQueue((log) => log?.date)
  for (let i = 0; i < logSources.length; i++) {
    const currentLog = logSources[i].pop()
    logsHeap.enqueue(currentLog)
  }
  logsHeap.toArray().forEach((log) => printer.print(log))
  printer.done()
  return console.log("Sync sort complete.");
};
