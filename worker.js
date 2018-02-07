// incoming msg
var msg = {};
// outgoing msg - not being used right now
var omsg = {};

onmessage = function(e) {
    // the passed-in data is available via e.data
    var msg = JSON.parse(e.data);
    if (msg.run) {
        IPN(msg.n, msg.mod);
    } 
    else {
        run = false;
    }
};

// take a number range to operate on
function IPN(n, mod) {
    for (n; 0 < 1; n = n + mod) {
        var s = n.toString(), x = 0;
        for (var i = 0; i < s.length; i++) { 
            x = x + Math.pow(s[i], s.length); 
        }
        if (x == n) {
            // alert the main thread
            postMessage(n);
        }
    }
};