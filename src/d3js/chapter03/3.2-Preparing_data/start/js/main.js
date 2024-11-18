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

function printArray(ar) {
    // Eine andere Variante ist
    console.log("======================")
    console.log("Ausgabe der Arraywerte")
    console.log("======================")
    for(let i=0; i < ar.length; i++) {
        console.log(ar[i].count + " " +ar[i].technology)
    }
    console.log("==========")

}

const createViz = (data) => {
  printArray(data);
  const barHeight = 20; // Die Höhe eines Rechtecks zur Darstellung...
  svg
  .selectAll("rect") // jeder CSS-Selektor ist möglich, ein Element-Type ist üblich
  .data(data) // erst durch die Daten weiß D3 wieviele Rechtecke erzeugt werden sollen
  .join("rect") // hier wird das Rechteck erzeugt Man hat nun n leere Rechtecke im DOM
                 // die man im Inspector auch sieht.
    .attr("class", dEntry => {
        console.log(dEntry);
        return `bar bar-${dEntry.technology}` // für jedes Rechteck wird die CSS-Klasse bar und eine in der Form bar-QGIS gesetzt
                                             // Damit hat man die Möglichkeit alle gleich zu gestalten aber auch spezieller wenn nötig.
                                             // Hier wird ein Template-Literal wie in Kotlin verwendet.
      })
    .attr("width", dEntry => dEntry.count)
    .attr("height", barHeight)
    .attr("x", 0) // jedes Rechteck beginnt links in der SVG-View-Box
    .attr("y", (d, i) => (barHeight + 5) * i) // Das d wird hier nur mitgegeben, weil der i-Parameter benötigt wird
    .attr("fill", d => d.technology == "D3.js" ? "yellowgreen" : "skyblue")



}




  
  



    
