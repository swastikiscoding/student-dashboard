const socket = io('https://data.gdscnsut.com');

const labels = [0];
const data = {
    labels: labels,
    datasets: [{
        label: 'Random Dataset',
        data: [0],
        fill: false,
        borderColor: 'rgb(100, 192, 32)',
        tension: 0.5
    }]
};

const config = {
    type: 'line',
    data: data,
};


const ctx = document.getElementById('performanceChart')
const perfChart = new Chart(ctx, config)

socket.on('random_number', function (socketData) {
    let now = new Date();
    now = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
    let value = socketData.number * 10;

    data.labels.push(now);
    data.datasets[0].data.push(value);

    if (data.labels.length > 8) {
        data.labels.shift();
        data.datasets[0].data.shift();
    }

    perfChart.update();
});
