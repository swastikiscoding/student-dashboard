const createDoughnut = (canvas, msg, pre, total) => {
    // Calculate the attendance percentage
    let percentage = (pre / total) * 100;

    // Calculate classes needed to reach 75% if below
    let requiredClasses = 0;
    let message = "";

    if (percentage < 75) {
        // Formula to calculate required classes to get to 75%
        requiredClasses = Math.ceil((0.75 * total - pre) / 0.25);
        message = `You need ${requiredClasses} more classes to reach 75%.`;
    } else {
        message = "You're in the safe zone!";
    }

    // Display percentage and message
    document.getElementById(msg).textContent = `Attendance: ${percentage.toFixed(2)}%. ${message}`;

    // Doughnut chart data
    const data = {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: 'Attendance',
            data: [pre, total - pre],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
            ],
            borderWidth: 0,
            hoverOffset: 10
        }]
    };

    const config = {
        type: "doughnut",
        data: data,
        options: {
            responsive: false
        }
    };

    const ctx = document.getElementById(canvas);
    new Chart(ctx, config);
};

async function showAttendance() {
    const req = await fetch('./data.json');
    const attendanceData = await req.json();

    const { attendance } = attendanceData.student;

    // Loop through each subject's attendance and create a doughnut chart
    Object.keys(attendance).forEach(subject => {
        const [present, total] = attendance[subject].split('/').map(Number);

        // Dynamically call createDoughnut with appropriate IDs
        createDoughnut(`${subject}Attendance`, `${subject}Msg`, present, total);
    });
}

// Fetch the data and display the attendance charts
showAttendance();
