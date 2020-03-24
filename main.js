
// AUF1
let x = 5000;
let x2 = x / 1000;
document.querySelector("#aufgabe1 > h1:nth-of-type(1)").innerHTML = `start warten für ${x2} Sekunden`;
function func1() {
    document.querySelector("#aufgabe1 > h1:nth-of-type(2)").innerHTML = `Du hast ${x2} Sekunden verschwendet.`;
}
setTimeout(func1, x)
// AUF2
setInterval(() => {
    // document.querySelector("#aufgabe2 > h1").innerHTML += `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} <br>`;
    document.querySelector("#aufgabe2 > h1").innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} <br>`;
}, 1000);
// AUF3
let i = 0;
let aufgabe3 = setInterval(() => {
    document.querySelector("#aufgabe3 > h1").innerHTML += `-${i} `;
    i++;
    if (i > 10) {
        clearInterval(aufgabe3);
        document.querySelector("#aufgabe3 > h1").innerHTML += `- 👍🏻 `;
    }
}, 1000);
// AUF4
function aufgabe4() {
    let j = 100;
    let aufgabe44 = setInterval(() => {
        document.querySelector(".style > div").innerHTML = `${j}%`;
        j--;
        if (j == -1) {
            clearInterval(aufgabe44);
        }
    }, 100)
}
// AUF5
let eingabe;
let k = 59;
let minutes;
let counter;
function startMinCountdown() {

    if (eingabe == undefined) {
        eingabe = document.getElementById("minutes").value;
        eingabe--;
    }
    if (document.getElementById("minutes").value != "") {
        minutes = setInterval(() => {
            document.querySelector("#minuteCountdownBereich > div").innerHTML = `${eingabe}:${k}`;
            k--;
            if (eingabe == 0 && k == 0) {
                document.querySelector("#minuteCountdownBereich > div").innerHTML = `00:00`;
                clearInterval(minutes);
            }
            else if (k == 0) {
                eingabe--;
                k = 59
            }
        }, 1000)
    }
}
function pauseMinCountdown() {
    document.querySelector("#minuteCountdownBereich > div").innerHTML = `${eingabe}:${k}`;
    clearInterval(minutes);
}
function restartMinCountdown() {
    startMinCountdown()
}
let useClassName = document.getElementsByClassName("message");
function aufgabe6() {
    useClassName[0].style.opacity = "1";
    let i = 10;
    let intervalAufgabe6 = setInterval(() => {
        document.getElementById("count").innerHTML = i;
        i--;
        if (i == -1) {
            clearInterval(intervalAufgabe6);
            useClassName[0].style.opacity = "0";
            setTimeout(aufgabe6, 1000);
        }
    }, 1000)

}
window.onload = aufgabe6();




