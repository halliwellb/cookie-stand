'use strict';

let storeHours = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"]

function randomNumberBetween(min, max) {
    return Math.ceil(Math.random() * ((max - min)) + min);
}

const storeLocations = [];
const tableBodyEl = document.getElementById("table-values");

function Store (city, minCustomersHr, maxCustomersHR, avgCustomerPurchase, hourlyCustomers, cookiesSoldPerHour, totalCookieSoldPerStore, randNumber) {
    this.city = city;
    this.minCustomersHr = minCustomersHr;
    this.maxCustomersHR = maxCustomersHR;
    this.avgCustomerPurchase = avgCustomerPurchase;
    this.hourlyCustomers = hourlyCustomers;
    this.cookiesSoldPerHour = cookiesSoldPerHour;
    this.totalCookieSoldPerStore = totalCookieSoldPerStore;
    this.randomNumberBetween = randomNumberBetween
}

Store.prototype.drawRow = function () {
    const tableRow = document.createElement('tr');
    tableBodyEl.appendChild(tableRow);
    const tableData1 = document.createElement('td');
    tableData1.textContent = this.city;
    tableRow.appendChild(tableData1);
    const tableData2 = document.createElement('td');
    tableData2.textContent = this.name;
    tableRow.appendChild(tableData2);
    const tableData3 = document.createElement('td');
    tableData3.textContent = this.age;
    tableRow.appendChild(tableData3);
}

let Seattle = new Store ('Seattle', 23, 65, 6.3, [], [], 0, (23,65));
storeLocations.push(Seattle);

console.log(Seattle);

let Tokyo = new Store ('Tokyo', 3, 24, 1.2, [], [], 0, 0);
storeLocations.push(Tokyo);

console.log(Tokyo);

let Dubai = new Store ('Dubai', 11, 28, 3.7, [], [], 0, 0);
storeLocations.push(Dubai);

console.log(Dubai);

let Paris = new Store ('Paris', 20, 38, 2.3, [], [], 0, 0);
storeLocations.push(Paris);

console.log(Paris);

let Lima = new Store ('Lima', 2, 16, 4.6, [], [], 0, 0);
storeLocations.push(Lima);

console.log(Lima);

let Total = new Store ();
storeLocations.push(Total);

console.log(storeLocations);

Store.prototype.customerPerHour = function(a, b) {
    for (let i = 0; i < storeHours.length; i++) {
        randomNumberBetween() * 6.3;
    }
}

console.log(Seattle);

for (let i = 0; i < storeLocations.length; i++) {
    storeLocations[i].drawRow();
}




// 'use strict';

// let h1Element = document.getElementById("main");
// h1Element.style.color = "pink";
// h1Element.style.backgroundColor = "green"

// let times = ['6AM', 
// 6]

// let Seattle = {
//     name: 'Seattle',
//     hours: '6am - 8pm',
//     minHrCustS: 23,
//     maxHrCustS: 65,
//     avgCookieCustS: 6.3,
//     randNum:function seattleRandNum (a, b) {
//         return Math.floor((((Math.random() * (b - a)) + a) * 6.3))
//     }
// }
// // Seattle Header
// let seattleElement = document.getElementById("seattle");
// let h2ElementSeattle = document.createElement('h2');
// h2ElementSeattle.textContent = Seattle.name;
// // console.log(h2Element);
// seattleElement.appendChild(h2ElementSeattle);

// // Seattle Hours header
// // let h3ElementSeattle = document.createElement('h3');
// // h3ElementSeattle.textContent = Seattle.hours;
// // seattleElement.appendChild(h3ElementSeattle);

// let seattleSixAm = ('Six AM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleSixAmElement = document.createElement('li');
// seattleSixAmElement.textContent = seattleSixAm;
// h2ElementSeattle.appendChild(seattleSixAmElement);

// let seattleSevenAm = ('Seven AM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleSevenAmElement = document.createElement('li');
// seattleSevenAmElement.textContent = seattleSevenAm;
// h2ElementSeattle.appendChild(seattleSevenAmElement);

// let seattleEightAm = ('Eight AM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleEightAmElement = document.createElement('li');
// seattleEightAmElement.textContent = seattleEightAm;
// h2ElementSeattle.appendChild(seattleEightAmElement);

// let seattleNineAm = ('Nine AM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleNineAmElement = document.createElement('li');
// seattleNineAmElement.textContent = seattleNineAm;
// h2ElementSeattle.appendChild(seattleNineAmElement);

// let seattleTenAm = ('Ten AM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleTenAmElement = document.createElement('li');
// seattleTenAmElement.textContent = seattleTenAm;
// h2ElementSeattle.appendChild(seattleTenAmElement);

