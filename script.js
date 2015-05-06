$(function () {

    var data =[{"name":"Albania","code":"AL","z":1},
{"name":"Argentina","code":"AR","z":1},
{"name":"Australia","code":"AU","z":11},
{"name":"Austria","code":"AT","z":1},
{"name":"Belarus","code":"BY","z":3},
{"name":"Belgium","code":"BE","z":13},
{"name":"Brazil","code":"BR","z":1},
{"name":"Bulgaria","code":"BG","z":1},
{"name":"Canada","code":"CA","z":2},
{"name":"China","code":"CN","z":2},
{"name":"Colombia","code":"CO","z":7},
{"name":"Costa Rica","code":"CR","z":1},
{"name":"Czech Republic","code":"CZ","z":3},
{"name":"Denmark","code":"DK","z":2},
{"name":"Estonia","code":"EE","z":1},
{"name":"Ethiopia","code":"ET","z":1},
{"name":"Finland","code":"FI","z":1},
{"name":"France","code":"FR","z":15},
{"name":"Germany","code":"DE","z":8},
{"name":"Italy","code":"IT","z":60},
{"name":"Japan","code":"JP","z":2},
{"name":"Kazakhstan","code":"KZ","z":1},
{"name":"Latvia","code":"LV","z":1},
{"name":"Netherlands","code":"NL","z":12},
{"name":"New Zealand","code":"NZ","z":3},
{"name":"Panama","code":"PA","z":1},
{"name":"Poland","code":"PL","z":7},
{"name":"Portugal","code":"PT","z":3},
{"name":"Romania","code":"RO","z":1},
{"name":"Russian Federation","code":"RU","z":9},
{"name":"Slovenia","code":"SI","z":3},
{"name":"Spain","code":"ES","z":11},
{"name":"Sweden","code":"SE","z":1},
{"name":"Switzerland","code":"CH","z":3},
{"name":"United States","code":"US","z":5},
{"name":"Venezuela","code":"VE","z":1}];
    
  
        
        // Initiate the chart
        $('#container').highcharts('Map', {
            
            title : {
                text : 'Giro D'Italia 2015 Riders by Nationality',
                style: {fontSize: '20px', fontFamily: 'Arial, Helvetica, sans-serif', color: '#4B4B4B'}
            },
  legend: {
                enabled: false
            },
            
            credits: {
                text: 'velocharts',
                href: 'http://www.velocharts.com',
             
            },
            mapNavigation: {
                enabled: true,
               
            },

            colorAxis: {
          //      min: 1,
           //     max: 3,
          //      type: 'logarithmic'
           },

            series : [{
                name: 'Countries',
                mapData: Highcharts.maps.world,
                nullColor: '#eaeaea',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                 color: 'rgb(219,48,130)',
                mapData: Highcharts.maps.world,
                name: 'Number of Riders 2015',
                joinBy: [ 'code'],
                data: data,
                minSize: 4,
                maxSize: '10%',
                tooltip: {
                    pointFormat: '{point.name}: {point.z}'
                   
                }
            }]
        });
 
});
