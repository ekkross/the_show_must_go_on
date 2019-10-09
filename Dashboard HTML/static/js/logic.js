
var jsonData = $.ajax({
  url: "http://127.0.0.1:5000/charts",
  dataType: 'json',
}).done(function (results) {

  // Split timestamp and data into separate arrays
  var genre = [], data=[];
  results.forEach(function(packet) {
    genre.push(packet.Genre);
    data.push(parseFloat(packet.count));
  });


// Bar chart data
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: genre,
    datasets: [
      {
        label: "Count of Genres",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: data
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
    }
  });
});