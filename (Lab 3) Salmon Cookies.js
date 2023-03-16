let standOpen = 6;
let standClose = 20;
let hoursOpen = standClose - standOpen;
let locations = [];
const tableBodyEl = document.getElementById('table-values');


function Store (store_Loc, min_Cust, max_Cust, avg_Purch) {
    this.storeLoc = store_Loc;
    this.min = min_Cust;
    this.max = max_Cust;
    this.avgPurch = avg_Purch;
    this.hourlyCustomers = [];
    this.hourlyCookies = [];
    this.totalCookiesSold = 0;
    locations.push(this);
}

Store.prototype.randomCustomers = function () {
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
};

Store.prototype.daysCookiesSold = function () {
    for (let i = standOpen; i <= standClose; i++) {
        let customers = this.randomCustomers();
        this.hourlyCustomers.push(customers);
        let cookies = Math.round(customers * this.avgPurch);
        this.hourlyCookies.push(cookies);
        this.totalCookiesSold += cookies;
    }
};

Store.prototype.render = function () {
    let table = document.getElementById('dataTable');
    let tbody = document.createElement('tbody');

    table.appendChild(tbody);
    let dataRow = document.createElement('tr');
    table.appendChild(tbody);

    let tableData = document.createElement('td');
    tbody.appendChild(dataRow);
    tableData.textContent = this.storeLoc;
    dataRow.appendChild(tableData);

    let hourlyCookies = this.hourlyCookies;
    hourlyCookies.forEach(cookie =>{
        let tableDataCookies = document.createElement('td');
        tableDataCookies.textContent = cookie;
        dataRow.appendChild(tableDataCookies);
    });
    
    let totalCookiesSold = this.totalCookiesSold;
    let tableDataTotal = document.createElement('td');
    tableDataTotal.textContent = this.totalCookiesSold;
    dataRow.appendChild(tableDataTotal);
};

function displayTableHeader () {
    let table = document.getElementById('dataTable');
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');

    table.appendChild(thead);

    thead.appendChild(headerRow);

    let $nbsp = document.createElement('th');

    headerRow.appendChild($nbsp);

    for (let i = standOpen; i <= standClose; i++) {
        let thead = document.createElement('th');

        if (i === 12) {
            thead.textContent = `${i}pm`;
        } else if (i > 12) {
            thead.textContent = `${i - 12}pm`;
        } else {
            thead.textContent = `${i}am`;
        }

        headerRow.appendChild(thead);
    }

    let totalHeader = document.createElement('th');

    totalHeader.textContent = 'Total';

    headerRow.appendChild(totalHeader);
}

function displayTableBody () {
    for (let i = 0; i < locations.length; i++) {
        let location = locations[i];
        location.daysCookiesSold();
        location.render();
    }
}

function displayTableFooter () {
    let table = document.getElementById('dataTable');

    let tfoot = document.createElement('tfoot');
    let footRow = document.createElement('tr');

    table.appendChild(tfoot);
    table.appendChild(footRow);

    let totalFoot = document.createElement('td');

    totalFoot.textContent = 'Total';
    footRow.appendChild(totalFoot);

let grandTotal = 0;
let h = 0;

while (h <= hoursOpen) {
    let hourlyTotal = 0;

    for (let i = 0; i < locations.length; i++) {
        hourlyTotal += locations[i].hourlyCookies[h];
        grandTotal += locations[i].hourlyCookies[h];
    }
    let tableFootTotal = document.createElement('td');
    tableFootTotal.textContent = hourlyTotal;
    footRow.appendChild(tableFootTotal);
    
    h++;
}

let grandTotalFoot = document.getElementById('footer-row');
grandTotalFoot.textContent = grandTotal;
footRow.appendChild(grandTotalFoot);

}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let buttonEl = document.getElementById('user-submit');

let formEl =document.getElementById('new-cookie-form');

formEl.addEventListener('submit', function(submit) {
    submit.preventDefault();
    let { store_Loc, min_Cust, max_Cust, avg_Purch } = submit.target;

    let newStore = new Store(
        store_Loc.value, 
        parseInt(min_Cust.value),
        parseInt(max_Cust.value),
        parseInt(avg_Purch.value)
    );

locations.push(newStore);
newStore.daysCookiesSold();

newStore.render();
displayTableFooter();
});

displayTableHeader();
displayTableBody();
displayTableFooter();