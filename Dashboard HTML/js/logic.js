

// Bar chart data
var BarChart = document.getElementById("bar-chart");
var bardata = [2478, 5267, 734, 784, 433]
var barlabel = ["Africa", "Asia", "Europe", "Latin America", "North America"]
var barcolors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]

// add bar chart to HTML
new Chart(BarChart, {
    type: "horizontalBar",
    data: {
      labels: barlabel,
      datasets: [{
          label: "Population (millions)",
          backgroundColor: barcolors,
          borderColor: "",
          borderSkipped: false,
          borderWidth: 2,
          data: bardata,
        }]
    },
    options: {
      legend: { display: false },
      title: {display: true,
        text: 'Predicted world population (millions) in 2050'},
        scales: {
          xAxes: [{
              barPercentage: 0.5,
              barThickness: 6,
              maxBarThickness: 8,
              minBarLength: 2,
              gridLines: {
                  offsetGridLines: true
              }
          }]
      }
    }
});

// line chart data
var LineChart = document.getElementById("line-chart");

// add line Chart to HTML
new Chart(LineChart, {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});