// let seattleElevenAm = ('Eleven AM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleElevenAmElement = document.createElement('li');
// seattleElevenAmElement.textContent = seattleElevenAm;
// h2ElementSeattle.appendChild(seattleElevenAmElement);

// let seattleTwelvePm = ('Twelve PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleTwelvePmElement = document.createElement('li');
// seattleTwelvePmElement.textContent = seattleTwelvePm;
// h2ElementSeattle.appendChild(seattleTwelvePmElement);

// let seattleOnePm = ('One PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleOnePmElement = document.createElement('li');
// seattleOnePmElement.textContent = seattleOnePm;
// h2ElementSeattle.appendChild(seattleOnePmElement);

// let seattleTwoPm = ('Two PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleTwoPmElement = document.createElement('li');
// seattleTwoPmElement.textContent = seattleTwoPm;
// h2ElementSeattle.appendChild(seattleTwoPmElement);

// let seattleThreePm = ('Three PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleThreePmElement = document.createElement('li');
// seattleThreePmElement.textContent = seattleThreePm;
// h2ElementSeattle.appendChild(seattleThreePmElement);

// let seattleFourPm = ('Four PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleFourPmElement = document.createElement('li');
// seattleFourPmElement.textContent = seattleFourPm;
// h2ElementSeattle.appendChild(seattleFourPmElement);

// let seattleFivePm = ('Five PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleFivePmElement = document.createElement('li');
// seattleFivePmElement.textContent = seattleFivePm;
// h2ElementSeattle.appendChild(seattleFivePmElement);

// let seattleSixPm = ('Six PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleSixPmElement = document.createElement('li');
// seattleSixPmElement.textContent = seattleSixPm;
// h2ElementSeattle.appendChild(seattleSixPmElement);

// let seattleSevenPm = ('Seven PM = ' + Seattle.randNum(23,65) + ' cookies.');

// let seattleSevenPmElement = document.createElement('li');
// seattleSevenPmElement.textContent = seattleSevenPm;
// h2ElementSeattle.appendChild(seattleSevenPmElement);

// let Tokyo = {
//     name: 'Tokyo',
//     hours: '6am - 8pm',
//     minHrCustT: 3,
//     maxHrCustT: 24,
//     avgCookieCustT: 1.2,
//     randNum:function tokyoRandNum (a, b) {
//         return Math.floor((((Math.random() * (b - a)) + a) * 1.2))
//     }
// }

// // Tokyo Header
// let tokyoElement = document.getElementById("tokyo");
// let h2ElementTokyo = document.createElement('h2');
// h2ElementTokyo.textContent = Tokyo.name;
// tokyoElement.appendChild(h2ElementTokyo);

// // // Tokyo Hours header
// // let h3ElementTokyo = document.createElement('h3');
// // h3ElementTokyo.textContent = Tokyo.hours;
// // tokyoElement.appendChild(h3ElementTokyo);

// let tokyoSixAm = ('Six AM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoSixAmElement = document.createElement('li');
// tokyoSixAmElement.textContent = tokyoSixAm;
// h2ElementTokyo.appendChild(tokyoSixAmElement);

// let tokyoSevenAm = ('Seven AM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoSevenAmElement = document.createElement('li');
// tokyoSevenAmElement.textContent = tokyoSevenAm;
// h2ElementTokyo.appendChild(tokyoSevenAmElement);

// let tokyoEightAm = ('Eight AM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoEightAmElement = document.createElement('li');
// tokyoEightAmElement.textContent = tokyoEightAm;
// h2ElementTokyo.appendChild(tokyoEightAmElement);

// let tokyoNineAm = ('Nine AM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoNineAmElement = document.createElement('li');
// tokyoNineAmElement.textContent = tokyoNineAm;
// h2ElementTokyo.appendChild(tokyoNineAmElement);

// let tokyoTenAm = ('Ten AM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoTenAmElement = document.createElement('li');
// tokyoTenAmElement.textContent = tokyoTenAm;
// h2ElementTokyo.appendChild(tokyoTenAmElement);

// let tokyoElevenAm = ('Eleven AM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoElevenAmElement = document.createElement('li');
// tokyoElevenAmElement.textContent = tokyoElevenAm;
// h2ElementTokyo.appendChild(tokyoElevenAmElement);

// let tokyoTwelvePm = ('Twelve PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoTwelvePmElement = document.createElement('li');
// tokyoTwelvePmElement.textContent = tokyoTwelvePm;
// h2ElementTokyo.appendChild(tokyoTwelvePmElement);

// let tokyoOnePm = ('One PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoOnePmElement = document.createElement('li');
// tokyoOnePmElement.textContent = tokyoOnePm;
// h2ElementTokyo.appendChild(tokyoOnePmElement);

