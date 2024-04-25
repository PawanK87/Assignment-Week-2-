/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

module.exports = sleep;

sleep(3000).then(() => {
  console.log('Resumed after 3 seconds');
})
