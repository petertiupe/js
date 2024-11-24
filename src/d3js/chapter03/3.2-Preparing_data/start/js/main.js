let rowByRowFunc = function (d) {
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

let fullDatasetFunc = function (d) {
  return {
    technology: d.technology,
    count: +d.count // wie oben Umwandlung in eine Zahl
  };
}

// Append a SVG container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 600 700")
  .style("border", "1px solid black");

let data = d3.csv("data/data.csv", fullDatasetFunc)
  // nur im Fall der 2. Funktion, die auf dem ganzen Set arbeitet
  .then(data => {
    console.log(data);
    console.log(data.length);
    console.log("Maximum: " + d3.max(data, d => d.count));
    console.log("Minimum: " + d3.min(data, d => d.count));
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
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i].count + " " + ar[i].technology)
  }
  console.log("==========")

}

const createViz = (data) => {
  printArray(data);

  // X-Scale liefert eine Funktion zurück
  const xScale = d3.scaleLinear()
    .domain([0, 1078])
    .range([0, 450]);

  // Es wird die jeweilige Technologie ausgelesen.
  // Die Technologien werden gleichmäßig auf den Range verteilt, daraus ergibt sich die Höhe der Balken
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.technology))
    .range([0, 700])
    .paddingInner(0.2); // akzeptiert Werte von 0 bis 1 

  const barHeight = 20; // Die Höhe eines Rechtecks zur Darstellung...

  const barAndLabel = svg
    .selectAll("g") // jeder CSS-Selektor ist möglich, ein Element-Type ist üblich
    .data(data) // erst durch die Daten weiß D3 wieviele Rechtecke erzeugt werden sollen
    .join("g") // hier wird das Rechteck erzeugt Man hat nun n leere Rechtecke im DOM
    .attr("transform", d => `translate(0, ${yScale(d.technology)})`); // hier wird die Gruppe vertikal positioniert
  // die man im Inspector auch sieht.
  barAndLabel
    .append("rect")
    .attr("class", dEntry => {
      console.log(dEntry);
      return `bar bar-${dEntry.technology}` // für jedes Rechteck wird die CSS-Klasse bar und eine in der Form bar-QGIS gesetzt
      // Damit hat man die Möglichkeit alle gleich zu gestalten aber auch spezieller wenn nötig.
      // Hier wird ein Template-Literal wie in Kotlin verwendet.
    })
    .attr("width", dEntry => xScale(dEntry.count))
    .attr("height", barHeight)
    .attr("x", 100) // jedes Rechteck beginnt links in der SVG-View-Box
    //.attr("y", dEntry => yScale(dEntry.technology)) // Das d wird hier nur mitgegeben, weil der i-Parameter benötigt wird
    .attr("fill", d => d.technology == "D3.js" ? "yellowgreen" : "skyblue")

  barAndLabel
    .append("text")
    .text(d => d.technology)
    .attr("x", 96)
    .attr("y", 12)
    .attr("text-anchor", "end")
    .style("font-family", "sans-serif")
    .style("font-size", "11px");

  barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => 100 + xScale(d.count) + 4)
    .attr("y", 12)
    .style("font-family", "sans-serif")
    .style("font-size", "11px");

  // Vertikale Linie der Grafik hinzufügen
  svg
    .append("line")
    .attr("x1", 100)
    .attr("y1", 0)
    .attr("x2", 100)
    .attr("y2", 700)
    .attr("stroke", "black");



}










