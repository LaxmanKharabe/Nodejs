/**
 * V8 Engine & Execution example
 * This script shows the difference between blocking (sync) 
 * and non-blocking (async) code in a single execution flow.
 */

const fs = require('node:fs');

// --- 1. SETUP (Preparing a text file) ---
const fileName = 'demo.txt';
fs.writeFileSync(fileName, 'Hello from Node.js 2026!');

console.log('--- START OF SCRIPT ---');

// --- 2. SYNCHRONOUS CODE (Blocking) ---
// V8's Call Stack is occupied by this operation. 
// Nothing else runs until the file is fully read.
console.log('1. [Sync] Starting to read file...');
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log('2. [Sync] File content read successfully.');
} catch (err) {
    console.error('Error reading file sync:', err);
}
console.log('3. [Sync] Finished sync block.\n');

// --- 3. ASYNCHRONOUS CODE (Non-Blocking) ---
// V8 offloads this task to Libuv (system threads).
// The Call Stack remains free to continue to the next line.
console.log('4. [Async] Starting to read file...');
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) return console.error(err);
    
    // This callback is executed later by the Event Loop 
    // once the file is ready and the stack is empty.
    console.log('6. [Async] File content read successfully (Callback).');
});

// This line runs IMMEDIATELY after line 4, before line 6.
console.log('5. [Async] Moving to next task without waiting!');

console.log('--- END OF MAIN THREAD ---');

/**
 * EXPECTED OUTPUT ORDER:
 * 1. [Sync] Starting to read file...
 * 2. [Sync] File content read successfully.
 * 3. [Sync] Finished sync block.
 * 4. [Async] Starting to read file...
 * 5. [Async] Moving to next task without waiting!
 * --- END OF MAIN THREAD ---
 * 6. [Async] File content read successfully (Callback).
 */
