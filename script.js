var chart;
var lineSeries;

anychart.onDocumentReady(function () {
    chart = anychart.line();

    chart.container("any-chart-container");
    chart.draw();
});



document.getElementById("file").addEventListener("change", function () {
  var fr = new FileReader();
  fr.readAsText(this.files[0]);
  fr.onload = function () {
    lineSeries = chart.line(fr.result, {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "\n"});
    
    let dataSet = lineSeries.data;
    console.log(dataSet);

    lineSeries.listen('pointclick', function (e) {
        console.log(e.pointIndex);
    });
  };  
});



