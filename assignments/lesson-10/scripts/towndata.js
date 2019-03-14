var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
  var townData = request.response;
  showTowns(townData);
}
function showTowns(jsonObj) {
  var towns = jsonObj['towns'];

  for (var i = 0; i < towns.length; i++) {
    if (i === 0 || i === 2 || i === 3 || i === 6) {
      continue;
    }

    var article = document.createElement('article');
    var home = document.createElement('h1');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');

    home.textContent = towns[i].name;
    myPara1.textContent = towns[i].motto;
    myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
    myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
    myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

    var img = document.createElement('img');

    if (towns[i].name === 'Fish Haven'){
      img.setAttribute("src", "images/Fish_Haven_Id.jpg");
    }
    else if (towns[i].name === 'Soda Springs'){
      img.setAttribute("src", "images/soda-springs.jpg");
    }
    else if (towns[i].name === 'Preston'){
      img.setAttribute("src", "images/Preston.jpg");
    }

    article.appendChild(home);
    article.appendChild(myPara1);
    article.appendChild(myPara2);
    article.appendChild(myPara3);
    article.appendChild(myPara4);
    article.appendChild(img);

    document.getElementById("section").appendChild(article);

  }

}