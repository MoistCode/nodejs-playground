/**
 *  How does Node connects the its environment
 *  POSIX: C style programs integrate with linux style operating systems
 *  Standard I/O stdin stdout stderr
 *  Javascript is agnostic to IO
 *  JS is easy to adapt because it doesn't make assumption about communication; env sets that
 */

process; // Object available to all Node programs; connect to environment
process.stdout.write("Hello"); // Streams are first-class citizens
