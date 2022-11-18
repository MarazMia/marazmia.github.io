function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var xValues = ["CodeForces", "CodeChef", "HackerEarth", "AtCoder"];
  var Total_xValues = ["CodeForces", "LeetCode", "CodeChef", "AtCoder", "HackerEarth", "Others"];
  var CF_yValues = [372, 50, 1366, 3062];
  var CC_yValues = [75, 12, 1525, 591];
  var HE_yValues = [61, 6, 1505, 732];
  var AC_yValues = [75, 12, 177, 781];
  var rating_yValues = [1366, 1525, 1505, 177];
  var ranking_yValues = [3062, 591, 732, 781];
  var contests_yValues = [50, 12, 6, 12];
  var solved_yValues = [372, 75, 61, 75];
  var Total_yValues = [372, 178, 75, 75, 61, 128];
  var barColors = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
  var Total_barColors = [getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor()];
  
  new Chart("CF_Chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: rating_yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Ratings"
      }
    }
  });
  
  new Chart("CC_Chart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: ranking_yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Rankings"
        }
      }
    });
  
    new Chart("HE_Chart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: contests_yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Contests"
        }
      }
    });
    
    new Chart("AC_Chart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: solved_yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Problems Solved"
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