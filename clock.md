Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)

const readline = require('readline');
const { wait } = require('./1-counter');

// Function to get the current time in HH:MM::SS format
function getCurrentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Function to get the current time in HH:MM::SS AM/PM format
function getCurrentTimeAMPM() {
  const date = new Date();
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Function to update and display the clock every second
async function showClock() {
  while (true) {
    readline.cursorTo(process.stdout, 0);
    readline.clearLine(process.stdout, 0);
    process.stdout.write(`Current time: ${getCurrentTime()}     ${getCurrentTimeAMPM()}`);
    await wait(1000); // Wait for 1 second
  }
}

// Start the clock
showClock();
