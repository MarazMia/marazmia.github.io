var xValues = ["Solved", "Attended Contests", "Highest Rating", "Highest Rank"];
var Total_xValues = ["Total Solved", "Total Attended Contests"];
var CF_yValues = [368, 50, 1366, 3062];
var CC_yValues = [75, 12, 1525, 591];
var HE_yValues = [61, 6, 1505, 732];
var AC_yValues = [75, 12, 177, 781];
var Total_yValues = [881, 80];
var barColors = ["blue", "green","cyan","orange","magenta"];
var Total_barColors = ["red", "magenta"];

new Chart("CF_Chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: CF_yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Code Forces"
    }
  }
});

new Chart("CC_Chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: CC_yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Code Chef"
      }
    }
  });

  new Chart("HE_Chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: HE_yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Hacker Earth"
      }
    }
  });
  
  new Chart("AC_Chart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: AC_yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "At Coder"
        }
      }
    });


    new Chart("Total_Chart", {
        type: "pie",
        data: {
          labels: Total_xValues,
          datasets: [{
            backgroundColor: Total_barColors,
            data: Total_yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Overall Performances"
          }
        }
      });