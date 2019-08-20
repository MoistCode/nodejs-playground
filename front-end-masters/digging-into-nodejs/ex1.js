#!/usr/bin/env node

"use strict";

// Go find node and use it

printHelp();

process.argv; // Array of all of the args passed into the shell;
console.log(process.argv);
console.log(process.argv.slice(2));

/**
 *  How does Node connects the its environment
 *  POSIX: C style programs integrate with linux style operating systems
 *  Standard I/O stdin stdout stderr
 *  Javascript is agnostic to IO
 *  JS is easy to adapt because it doesn't make assumption about communication; env sets that
 */

process; // Object available to all Node programs; connect to environment
process.stdout.write("Hello"); // Streams are first-class citizens; least efficient way to write a string
console.log("Hello"); // Send binary stream with buffer to become more effective

/**
 * process.stdout.write will not provide a trailing newline
 * console.log does a lot more than just calling process.std.write
 */

process.stderr.write("Some error");
console.error("Some error");

/**
 * Doesn't really look any different
 * Shell env sees stdout and stderr as the same
 * May be different between OS
 * node ex1.js 1>/dev/null send stdout
 * node ex1.js 2>/dev/null send stderr
 * node ex1.js 2>/dev/null 1>&2
 * Use console.error so it goes to the error stream
 */

process.stdin.read(); // Much more affected by shell; many quirks to call this

/**
 * Shebang comment at top of a file; tells shell who to hand execution off to
 * chmod u+x ex1.js
 * ls -la
 */

function printHelp() {
  console.log("EX1 Usage");
  console.log("  ex1.js --help");
  console.log("");
  console.log("-- help                               print this help");
  console.log("");
}
