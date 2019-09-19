$(document).ready(function () {
    var defaultPieTitle = "Pie to Bar Drilldown",
        defaultPieSubTitle = "SPRING Sectors",
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
        
        var defaultBarTitle = "Bar Drilldown Chart",
            defaultBarSubTitle = "Groups Yearly Comparison";
        
        // Drilldown Variables - Start
        if(category == 'Sector A') {
            var seriesInfo = [
                {
                    name: 'Sectors',
                    colorByPoint: false,
                    color: '#7CB5EC',
                    data: [
                        {name: '2013', y: 56.33, drilldown: 'SA2013'}, 
                        {name: '2014', y: 24.03, drilldown: 'SA2014'},
                        {name: '2015', y: 30.38, drilldown: 'SA2015'},
                        {name: '2016', y: 34.77, drilldown: 'SA2016'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector A 2013',
                        id: 'SA2013',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector A 2014',
                        id: 'SA2014',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector A 2015',
                        id: 'SA2015',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector A 2016',
                        id: 'SA2016',
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
                    name: 'Sectors',
                    colorByPoint: false,
                    color: '#434348',
                    data: [
                        {name: '2013', y: 26.33, drilldown: 'SB2013'}, 
                        {name: '2014', y: 84.03, drilldown: 'SB2014'},
                        {name: '2015', y: 50.38, drilldown: 'SB2015'},
                        {name: '2016', y: 14.77, drilldown: 'SB2016'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector B 2013',
                        id: 'SB2013',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector B 2014',
                        id: 'SB2014',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector B 2015',
                        id: 'SB2015',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector B 2016',
                        id: 'SB2016',
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
                    name: 'Sectors',
                    colorByPoint: false,
                    color: '#90ED7D',
                    data: [
                        {name: '2013', y: 16.33, drilldown: 'SC2013'}, 
                        {name: '2014', y: 74.03, drilldown: 'SC2014'},
                        {name: '2015', y: 20.38, drilldown: 'SC2015'},
                        {name: '2016', y: 84.77, drilldown: 'SC2016'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector C 2013',
                        id: 'SC2013',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector C 2014',
                        id: 'SC2014',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector C 2015',
                        id: 'SC2015',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector C 2016',
                        id: 'SC2016',
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
                    name: 'Sectors',
                    colorByPoint: false,
                    color: '#F7A35C',
                    data: [
                        {name: '2013', y: 56.33, drilldown: 'SD2013'}, 
                        {name: '2014', y: 14.03, drilldown: 'SD2014'},
                        {name: '2015', y: 50.38, drilldown: 'SD2015'},
                        {name: '2016', y: 24.77, drilldown: 'SD2016'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector D 2013',
                        id: 'SD2013',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector D 2014',
                        id: 'SD2014',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector D 2015',
                        id: 'SD2015',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector D 2016',
                        id: 'SD2016',
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
                    name: 'Sectors',
                    colorByPoint: false,
                    color: '#8085E9',
                    data: [
                        {name: '2013', y: 26.33, drilldown: 'SE2013'}, 
                        {name: '2014', y: 94.03, drilldown: 'SE2014'},
                        {name: '2015', y: 70.38, drilldown: 'SE2015'},
                        {name: '2016', y: 24.77, drilldown: 'SE2016'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector E 2013',
                        id: 'SE2013',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector E 2014',
                        id: 'SE2014',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector E 2015',
                        id: 'SE2015',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector E 2016',
                        id: 'SE2016',
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
                    name: 'Sectors',
                    colorByPoint: false,
                    color: '#F15C80',
                    data: [
                        {name: '2013', y: 16.33, drilldown: 'SF2013'}, 
                        {name: '2014', y: 64.03, drilldown: 'SF2014'},
                        {name: '2015', y: 80.38, drilldown: 'SF2015'},
                        {name: '2016', y: 34.77, drilldown: 'SF2016'}
                    ]
                }];
            
            var drilldownInfo = {
                series: [
                    {
                        name: 'Sector F 2013',
                        id: 'SF2013',
                        data: [
                            ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                        ]
                    },  {
                        name: 'Sector F 2014',
                        id: 'SF2014',
                        data: [
                            ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 5.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                        ]
                    },  {
                        name: 'Sector F 2015',
                        id: 'SF2015',
                        data: [
                            ['JAN', 54.13],['FEB', 77.2],['MAR', 2.11],['APR', 5.00],['MAY', 1.00],['JUN', 3.5],['JUL', 6.5],['AUG', 8.5],['SEP', 23.5],['OCT', 50.5],['NOV', 46.65],['DEC', 2.35] 
                        ]
                    },  {
                        name: 'Sector F 2016',
                        id: 'SF2016',
                        data: [
                            ['JAN', 22.13],['FEB', 15.2],['MAR', 3.11],['APR', 15.33],['MAY', 31.06],['JUN', 30.5],['JUL', 2.5],['AUG', 1.55],['SEP', 14.5],['OCT', 30.5],['NOV', 26.65],['DEC', 30.35] 
                        ]
                    }
                ]
            }
        }
        // Drilldown Variables - End
        
        
       // Create C
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
                    pointPadding: 0,
                    borderWidth: 0
                },
            },

            series: seriesInfo,
            
            drilldown: drilldownInfo,
       });
    };
});