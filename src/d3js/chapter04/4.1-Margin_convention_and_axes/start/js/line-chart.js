// Hier werden die Daten geladen und pet d3.autoType  automatisch in den 
// einen Typ umgewandelt. D3 kennt Datum, Zahlen etc.
let data = d3.csv("data/weekly_temperature.csv",  d3.autoType)
    .then(data => {
        console.log(data.length);
        console.log("temperature data", data);
        drawLineChart(data)

    });
// Hier soll die Kurve gezeichnet werden
const drawLineChart = (data) => {
    // Hier wird ein Rahmen definiert, der von der SVG-View-Box abzuziehen ist.
    // Anschließend wird eine innerWidth un eine innerHeight gerechnet, sodass
    // diese Größen später automatisch agepasst werden, wenn man etwas ändern muss.
    const margin = {top: 40, right: 170, bottom: 25, left: 40};
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select("#line-chart") // CSS-ID-Selektor für ein div in das die Grafik soll
        .append("svg")
        .attr("viewBox", `0, 0, ${width}, ${height}`);
    
    // Hier kommt jetzt ein "Trick". Die eigentlichen Kurven werden in ein Group-Element
    // gezeichnet, so kann man die Transformation mit den oben angegebenen Margins
    // durchführen und kann innerhalb dieser Group mit "normalen" Funktionswerten arbeiten. 
    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // Achsen erzeugen, indem man  ein Scale an die axix-Funktion übergibt
    // Um ein Scaling zu erzeugen muss man den Inner-Chart-Bereich auf den Wertebereich der
    // Datümer abbilden, genau das passiert hier.
    
    // X-Achse Scaling
    // const firstDate = d3.min(data, d => d.date);
    const firstDate = new Date(2021, 00, 01, 0, 0, 0);
    const lastDate = d3.max(data, d => d.date);
    const xScale = d3.scaleTime()
        .domain([firstDate, lastDate])
        .range([0, innerWidth]);
    
    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat("%b")); // sorgt für die agbgekürzten Monatsformate wie Jan Feb....
    innerChart
        .append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);  

    // Y-Achse Scaling
    const maxTemp = d3.max(data, d => d.max_temp_F);
    const yScale = d3.scaleLinear()
        .domain([0, maxTemp])
        .range([innerHeight, 0]);

    const leftAxis = d3.axisLeft(yScale)
    
    innerChart
        .append("g")
        .attr("class", "axis-y")
        .call(leftAxis);

    // Man kann nun der Y-Achse noch ein oberes Label verpassen
    svg
        .append("text")
        .text("Temperature (°F)")
        .attr("y", 20);

    // Das Koordinatensystem ist fertig (am Text könnte man noch etwas tun), jetzt
    // wird der Graph gezeichnet (Line-Chart...)    

    // Die Line-Charts werden in der Regel durch SVG-Path-Elemente erzeugt. Wie ich im SVG-Beispiel
    // gezeigt habe, wird ein Path beispielsweise so erzeugt:

    //  <path d="M 100 20 V 180 M 120 20 V 180" fill="none" stroke="black" stroke-width="2"/>

    // Es wird also der d-Parameter gesetzt. Dieses findet man in D3 wieder.
    // Die einzelnen Befehle kann man in der Datei svg.md nachlesen.

    // Zeichnen der einzelnen Punkte
    const aubergine = "#75485E";
    const blau = "#0000FF"
    const red ="#FF0000"
    innerChart
        .selectAll("circle")  // #1
        .data(data)          
        .join("circle")      
        .attr("r", 4) // Radius der Datenpunkte ist 4 Px
        .attr("cx", d => xScale(d.date))      //  #2
        .attr("cy", d => yScale(d.avg_temp_F)) 
        .attr("fill", aubergine);
    
    // Die Line-Generator - Funktion wird in einer Konstanten gespeichert, um sie
    // später nutzen zu können.
    const lineGenerator = d3.line()
        .x(d => xScale(d.date)) // #1
        .y(d => yScale(d.avg_temp_F)); // #2
        
    const curveGenerator = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.avg_temp_F))
        .curve(d3.curveCatmullRom);

    // Ich habe Kurve und Line eingezeichnet, da sieht man gleich 
    // den Unterschied

    innerChart
        .append("path")
        .attr("d", curveGenerator(data)) // #1
        .attr("fill", "none")
        .attr("stroke", blau);
    
    innerChart
        .append("path")
        .attr("d", lineGenerator(data)) // #1
        .attr("fill", "none")
        .attr("stroke", red);  
    
    // Es werden noch die folgenden Kurven erwähnt, deren Unterschiede ich bei Bedarf bewerten muss:

    // d3.curveBasis
    // d3.curveBundle
    // d3.curveCardinal
    // d3.curveCatmullRom
    // d3.curveMonotoneX
    // d3.curveStep



    
};