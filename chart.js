
function generateChart(results){
    
    var ctx = document.getElementById('myChart').getContext('2d');
    // console.log(results)
    results = results.map((result)=>result*100.0);
    console.log("Result" +results)
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dyskeratonic', 'Koilocytotic', 'Metaplasmic', 'Parabasal', 'Sup/Intermediate'],
        datasets: [{
            label: '% of Class Certainity',
            data: [...results],
            backgroundColor: [
                'gray',
                'blue',
                'yellow',
                'orange',
                'red'
                
            ],
            borderColor: [
                'gray',
                'blue',
                'yellow',
                'orange',
                'red'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
document.querySelector('.cap-chart').style.display='block';
}
