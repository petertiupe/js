// Laden der Daten 
// Die Daten in einem Kreissegment werden in Polarkoordinaten berechnet. 
// Polarkoordinaten arbeiten mit dem Radius und dem Winkel, um die gesamte 
// Fläche abzutasten. In diesem Fall wird der Winkel im Uhrzeigersinn
// gemessen, in der Mathematik wird er gegen den Uhrzeigersinn gemessen.
// Die anzuzeigenden Daten bestehen aus nur zwei Spalten, 
// Dem Datum und der Niederschlagsmenge an dem betrachteten Tag.


d3.csv("data/daily_precipitations.csv", d3.autoType)
    .then(data => {
        console.log(data.length);
        console.log("Daten für das Kreissegment:", data);
        drawArc(data)

    });

// Draw the arc here
const drawArc = (data) => {
    const pieChartWidth = 300;
    const pieChartHeight = 300;
    const svg = d3.select("#arc") // ID-Selektor, die ID arc ist im HTML definiert
        .append("svg")
        .attr("viewBox", [0, 0, pieChartWidth, pieChartHeight]);

    // Bei Polarkoordinaten muss man den Mittelpunkt der Polarkoordinaten in das Zentrum
    // der Anzeigefläche transformieren. Hier geschieht das, indem die Höhe und die Breite
    // jeweils durch zwei geteilt werden und dann per "Vektortransformation" dort
    // hingeschoben werden. Bei dem Linechart entspricht dies der "Marginkonvention".
    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${pieChartWidth / 2}, ${pieChartHeight / 2})`);


    // Mathematik zur Berechnung der Tage mit und ohne Niederschlag.
    // Nur diese beiden Kriterien werden in der Grafik unterschieden und erklären sich
    // von selbst.    
    const numberOfDays = data.length;
    const numberOfDaysWithPrecipitation = data.filter(d =>
        d.total_precip_in > 0).length;
    const percentageDaysWithPrecipitation = Math.round(numberOfDaysWithPrecipitation / numberOfDays * 100);

    // Umrechnung in den Winkel, der hier in Grad und im Bogenmaß berechnet wird.
    const angleDaysWithPrecipitation_deg = percentageDaysWithPrecipitation * 360 / 100;
    const angleDaysWithPrecipitation_rad = angleDaysWithPrecipitation_deg * Math.PI / 180;

    // Nun noch der Zeichenpart, das Bogensegment ist nicht komplett gefüllt, daher 
    // werden inner- und outerRadius angegeben.
    const arcGenerator = d3.arc()
        .innerRadius(80) // Pixelangabe
        .outerRadius(120) // Pixelangabe
        .padAngle(0.02) // Die Flächen stoßen nicht direkt aneinander sondern sind um ca. 1 Grad getrennt
        .cornerRadius(6); // Abrundung an der Trennfläche

    // Da hier nur zwei Werte eine Rolle spielen, wird nicht mit einer Accessor-Funktion
    // gearbeitet, es ist hier einfacher, die beiden Winkel "manuell" zu zeichnen.
    // Man sieht hier, der Winkel wird im Bogenmaß übergeben, wie sich das für 
    // Mathematiker gehört ;-)     
    innerChart
        .append("path")
        .attr("d", () => {
            return arcGenerator({
                startAngle: 0,
                endAngle: angleDaysWithPrecipitation_rad
            });
        })
        .attr("fill", "#6EB7C2");

    const zweiPi = Math.PI * 2;
    innerChart
        .append("path")
        .attr("d", () => {
            return arcGenerator({
                startAngle: angleDaysWithPrecipitation_rad,
                endAngle: zweiPi
            });
        })
        .attr("fill", "#DCE2E2");

    const centroid = arcGenerator
        .startAngle(0)
        .endAngle(angleDaysWithPrecipitation_rad)
        .centroid()

    
    // Der oder das Centroid berechnet das Zentrum des 
    // Kreisbogens, um die Schrift dort zu platzieren.
    // Hier ist es am einfachsten, sich die generierte Grafik
    // anzusehen.    
    console.log("Centroid:", centroid)

    // Text in den Bogen schreiben
    innerChart
        .append("text")
        .text(d => d3.format(".0%")(percentageDaysWithPrecipitation / 100))
        .attr("x", centroid[0])
        .attr("y", centroid[1])
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "white")
        .style("font-weight", 500);
};