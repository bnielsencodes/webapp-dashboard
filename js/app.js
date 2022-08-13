const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send-button");
const toggleData = document.querySelector(".toggle");
const bell = document.querySelector(".bell-container");
const notification = document.getElementById("notifications");
const dropdown = document.querySelector(".notifications-dropdown");
const hourlyTrafficData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
  2500
];
const dailyTrafficData = [1400, 900, 1200, 1450, 2190, 340, 560, 1370, 2120, 1500,
  230
];
const weeklyTrafficData = [840, 1170, 340, 1800, 670, 420, 2220, 1340, 2210, 700,
  310
];
const monthlyTrafficData = [2100, 2400, 290, 430, 1800, 1900, 380, 1925, 2300, 260,
  1650
];
const names = ["Aaron", "Aaron-James", "Aarron", "Abdallah", "Abdul", "Abel", "Abu", "Adam", "Abraham", "Alex", "Aaron", "Ben", "Carl", "Dale", "Dan", "David", "Dawn", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Victoria", "Walter"];

/* ------------- ALERT ---------------*/
// create the html for the banner
alertBanner.innerHTML =
  `
  <div class="alert-banner">
    <div class="alert-p-container">
      <p class="alert-p"><strong class="alert-strong">Alert:</strong> You have unread messages</p>
      <p class="alert-banner-close">x</p>
    </div>
  </div>
  `;

// close alert when click on x
alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

/* ------------- TRAFFIC LINE CHART ---------------*/
// traffic chart options
let trafficOptions = {
  backgroundColor: 'rgba(112, 104, 201, .5)',
  fill: true,
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

// create traffic chart
let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    }, ],
  },
  options: trafficOptions,
});


// function to update chart data
function updateData(trafficChart, data) {
  trafficChart.data.datasets[0].data = data;
  trafficChart.update();
}

// event listener to update chart data on toggle click
toggleData.addEventListener("click", (e) => {
  let element = e.target.id;
  if (element === "daily") {
    updateData(trafficChart, dailyTrafficData);
  } else if (element === "weekly") {
    updateData(trafficChart, weeklyTrafficData);
  } else if (element === "monthly") {
    updateData(trafficChart, monthlyTrafficData);
  } else if (element === "hourly") {
    updateData(trafficChart, hourlyTrafficData);
  }
});

/* ------------- DAILY TRAFFIC BAR CHART ---------------*/

// daily traffic bar chart data
const dailyData = {
  labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

// daily traffic bar chart options
const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

// create daily traffic bar chart
let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

/* ------------- MOBILE USERS DONUT CHART ---------------*/

// mobile users donut chart data

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

// mobile users donut chart options

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};

// create mobile users donut chart

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

/* ------------- MESSAGING ---------------*/

// check if user and message fields are empty
send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

/* ------------- AUTOCOMPLETE FOR USER SEARCH INPUT ---------------*/

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// Initiate the Autocomplete Effect on "#user-field"
autocomplete(document.getElementById("user-field"), names);

/* ------------- NOTIFICATIONS ---------------*/

bell.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  notification.classList.toggle("hidden");
  bell.classList.toggle("bell-padding-top");


// Add local date and set local date format for new members

let date = new Date();
let localDate = date.toLocaleDateString();
let dateElement = document.querySelectorAll('.date-time');

document.querySelectorAll('.date-time').innerHTML = localDate;