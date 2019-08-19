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
