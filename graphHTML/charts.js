
google.charts.load('current', { packages: [ 'corechart' ] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const container = document.querySelector('#chart')
    const data = new google.visualization.arrayToDataTable([
        [ 'Character', 'Ki'],
        [ 'Arqueiras', 606 ],
        [ 'Atalaia', 497 ],
        [ 'Cavaleiros', 339 ],
        [ 'Guarita', 544 ],
        [ 'Sentinela', 528 ],
        [ 'Vedeta', 505 ],
    ])
    const options = {
        // title: 'Dragon Ball Z - Characters Ki',
        'legend': 'none', //deixar sem legenda
        backgroundColor: '#fbf3db',
        colors: ['#ac9b84'],
    }

    // const chart = new google.visualization.ColumnChart(container)
    // const chart = new google.visualization.BarChart(container)
    // const chart = new google.visualization.LineChart(container)
    const chart = new google.visualization.ColumnChart(container)
    chart.draw(data, options)
    
}

$(window).resize(function(){
    drawChart();
});
