var data = [30, 86, 168, 281, 303, 365];

function setBarWidth() {
  const w = $("#chart").width();

  const s = d3
    .scaleLinear()
    .domain([0, 365])
    .range([0, w - 2]);

  d3.select("#chart")
    .selectAll("div")
    .style("width", function(d) {
      // console.log(s(d))
      return s(d) + "px";
    });
}

const w = $("#chart").width();

const s = d3
  .scaleLinear()
  .domain([0, 365])
  .range([0, w - 2]);

d3.select("#chart")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("width", function(d) {
    // console.log(s(d))
    return s(d) + "px";
  })
  .text(function(d) {
    return "$" + d;
  });

setBarWidth();

$(window).resize(function() {
  setBarWidth();
});
