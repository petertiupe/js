const drawStackedBars = (data) => {

  /**
   * Der StackLayout-Generator wird initialisiert.
   * Wie auch schon beim Pie-Chart benötigt das Layout die Information,
   * woher die Daten für die Transformation stammen sollen.
   * 
   *    */

  const stackGenerator = d3.stack()
    .keys(formatsInfo.map(f => f.id)); // Die Schlüssel stammen aus der Konstantenklasse 



  /*
    Wenn ich das im Debugger richtig interpretiere, wird der Datensatz nach den Keys sortiert und
    für jeden Key werden die Layouts berechnet. Man hat anschließend 7 Arrays, die wieder aus der Anzahl
    der Datensätze im Ausgangsdatensatz bestehen. Also eigentlich eine Transponierung der Daten, an 
    die dann jeweils noch der Original-Datensatz wieder drangehangen wird.
    Ich habe die Grafik aus dem Buch kopiert und mit eingebunden.
  */
  const annotatedData = stackGenerator(data); // Der StackGenerator bekommt die Daten.

  // Um ein Bar-Chart zeichnen zu können, benötigt man den maximalen Wert und muss damit das Scaling
  // aufbauen.
  const maxUpperBoundary = d3.max(annotatedData[annotatedData.length - 1], d => d[1]);

  // Scaling wie immer mit dem Maximum aus dem Wertebereich
  const yScale = d3.scaleLinear()
    .domain([0, maxUpperBoundary])
    .range([innerHeight, 0])
    .nice();



  /*******************************/
  /*    Append the containers    */
  /*******************************/
  const svg = d3.select("#bars")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  const innerChart = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  annotatedData.forEach(series => {

    innerChart
      .selectAll(`.bar-${series.key}`)
      .data(series)
      .join("rect")
      .attr("class", d => `bar-${series.key}`)

      .attr("x", d => xScale(d.data.year))
      .attr("y", d => yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .attr("height", d => yScale(d[0]) - yScale(d[1]))
      .attr("fill", colorScale(series.key));
  });

  // Es fehlen noch die Axen
  const bottomAxis = d3.axisBottom(xScale)
    .tickValues(d3.range(1975, 2020, 5))
    .tickSizeOuter(0);

  innerChart
    .append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(bottomAxis);

  const leftAxis = d3.axisLeft(yScale);
  innerChart
    .append("g")
    .call(leftAxis);

};