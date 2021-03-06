let destName1 = document.getElementById('dest-name1');
let destName2 = document.getElementById('dest-name2');
let dataHolder1 = document.getElementById('data-holder1');
let dataHolder2 = document.getElementById('data-holder2');

let apiKey = key.API_KEY;
let timeWindow = 30;
let siteId = 9293;
let url = 'https://cors.now.sh/' + 'http://api.sl.se/api2/realtimedeparturesV4.json?key=' + apiKey + '&siteid=' + siteId + '&timewindow=' + timeWindow;


function getData() {
   fetch(url)
        .then(response => response.json())  
        .then(data => {
            console.log(data);
            let testData = data.ResponseData.Metros;
            
            let norsborg = testData.filter(function (el) {
                return el.JourneyDirection == 2;
            });
            let ropsten = testData.filter(function (el) {
                return el.JourneyDirection == 1;
            });
            

            destName1.innerHTML = norsborg["0"].Destination + ' ' + norsborg["0"].DisplayTime;
            dataHolder1.innerHTML = 'Nästa: ' +  norsborg["1"].DisplayTime;
           
            destName2.innerHTML = ropsten["0"].Destination + ' ' + ropsten["0"].DisplayTime;
            dataHolder2.innerHTML = 'Nästa: ' + ropsten["1"].DisplayTime;
        });
}
    
getData();
setInterval(getData, 30000);

// @TODO filter functionen verkar fungera bättre nu.
// frågan är om detta är bästa metoden för att få ut den?