import * as Highcharts from "highcharts";

export class StatsData {
  id: string;
  timestamp: string;
  totalPipeLength: string;
  noOfPipesNeedAttention: string;
  locality: string;
  latitude: string;
  longitude: string;
  localityType: string;
  percentageDefect: string;
  percentageOfBlockage: string;
  currentAgeOfPipe: string;
  remainingUsefulLife: string;
  flowRate: string;
  pipeMaterial: string;
}

export class locality {
  id:string;
  area:string;
}


export const northDelhiLocality:locality[] = [
  {
    id:'1',
    area: 'Pitampura'
  },
  {
    id:'2',
    area: 'Karol Bagh'
  },
  {
    id:'3',
    area: 'Sadar Paharganj'
  },
  {
    id:'4',
    area: 'Civil Lines'
  }, 
]

export const southDelhiLocality: locality[] = [
  {
    id:'1',
    area: 'Central Delhi'
  },
  {
    id:'2',
    area: 'South Delhi'
  },
  {
    id:'3',
    area: 'West Delhi'
  },
  {
    id:'4',
    area: 'Najafgarh'
  }, 
]


export const areaLocality = [ 
  {
  id: '1',
  area: 'Central Delhi'
},
{
  id: '2',
  area: 'South Delhi'
},
{
  id: '3',
  area: 'West Delhi'
},
{
  id: '4',
  area: 'Najafgarh'
},
{
  id: '1',
  area: 'Central Delhi'
}];

export const areaData: StatsData[] = [
  {
    id: '1',
    timestamp: 'June 16 2021 03:52:00',
    totalPipeLength: '3000',
    noOfPipesNeedAttention: '15',
    locality: 'North Delhi Municipal Corporation',
    latitude: '28.491',
    longitude:  '77.508',
    localityType: 'City',
    percentageDefect: '30',
    percentageOfBlockage: '50',
    currentAgeOfPipe: '52',
    remainingUsefulLife: '10',
    flowRate: '65',
    pipeMaterial: 'PVC'
  },
  {
    id: '2',
    timestamp: 'June 18 2021 03:52:00',
    totalPipeLength: '2500',
    noOfPipesNeedAttention: '30',
    locality: 'South Delhi Municipal Corporation',
    latitude: '28.491',
    longitude:  '77.508',
    localityType: 'City',
    percentageDefect: '60',
    percentageOfBlockage: '60',
    currentAgeOfPipe: '98',
    remainingUsefulLife: '5',
    flowRate: '70',
    pipeMaterial: 'Cast Iron'
  }
];


export const mockData: StatsData[] = [
  {
    id: '1',
    timestamp: 'June 16 2021 03:52:00',
    totalPipeLength: '3000',
    noOfPipesNeedAttention: '15',
    locality: 'City',
    latitude: '28.491',
    longitude:  '77.508',
    localityType: 'City',
    percentageDefect: '30',
    percentageOfBlockage: '50',
    currentAgeOfPipe: '52',
    remainingUsefulLife: '10',
    flowRate: '200',
    pipeMaterial: 'PVC'
  },
  {
    id: '1',
    timestamp: 'June 16 2021 03:52:00',
    totalPipeLength: '3000',
    noOfPipesNeedAttention: '15',
    locality: 'City',
    latitude: '28.491',
    longitude:  '77.508',
    localityType: 'City',
    percentageDefect: '30',
    percentageOfBlockage: '50',
    currentAgeOfPipe: '52',
    remainingUsefulLife: '10',
    flowRate: '200',
    pipeMaterial: 'PVC'
  },
  {
    id: '1',
    timestamp: 'June 16 2021 03:52:00',
    totalPipeLength: '3000',
    noOfPipesNeedAttention: '15',
    locality: 'City',
    latitude: '28.491',
    longitude:  '77.508',
    localityType: 'City',
    percentageDefect: '30',
    percentageOfBlockage: '50',
    currentAgeOfPipe: '52',
    remainingUsefulLife: '10',
    flowRate: '200',
    pipeMaterial: 'PVC'
  },
  {
    id: '1',
    timestamp: 'June 16 2021 03:52:00',
    totalPipeLength: '3000',
    noOfPipesNeedAttention: '15',
    locality: 'City',
    latitude: '28.491',
    longitude:  '77.508',
    localityType: 'City',
    percentageDefect: '30',
    percentageOfBlockage: '50',
    currentAgeOfPipe: '52',
    remainingUsefulLife: '10',
    flowRate: '200',
    pipeMaterial: 'PVC'
  }

];