// let tokyoTwoPm = ('Two PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoTwoPmElement = document.createElement('li');
// tokyoTwoPmElement.textContent = tokyoTwoPm;
// h2ElementTokyo.appendChild(tokyoTwoPmElement);

// let tokyoThreePm = ('Three PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoThreePmElement = document.createElement('li');
// tokyoThreePmElement.textContent = tokyoThreePm;
// h2ElementTokyo.appendChild(tokyoThreePmElement);

// let tokyoFourPm = ('Four PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoFourPmElement = document.createElement('li');
// tokyoFourPmElement.textContent = tokyoFourPm;
// h2ElementTokyo.appendChild(tokyoFourPmElement);

// let tokyoFivePm = ('Five PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoFivePmElement = document.createElement('li');
// tokyoFivePmElement.textContent = tokyoFivePm;
// h2ElementTokyo.appendChild(tokyoFivePmElement);

// let tokyoSixPm = ('Six PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoSixPmElement = document.createElement('li');
// tokyoSixPmElement.textContent = tokyoSixPm;
// h2ElementTokyo.appendChild(tokyoSixPmElement);

// let tokyoSevenPm = ('Seven PM = ' + Tokyo.randNum(3,24) + ' cookies.');

// let tokyoSevenPmElement = document.createElement('li');
// tokyoSevenPmElement.textContent = tokyoSevenPm;
// h2ElementTokyo.appendChild(tokyoSevenPmElement);

// let Dubai = {
//     name: 'Dubai',
//     hours: '6am - 8pm',
//     minHrCustD: 11,
//     maxHrCustD: 38,
//     avgCookieCustD: 3.7,
//     randNum:function dubaiRandNum (a, b) {
//         return Math.floor((((Math.random() * (b - a)) + a) * 3.7))
//     }
// }

// // Dubai Header
// let dubaiElement = document.getElementById("dubai");
// let h2ElementDubai = document.createElement('h2');
// h2ElementDubai.textContent = Dubai.name;
// dubaiElement.appendChild(h2ElementDubai);

// // Dubai Hours header
// // let h3ElementDubai = document.createElement('h3');
// // h3ElementDubai.textContent = Dubai.hours;
// // dubaiElement.appendChild(h3ElementDubai);

// let dubaiSixAm = ('Six AM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiSixAmElement = document.createElement('li');
// dubaiSixAmElement.textContent = dubaiSixAm;
// h2ElementDubai.appendChild(dubaiSixAmElement);

// let dubaiSevenAm = ('Seven AM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiSevenAmElement = document.createElement('li');
// dubaiSevenAmElement.textContent = dubaiSevenAm;
// h2ElementDubai.appendChild(dubaiSevenAmElement);

// let dubaiEightAm = ('Eight AM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiEightAmElement = document.createElement('li');
// dubaiEightAmElement.textContent = dubaiEightAm;
// h2ElementDubai.appendChild(dubaiEightAmElement);

// let dubaiNineAm = ('Nine AM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiNineAmElement = document.createElement('li');
// dubaiNineAmElement.textContent = dubaiNineAm;
// h2ElementDubai.appendChild(dubaiNineAmElement);

// let dubaiTenAm = ('Ten AM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiTenAmElement = document.createElement('li');
// dubaiTenAmElement.textContent = dubaiTenAm;
// h2ElementDubai.appendChild(dubaiTenAmElement);

// let dubaiElevenAm = ('Eleven AM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiElevenAmElement = document.createElement('li');
// dubaiElevenAmElement.textContent = dubaiElevenAm;
// h2ElementDubai.appendChild(dubaiElevenAmElement);

// let dubaiTwelvePm = ('Twelve PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiTwelvePmElement = document.createElement('li');
// dubaiTwelvePmElement.textContent = dubaiTwelvePm;
// h2ElementDubai.appendChild(dubaiTwelvePmElement);

// let dubaiOnePm = ('One PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiOnePmElement = document.createElement('li');
// dubaiOnePmElement.textContent = dubaiOnePm;
// h2ElementDubai.appendChild(dubaiOnePmElement);

// let dubaiTwoPm = ('Two PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiTwoPmElement = document.createElement('li');
// dubaiTwoPmElement.textContent = dubaiTwoPm;
// h2ElementDubai.appendChild(dubaiTwoPmElement);

// let dubaiThreePm = ('Three PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiThreePmElement = document.createElement('li');
// dubaiThreePmElement.textContent = dubaiThreePm;
// h2ElementDubai.appendChild(dubaiThreePmElement);

// let dubaiFourPm = ('Four PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiFourPmElement = document.createElement('li');
// dubaiFourPmElement.textContent = dubaiFourPm;
// h2ElementDubai.appendChild(dubaiFourPmElement);

