//JS6: Railway stations
fetchData();

function fetchData() {
fetch("https://rata.digitraffic.fi/api/v1/metadata/stations")
    .then(x => x.json())
    .then(y => showTable(y));
}

function showTable(stations) {
    let checkBox = document.getElementById("checkbox");
    let fetchStationResults = "";
    if (checkBox.checked) {
        for (i = 0; i < stations.length; i++) {
            let station = stations[i];
            //console.log(station);
            if (station.passengerTraffic == true) {
                fetchStationResults += "<tr><td>" + station.stationShortCode + "</td><td>" + station.stationName + "</td><td>" + station.longitude + "</td><td>" + station.latitude + "</td></tr>";
            }
        }
        document.getElementById("railwaytable").innerHTML = "<tr><th>" + "stationShortCode" + "</th><th>" + "stationName" + "</th><th>" + "longitude" + "</th><th>" + "latitude" + "</th></tr>" + fetchStationResults;
    } else {
        for (i = 0; i < stations.length; i++) {
            let station = stations[i];
            //console.log(station);
            fetchStationResults += "<tr><td>" + station.stationShortCode + "</td><td>" + station.stationName + "</td><td>" + station.longitude + "</td><td>" + station.latitude + "</td></tr>";
        }
        document.getElementById("railwaytable").innerHTML = "<tr><th>" + "stationShortCode" + "</th><th>" + "stationName" + "</th><th>" + "longitude" + "</th><th>" + "latitude" + "</th></tr>" + fetchStationResults;
    }
}
