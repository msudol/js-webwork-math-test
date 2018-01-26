# js-webworker-math-test

This code was developed as part of a coding challenge to calculate "Narcissistic Numbers" https://en.wikipedia.org/wiki/Narcissistic_number

The first part of the challenge was simply to calculate the first 25 powered numbers successfully. 

The second part of the challenge was to calculate them as quickly as possible, so I used Javascript Webworkers to perform the calculations 
in multiple "threads" and was able to complete the calculation in some cases under 400ms dependent upon CPU and current running processes. 
This was enough to initially outperform similar attempts in Python and C++ before other developers in the challenge saw what I had done and 
optimized their own code to be more efficient.

Working example of the code hosted from a web server at: https://msudol.com/threaded-math-with-javascript/

This can also be run locally in Firefox, but requires disabling file execution flags in Chrome.
