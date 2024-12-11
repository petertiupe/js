const drawStreamGraph = (data) => {

  // In dieser Datei wird der streamgraph aufgebaut
  // Der Code für die Berechnung der X-Koordinate für den Stream-Graphen ist exakt derselbe wie 
  // für die Bar-Charts, den kann man einfach kopieren.
  const stackGenerator = d3.stack()    // Es wird wieder eine Stack-Generator genutzt, um die Daten aufzubauen 
    .keys(formatsInfo.map(f => f.id));
  const annotatedData = stackGenerator(data);

  const maxUpperBoundary = d3.max(annotatedData[annotatedData.length - 1], d => d[1]);
  const yScale = d3.scaleLinear() // Die Werte auf der Y-Achse werden linear skaliert.
    .domain([0, maxUpperBoundary])
    .range([innerHeight, 0])
    .nice();

  const areaGenerator = d3.area()
    .x(d => xScale(d.data.year) + xScale.bandwidth() / 2) // Die X-Position um die Hälfte der Balkenbreite nach rechts verschieben
    .y0(d => yScale(d[0])) // Zur Erinnerung, der d-Parameter ist der für die Zeichnung der Pfade bei den SVG-Grafiken
    .y1(d => yScale(d[1])) // Im Text "chapter03.md" habe ich die Area-Funktion und ihre Parameter kurz beschrieben. Hier ist die Stelle mit  der Anwendung
    .curve(d3.curveCatmullRom); // Um nicht Geraden zwichen den Pkten zu bekommen, wählt man eine entsprechende Kurve aus.

  /***************************************/
  /* Der Streamgraph wird hinzugefügt    */
  /***************************************/
  const svg = d3.select("#streamgraph") // id-Selector aus der Index.html
    .append("svg")
    .attr("viewBox", [0, 0, width, height]); // Margin-Konvention für die Innere Zeichnung

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const bottomAxis = d3.axisBottom(xScale)
    .tickValues(d3.range(1975, 2020, 5))
    .tickSizeOuter(0)
    .tickSize(innerHeight * -1); // die Zeile verlängert die Ticks auf der X-Achse

  innerChart
    .append("g")
    .attr("class", "x-axis-streamgraph")



    .attr("transform", `translate(0, ${innerHeight})`)
    .call(bottomAxis);

  innerChart
    .append("g")  // eine Gruppe hinzufügen
    .attr("class", "areas-container") // CSS-Klasse setzen
    .selectAll("path") // den zu zeichnenden "Path setzen"
    .data(annotatedData)
    .join("path") // die Path-Elemente zeichnen
    .attr("d", areaGenerator)  // hier kommt der Area-Generator, der oben definiert wurde und die eigentl. 
    .attr("fill", d => colorScale(d.key));

  // Axen und Labels hinzufügen
  const leftAxis = d3.axisLeft(yScale);
  innerChart
    .append("g")
    .call(leftAxis);
};