let destName1 = document.getElementById('dest-name1');
let destName2 = document.getElementById('dest-name2');
let dataHolder1 = document.getElementById('data-holder1');
let dataHolder2 = document.getElementById('data-holder2');

let apiKey = '18a7570569054c7cae4f437c57c88ade';
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
            

            destName1.innerHTML = norsborg["0"].Destination;
            dataHolder1.innerHTML = norsborg["0"].DisplayTime;
           
            destName2.innerHTML = ropsten["0"].Destination;
            dataHolder2.innerHTML = ropsten["0"].DisplayTime;
        });
}
    
getData();
setInterval(getData, 15000);

// @TODO filter functionen verkar fungera bättre nu.
// frågan är om detta är bästa metoden för att få ut den?