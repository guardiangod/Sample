$(document).ready(function () {
    var defaultPieTitle = "Pie to Bar Drilldown",
        defaultPieSubTitle = "SPRING Sectors",
        defaultBarTitle = "Stacked Bar Column",
        defaultBarSubTitle = "Groups Yearly Comparison",
        pieData = [],
        drilldownBar = [];
    
    
    pieData = [{
        name: 'Sector A',
        y: 40.33
    }, {
        name: 'Sector B',
        y: 15.03
    }, {
        name: 'Sector C',
        y: 10.38
    }, {
        name: 'Sector D',
        y: 14.77
    }, {
        name: 'Sector E',
        y: 6.91
    }, {
        name: 'Sector F',
        y: 9.2
    }];
    
    var chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: 'container_pie',
            events: {
                drilldown: function(e) {
                    chart.setTitle(null, {text: 'Detailed Information for ' + e.point.series.name + ' for the Year of ' + e.seriesOptions.title});
                },
                drillup: function(e) {
                    chart.setTitle({text: defaultPieTitle}, {text: defaultPieSubTitle});
                }
            }
        },
        
        title: {
            text: defaultPieTitle
        },
        
        subtitle: {
            text: defaultPieSubTitle  
        },
        
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                point: {
                    events: {
                        click: function(event) {
                            draw_cat_chart(this.options.name);
                        }
                    }
                },
                
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
    
        series: [{
            name: "Team",
            colorByPoint: true,
            data: pieData
        }]
    });
    
    function draw_cat_chart (category) { //(category)
        
        // Drilldown Variables - Start
        if(category == 'Sector A') {
            var seriesInfo = [
                {
                    name: 'Option 1',
                    colorByPoint: false,
                    color: '#7CB5EC',
                    data: [
                        {name: '2013', y: 56.33, drilldown: 'OP1_13'}, 
                        {name: '2014', y: 24.03, drilldown: 'OP1_14'},
                        {name: '2015', y: 30.38, drilldown: 'OP1_15'},
                        {name: '2016', y: 34.77, drilldown: 'OP1_16'}
                    ]
                }, {
                    name: 'Option 2',
                    colorByPoint: false,
                    color: '#34587B',
                    data: [
                        {name: '2013', y: 46.33, drilldown: 'OP2_13'}, 
                        {name: '2014', y: 54.03, drilldown: 'OP2_14'},
                        {name: '2015', y: 10.38, drilldown: 'OP2_15'},
                        {name: '2016', y: 32.77, drilldown: 'OP2_16'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector A 2013',
                        id: 'OP1_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector A 2014',
                        id: 'OP1_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector A 2015',
                        id: 'OP1_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector A 2016',
                        id: 'OP1_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    },
                    {
                        name: 'Sector B 2013',
                        id: 'OP2_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector B 2014',
                        id: 'OP2_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector B 2015',
                        id: 'OP2_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector B 2016',
                        id: 'OP2_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
            
        if(category == 'Sector B') {
            var seriesInfo = [
                {
                    name: 'Option 1',
                    colorByPoint: false,
                    color: '#434348',
                    data: [
                        {name: '2013', y: 26.33, drilldown: 'OP1_13'}, 
                        {name: '2014', y: 84.03, drilldown: 'OP1_14'},
                        {name: '2015', y: 50.38, drilldown: 'OP1_15'},
                        {name: '2016', y: 14.77, drilldown: 'OP1_16'}
                    ]
                }, {
                    name: 'Option 2',
                    colorByPoint: false,
                    color: '#A0A0A0',
                    data: [
                        {name: '2013', y: 46.33, drilldown: 'OP2_13'}, 
                        {name: '2014', y: 54.03, drilldown: 'OP2_14'},
                        {name: '2015', y: 10.38, drilldown: 'OP2_15'},
                        {name: '2016', y: 32.77, drilldown: 'OP2_16'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector B 2013',
                        id: 'OP1_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector B 2014',
                        id: 'OP1_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector B 2015',
                        id: 'OP1_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector B 2016',
                        id: 'OP1_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    },{
                        name: 'Sector B 2013',
                        id: 'OP2_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector B 2014',
                        id: 'OP2_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector B 2015',
                        id: 'OP2_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector B 2016',
                        id: 'OP2_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
        
        if(category == 'Sector C') {
            var seriesInfo = [
                {
                    name: 'Option 1',
                    colorByPoint: false,
                    color: '#90ED7D',
                    data: [
                        {name: '2013', y: 16.33, drilldown: 'OP1_13'}, 
                        {name: '2014', y: 74.03, drilldown: 'OP1_14'},
                        {name: '2015', y: 20.38, drilldown: 'OP1_15'},
                        {name: '2016', y: 84.77, drilldown: 'OP1_16'}
                    ]
                }, {
                    name: 'Option 2',
                    colorByPoint: false,
                    color: '#5B944F',
                    data: [
                        {name: '2013', y: 26.33, drilldown: 'OP2_13'}, 
                        {name: '2014', y: 54.03, drilldown: 'OP2_14'},
                        {name: '2015', y: 40.38, drilldown: 'OP2_15'},
                        {name: '2016', y: 34.77, drilldown: 'OP2_16'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector C 2013',
                        id: 'OP1_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector C 2014',
                        id: 'OP1_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector C 2015',
                        id: 'OP1_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector C 2016',
                        id: 'OP1_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }, {
                        name: 'Sector C 2013',
                        id: 'OP2_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector C 2014',
                        id: 'OP2_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector C 2015',
                        id: 'OP2_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector C 2016',
                        id: 'OP2_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
        
        if(category == 'Sector D') {
            var seriesInfo = [
                {
                    name: 'Option 1',
                    colorByPoint: false,
                    color: '#F7A35C',
                    data: [
                        {name: '2013', y: 56.33, drilldown: 'OP1_13'}, 
                        {name: '2014', y: 14.03, drilldown: 'OP1_14'},
                        {name: '2015', y: 50.38, drilldown: 'OP1_15'},
                        {name: '2016', y: 24.77, drilldown: 'OP1_16'}
                    ]
                }, {
                    name: 'Option 2',
                    colorByPoint: false,
                    color: '#DE8840',
                    data: [
                        {name: '2013', y: 36.33, drilldown: 'OP2_13'}, 
                        {name: '2014', y: 54.03, drilldown: 'OP2_14'},
                        {name: '2015', y: 30.38, drilldown: 'OP2_15'},
                        {name: '2016', y: 64.77, drilldown: 'OP2_16'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector D 2013',
                        id: 'OP1_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector D 2014',
                        id: 'OP1_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector D 2015',
                        id: 'OP1_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector D 2016',
                        id: 'OP1_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }, {
                        name: 'Sector D 2013',
                        id: 'OP2_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector D 2014',
                        id: 'OP2_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector D 2015',
                        id: 'OP2_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector D 2016',
                        id: 'OP2_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
        
        if(category == 'Sector E') {
            var seriesInfo = [
                {
                    name: 'Option 1',
                    colorByPoint: false,
                    color: '#8085E9',
                    data: [
                        {name: '2013', y: 26.33, drilldown: 'OP1_13'}, 
                        {name: '2014', y: 94.03, drilldown: 'OP1_14'},
                        {name: '2015', y: 70.38, drilldown: 'OP1_15'},
                        {name: '2016', y: 24.77, drilldown: 'OP1_16'}
                    ]
                }, {
                    name: 'Option 2',
                    colorByPoint: false,
                    color: '#A9ACEF',
                    data: [
                        {name: '2013', y: 20.33, drilldown: 'OP2_13'}, 
                        {name: '2014', y: 64.03, drilldown: 'OP2_14'},
                        {name: '2015', y: 50.38, drilldown: 'OP2_15'},
                        {name: '2016', y: 18.77, drilldown: 'OP2_16'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector E 2013',
                        id: 'OP1_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector E 2014',
                        id: 'OP1_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector E 2015',
                        id: 'OP1_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector E 2016',
                        id: 'OP1_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }, {
                        name: 'Sector E 2013',
                        id: 'OP2_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector E 2014',
                        id: 'OP2_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector E 2015',
                        id: 'OP2_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector E 2016',
                        id: 'OP2_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
        
        if(category == 'Sector F') {
            var seriesInfo = [
                {
                    name: 'Option 1',
                    colorByPoint: false,
                    color: '#F15C80',
                    data: [
                        {name: '2013', y: 16.33, drilldown: 'OP1_13'}, 
                        {name: '2014', y: 64.03, drilldown: 'OP1_14'},
                        {name: '2015', y: 80.38, drilldown: 'OP1_15'},
                        {name: '2016', y: 34.77, drilldown: 'OP1_16'}
                    ]
                }, {
                    name: 'Option 2',
                    colorByPoint: false,
                    color: '#ECB2C2',
                    data: [
                        {name: '2013', y: 26.33, drilldown: 'OP2_13'}, 
                        {name: '2014', y: 60.03, drilldown: 'OP2_14'},
                        {name: '2015', y: 60.38, drilldown: 'OP2_15'},
                        {name: '2016', y: 35.77, drilldown: 'OP2_16'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector F 2013',
                        id: 'OP1_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector F 2014',
                        id: 'OP1_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector F 2015',
                        id: 'OP1_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector F 2016',
                        id: 'OP1_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    },  {
                        name: 'Sector F 2013',
                        id: 'OP2_13',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector F 2014',
                        id: 'OP2_14',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector F 2015',
                        id: 'OP2_15',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector F 2016',
                        id: 'OP2_16',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
        // Drilldown Variables - End
       
       $('#container_bar').highcharts({
           chart: {
               type: 'column',
               events: {
                   drilldown: function(e) {
                       chart.setTitle(null, {text: 'Detailed Information for ' + e.point.series.name + ' for the Year of ' + e.seriesOptions.title});
                   },
                   
                   drillup: function(e) {
                       chart.setTitle({text: defaultBarTitle}, {text: defaultBarSubTitle});
                   }
               }
           },
           
           title: {
               text: defaultBarTitle
           },
            
           subtitle: {
               text: defaultBarSubTitle
           },
           
           xAxis: {
                type: 'category',
            },
           
           yAxis: {
               min: 0,
               title: {
                   text: ''
               },
               stackLabels: {
                   enabled: true,
                   style: {
                       fontWeight: 'bold',
                       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                   }
               }
           },

           tooltip: {
               headerFormat: '<span style="font-size:8px">{point.key}</span><table>',
               pointFormat: '<tr style="border:none;"><td style="color:{series.color};padding:0;border:none;">{series.name}: </td>' +
                    '<td style="padding:0;border:none;"><b>{point.y:1f} </b></td></tr>',
               footerFormat: '</table>',
               shared: false,
               useHTML: true
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 1px black'
                        }
                    }
                }
            },

            series: seriesInfo,
            
            drilldown: drilldownInfo,
       });
   };
});