export const violationCountGraphData1 = {

  title: {
    text: 'Average Pipe Deterioration (in Percentage)'
  },

  yAxis: {
    title: {
      text: 'Percentage'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },

  xAxis: {
    title: {
      text: 'Year'
    },
    categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'North Delhi',
    data: [20, 22, 23, 25, 28, 31, 37, 45, 50]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 50
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

};

export const distanceViolationData1 = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Remaining Useful Life of Pipes'
  },
  xAxis: {
    title: {
      text: 'Locality'
    }
  },
  yAxis: {
    title: {
      text: 'Number of  Years'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },
  
  responsive: {
    rules: [{
      condition: {
        maxWidth: 50
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  },
  series: [
    {
      name: ['Pitampura'],
      data: [44]
    },
    {
      name: ['Karol Bagh'],
      data: [18]
    },
    {
      name: ['Sadar Paharganj'],
      data: [22]
    },
    {
      name: ['Civil lines'],
      data: [75]
    },
    {
      name: ['Narela'],
      data: [90]
    }]
};

export const violationCountGraphData2 = {

  title: {
    text: 'Average Pipe Deterioration (in Percentage)'
  },

  yAxis: {
    title: {
      text: 'Percentage'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },

  xAxis: {
    title: {
      text: 'Date'
    },
    categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'South Dellhi',
    data: [30, 35, 48, 52, 55, 58, 63, 69, 71]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 50
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

};

export const distanceViolationData2 = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Remaining Useful Life'
  },
  xAxis: {
    title: {
      text: 'Locality'
    }
  },
  yAxis: {
    title: {
      text: 'Number of  Years'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },
  // legend: {
  //   enabled: false
  // },
  responsive: {
    rules: [{
      condition: {
        maxWidth: 50
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  },
  series: [
    {
      name: ['Central Delhi'],
      data: [11]
    },
    {
      name: ['South Delhi'],
      data: [8]
    },
    {
      name: ['West Delhi'],
      data: [25]
    },
    {
      name: ['Najafgarh'],
      data: [25]
    }]
};

export const demandSupply = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Water Demand and Supply'
  },
  xAxis: {
    categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    crosshair: true,
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Litre per Capita',
    }
  },
  tooltip: {
    valueSuffix: ' Litre per Capita'
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [
    {
      name: ['Water Demand'],
      data: [215, 240, 245, 260, 270, 274]
    },
    {
      name: ['Water Supply'],
      data: [200, 220, 230, 243, 247, 250]
    }
  ]
}; 



export const blockageDemandSupply = {

  title: {
    text: 'Supply on Blockage (No supply over 80% blockage)'
  },

  yAxis: {
    title: {
      text: 'Blockage'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },

  xAxis: {
    title: {
      text: 'Date'
    },
    categories: ['5 June', '6 June', '7 June', '8 June', '9 June', '10 June', '11 June', '12 June', '13 June']
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'Supply on Blockage',
    data: [30, 35, 48, 83, 89, 60, 62, 64, 66],
    
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 50
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

};

export const blockageSuppy= {
  chart: {
    zoomType: 'xy'
},
title: {
    text: 'Average Blockage and Supply'
},
xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    crosshair: true
}],
yAxis: [{ // Primary yAxis
    labels: {
        format: '{value} %',
        style: {
            color: Highcharts.getOptions().colors[1]
        }
    },
    title: {
        text: 'Percentage',
        style: {
            color: Highcharts.getOptions().colors[1]
        }
    }
}, { // Secondary yAxis
    title: {
        text: 'Liter per Capita',
        style: {
            color: Highcharts.getOptions().colors[0]
        }
    },
    labels: {
        format: '{value} lpcd',
        style: {
            color: Highcharts.getOptions().colors[0]
        }
    },
    opposite: true
}],
tooltip: {
    shared: true
},
legend: {
    layout: 'vertical',
    align: 'left',
    x: 120,
    verticalAlign: 'top',
    y: 100,
    floating: true,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
},
series: [{
    name: 'Supply',
    type: 'column',
    yAxis: 1,
    data: [200, 220, 230, 170, 160, 180, 200, 220, 240],
    tooltip: {
        valueSuffix: ' Lpcd'
    }

}, {
    name: 'Blockage',
    type: 'spline',
    data: [30, 35, 48, 83, 89, 60, 62, 64, 66],
    tooltip: {
        valueSuffix: '%'
    }
}]
}