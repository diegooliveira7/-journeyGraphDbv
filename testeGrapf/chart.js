
const ctx = document.getElementById('barchart'); //se eu deixar myChart, sem colocar o tamanho lá no HTML fica o tamanho q eu quiser

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: '#36A2EB',
        backgroundColor: 'red',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });