$(document).ready(function () {
    var defaultTitle = "Highcharts Cluster Drilldown";
    var defaultSubTitle = "Groups Yearly Comparison";

    var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'container',
            events: {
                drilldown: function(e) {
                    chart.setTitle(null, {text: 'Detailed Information for the Year of ' + e.point.name});
                },
                drillup: function(e) {
                    chart.setTitle({text: defaultTitle}, {text: defaultSubTitle});
                }
            }
        },
        
        title: {
            text: defaultTitle
        },
        
        subtitle: {
            text: defaultSubTitle  
        },
        
        xAxis: {
            type: 'category',
        },

        series: [{
            name: 'Group A',
            title: 'Group A',
            data: [{
                name: '2013',
                y: 130.5,
                drilldown: 'GA13'
            }, {
                name: '2014',
                y: 60.5,
                drilldown: 'GA14'
            }, {
                name: '2015',
                y: 83.6,
                drilldown: 'GA15'
            }, {
                name: '2016',
                y: 72.8,
                drilldown: 'GA16'
            }]
        }, {
            name: 'Group B',
            title: 'Group B',
            data: [{
                name: '2013',
                y: 120.5,
                drilldown: 'GB13'
            }, {
                name: '2014',
                y: 80.5,
                drilldown: 'GB14'
            }, {
                name: '2015',
                y: 100.6,
                drilldown: 'GB15'
            }, {
                name: '2016',
                y: 72.8,
                drilldown: 'GB16'
            }]
        }, {
            name: 'Group C',
            title: 'Group C',
            data: [{
                name: '2013',
                y: 100.5,
                drilldown: 'GC13'
            }, {
                name: '2014',
                y: 140.5,
                drilldown: 'GC14'
            }, {
                name: '2015',
                y: 110.6,
                drilldown: 'GC15'
            }, {
                name: '2016',
                y: 92.8,
                drilldown: 'GC16'
            }]
        }, {
            name: 'Group D',
            title: 'Group D',
            data: [{
                name: '2013',
                y: 60.5,
                drilldown: 'GD13'
            }, {
                name: '2014',
                y: 130.5,
                drilldown: 'GD14'
            }, {
                name: '2015',
                y: 63.6,
                drilldown: 'GD15'
            }, {
                name: '2016',
                y: 122.8,
                drilldown: 'GD16'
            }]
        }],
        drilldown: {
            series: [{
                id: 'GA13',
                name: 'Group A',
                title: '2013',
                data: [
                    ['JAN', 14.13],
                    ['FEB', 17.2],
                    ['MAR', 8.11],
                    ['APR', 5.33],
                    ['MAY', 1.06],
                    ['JUN', 3.5],
                    ['JUL', 8.5],
                    ['AUG', 3.5],
                    ['SEP', 34.5],
                    ['OCT', 0.5],
                    ['NOV', 6.65],
                    ['DEC', 10.35] 
                ]
            }, {
                id: 'GA14',
                title: '2014',
                name: 'Group A',
                data: [
                    ['JAN', 7.13],
                    ['FEB', 11.2],
                    ['MAR', 18.11],
                    ['APR', 8.33],
                    ['MAY', 1.06],
                    ['JUN', 5.5],
                    ['JUL', 9.35],
                    ['AUG', 23.5],
                    ['SEP', 14.5],
                    ['OCT', 10.5],
                    ['NOV', 9.65],
                    ['DEC', 33.35] 
                ]
            }, {
                id: 'GA15',
                title: '2015',
                name: 'Group A',
                data: [
                    ['JAN', 54.13],
                    ['FEB', 77.2],
                    ['MAR', 2.11],
                    ['APR', 5.00],
                    ['MAY', 1.00],
                    ['JUN', 3.5],
                    ['JUL', 6.5],
                    ['AUG', 8.5],
                    ['SEP', 23.5],
                    ['OCT', 50.5],
                    ['NOV', 46.65],
                    ['DEC', 2.35] 
                ]
            }, {
                id: 'GA16',
                title: '2016',
                name: 'Group A',
                data: [
                    ['JAN', 22.13],
                    ['FEB', 15.2],
                    ['MAR', 3.11],
                    ['APR', 15.33],
                    ['MAY', 31.06],
                    ['JUN', 30.5],
                    ['JUL', 2.5],
                    ['AUG', 1.55],
                    ['SEP', 14.5],
                    ['OCT', 30.5],
                    ['NOV', 26.65],
                    ['DEC', 30.35] 
                ]
            }, {
                id: 'GB13',
                title: '2013',
                name: 'Group B',
                data: [
                    ['JAN', 21.13],
                    ['FEB', 13.2],
                    ['MAR', 9.11],
                    ['APR', 7.33],
                    ['MAY', 14.06],
                    ['JUN', 2.5],
                    ['JUL', 1.5],
                    ['AUG', 23.5],
                    ['SEP', 14.5],
                    ['OCT', 20.5],
                    ['NOV', 5.65],
                    ['DEC', 11.35] 
                ]
            }, {
                id: 'GB14',
                title: '2014',
                name: 'Group B',
                data: [
                    ['JAN', 13.13],
                    ['FEB', 11.2],
                    ['MAR', 7.11],
                    ['APR', 2.33],
                    ['MAY', 19.06],
                    ['JUN', 20.5],
                    ['JUL', 30.5],
                    ['AUG', 4.5],
                    ['SEP', 31.5],
                    ['OCT', 2.5],
                    ['NOV', 5.65],
                    ['DEC', 11.35] 
                ]
            }, {
                id: 'GB15',
                title: '2015',
                name: 'Group B',
                data: [
                    ['JAN', 24.13],
                    ['FEB', 17.22],
                    ['MAR', 3.11],
                    ['APR', 5.00],
                    ['MAY', 13.06],
                    ['JUN', 5.5],
                    ['JUL', 18.5],
                    ['AUG', 31.5],
                    ['SEP', 24.5],
                    ['OCT', 1.5],
                    ['NOV', 6.65],
                    ['DEC', 5.35] 
                ]
            }, {
                id: 'GB16',
                title: '2016',
                name: 'Group B',
                data: [
                    ['JAN', 24.13],
                    ['FEB', 37.2],
                    ['MAR', 8.11],
                    ['APR', 5.33],
                    ['MAY', 1.06],
                    ['JUN', 7.5],
                    ['JUL', 2.5],
                    ['AUG', 13.5],
                    ['SEP', 32.5],
                    ['OCT', 10.5],
                    ['NOV', 8.65],
                    ['DEC', 16.35] 
                ]
            }, {
                id: 'GC13',
                title: '2013',
                name: 'Group C',
                data: [
                    ['JAN', 24.30],
                    ['FEB', 17.12],
                    ['MAR', 2.11],
                    ['APR', 5.53],
                    ['MAY', 11.06],
                    ['JUN', 4.5],
                    ['JUL', 6.5],
                    ['AUG', 3.25],
                    ['SEP', 24.5],
                    ['OCT', 1.5],
                    ['NOV', 6.75],
                    ['DEC', 9.35] 
                ]
            }, {
                id: 'GC14',
                title: '2014',
                name: 'Group C',
                data: [
                    ['JAN', 22.13],
                    ['FEB', 11.2],
                    ['MAR', 3.11],
                    ['APR', 6.33],
                    ['MAY', 8.06],
                    ['JUN', 19.5],
                    ['JUL', 20.5],
                    ['AUG', 32.5],
                    ['SEP', 14.5],
                    ['OCT', 20.5],
                    ['NOV', 6.78],
                    ['DEC', 1.35] 
                ]
            }, {
                id: 'GC15',
                name: 'Group C',
                data: [
                    ['JAN', 21.13],
                    ['FEB', 27.2],
                    ['MAR', 18.11],
                    ['APR', 15.33],
                    ['MAY', 4.06],
                    ['JUN', 10.5],
                    ['JUL', 6.5],
                    ['AUG', 2.5],
                    ['SEP', 3.5],
                    ['OCT', 8.5],
                    ['NOV', 2.65],
                    ['DEC', 17.35] 
                ]
            }, {
                id: 'GC16',
                title: '2016',
                name: 'Group C',
                data: [
                    ['JAN', 21.13],
                    ['FEB', 12.2],
                    ['MAR', 2.11],
                    ['APR', 9.33],
                    ['MAY', 10.06],
                    ['JUN', 2.5],
                    ['JUL', 3.5],
                    ['AUG', 1.5],
                    ['SEP', 35.5],
                    ['OCT', 20.5],
                    ['NOV', 16.65],
                    ['DEC', 17.35] 
                ]
            }, {
                id: 'GD13',
                title: '2013',
                name: 'Group D',
                data: [
                    ['JAN', 14.13],
                    ['FEB', 13.2],
                    ['MAR', 18.11],
                    ['APR', 5.33],
                    ['MAY', 0.06],
                    ['JUN', 1.5],
                    ['JUL', 6.5],
                    ['AUG', 5.5],
                    ['SEP', 3.5],
                    ['OCT', 20.5],
                    ['NOV', 23.65],
                    ['DEC', 12.35] 
                ]
            }, {
                id: 'GD14',
                title: '2014',
                name: 'Group D',
                data: [
                    ['JAN', 20.13],
                    ['FEB', 12.2],
                    ['MAR', 18.11],
                    ['APR', 4.33],
                    ['MAY', 2.06],
                    ['JUN', 2.5],
                    ['JUL', 6.5],
                    ['AUG', 7.5],
                    ['SEP', 31.5],
                    ['OCT', 10.5],
                    ['NOV', 16.65],
                    ['DEC', 0.35] 
                ]
            }, {
                id: 'GD15',
                title: '2015',
                name: 'Group D',
                data: [
                    ['JAN', 29.13],
                    ['FEB', 13.2],
                    ['MAR', 18.11],
                    ['APR', 25.33],
                    ['MAY', 5.06],
                    ['JUN', 10.5],
                    ['JUL', 0.90],
                    ['AUG', 4.5],
                    ['SEP', 4.5],
                    ['OCT', 8.5],
                    ['NOV', 2.65],
                    ['DEC', 11.35] 
                ]
            }, {
                id: 'GD16',
                title: '2016',
                name: 'Group D',
                data: [
                    ['JAN', 20.13],
                    ['FEB', 11.2],
                    ['MAR', 18.11],
                    ['APR', 10.33],
                    ['MAY', 13.06],
                    ['JUN', 10.5],
                    ['JUL', 0.8],
                    ['AUG', 2.5],
                    ['SEP', 12.5],
                    ['OCT', 10.5],
                    ['NOV', 7.65],
                    ['DEC', 11.35] 
                ]
            }]
        }
    });
});