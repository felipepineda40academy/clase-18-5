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

var casa;

readTextFile("data.json", function(text){
    casa = JSON.parse(text);

    var modified_div = document.getElementById("json_information")
    for (var llave in casa) {

        let inner_h1 = document.createElement("h1")
        inner_h1.innerText=`Esta ${llave} abre la siguiente parte de la casa: ${casa[llave]}`

        modified_div.appendChild(inner_h1);
    }
    
   
});

