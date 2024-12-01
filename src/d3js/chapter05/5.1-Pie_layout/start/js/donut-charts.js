const drawDonutCharts = (data) => {
  // Generate the donut charts here

  const svg = d3.select("#donut") // id-Selector, der das Element in der index.html selektiert
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`); // Höhe und Breite stammen aus der shared-constants.js, die für alle Layouts gilt

  // Die Marginconvention wird hier angewendet, weil die Grafik später mit der X-Achse der beiden anderen Grafiken
  // übereinstimmen soll, sonst wäre sie hier nicht notwendig.  
  const donutContainers = svg
    .append("g")  // Gruppe hinzufügen, damit die Margin-Konvention genutzt werden kann                                                      
    .attr("transform", `translate(${margin.left}, ${margin.top})`); // margin stammt auch aus den shared-constants

  // die drei Jahre, für die die Kreisdiagramme gezeichnet werden. Mit dem Scaling werden die
  // Grafiken richtig auf der Oberfläche verteilt und es werden auch gleich alle drei als Gruppe hinzugefügt,
  // damit man dann in der Gruppe zeichnen kann.
  const years = [1975, 1995, 2013];

  // Es werden alle Spalten aus den Daten gefiltert, nur die Jahresspalte nicht, weil sie nicht benötigt wird.
  // Das Jahr soll nicht mit dargestellt werden. Also hat man das folgende Array:
  // ['vinyl', 'eight_track', 'cassette', 'cd', 'download', 'streaming', 'other']
  const formats = data.columns.filter(format =>
    format !== "year");


  years.forEach(year => {
    const donutContainer = donutContainers
      .append("g")
      .attr("transform", `translate(${xScale(year)}, ${innerHeight / 2})`);

    const yearData = data.find(d => d.year === year);

    const formattedData = [];  // Ein leeres Array wird erzeugt

    formats.forEach(format => {               // Es wird ein Objekt erzeugt, das in format die obigen Daten hat und in sales die Verkaufszahl                         
      formattedData.push({
        format: format,
        sales: yearData[format]
      });
    });

    // Bis hierher bestand die Aufgabe lediglich in der Vorbereitung der Daten. Jetzt kommt das Layout an die Reihe
    // Der pieGenerator benötigt die Information, aus welcher Spalte die anzuzeigenden Daten stammen, hier also
    // aus der "sales"-Information.
    const pieGenerator = d3.pie() // pie() als Funktionsaufruf gibt hier wie so oft in D3 auch wieder eine Fkt zurück.
      .value(d => d.sales);
    // Der folgende Aufruf übernimmt die vollständige Arbeit und berechnet ein Array aus den 7 Werten jeweils mit dem
    // Start und dem End-Winkel für die Daten. Man kann damit sofort die Charts zeichnen. Da über die drei
    // Jahre iteriert wird, werden auch die drei Jahre gleich berechnet.
    // So sieht ein berechneter Datensatz aus:
    /**
     * {format: 'eight_track', sales: 2770.41}
        endAngle: 5.996450070553133
        index: 1
        padAngle: 0
        startAngle: 4.462810866556783
        value: 2770.41
     */
    // Man sieht, dass auch die Daten enthalten sind, die in das Layout eingegangen sind, ziemlich genial :-)
    const annotatedData = pieGenerator(formattedData);

    // jetzt geht es an das eigentliche Darstellen auf der Oberfläche
    const arcGenerator = d3.arc()
      .startAngle(d => d.startAngle)  // Die Daten können jetzt aus dem obigen Datensatz genommen werden.
      .endAngle(d => d.endAngle)
      .innerRadius(60)
      .outerRadius(100)
      .padAngle(0.02)
      .cornerRadius(3);

    /* const arcs = donutContainer
       .selectAll(`.arc-${year}`)  // Es wird eine CSS-Klasse pro Kreissegment eingeführt, damit die Daten nicht überschrieben werden
         .data(annotatedData)
         .join("path")
         .attr("class", `arc-${year}`) // Referenz auf die CSS-Klasse drei Zeilen vorher
         .attr("d", arcGenerator)  // Der Generator wird zum Zeichnen genutzt.
         .attr("fill", d => colorScale(d.data.format)); // Die Farben stammen aus einem Ordinal-Scale in der scales.js-Datei (siehe dort)
     */

    const arcs = donutContainer
      .selectAll(`.arc-${year}`)
      .data(annotatedData)
      .join("g")
      .attr("class", `arc-${year}`);
       
      arcs                                                
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", d => colorScale(d.data.format));

      arcs
      .append("text")  
        .text(d => {
          d["percentage"] = (d.endAngle - d.startAngle) / (2 * Math.PI); // Hier wird die Prozentzahl als Anteil vom Bogenmass 2 * Pi berechnet                  
          return d3.format(".0%")(d.percentage);
        })
        .attr("x", d => {               
          d["centroid"] = arcGenerator
            .startAngle(d.startAngle)
            .endAngle(d.endAngle)
            .centroid();
          return d.centroid[0];
        })
        .attr("y", d => d.centroid[1])
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "#f6fafc")
        .attr("fill-opacity", d => d.percentage  
          < 0.05 ? 0 : 1)
        .style("font-size", "16px")
        .style("font-weight", 500);
  });


};