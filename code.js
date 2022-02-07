// helloWorld function
"use strict";

function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "string") {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

function isFive(num) {
    return num == 5;
}

function isEven(num) {
    if(num === false) {
        return false;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    if (/^[aeiouAEIOU]$/.test(input)) {
        return true;
    } else {
        return false;
    }
}

function add() {

}