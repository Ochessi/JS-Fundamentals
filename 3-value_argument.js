// 3-value_argument.js

const firstArg = process.argv[2];

if (firstArg !== undefined) {
  console.log(firstArg);
} else {
  console.log('No argument');
}
