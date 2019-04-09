var apiTemples = 'json/templedata.json';
var request = new XMLHttpRequest();

request.open('GET', apiTemples, true);
request.responseType = 'json';
request.send();

request.onload = function () {
  var templeData = request.response;
// Columbia Temple
  document.getElementById("temple").innerHTML = templeData[0].temple;

  document.getElementById("addressa").innerHTML = templeData[0].addressLine1;
  document.getElementById("addresssb").innerHTML = templeData[0].addressLine2;
  document.getElementById("phoneCol").innerHTML = templeData[0].phone;
  document.getElementById("serviceACol").innerHTML = templeData[0].service1;
  document.getElementById("serviceBCol").innerHTML = templeData[0].service2;
  document.getElementById("serviceCCol").innerHTML = templeData[0].service3;
  document.getElementById("serviceDCol").innerHTML = templeData[0].service4;

  var closureUL = document.createElement("ul");
  var closureLI;

  for (var i = 0; i < templeData[0].closures.length; i++) {
    closureLI = document.createElement("li");
    closureLI.innerHTML = templeData[0].closures[i].start +
    ' to ' + templeData[0].closures[i].end;
    closureUL.appendChild(closureLI);

  }

  document.getElementById("closuresCol").appendChild(closureUL);

// Boston Temple
  document.getElementById("templeBos").innerHTML = templeData[1].temple;

  document.getElementById("addressBos").innerHTML = templeData[1].addressLine1;
  document.getElementById("addresssBos").innerHTML = templeData[1].addressLine2;
  document.getElementById("phoneBos").innerHTML = templeData[1].phone;
  document.getElementById("serviceABos").innerHTML = templeData[1].service1;
  document.getElementById("serviceBBos").innerHTML = templeData[1].service2;
  document.getElementById("serviceCBos").innerHTML = templeData[1].service3;
  document.getElementById("serviceDBos").innerHTML = templeData[1].service4;

  var closureUL = document.createElement("ul");
  var closureLI;

  for (var i = 0; i < templeData[1].closures.length; i++) {
    closureLI = document.createElement("li");
    closureLI.innerHTML = templeData[1].closures[i].start +
    ' to ' + templeData[1].closures[i].end;
    closureUL.appendChild(closureLI);

  }

  document.getElementById("closuresBos").appendChild(closureUL);

// Manhattan
  document.getElementById("templeMan").innerHTML = templeData[2].temple;
  document.getElementById("addressMan").innerHTML = templeData[2].addressLine1;
  document.getElementById("addresssbMan").innerHTML = templeData[2].addressLine2;
  document.getElementById("phoneMan").innerHTML = templeData[2].phone;
  document.getElementById("serviceAMan").innerHTML = templeData[2].service1;
  document.getElementById("serviceBMan").innerHTML = templeData[2].service2;
  document.getElementById("serviceCMan").innerHTML = templeData[2].service3;
  document.getElementById("serviceDMan").innerHTML = templeData[2].service4;

  var closureUL = document.createElement("ul");
  var closureLI;

  for (var i = 0; i < templeData[2].closures.length; i++) {
    closureLI = document.createElement("li");
    closureLI.innerHTML = templeData[2].closures[i].start +
    ' to ' + templeData[2].closures[i].end;
    closureUL.appendChild(closureLI);

  }

  document.getElementById("closuresMan").appendChild(closureUL);

  // Philadelphia Pennsylvania Temple
  document.getElementById("templePhi").innerHTML = templeData[3].temple;
  document.getElementById("addressaPhi").innerHTML = templeData[3].addressLine1;
  document.getElementById("addresssbPhi").innerHTML = templeData[3].addressLine2;
  document.getElementById("phonePhi").innerHTML = templeData[3].phone;
  document.getElementById("serviceAPhi").innerHTML = templeData[3].service1;
  document.getElementById("serviceBPhi").innerHTML = templeData[3].service2;
  document.getElementById("serviceCPhi").innerHTML = templeData[3].service3;
  document.getElementById("serviceDPhi").innerHTML = templeData[3].service4;

  var closureUL = document.createElement("ul");
  var closureLI;

  for (var i = 0; i < templeData[3].closures.length; i++) {
    closureLI = document.createElement("li");
    closureLI.innerHTML = templeData[3].closures[i].start +
    ' to ' + templeData[3].closures[i].end;
    closureUL.appendChild(closureLI);

  }

  document.getElementById("closuresPhi").appendChild(closureUL);

}