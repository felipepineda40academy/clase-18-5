function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("sample.json", function(text){
    var casas_disponibles = JSON.parse(text);

    var div = document.getElementById("casas")

    for (casa in casas_disponibles) {
        var h2_element = document.createElement("h2")
        h2_element.innerHTML=`La ${casa} que se encuentra en ${casas_disponibles[casa]} se encuentra disponible`
        div.appendChild(h2_element);
    }
    

})