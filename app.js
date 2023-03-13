'use strict';

console.log(document.body);
let h1Element = document.getElementById('main');
console.log(h1Element.textContent);

let Seattle = {
    name: 'Seattle',
    minHrCustS: 23,
    maxHrCustS: 65,
    avgCookieCustS: 6.3,
    randNum:function seattleRandNum (a, b) {
        return Math.trunc(((Math.random() * (b - a)) + a) /14) * 6.3
    }
}

function seattleCookiePerHour() {
    for (let i = 6; i < 20; i++) {
        let hourBy = Seattle.randNum(23, 65);
        if (i < 12) {
        document.write(i + ' AM, Seattle store needs ' + hourBy + ' cookies. ');
    } else if (i > 12) {
        document.write(i + ' PM, Seattle store needs ' + hourBy + ' cookies. ');
    }
}
}
seattleCookiePerHour();
let seattleCookiePerHour = document.getElementsByClassName('Seattle');



let Tokyo = {
    name: 'Tokyo',
    minHrCustT: 3,
    maxHrCustT: 24,
    avgCookieCustT: 1.2,
    randNum:function tokyoRandNum (a, b) {
        return Math.trunc(((Math.random() * (b - a)) + a) /14) * 1.2
    }
}

function tokyoCookiePerHour() {
    for (let i = 6; i < 20; i++) {
        let hourBy = Tokyo.randNum(3, 24);
        if (i < 12) {
            document.write(i + ' AM, Tokyo store needs ' + hourBy + ' cookies. ');
        } else if (i > 12) {
            document.write(i + ' PM, Tokyo store needs ' + hourBy + ' cookies. ');
        }
    }
}
tokyoCookiePerHour();

let Dubai = {
    name: 'Dubai',
    minHrCustD: 11,
    maxHrCustD: 38,
    avgCookieCustD: 3.7,
    randNum:function dubaiRandNum (a, b) {
        return Math.trunc(((Math.random() * (b - a)) + a) /14) * 3.7
    }
}

function dubaiCookiePerHour() {
    for (let i = 6; i < 20; i++) {
        let hourBy = Dubai.randNum(11, 38);
        if (i < 12) {
        document.write(+ i + ' AM, Dubai store needs ' + hourBy + ' cookies. ');
    } else if (i > 12) {
        document.write(i + ' PM, Dubai store needs ' + hourBy + ' cookies. ');
    }
}
}
dubaiCookiePerHour();

let Paris = {
    name: 'Paris',
    minHrCustP: 20,
    maxHrCustP: 38,
    avgCookieCustP: 2.3,
    randNum:function parisRandNum (a, b) {
        return Math.trunc(((Math.random() * (b - a)) + a) / 14) * 2.3
    }
}

function parisCookiePerHour() {
    for (let i = 6; i < 20; i++) {
        let hourBy = Paris.randNum(20, 38);
        if (i < 12) {
        document.write(i + ' AM, Paris store needs ' + hourBy + ' cookies. ');
    } else if (i > 12) {
        document.write(i + ' PM, Paris store needs ' + hourBy + ' cookies. ');
    }
}
}
parisCookiePerHour();

let Lima = {
    name: 'Lima',
    minHrCustL: 2,
    maxHrCustL: 16,
    avgCookieCustL: 4.6,
    randNum:function limaRandNum (a, b) {
        return Math.trunc(((Math.random() * (b - a)) + a) /14) * 4.6
    }
}

function limaCookiePerHour() {
    for (let i = 6; i < 20; i++) {
        let hourBy = Lima.randNum(2, 16);
        if (i < 12) {
        document.write(i + ' AM, Lima store needs ' + hourBy + ' cookies. ');
    } else if (i > 12) {
        document.write(i + ' PM, Lima store needs ' + hourBy + ' cookies. ');
    }
}
}
limaCookiePerHour();