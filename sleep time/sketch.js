
//Data sources：https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need

let data = [ 11,  10,  9,  8,  7, 7, 7 ];
let labels = [ 1, 3, 6, 14, 18, 26, 65];
let title = 'How Much Sleep Do I Need?(Row: age, column: hours）';

let options = {
  
  // the big change – bar instead of line!
  type: 'bar',
  
  data: {
    labels: labels,
    datasets: [{
      
      // a few basic settings for the bars
      backgroundColor: 'rgb(255,150,0)',
      borderColor:     'rgb(200,100,0)',
      borderWidth:     2,
      
      // thickness of the bar (0–1)
      barPercentage: 1.0,
      
      data: data,
      label: 'age(in year)'
    }]
  },
  options: {
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    }
  }
}

let chart = new Chart(document.getElementById('canvas'), options);

