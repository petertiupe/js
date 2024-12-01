// In dieser Datei werden die Scales definiert. Sie ordnen die Grafiken
// auf der Oberfläche an. 
// Das Band-Scale sorgt dafür, dass die Daten gleichmäßig auf der x-Achse sortiert werden.
// Skaliert wird anhand der Jahre von 1973 bis 2019

// Für die Donuts wird das Scaling nur mit den Jahren 75, 95 und 2013 aufgerufen, so werden die 
// Donuts geleimäßig verteilt. Den Code dazu findet man in der Datei donut-charts.js

  // Es wird hier ein Band-Scale definiert.
  const xScale = d3.scaleBand();

  // Ein Ordinal-Scale ist einfach eine Zuordnung von Werten, hier also der Überschriften (Speicherform der Musik) zu einer Farbe)
  const colorScale = d3.scaleOrdinal();

  const defineScales = (data) => {
    xScale
      .domain(data.map(d => d.year))
      .range([0, innerWidth])
      .paddingInner(0.2);
  
  colorScale
    .domain(formatsInfo.map(f => f.id)) // Die Daten stammen aus der sharedConstants-Datei, dort sind die Farben definiert
    .range(formatsInfo.map(f => f.color));

  };