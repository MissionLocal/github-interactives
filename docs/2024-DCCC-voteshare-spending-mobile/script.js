// Load the CSV data
d3.csv("all_data.csv").then(function (data) {

    // Convert strings to numbers
    data.forEach(function (d) {
        d.amount_raised = +d.amount_raised;
        d.votes = +d.votes;
    });

    // Set up the SVG canvas
    var margin = { top: 20, right: 30, bottom: 30, left: 50 },
        width = 280 - margin.left - margin.right,
        height = 750 - margin.top - margin.bottom;

    var svg = d3.select("#scatter").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 var yAxisFormat = function (d) {
    if (d >= 1000) {
        return "$" + (d / 1000) + "K"; // Format numbers >= 1000 as "K"
    } else {
        return d; // Return numbers < 1000 unchanged
    }
};

    // Define scales for the x-axis and y-axis
    var xScale = d3.scaleLinear()
        .domain([0, 20000])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, 300000])
        .range([height, 0]);

    var colorScale = d3.scaleOrdinal()
        .domain(data.map(function (d) { return d.slate; }))
        .range(["#FF6B00", "#5159A1", "#666666"]); // Specify colors for each category


    // Create axes
    var xAxis = d3.axisBottom(xScale).ticks(3);
    var yAxis = d3.axisLeft(yScale).tickFormat(yAxisFormat).ticks(3); // Specify the number of ticks you want to show
    ; // Apply custom format function

    // Append x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text") // Select all text elements of x-axis
        .style("font-family", "'Barlow', sans-serif") // Set font family
        .style("font-size", "14px"); // Set font size

    // Append y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis.tickFormat(yAxisFormat))
        .selectAll("text") // Select all text elements of y-axis
        .style("font-family", "'Barlow', sans-serif") // Set font family
        .style("font-size", "14px"); // Set font size

    // Plot the data points as circles on the scatterplot
    svg.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", function (d) { return xScale(d.votes); })
        .attr("cy", function (d) { return yScale(d.amount_raised); })
        .attr("r", 5)
        .attr("fill", function (d) { return colorScale(d.slate); }) // Color based on "slate" column
        .on("mouseover", function (d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            var amountPerVote = d.amount_raised / d.votes;
            tooltip.html("<b>" + d.contest + "</b><br>" +
                "Cost per vote: <b>$" + amountPerVote.toFixed(2) + "</b>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px")
                .style("font-family", "'Barlow', sans-serif");
        })
        .on("mouseout", function (d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });


    // Define the tooltip
    // Define the tooltip
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("background", "#ffffffee") // Set background color
        .style("font-size", "18px")
        .attr("id", "adjustments"); // Add id for styling

});



