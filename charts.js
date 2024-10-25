async function fetchData() {
  try {
    // Fetch JSON data from the file
    const response = await fetch('./data.json');
    const data = await response.json();

    // Extract marks and attendance data
    const marks = data.student.marks;
    const attendance = data.student.attendance;

    // Update marks data in chart
    const marksLabels = Object.keys(marks);
    const marksValues = Object.values(marks);

    const marksData = {
      labels: marksLabels,
      datasets: [
        {
          axis: "x",
          label: "Marks",
          data: marksValues,
          backgroundColor: [
            "rgba(255, 205, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 100, 64, 0.8)",
            "rgba(54, 50, 255, 0.8)"
          ],
          borderWidth: 0
        }
      ]
    };

    const marksConfig = {
      type: "bar",
      data: marksData,
      options: {
        indexAxis: "y"
      }
    };

    const marksctx = document.getElementById("marksChart");
    new Chart(marksctx, marksConfig);

    // Update attendance data in chart
    const attendanceLabels = Object.keys(attendance);
    const attendancePercentages = attendanceLabels.map(subject => {
      const [present, total] = attendance[subject].split('/').map(Number);
      return ((present / total) * 100).toFixed(2);
    });

    const attData = {
      labels: attendanceLabels,
      datasets: [
        {
          axis: "x",
          label: "Attendance(%)",
          data: attendancePercentages,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 100, 64, 0.8)",
            "rgba(255, 205, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)"
          ],
          borderWidth: 0
        }
      ]
    };

    const attConfig = {
      type: "bar",
      data: attData
    };

    const attctx = document.getElementById("attendanceChart");
    new Chart(attctx, attConfig);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

// Fetch data and create charts on load
fetchData();


const assData = {
  labels: [
    'Pending',
    'Submitted',
    // 'Yellow'
  ],
  datasets: [{
    label: 'Assignments(due in 3 days)',
    data: [5, 10],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    borderWidth: 0,
    hoverOffset: 10
  }]

};
const assConfig = {
  type: "doughnut",
  data: assData,
  options: {
    responsive: false
  }
};


const assctx = document.getElementById("assignmentsChart");
new Chart(assctx, assConfig, assData);
