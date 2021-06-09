export class StatsData {
  id: string;
  timestamp: string;
  peopleInFrame: string;
  noOfViolations: string;
  locality: string;
  latitude: string;
  longitude: string;
  localityType: string;
  zoneCategory: string;
  containmentZoneDistance: string;
  lastDayViolationCount: string;
  avgHourlyViolations: string;
  activeCovidCasesInArea: string;
}

export const areaData: StatsData[] = [
  {
    id: '1',
    timestamp: 'May 10 2020 11:00:59',
    peopleInFrame: '23',
    noOfViolations: '50',
    locality: 'East Delhi',
    latitude: '28.472',
    longitude: '77.488',
    localityType: 'Residential',
    zoneCategory: 'Orange Zone',
    containmentZoneDistance: '2',
    lastDayViolationCount: '30',
    avgHourlyViolations: '2',
    activeCovidCasesInArea: '10'
  },
  {
    id: '2',
    timestamp: 'May 31 2020 10:27:53',
    peopleInFrame: '28',
    noOfViolations: '90',
    locality: 'Central Delhi',
    latitude: '28.491',
    longitude: '77.508',
    localityType: 'Old-Age Home',
    zoneCategory: 'Red Zone',
    containmentZoneDistance: '19',
    lastDayViolationCount: '88',
    avgHourlyViolations: '4',
    activeCovidCasesInArea: '20'
  }
];


export const mockData: StatsData[] = [
  {
    id: '2',
    timestamp: 'May 26 2020 03:06:51',
    peopleInFrame: '39',
    noOfViolations: '20',
    locality: 'West Delhi',
    latitude: '28.501',
    longitude: '77.51',
    localityType: 'Residential',
    zoneCategory: 'red',
    containmentZoneDistance: '7',
    lastDayViolationCount: '25',
    avgHourlyViolations: '11',
    activeCovidCasesInArea: '3'
  },
  {
    id: '3',
    timestamp: 'May 22 2020 06:00:42',
    peopleInFrame: '11',
    noOfViolations: '15',
    locality: 'Edana-Alpha1',
    latitude: '28.472',
    longitude: '77.488',
    localityType: 'Residential',
    zoneCategory: 'red',
    containmentZoneDistance: '2',
    lastDayViolationCount: '55',
    avgHourlyViolations: '12',
    activeCovidCasesInArea: '1',
  },
  {
    id: '4',
    timestamp: 'May 03 2020 02:15:07',
    peopleInFrame: '49',
    noOfViolations: '13',
    locality: 'Alpha commercial belt- Alpha1',
    latitude: '28.455',
    longitude: '77.499',
    localityType: 'Commercial',
    zoneCategory: 'orange',
    containmentZoneDistance: '1',
    lastDayViolationCount: '30',
    avgHourlyViolations: '13',
    activeCovidCasesInArea: '2'
  },
  {
    id: '5',
    timestamp: 'May 14 2020 05:11:00',
    peopleInFrame: '8',
    noOfViolations: '6',
    locality: 'Sommerville school-Alpha2',
    latitude: '28.496',
    longitude: '77.507',
    localityType: 'School',
    zoneCategory: 'orange',
    containmentZoneDistance: '17',
    lastDayViolationCount: '80',
    avgHourlyViolations: '14',
    activeCovidCasesInArea: '3'
  }

];

export const violationCountGraphData1 = {

  title: {
    text: 'Violations Per Day'
  },

  yAxis: {
    title: {
      text: 'Number of  Violations'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },

  xAxis: {
    title: {
      text: 'Date'
    },
    categories: ['May 28', 'May 29', 'May 30', 'May 31', 'June 1', 'June 2', 'June 3', 'June 4', 'June 5']
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'Edana-Alpha1',
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
    text: 'Violations by Locality'
  },
  xAxis: {
    title: {
      text: 'Locality Distance'
    }
  },
  yAxis: {
    title: {
      text: 'Number of  Violations'
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
      name: ['Edana-Alpha2 5KM'],
      data: [44]
    },
    {
      name: ['Edana-Alpha3 8KM'],
      data: [18]
    },
    {
      name: ['Edana-Alpha4 6KM'],
      data: [22]
    },
    {
      name: ['Edana-Alpha5 9KM'],
      data: [75]
    },
    {
      name: ['Elder Homes-Alpha2 15KM'],
      data: [90]
    }]
};

export const violationCountGraphData2 = {

  title: {
    text: 'Violations Per Day'
  },

  yAxis: {
    title: {
      text: 'Number of  Violations'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
    }
  },

  xAxis: {
    title: {
      text: 'Date'
    },
    categories: ['May 28', 'May 29', 'May 30', 'May 31', 'June 1', 'June 2', 'June 3', 'June 4', 'June 5']
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [{
    name: 'Elder Homes-Alpha2',
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
    text: 'Violations by Locality'
  },
  xAxis: {
    title: {
      text: 'Locality Distance'
    }
  },
  yAxis: {
    title: {
      text: 'Number of  Violations'
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
      name: ['Elder Homes-Alpha1 8KM'],
      data: [11]
    },
    {
      name: ['Elder Homes-Alpha3 7KM'],
      data: [8]
    },
    {
      name: ['Elder Homes-Alpha4 12KM'],
      data: [25]
    },
    {
      name: ['Elder Homes-Alpha5 17KM'],
      data: [25]
    },
    {
      name: ['Edana-Alpha1 15KM'],
      data: [50]
    }]
};