// let dubaiFivePm = ('Five PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiFivePmElement = document.createElement('li');
// dubaiFivePmElement.textContent = dubaiFivePm;
// h2ElementDubai.appendChild(dubaiFivePmElement);

// let dubaiSixPm = ('Six PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiSixPmElement = document.createElement('li');
// dubaiSixPmElement.textContent = dubaiSixPm;
// h2ElementDubai.appendChild(dubaiSixPmElement);

// let dubaiSevenPm = ('Seven PM = ' + Dubai.randNum(11,38) + ' cookies.');

// let dubaiSevenPmElement = document.createElement('li');
// dubaiSevenPmElement.textContent = dubaiSevenPm;
// h2ElementDubai.appendChild(dubaiSevenPmElement);

// let Paris = {
//     name: 'Paris',
//     hours: '6am - 8pm',
//     minHrCustP: 20,
//     maxHrCustP: 38,
//     avgCookieCustP: 2.3,
//     randNum:function parisRandNum (a, b) {
//         return Math.floor((((Math.random() * (b - a)) + a) * 2.3))
//     }
// }

// // Paris Header
// let parisElement = document.getElementById("paris");
// let h2ElementParis = document.createElement('h2');
// h2ElementParis.textContent = Paris.name;
// parisElement.appendChild(h2ElementParis);

// // Paris Hours header
// // let h3ElementParis = document.createElement('h3');
// // h3ElementParis.textContent = Paris.hours;
// // parisElement.appendChild(h3ElementParis);

// let parisSixAm = ('Six AM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisSixAmElement = document.createElement('li');
// parisSixAmElement.textContent = parisSixAm;
// h2ElementParis.appendChild(parisSixAmElement);

// let parisSevenAm = ('Seven AM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisSevenAmElement = document.createElement('li');
// parisSevenAmElement.textContent = parisSevenAm;
// h2ElementParis.appendChild(parisSevenAmElement);

// let parisEightAm = ('Eight AM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisEightAmElement = document.createElement('li');
// parisEightAmElement.textContent = parisEightAm;
// h2ElementParis.appendChild(parisEightAmElement);

// let parisNineAm = ('Nine AM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisNineAmElement = document.createElement('li');
// parisNineAmElement.textContent = parisNineAm;
// h2ElementParis.appendChild(parisNineAmElement);

// let parisTenAm = ('Ten AM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisTenAmElement = document.createElement('li');
// parisTenAmElement.textContent = parisTenAm;
// h2ElementParis.appendChild(parisTenAmElement);

// let parisElevenAm = ('Eleven AM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisElevenAmElement = document.createElement('li');
// parisElevenAmElement.textContent = parisElevenAm;
// h2ElementParis.appendChild(parisElevenAmElement);

// let parisTwelvePm = ('Twelve PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisTwelvePmElement = document.createElement('li');
// parisTwelvePmElement.textContent = parisTwelvePm;
// h2ElementParis.appendChild(parisTwelvePmElement);

// let parisOnePm = ('One PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisOnePmElement = document.createElement('li');
// parisOnePmElement.textContent = parisOnePm;
// h2ElementParis.appendChild(parisOnePmElement);

// let parisTwoPm = ('Two PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisTwoPmElement = document.createElement('li');
// parisTwoPmElement.textContent = parisTwoPm;
// h2ElementParis.appendChild(parisTwoPmElement);

// let parisThreePm = ('Three PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisThreePmElement = document.createElement('li');
// parisThreePmElement.textContent = parisThreePm;
// h2ElementParis.appendChild(parisThreePmElement);

// let parisFourPm = ('Four PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisFourPmElement = document.createElement('li');
// parisFourPmElement.textContent = parisFourPm;
// h2ElementParis.appendChild(parisFourPmElement);

// let parisFivePm = ('Five PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisFivePmElement = document.createElement('li');
// parisFivePmElement.textContent = parisFivePm;
// h2ElementParis.appendChild(parisFivePmElement);

// let parisSixPm = ('Six PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisSixPmElement = document.createElement('li');
// parisSixPmElement.textContent = parisSixPm;
// h2ElementParis.appendChild(parisSixPmElement);

// let parisSevenPm = ('Seven PM = ' + Paris.randNum(20,38) + ' cookies.');

// let parisSevenPmElement = document.createElement('li');
// parisSevenPmElement.textContent = parisSevenPm;
// h2ElementParis.appendChild(parisSevenPmElement);

// // let Lima = {
// //     name: 'Lima',
// //     hours: '6am - 8pm',
// //     minHrCustL: 2,
// //     maxHrCustL: 16,
// //     avgCookieCustL: 4.6,
// //     randNum:function limaRandNum (a, b) {
// //         return Math.floor((((Math.random() * (b - a)) + a) * 4.6))
// //     }
// // }
