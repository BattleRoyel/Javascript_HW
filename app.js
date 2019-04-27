// from data.js
var tableData = data;


tbody = d3.select("tbody")

// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)


var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function clickSelect(){
   
    d3.event.preventDefault();
   
    console.log(dateInputText.property("value"));
    
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
   
    displayData(new_table);
}


dateInputText.on("change", clickSelect)
