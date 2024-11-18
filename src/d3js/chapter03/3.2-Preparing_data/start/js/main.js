let rowByRowFunc = function(d) {
    let newD = {
      technology: d.technology,
      count: Number(d.count) // Wandelt den String in einen Integer um, ist eine kürzere Schreibweise für Number(d.count) unärer +-Operator
    };
    console.log(newD);
    return newD;
  }


/*
d3.csv("data/data.csv", d => {
  return {
    technology: d.technology,
    count: +d.count
  };
}).then(data => {
  console.log(data);
});
*/ 

let fullDatasetFunc = function(d) {
return {
    technology: d.technology,
    count: +d.count // wie oben Umwandlung in eine Zahl
    };
  }

// Append a SVG container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

let data = d3.csv("data/data.csv", fullDatasetFunc)
  // nur im Fall der 2. Funktion, die auf dem ganzen Set arbeitet
  .then(data => {
    console.log(data);
    console.log(data.length);
    console.log("Maximum: " + d3.max(data, d => d.count) ); 
    console.log("Minimum: " + d3.min(data, d => d.count) );
    console.log("Wertebereich: " + d3.extent(data, d => d.count));
    console.log("Spalten sind: " + data["columns"][0]) // müsste man über eine Schleife machen

    data.sort((a, b) => b.count - a.count); // der größte Wert zuerst

    createViz(data)

  });

const createViz = (data) => {};




  
  



    
