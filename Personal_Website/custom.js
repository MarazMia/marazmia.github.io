function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var xValues = ["Solved", "Attended Contests", "Highest Rating", "Highest Rank"];
  var Total_xValues = ["Total Solved", "CodeForces", "LeetCode", "CodeChef", "AtCoder", "HackerEarth", "Others", "Total Attended Contests"];
  var CF_yValues = [372, 50, 1366, 3062];
  var CC_yValues = [75, 12, 1525, 591];
  var HE_yValues = [61, 6, 1505, 732];
  var AC_yValues = [75, 12, 177, 781];
  var Total_yValues = [368, 178, 75, 75, 61, 128, 80];
  var barColors = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
  var Total_barColors = [getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor()];
  
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