// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var form = d3.select("#datetime");

function searchEvent(event) {
    var inputDate= d3.event.target.value;

    var filteredData = tableData.filter(targetDate => targetDate.datetime === inputDate);
    displayData(filteredData);

};

function displayData(targetData) {
    targetData.forEach(function(ufo){
        var row = tbody.append("tr");

        Object.entries(ufo).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

form.on('change', searchEvent);