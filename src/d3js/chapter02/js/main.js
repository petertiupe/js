const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 1200 1600")
      .style("border", "1px solid black");

svg.append("rect")
    .attr("x", 10)
    .attr("y", 30)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "turquoise");