// from data.js
var tableData = data;

// function to display UFO sightings
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clear the table for new data
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// initial display of all UFO sightings
console.log(tableData);
tableDisplay(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#date").property("value");
  
  if (dateInput.trim() == "" ) {
    // display the whole database if the date field has no input
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.date == dateInput.trim());
  };

  var cityInput = d3.select("#city").property("value");
  
  if (cityInput.trim() == "" ) {
    // display the whole database if the city field has no input
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.city == cityInput.trim());
  };

  var stateInput = d3.select("#state").property("value");
  
  if (stateInput.trim() == "" ) {
    // display the whole database if the state field has no input
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.state == stateInput.trim());
  };

  var countryInput = d3.select("#country").property("value");
  
  if (countryInput.trim() == "" ) {
    // display the whole database if the country field has no input
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.country == countryInput.trim());
  };

  var shapeInput = d3.select("#shape").property("value");
  
  if (shapeInput.trim() == "" ) {
    // display the whole database if the shape field has no input
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.shape == shapeInput.trim());
  };
  // display message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filteredData);
  tableDisplay(filteredData);
});

