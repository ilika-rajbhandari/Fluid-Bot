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

export const areaLocality: locality[] =[ 
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
    flowRate: '200',
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
    percentageOfBlockage: '80',
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
    text: 'Average Defected Pipes'
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
    data: [20, 10, 13, 11, 35, 15, 17, 30, 50]
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
      name: ['Pitampura 5KM'],
      data: [44]
    },
    {
      name: ['Karol Bagh 8KM'],
      data: [18]
    },
    {
      name: ['Sadar Paharganj 6KM'],
      data: [22]
    },
    {
      name: ['Civil lines 9KM'],
      data: [75]
    },
    {
      name: ['Narela 15KM'],
      data: [90]
    }]
};

export const violationCountGraphData2 = {

  title: {
    text: 'Percentage of Defects'
  },

  yAxis: {
    title: {
      text: 'Defect Percentage'
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
    data: [50, 12, 48, 38, 10, 54, 66, 88, 90]
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
      name: ['Central Delhi 8KM'],
      data: [11]
    },
    {
      name: ['South Delhi 7KM'],
      data: [8]
    },
    {
      name: ['West Delhi 12KM'],
      data: [25]
    },
    {
      name: ['Najafgarh 17KM'],
      data: [25]
    }]
};

