'use strict';

let storeHours = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"]

function randomNumberBetween(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

let seattleList = document.getElementById("SeattleInfo")
let tokyoList = document.getElementById("TokyoInfo")
let dubaiList = document.getElementById("DubaiInfo")
let parisList = document.getElementById("ParisInfo")
let limaList = document.getElementById("LimaInfo")

const Seattle = {
  city: "Seattle",
  minCustomersHR: 23,
  maxCustomersHR: 65,
  avgCustomerPurchase: 6.3,
  hourlyCustomer: [],
  cookiesSoldPerHour: [],
  totalCookieSoldPerStore: 0,

  customersPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.hourlyCustomer.push(randomNumberBetween(this.minCustomersHR, this.maxCustomersHR))
    }
  },
  cookiesPerHour: function () {
    this.customersPerHour();
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCookies = Math.ceil(this.hourlyCustomer[i] * this.avgCustomerPurchase);
      this.cookiesSoldPerHour.push(hourlyCookies);
      this.totalCookieSoldPerStore += hourlyCookies
    }
  },
  renderList: function () {
    this.cookiesPerHour()
    for (let i = 0; i < storeHours.length; i++) {
      let li = document.createElement("li");
      li.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      SeattleInfo.appendChild(li)
    }
    let li = document.createElement("li");
    li.textContent = `Total: ${this.totalCookieSoldPerStore} cookies`;
    SeattleInfo.appendChild(li)
  }
}

Seattle.renderList();

const Tokyo = {
    city: "Tokyo",
    minCustomersHR: 3,
    maxCustomersHR: 24,
    avgCustomerPurchase: 1.2,
    hourlyCustomers: [],
    cookiesSoldPerHour: [],
    totalCookiePerStore: 0,
  
    customersPerHour: function () {
      for (let i = 0; i < storeHours.length; i++) {
        this.hourlyCustomers.push(randomNumberBetween(this.minCustomersHR, this.maxCustomersHR))
      }
    },
    cookiesPerHour: function () {
      this.customersPerHour();
      for (let i = 0; i < storeHours.length; i++) {
        let hourlyCookies = Math.ceil(this.hourlyCustomers[i] * this.avgCustomerPurchase);
        this.cookiesSoldPerHour.push(hourlyCookies);
        this.totalCookiePerStore += hourlyCookies
      }
    },
    renderList: function () {
      this.cookiesPerHour()
      for (let i = 0; i < storeHours.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
        TokyoInfo.appendChild(li)
      }
      let li = document.createElement("li");
      li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
      TokyoInfo.appendChild(li)
    }
  }
  
Tokyo.renderList();

  const Dubai = {
    city: "Dubai",
    minCustomersHR: 11,
    maxCustomersHR: 28,
    avgCustomerPurchase: 3.7,
    hourlyCustomers: [],
    cookiesSoldPerHour: [],
    totalCookiePerStore: 0,
  
    customersPerHour: function () {
      for (let i = 0; i < storeHours.length; i++) {
        this.hourlyCustomers.push(randomNumberBetween(this.minCustomersHR, this.maxCustomersHR))
      }
    },
    cookiesPerHour: function () {
      this.customersPerHour();
      for (let i = 0; i < storeHours.length; i++) {
        let hourlyCookies = Math.ceil(this.hourlyCustomers[i] * this.avgCustomerPurchase);
        this.cookiesSoldPerHour.push(hourlyCookies);
        this.totalCookiePerStore += hourlyCookies
      }
    },
    renderList: function () {
      this.cookiesPerHour()
      for (let i = 0; i < storeHours.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
        DubaiInfo.appendChild(li)
      }
      let li = document.createElement("li");
      li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
      DubaiInfo.appendChild(li)
    }
  }
  
Dubai.renderList();

const Paris = {
    city: "Paris",
    minCustomersHR: 20,
    maxCustomersHR: 38,
    avgCustomerPurchase: 2.3,
    hourlyCustomers: [],
    cookiesSoldPerHour: [],
    totalCookiePerStore: 0,
  
    customersPerHour: function () {
      for (let i = 0; i < storeHours.length; i++) {
        this.hourlyCustomers.push(randomNumberBetween(this.minCustomersHR, this.maxCustomersHR))
      }
    },
    cookiesPerHour: function () {
      this.customersPerHour();
      for (let i = 0; i < storeHours.length; i++) {
        let hourlyCookies = Math.ceil(this.hourlyCustomers[i] * this.avgCustomerPurchase);
        this.cookiesSoldPerHour.push(hourlyCookies);
        this.totalCookiePerStore += hourlyCookies
      }
    },
    renderList: function () {
      this.cookiesPerHour()
      for (let i = 0; i < storeHours.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
        ParisInfo.appendChild(li)
      }
      let li = document.createElement("li");
      li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
      ParisInfo.appendChild(li)
    }
  }
  
Paris.renderList();

const Lima = {
    city: "Lima",
    minCustomersHR: 2,
    maxCustomersHR: 16,
    avgCustomerPurchase: 4.6,
    hourlyCustomers: [],
    cookiesSoldPerHour: [],
    totalCookiePerStore: 0,
  
    customersPerHour: function () {
      for (let i = 0; i < storeHours.length; i++) {
        this.hourlyCustomers.push(randomNumberBetween(this.minCustomersHR, this.maxCustomersHR))
      }
    },
    cookiesPerHour: function () {
      this.customersPerHour();
      for (let i = 0; i < storeHours.length; i++) {
        let hourlyCookies = Math.ceil(this.hourlyCustomers[i] * this.avgCustomerPurchase);
        this.cookiesSoldPerHour.push(hourlyCookies);
        this.totalCookiePerStore += hourlyCookies
      }
    },
    renderList: function () {
      this.cookiesPerHour()
      for (let i = 0; i < storeHours.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
        LimaInfo.appendChild(li)
      }
      let li = document.createElement("li");
      li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
      LimaInfo.appendChild(li)
    }
  }
  
Lima.renderList();