const { printQwQ } = require('./index.js');

let output = '';
const origLog = console.log;
console.log = (...args) => { output = args.join(' '); };

printQwQ();

console.log = origLog;

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

if (output === 'qwq') {
  console.log(`${GREEN}✔${RESET} Test passed`);
  process.exit(0);
} else {
  console.error(`${RED}✖${RESET} Test failed: expected ${GREEN}"qwq"${RESET}, got ${RED}"${output}"${RESET}`);
  process.exit(1);
}
