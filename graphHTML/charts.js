
google.charts.load('current', { packages: [ 'corechart' ] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const container = document.querySelector('#chart')
    const data = new google.visualization.arrayToDataTable([
        [ 'Character', 'Ki'],
        [ 'Goku', 10000 ],
        [ 'Vegeta', 9000 ],
        [ 'Gohan', 8000 ],
        [ 'Freeza', 5000 ],
        [ 'Piccolo', 2000 ],
        [ 'Vegetaa', 9000 ],
    ])
    const options = {
        // title: 'Dragon Ball Z - Characters Ki',
        'legend': 'none', //deixar sem legenda
        height: 650,
        width: 1250,
        chartArea:{left:70,top:15,width:'90%',height:'90%'},
        backgroundColor: '#fbf3db',
        colors: ['#ac9b84'],
    }

    // const chart = new google.visualization.ColumnChart(container)
    // const chart = new google.visualization.BarChart(container)
    // const chart = new google.visualization.LineChart(container)
    const chart = new google.visualization.ColumnChart(container)
    chart.draw(data, options)
}