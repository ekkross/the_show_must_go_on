
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
      text: ''
    }
    }
  });
});


// # D3 Chart Starts here
// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("line-chart")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.json("http://127.0.0.1:5000/venue", function(error, venue) {
  if (error) throw error;

  console.log(venue);

  // Cast the hours value to a number for each piece of venue
  venue.forEach(function(d) {
    d.name = +d.type;
  });
  console.log(d.id)
  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xBandScale = d3.scaleBand()
    .domain(venue.map(d => d.name))
    .range([0, chartWidth])
    .padding(0.1);

  // Create a linear scale for the vertical axis.
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(venue, d => d.type)])
    .range([chartHeight, 0]);

  // Create two new functions passing our scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xBandScale);
  var leftAxis = d3.axisLeft(yLinearScale).ticks(6);

  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them
  chartGroup.append("g")
    .call(leftAxis);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

  // Create one SVG rectangle per piece of venue
  // Use the linear and band scales to position each rectangle within the chart
  chartGroup.selectAll(".bar")
    .data(venue)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.name))
    .attr("y", d => yLinearScale(d.type))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => chartHeight - yLinearScale(d.type));

});