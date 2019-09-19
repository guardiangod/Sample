$(document).ready(function () {
    Highcharts.setOptions({
        lang: {drillUpText: 'Back to {seriesOptions.title}'}
    });
    
    var defaultPieTitle = "Pie to Bar Drilldown",
        defaultPieSubTitle = "SPRING Sectors",
        pieData = [],
        drilldownBar = [];
    
    
    pieData = [
        {name: 'Sector A', y: 40.33, drilldown: 'secA'},
        {name: 'Sector B', y: 15.03, drilldown: 'secB'},
        {name: 'Sector C', y: 10.38, drilldown: 'secC'},
        {name: 'Sector D', y: 14.77, drilldown: 'secD'},
        {name: 'Sector E', y: 6.91, drilldown: 'secE'},
        {name: 'Sector F', y: 9.2, drilldown: 'secF'}
    ];
    
    var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'container_pie',
            events: {
                drilldown: function(e) {
                    if(e.seriesOptions.title == 'Year') {
                        chart.setTitle({text: 'Bar Chart Breakdown'}, {text: 'Yearly Information for ' + e.point.name});
                    } else {
                        chart.setTitle({text: 'Bar Chart Breakdown'}, {text: 'Detailed Monthly Information for ' + e.point.name});
                    }
                },
                
                drillup: function(e) {
                    if(e.seriesOptions.id == 'Toplevel') {
                        chart.setTitle({text: defaultPieTitle}, {text: defaultPieSubTitle});
                    } else {
                        chart.setTitle({text: 'Bar Chart Breakdown'}, {text: 'Yearly Information for ' + e.seriesOptions.name});   
                    }
                }
            }
        },
        
        title: {
            text: defaultPieTitle
        },
        
        subtitle: {
            text: defaultPieSubTitle  
        },
        
        xAxis: {
            type: 'category',
            showEmpty: false
        },
        
        yAxis: {
            showEmpty: false
        },
    
        series: [{
            id: 'Toplevel',
            name: 'Sectors',
            title: 'Sectors',
            colorByPoint: true,
            data: pieData,
            type: 'pie'
        }],
        
        drilldown: {
            series: [
                // 2nd Tier Drilldown (Sectors) Start
                {
                    id: 'secA',
                    name: 'Sector A',
                    title: 'Year',
                    data: [
                        {name: '2013', y: 15.3, drilldown: 'SecA13'},
                        {name: '2014', y: 17.2, drilldown: 'SecA14'},
                        {name: '2015', y: 18.1, drilldown: 'SecA15'},
                        {name: '2016', y: 20.2, drilldown: 'SecA16'}
                    ]
                }, {
                    id: 'secB',
                    name: 'Sector B',
                    title: 'Year',
                    data: [
                        {name: '2013', y: 11.3, drilldown: 'SecB13'},
                        {name: '2014', y: 12.2, drilldown: 'SecB14'},
                        {name: '2015', y: 17.1, drilldown: 'SecB15'},
                        {name: '2016', y: 18.2, drilldown: 'SecB16'}
                    ]
                }, {
                    id: 'secC',
                    name: 'Sector C',
                    title: 'Year',
                    data: [
                        {name: '2013', y: 12.3, drilldown: 'SecC13'},
                        {name: '2014', y: 16.2, drilldown: 'SecC14'},
                        {name: '2015', y: 13.1, drilldown: 'SecC15'},
                        {name: '2016', y: 11.2, drilldown: 'SecC16'}
                    ]
                }, {
                    id: 'secD',
                    name: 'Sector D',
                    title: 'Year',  
                    data: [
                        {name: '2013', y: 16.3, drilldown: 'SecD13'},
                        {name: '2014', y: 19.2, drilldown: 'SecD14'},
                        {name: '2015', y: 10.1, drilldown: 'SecD15'},
                        {name: '2016', y: 22.2, drilldown: 'SecD16'}
                    ]
                }, {
                    id: 'secE',
                    name: 'Sector E',
                    title: 'Year',  
                    data: [
                        {name: '2013', y: 12.3, drilldown: 'SecE13'},
                        {name: '2014', y: 12.2, drilldown: 'SecE14'},
                        {name: '2015', y: 12.1, drilldown: 'SecE15'},
                        {name: '2016', y: 12.2, drilldown: 'SecE16'}
                    ]
                }, {
                    id: 'secF',
                    name: 'Sector F',
                    title: 'Year',  
                    data: [
                        {name: '2013', y: 18.3, drilldown: 'SecF13'},
                        {name: '2014', y: 20.2, drilldown: 'SecF14'},
                        {name: '2015', y: 20.1, drilldown: 'SecF15'},
                        {name: '2016', y: 12.2, drilldown: 'SecF16'}
                    ]
                },
                // 2nd Tier Drilldown (Sectors) End
                
                // 3rd Tier Drilldown (Sectors in Months of 2013) Start        
                {
                    id: 'SecA13',
                    name: 'Sector A',
                    title: 'Sector A',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecB13',
                    name: 'Sector B',
                    title: 'DSector B',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecC13',
                    name: 'Sector C',
                    title: 'Sector C',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecD13',
                    name: 'Sector D',
                    title: 'Sector D',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecE13',
                    name: 'Sector E',
                    title: 'Sector E',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecF13',
                    name: 'Sector F',
                    title: 'Sector F',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                },
                // 3rd Tier Drilldown (Sectors in Months of 2013) End 
                
                // 3rd Tier Drilldown (Sectors in Months of 2014) Start        
                {
                    id: 'SecA14',
                    name: 'Sector A',
                    title: 'Sector A',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecB14',
                    name: 'Sector B',
                    title: 'Sector B',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecC14',
                    name: 'Sector C',
                    title: 'Sector C',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecD14',
                    name: 'Sector D',
                    title: 'Sector D',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecE14',
                    name: 'Sector E',
                    title: 'Sector E',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecF14',
                    name: 'Sector F',
                    title: 'Sector F',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                },
                // 3rd Tier Drilldown (Sectors in Months of 2014) End
                
                // 3rd Tier Drilldown (Sectors in Months of 2015) Start        
                {
                    id: 'SecA15',
                    name: 'Sector A',
                    title: 'Sector A',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecB15',
                    name: 'Sector B',
                    title: 'Sector B',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecC15',
                    name: 'Sector C',
                    title: 'Sector D',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecD15',
                    name: 'Sector D',
                    title: 'Sector D',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecE15',
                    name: 'Sector E',
                    title: 'Sector E',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecF15',
                    name: 'Sector F',
                    title: 'Sector F',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                },
                // 3rd Tier Drilldown (Sectors in Months of 2015) End
                                     
                // 3rd Tier Drilldown (Sectors in Months of 2016) Start        
                {
                    id: 'SecA16',
                    name: 'Sector A',
                    title: 'Sector A',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecB16',
                    name: 'Sector B',
                    title: 'Sector B',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecC16',
                    name: 'Sector C',
                    title: 'Sector C',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecD16',
                    name: 'Sector D',
                    title: 'Sector D',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecE16',
                    name: 'Sector E',
                    title: 'Sector E',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }, {
                    id: 'SecF16',
                    name: 'Sector F',
                    title: 'Sector F',
                    data: [
                        ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                    ]
                }
                // 3rd Tier Drilldown (Sectors in Months of 2016) End
            ]
        }
    });
});