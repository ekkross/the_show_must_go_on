
var jsonData = $.ajax({
  url: "http://127.0.0.1:5000/charts",
  dataType: 'json',
}).done(function (results) {

  
  sortedArrayOfObj = results.sort(function(a, b) {
    return b.count>a.count;
  });

  // Split data into separate arrays
  var genre = [], data=[];
  sortedArrayOfObj.forEach(function(packet) {
    genre.push(packet.Genre);
    data.push(parseFloat(packet.count));
  });


// Bar chart data

// Generate a random bar color Scheme so it is diffrent everytime you load the page
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 
}

new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: genre,
    datasets: [
      {
        label: "Count of Genres",
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        hoverBackgroundColor: getRandomColor(),
        data: data
      }]},
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Count of Genre by Venue'
    },
      animation: {
        numsteps: 50000,
        easing: 'easeOutElastic'
    }
  }
  });
});
