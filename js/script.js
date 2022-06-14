const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send-button");

/* ------------- ALERT ---------------*/
// create the html for the banner
alertBanner.innerHTML =
  `
  <div class="alert-banner">
    <div class="alert-p-container">
      <p class="alert-p"><strong class="alert-strong">Alert:</strong> You have undread messages</p>
      <p class="alert-banner-close">x</p>
    </div>
  </div>
  `

// close alert when click on x
alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});

/* ------------- TRAFFIC LINE CHART ---------------*/
// hourly traffic chart data
let hourlyTrafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};
// daily traffic chart data
let dailyTrafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [1400, 900, 1200, 1450, 2190, 340, 560, 1370, 2120, 1500,
      230
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};
// weekly traffic chart data
let weeklyTrafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [840, 1170, 340, 1800, 670, 420, 2220, 1340, 2210, 700,
      310
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};
// monthly traffic chart data
let monthlyTrafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [2100, 2400, 290, 430, 1800, 1900, 380, 1925, 2300, 260,
      1650
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

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
  type: 'line',
  data: monthlyTrafficData,
  options: trafficOptions,
});

/* ------------- DAILY TRAFFIC BAR CHART ---------------*/

// daily traffic bar chart data
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
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

// 