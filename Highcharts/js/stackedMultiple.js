$(document).ready(function () {
    var defaultPieTitle = "Pie to Bar Drilldown",
        defaultPieSubTitle = "SPRING Sectors",
        defaultBarTitle = "Stacked Bar Column",
        defaultBarSubTitle = "By Group/By Division/ All",
        pieData = [],
        drilldownBar = [];
    
    
    var seriesInfo = [
                 {
                     id: 'Group_1',
                     name: 'Group 1',
                     colorByPoint: false,
                     stack: 1,
                         data: [
                             {name: '2013', y: 46.33, drilldown: 'OP1_13', vatool: 'bbom'}, 
                             {name: '2014', y: 54.03, drilldown: 'OP1_14'}
                         ]
                 },
                {
                    id: 'Group_2',
                    name: 'Group 2',
                    colorByPoint: false,
                    title: 'group 2',
                    stack: 2,
                    data: [
                        { name: '2013', y: 16.33, drilldown: 'OP2_13' },
                        { name: '2014', y: 24.13, drilldown: 'OP2_14' }
                    ]
                },
                 {
                     linkedTo: 'Group_1',
                     colorByPoint: false,
                     color: '#808080',
                     stack: 1,
                     data: [
                        { name: '2013', y: 3.31, drilldown: 'OP1D_13' },
                        { name: '2014', y: 54.11, drilldown: 'OP1D_14' }
                     ]
                 }, {
                     linkedTo: 'Group_2',
                     colorByPoint: false,
                     color: '#808080',
                     stack: 2,
                     data: [
                        { name: '2013', y: 6.33, drilldown: 'OP2D_13' },
                        { name: '2014', y: 4.13, drilldown: 'OP2D_14' }
                        
                     ]
                 }

            ];
            
    var drilldownInfo = {
        series: [
            {
                id: 'OP1_13',
                name: 'Group 1',
                stack: 1,
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 33.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },  
                {
                id: 'OP2_13',
                name: 'Group 2',
                stack: 2,
                data: [
                    ['JAN', 7.13],['FEB', 11.2],['MAR', 18.11],['APR', 8.33],['MAY', 1.06],['JUN', 53.5],['JUL', 9.35],['AUG', 23.5],['SEP', 14.5],['OCT', 10.5],['NOV', 9.65],['DEC', 33.35]
                ]
            },
             {
                 id: 'OP1_14',
                 name: 'Group 1',
                 stack: 1,
                 data: [
                     ['JAN', 3.13], ['FEB', 6.2], ['MAR', 8.31], ['APR', 6.32], ['MAY', 5.06], ['JUN', 32.5], ['JUL', 8.5], ['AUG', 3.5], ['SEP', 34.5], ['OCT', 4.5], ['NOV', 6.65], ['DEC', 10.35]
                 ]
             },
             {
                 id: 'OP2_14',
                 name: 'Group 2',
                 stack: 2,
                 data: [
                     ['JAN', 13.13], ['FEB', 62.2], ['MAR', 8.31], ['APR', 6.32], ['MAY', 5.06], ['JUN', 32.5], ['JUL', 8.5], ['AUG', 3.5], ['SEP', 34.5], ['OCT', 4.5], ['NOV', 6.65], ['DEC', 10.35]
                 ]
             },
             {
                 linkedTo: 'OP1_13',
                 id:'OP1D_13',
                 colorByPoint: false,
                 color: '#808080',
                 stack: 1,
                 data: [
                     ['JAN', 11.13], ['FEB', 1.2], ['MAR', 8], ['APR', 1.33], ['MAY', 2.06], ['JUN', 3.5], ['JUL', 8.5], ['AUG', 3.5], ['SEP', 34.5], ['OCT', 43.5], ['NOV', 6.65], ['DEC', 10.35]
                 ]
             },
             {
                 linkedTo: 'OP2_13',
                 id: 'OP2D_13',
                 colorByPoint: false,
                 color: '#808080',
                 stack: 2,
                 data: [
                     ['JAN', 10.13], ['FEB', 13.2], ['MAR', 8.8], ['APR', 1.33], ['MAY', 2.06], ['JUN', 3.5], ['JUL', 8.5], ['AUG', 3.5], ['SEP', 34.5], ['OCT', 33.5], ['NOV', 6.65], ['DEC', 10.35]
                 ]
             },
             {
                 linkedTo: 'OP1_14',
                 id: 'OP1D_14',
                 colorByPoint: false,
                 color: '#808080',
                 stack: 1,
                 data: [
                     ['JAN', 11.13], ['FEB', 1.2], ['MAR', 8], ['APR', 1.33], ['MAY', 2.06], ['JUN', 3.5], ['JUL', 8.5], ['AUG', 3.5], ['SEP', 34.5], ['OCT',10.5], ['NOV', 6.65], ['DEC', 10.35]
                 ]
             },
             {
                 linkedTo: 'OP2_14',
                 id: 'OP2D_14',
                 colorByPoint: false,
                 color: '#808080',
                 stack: 2,
                 data: [
                     ['JAN', 10.13], ['FEB', 13.2], ['MAR', 8.8], ['APR', 1.33], ['MAY', 2.06], ['JUN', 3.5], ['JUL', 8.5], ['AUG', 3.5], ['SEP', 34.5], ['OCT', 32.5], ['NOV', 6.65], ['DEC', 10.35]
                 ]
             }
        ]
    };
    var chart = new Highcharts.Chart({
    //$('#container_bar').highcharts({
        chart: {
            type: 'column',
            renderTo: 'container_bar_wrap',
            events: {
                //drilldown: function(e) {
                //    chart.setTitle(null, {text: 'Detailed Information for ' + e.point.series.name + ' for the Year of ' + e.seriesOptions.title});
                //},
                   
                //drillup: function(e) {
                //    chart.setTitle({text: defaultBarTitle}, {text: defaultBarSubTitle});
                //}
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
            }
            ,stackLabels: {
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
                 '<td style="padding:0;border:none;"><b>{point.y} </b></td></tr>',
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
    
       
       
});

