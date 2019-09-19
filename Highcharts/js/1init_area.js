$(document).ready(function () {
    Highcharts.setOptions({
        lang: {
            drillUpText: 'Back to {seriesOptions.title} View'
        }
    });
    
    var defaultTitle = "Bar Multilevel Drilldown",
        defaultSubTitle = "CDG Breakdown - By Groups",
        barData = [],
        drilldownBar = [];
    
    
    barData = [
        {id:'Toplevel', title: 'Main', name: 'Group A',
         data: [{name: 'Dev A', y: 130.5, drilldown: 'DAGrpA'},
                {name: 'Dev B', y: 60.5, drilldown: 'DBGrpA'}, 
                {name: 'Dev C', y: 83.6, drilldown: 'DCGrpA'},
                {name: 'Dev D', y: 72.8, drilldown: 'DDGrpA'}]
        },
        {id:'Toplevel', title: 'Main', name: 'Group B',
         data: [{name: 'Dev A', y: 120.5, drilldown: 'DAGrpB'}, 
                {name: 'Dev B', y: 80.5, drilldown: 'DBGrpB'},
                {name: 'Dev C', y: 100.6, drilldown: 'DCGrpB'},
                {name: 'Dev D', y: 72.8, drilldown: 'DDGrpB'}]
        }, 
        {id:'Toplevel', title: 'Main', name: 'Group C',
         data: [{name: 'Dev A', y: 100.5, drilldown: 'DAGrpC'}, 
                {name: 'Dev B', y: 140.5, drilldown: 'DBGrpC'},
                {name: 'Dev C', y: 110.6, drilldown: 'DCGrpC'},
                {name: 'Dev D', y: 92.8, drilldown: 'DDGrpC'}]
        }, 
        {id:'Toplevel', title: 'Main', name: 'Group D',
         data: [{name: 'Dev A', y: 60.5, drilldown: 'DAGrpD'}, 
                {name: 'Dev B', y: 130.5, drilldown: 'DBGrpD'}, 
                {name: 'Dev C', y: 63.6, drilldown: 'DCGrpD'},
                {name: 'Dev D', y: 122.8, drilldown: 'DDGrpD'}]
        }
    ];
    
    var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'container_pie',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 35,
                viewDistance: 50
            },
            events: {
                drilldown: function(e) {
                    if(e.seriesOptions.title == 'Months') {
                        chart.setTitle({text: 'CDG Breakdown'}, {text: 'Monthly Information for the Year ' + e.point.name});
                    } else {
                        chart.setTitle({text: 'CDG Breakdown'}, {text: 'Detailed Yearly Information for ' + e.point.name});
                    }
                },
                
                drillup: function(e) {
                    if(e.seriesOptions.id == 'Toplevel') {
                        chart.setTitle({text: defaultTitle}, {text: defaultSubTitle});
                    } else {
                        chart.setTitle({text: 'CDG Breakdown'}, {text: 'Detailed Yearly Information for ' + e.seriesOptions.title});
                    }
                }
            }
        },
        
        xAxis: {
            type: 'category',
        },
        
        title: {
            text: defaultTitle
        },
        
        subtitle: {
            text: defaultSubTitle  
        },
        
        plotOptions: {
            column: {
                depth: 25
            }
        },
        
        series: barData,
        
        drilldown: {
            series: [
            // 2nd Tier Drilldown (Showing Years- Dev A) Start
            {
                id: 'DAGrpA',
                name: 'Group A',
                title: 'Dev A',
                data: [
                    {name: '2013', y: 14.3, drilldown: 'DAGA13Mon'},
                    {name: '2014', y: 17.2, drilldown: 'DAGA14Mon'},
                    {name: '2015', y: 8.1, drilldown: 'DAGA15Mon'},
                    {name: '2016', y: 20.2, drilldown: 'DAGA16Mon'}
                ]
            }, {
                id: 'DAGrpB',
                name: 'Group B',
                title: 'Dev A',
                data: [
                    {name: '2013', y: 13.3, drilldown: 'DAGB13Mon'},
                    {name: '2014', y: 16.2, drilldown: 'DAGB14Mon'},
                    {name: '2015', y: 7.1, drilldown: 'DAGB15Mon'},
                    {name: '2016', y: 19.2, drilldown: 'DAGB16Mon'}
                ]
            }, {
                id: 'DAGrpC',
                name: 'Group C',
                title: 'Dev A',
                data: [
                    {name: '2013', y: 15.3, drilldown: 'DAGC13Mon'},
                    {name: '2014', y: 18.2, drilldown: 'DAGC14Mon'},
                    {name: '2015', y: 9.1, drilldown: 'DAGC15Mon'},
                    {name: '2016', y: 21.2, drilldown: 'DAGC16Mon'}
                ]
            }, {
                id: 'DAGrpD',
                name: 'Group D',
                title: 'Dev A',
                data: [
                    {name: '2013', y: 16.3, drilldown: 'DAGD13Mon'},
                    {name: '2014', y: 19.2, drilldown: 'DAGD14Mon'},
                    {name: '2015', y: 10.1, drilldown: 'DAGD15Mon'},
                    {name: '2016', y: 22.2, drilldown: 'DAGD16Mon'}
                ]
            }, 
            // 2nd Tier Drilldown (Showing Years - Dev A) End
            
            // 2nd Tier Drilldown (Showing Years - Dev B) Start
            {
                id: 'DBGrpA',
                name: 'Group A',
                title: 'Dev B',
                data: [
                    {name: '2013', y: 14.3, drilldown: 'DBGA13Mon'},
                    {name: '2014', y: 17.2, drilldown: 'DBGA14Mon'},
                    {name: '2015', y: 8.1, drilldown: 'DBGA15Mon'},
                    {name: '2016', y: 20.2, drilldown: 'DBGA16Mon'}
                ]
            }, {
                id: 'DBGrpB',
                name: 'Group B',
                title: 'Dev B',
                data: [
                    {name: '2013', y: 13.3, drilldown: 'DBGB13Mon'},
                    {name: '2014', y: 16.2, drilldown: 'DBGB14Mon'},
                    {name: '2015', y: 7.1, drilldown: 'DBGB15Mon'},
                    {name: '2016', y: 19.2, drilldown: 'DBGB16Mon'}
                ]
            }, {
                id: 'DBGrpC',
                name: 'Group C',
                title: 'Dev B',
                data: [
                    {name: '2013', y: 15.3, drilldown: 'DBGC13Mon'},
                    {name: '2014', y: 18.2, drilldown: 'DBGC14Mon'},
                    {name: '2015', y: 9.1, drilldown: 'DBGC15Mon'},
                    {name: '2016', y: 21.2, drilldown: 'DBGC16Mon'}
                ]
            }, {
                id: 'DBGrpD',
                name: 'Group D',
                title: 'Dev B', 
                data: [
                    {name: '2013', y: 16.3, drilldown: 'DBGD13Mon'},
                    {name: '2014', y: 19.2, drilldown: 'DBGD14Mon'},
                    {name: '2015', y: 10.1, drilldown: 'DBGD15Mon'},
                    {name: '2016', y: 22.2, drilldown: 'DBGD16Mon'}
                ]
            }, 
            // 2nd Tier Drilldown (Showing Years - Dev B) End
                
            // 2nd Tier Drilldown (Showing Years - Dev C) Start
            {
                id: 'DCGrpA',
                name: 'Group A',
                title: 'Dev C',
                data: [
                    {name: '2013', y: 14.3, drilldown: 'DCGA13Mon'},
                    {name: '2014', y: 17.2, drilldown: 'DCGA14Mon'},
                    {name: '2015', y: 8.1, drilldown: 'DCGA15Mon'},
                    {name: '2016', y: 20.2, drilldown: 'DCGA16Mon'}
                ]
            }, {
                id: 'DCGrpB',
                name: 'Group B',
                title: 'Dev C',
                data: [
                    {name: '2013', y: 13.3, drilldown: 'DCGB13Mon'},
                    {name: '2014', y: 16.2, drilldown: 'DCGB14Mon'},
                    {name: '2015', y: 7.1, drilldown: 'DCGB15Mon'},
                    {name: '2016', y: 19.2, drilldown: 'DCGB16Mon'}
                ]
            }, {
                id: 'DCGrpC',
                name: 'Group C',
                title: 'Dev C',
                data: [
                    {name: '2013', y: 15.3, drilldown: 'DCGC13Mon'},
                    {name: '2014', y: 18.2, drilldown: 'DCGC14Mon'},
                    {name: '2015', y: 9.1, drilldown: 'DCGC15Mon'},
                    {name: '2016', y: 21.2, drilldown: 'DCGC16Mon'}
                ]
            }, {
                id: 'DCGrpD',
                name: 'Group D',
                title: 'Dev C', 
                data: [
                    {name: '2013', y: 16.3, drilldown: 'DCGD13Mon'},
                    {name: '2014', y: 19.2, drilldown: 'DCGD14Mon'},
                    {name: '2015', y: 10.1, drilldown: 'DCGD15Mon'},
                    {name: '2016', y: 22.2, drilldown: 'DCGD16Mon'}
                ]
            }, 
            // 2nd Tier Drilldown (Showing Years - Dev C) End
                
            // 2nd Tier Drilldown (Showing Years - Dev D) Start
            {
                id: 'DDGrpA',
                name: 'Group A',
                title: 'Dev D',
                data: [
                    {name: '2013', y: 14.3, drilldown: 'DDGA13Mon'},
                    {name: '2014', y: 17.2, drilldown: 'DDGA14Mon'},
                    {name: '2015', y: 8.1, drilldown: 'DDGA15Mon'},
                    {name: '2016', y: 20.2, drilldown: 'DDGA16Mon'}
                ]
            }, {
                id: 'DDGrpB',
                name: 'Group B',
                title: 'Dev D',
                data: [
                    {name: '2013', y: 13.3, drilldown: 'DDGB13Mon'},
                    {name: '2014', y: 16.2, drilldown: 'DDGB14Mon'},
                    {name: '2015', y: 7.1, drilldown: 'DDGB15Mon'},
                    {name: '2016', y: 19.2, drilldown: 'DDGB16Mon'}
                ]
            }, {
                id: 'DDGrpC',
                name: 'Group C',
                title: 'Dev D',
                data: [
                    {name: '2013', y: 15.3, drilldown: 'DDGC13Mon'},
                    {name: '2014', y: 18.2, drilldown: 'DDGC14Mon'},
                    {name: '2015', y: 9.1, drilldown: 'DDGC15Mon'},
                    {name: '2016', y: 21.2, drilldown: 'DDGC16Mon'}
                ]
            }, {
                id: 'DDGrpD',
                name: 'Group D',
                title: 'Dev D',  
                data: [
                    {name: '2013', y: 16.3, drilldown: 'DDGD13Mon'},
                    {name: '2014', y: 19.2, drilldown: 'DDGD14Mon'},
                    {name: '2015', y: 10.1, drilldown: 'DDGD15Mon'},
                    {name: '2016', y: 22.2, drilldown: 'DDGD16Mon'}
                ]
            }, 
            // 2nd Tier Drilldown (Showing Years - Dev D) End    
            
            // 3rd Tier Drilldown (Showing Dev A Months of 2013) Start        
            {
                id: 'DAGA13Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGB13Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGC13Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGD13Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev A Months of 2013) End 
                
            // 3rd Tier Drilldown (Showing Dev A Months of 2014) Start        
            {
                id: 'DAGA14Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGB14Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGC14Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGD14Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev A Months of 2014) End 
            
            // 3rd Tier Drilldown (Showing Dev A Months of 2015) Start        
            {
                id: 'DAGA15Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGB15Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGC15Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGD15Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev A Months of 2015) End 
            
            // 3rd Tier Drilldown (Showing Dev A Months of 2016) Start        
            {
                id: 'DAGA16Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGB16Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGC16Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DAGD16Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev A Months of 2016) End 
                
            // 3rd Tier Drilldown (Showing Dev B Months of 2013) Start        
            {
                id: 'DBGA13Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGB13Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGC13Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGD13Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev B Months of 2013) End 
                
            // 3rd Tier Drilldown (Showing Dev B Months of 2014) Start        
            {
                id: 'DBGA14Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGB14Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGC14Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGD14Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev B Months of 2014) End 
            
            // 3rd Tier Drilldown (Showing Dev B Months of 2015) Start        
            {
                id: 'DBGA15Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGB15Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGC15Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGD15Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev B Months of 2015) End 
            
            // 3rd Tier Drilldown (Showing Dev B Months of 2016) Start        
            {
                id: 'DBGA16Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGB16Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGC16Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DBGD16Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev B Months of 2016) End 
                
            // 3rd Tier Drilldown (Showing Dev C Months of 2013) Start        
            {
                id: 'DCGA13Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGB13Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGC13Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGD13Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev C Months of 2013) End 
                
            // 3rd Tier Drilldown (Showing Dev C Months of 2014) Start        
            {
                id: 'DCGA14Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGB14Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGC14Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGD14Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev C Months of 2014) End 
            
            // 3rd Tier Drilldown (Showing Dev C Months of 2015) Start        
            {
                id: 'DCGA15Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGB15Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGC15Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGD15Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev C Months of 2015) End 
            
            // 3rd Tier Drilldown (Showing Dev C Months of 2016) Start        
            {
                id: 'DCGA16Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGB16Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGC16Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DCGD16Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev C Months of 2016) End 
                
            // 3rd Tier Drilldown (Showing Dev D Months of 2013) Start        
            {
                id: 'DDGA13Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGB13Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGC13Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGD13Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev D Months of 2013) End 
                
            // 3rd Tier Drilldown (Showing Dev D Months of 2014) Start        
            {
                id: 'DDGA14Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGB14Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGC14Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGD14Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev D Months of 2014) End 
            
            // 3rd Tier Drilldown (Showing Dev D Months of 2015) Start        
            {
                id: 'DDGA15Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGB15Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGC15Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGD15Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev D Months of 2015) End 
            
            // 3rd Tier Drilldown (Showing Dev D Months of 2016) Start        
            {
                id: 'DDGA16Mon',
                name: 'Group A',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGB16Mon',
                name: 'Group B',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGC16Mon',
                name: 'Group C',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            }, {
                id: 'DDGD16Mon',
                name: 'Group D',
                title: 'Months',
                data: [
                    ['JAN', 14.13],['FEB', 17.2],['MAR', 8.11],['APR', 5.33],['MAY', 1.06],['JUN', 3.5],['JUL', 8.5],['AUG', 3.5],['SEP', 34.5],['OCT', 0.5],['NOV', 6.65],['DEC', 10.35] 
                ]
            },
            // 3rd Tier Drilldown (Showing Dev D Months of 2016) End
            ]
        }
    });
});