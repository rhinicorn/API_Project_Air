
const allURL = 'http://api.airvisual.com/v2/nearest_city?key=eb088148-0536-422c-b8f2-da7ef03d5245'

const baseNearCityURL = 'http://api.airvisual.com/v2/nearest_city?key=eb088148-0536-422c-b8f2-da7ef03d5245'

const baseStatesURL = 'http://api.airvisual.com/v2/states?country={USA}&key={eb088148-0536-422c-b8f2-da7ef03d5245}'

const baseCityURL = 'http://api.airvisual.com/v2/cities?state={{STATE_NAME}}&country={USA}&key={eb088148-0536-422c-b8f2-da7ef03d5245}'


//NEW RESULTS ARRAY
let ResultsArr = []
let resultsLog = document.getElementById("results-log")


//FETCH FOR RESULTS
function fetchData(e){
    //e.preventDefault()

    fetch(allURL)
        .then(result => result.json())
        .then(json => {
            let allData = json.data
            displayResults(allData);
        })
}


//DISPLAY RESULTS
function displayResults(Data){
    console.log(Data)
    let myresults = {
        tCity: Data.city,
        tCountry: Data.country,
        tTs: Data.current.pollution.ts,
        taqius: Data.current.pollution.aqius,
        tmainus: Data.current.pollution.mainus
    }
    ResultsArr.push(myresults)
    renderResults(ResultsArr)
}

//CREATE THE TABLE RENDERING FOR GLOBAL
function renderResults(ResultsArr){
  console.log(ResultsArr)
  resultsLog.innerHTML = ""
    for(let i = 0; i<ResultsArr.length; i++){
        let row = createTableRow(ResultsArr[i])
        resultsLog.appendChild(row)
    }
}

//ADD ROWS USING FETCHED DATA
function createTableRow(e) {
  console.log(e)
  
  let tableRow = document.createElement('tr')
  let tCity = document.createElement('td')
  let tCountry = document.createElement('td')
  let tTs = document.createElement('td')
  let taqius = document.createElement('td')
  let tmainus = document.createElement('td')
  
  tCity.innerText = e.tCity
  tCountry.innerText = e.tCountry
  tTs.innerText = e.tTs
  taqius.innerText = e.taqius
  tmainus.innerText = e.tmainus

  tableRow.appendChild(tCity)
  tableRow.appendChild(tCountry)
  tableRow.appendChild(tTs)
  tableRow.appendChild(taqius)
  tableRow.appendChild(tmainus)

  return tableRow
}
