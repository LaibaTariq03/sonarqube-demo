// SonarCloud Demo JavaScript Code
// Intentionally written with issues for demonstration

var adminPassword = "admin123"; // ❌ Hardcoded password (Security issue)

function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "admin" && pass == adminPassword) {
        document.getElementById("result").innerHTML =
            "Welcome " + user; // ❌ Possible XSS (Security issue)
    } else {
        document.getElementById("result").innerHTML = "Invalid login";
    }
}

function unusedFunction() {
    var x = 10;
    var y = 20;
    var z = x + y; // ❌ Unused variables (Code smell)
}
