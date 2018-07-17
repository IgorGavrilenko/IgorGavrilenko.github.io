$(function() {
    //Initialize Select2 Elements
    $(".select-head").select2({
        width: 125
    });
    var maxHeight = 0;
    $(".div-hight-1").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".div-hight-1").height(maxHeight);
    $(".div-hight-2").each(function() {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".div-hight-2").height(maxHeight);
});
window.onload = function() {
    setTimeout(function() {
        var mainDivs = document.getElementsByClassName("column");
        var maxHeight = 0;
        for (var i = 0; i < mainDivs.length; ++i) {
            if (maxHeight < mainDivs[i].clientHeight) {
                maxHeight = mainDivs[i].clientHeight;
            }
        }
        for (var i = 0; i < mainDivs.length; ++i) {
            mainDivs[i].style.height = maxHeight + "px";
        }
    }, 1000);
}
$(function() {
    //--------------
    //- AREA CHART -
    //--------------
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas);
    var areaChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Digital Goods",
            fillColor: "rgba(60,141,188,0.9)",
            strokeColor: "rgba(60,141,188,0.8)",
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [10, 48, 40, 19, 86, 27, 90]
        }]
    };
    var areaChartOptions = {
        showScale: false,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.3,
        pointDot: false,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        maintainAspectRatio: true,
        responsive: true
    };
    //Create the line chart
    areaChart.Line(areaChartData, areaChartOptions);
    //-------------
    //- LINE CHART 1 -
    //--------------
    var lineChartCanvas = $("#lineChart1").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas);
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Electronics",
            fillColor: "#fff",
            strokeColor: "#3297e3",
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [25, 79, 8, 81, 56, 55, 40]
        }]
    };
    lineChart.Line(lineChartData, areaChartOptions);
    //-------------
    //- LINE CHART 2 -
    //--------------
    var lineChartCanvas = $("#lineChart2").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas);
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Digital Goods",
            fillColor: "#fff",
            strokeColor: "#d377de",
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [5, 48, 40, 19, 86, 27, 90]
        }]
    };
    lineChart.Line(lineChartData, areaChartOptions);
    //-------------
    //- LINE CHART 3 -
    //--------------
    var lineChartCanvas = $("#lineChart3").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas);
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Electronics",
            fillColor: "#fff",
            strokeColor: "#f18a28",
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }]
    };
    lineChart.Line(lineChartData, areaChartOptions);
    //-------------
    //- LINE CHART 4 -
    //--------------
    var lineChartCanvas = $("#lineChart4").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas);
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Electronics",
            fillColor: "RGBA(242,110,27, .3)",
            strokeColor: "RGBA(242,110,27, 1)",
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [15, 39, 20, 81, 36, 55, 15]
        }]
    };
    var lineChartOptions = {
        showScale: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.3,
        pointDot: false,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: false,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        maintainAspectRatio: true,
        responsive: true
    };
    lineChart.Line(lineChartData, lineChartOptions);
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartData;
    var barChartOptions = {
        scaleBeginAtZero: false,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false,
        barShowStroke: false,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true,
        maintainAspectRatio: false
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
});
