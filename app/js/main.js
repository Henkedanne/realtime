let destName1 = document.getElementById('dest-name1');
let destName2 = document.getElementById('dest-name2');
let dataHolder1 = document.getElementById('data-holder1');
let dataHolder2 = document.getElementById('data-holder2');

let apiKey = '18a7570569054c7cae4f437c57c88ade';
let timeWindow = 10;
let siteId = 9293;
let url = 'https://cors.now.sh/' + 'http://api.sl.se/api2/realtimedeparturesV4.json?key=' + apiKey + '&siteid=' + siteId + '&timewindow=' + timeWindow;


function getData() {
   fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let testData = data.ResponseData.Metros;
            
            let stationNorsborg = testData.filter(function(station) {
                if (station.Destination = 'Norsborg') {
                    return station;
                }
            });
            console.log(stationNorsborg);

            destName1.innerHTML = stationNorsborg["0"].Destination;
            dataHolder1.innerHTML = stationNorsborg["0"].DisplayTime;

        });
}

// @TODO filter functionen verkar lite skum. den hoppar lite emellan olika arrays,
// hitta ett sätt att få rätt information
// på rätt plats. 