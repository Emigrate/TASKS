let firstUsers = document.getElementById("first-users");
let secondUsers = document.getElementById("second-users");


for (let i = 1; i <= 100; i++) {
    if (i <= 50) {
    firstUsers.innerHTML = firstUsers.innerHTML + 'user' + i + "<br>";
    }
    else if (i > 50) {
    secondUsers.innerHTML = secondUsers.innerHTML + 'user' + i + "<br>";
    }
};

