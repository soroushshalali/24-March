// function fun1(name, age, add) {
//     document.write(`mein Name ist ${name} und bin ${age} jahre alt. Ich wohne in ${add}😁`);
// }
// fun1("soroush", "28", "mettman");

// fun22 = (name, age, add) =>
//     document.write(`mein Name ist ${name} und bin ${age} jahre alt. Ich wohne in ${add}😁`);

// fun2 = (name, age, add) => document.write(`mein Name ist ${name} und bin ${age} jahre alt. Ich wohne in ${add}😁`);
// let i = 1200;

// let bahn = setInterval(() => {

//     document.getElementById("bahn").style.left = i + "px";
//     if (i == 0) {
//         clearInterval(bahn);
//     }
//     i = i - 100;
// }, 1000)

// AUF1
let x = 5000;
let x2 = x / 1000;
document.querySelector("#aufgabe1 > h1:nth-of-type(1)").innerHTML = `start warten für ${x2} Sekunden`;
function func1() {
    document.querySelector("#aufgabe1 > h1:nth-of-type(2)").innerHTML = `Du hast ${x2} Sekunden verschwindet.`;
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
let eingabe = -1;
let k = 59;
let minutes;
function startMinCountdown() {
    if (eingabe == -1) {
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
console.log(useClassName);

function aufgabe6() {
    let i = 10;
    let intervalAufgabe6 = setInterval(() => {
        document.getElementById("count").innerHTML = i;
        i--;
        if (i == -1) {
            clearInterval(intervalAufgabe6);
            useClassName[0].style.opacity = "0";
            i = 10;
            setTimeout(aufgabe6(), 2000)
        }
    }, 1000)

}
window.onload = aufgabe6();





