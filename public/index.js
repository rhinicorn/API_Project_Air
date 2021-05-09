
const allURL = 'http://api.airvisual.com/v2/nearest_city?key=eb088148-0536-422c-b8f2-da7ef03d5245'


//NEW RESULTS ARRAY
let ResultsArr = []
let results_Log = document.getElementById("resultsLog")

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
//CREATE THE TABLE RENDERING
function renderResults(Data){
    console.log(ResultsArr)
    results_Log.innerHTML = ""
        for(let i = 0; i<ResultsArr.length; i++){
            let row = createTableRow(ResultsArr[i])
            results_Log.appendChild(row)
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





//NEW FORECAST ARRAY
let ResultsArr2 = []
let results2_Log = document.getElementById("results2Log")

//DISPLAY RESULTS2
function displayResults2(Data){
    //console.log(Data)
    let myresults2 = {
        tCity: Data.city,
        tCountry: Data.country,
        tTs: Data.current.weather.ts,
        thumidity: Data.current.weather.hu,
        tpressure: Data.current.weather.pr,
        twinddir: Data.current.weather.wd,
        twindspeed: Data.current.weather.ws
    }
    ResultsArr2.push(myresults2)
    renderResults2(ResultsArr2)
}

//CREATE THE TABLE RENDERING
function renderResults2(Data){
    //console.log(ResultsArr2)
    results2_Log.innerHTML = ""
        for(let i = 0; i<ResultsArr2.length; i++){
            let row = createTableRow2(ResultsArr2[i])
            results2_Log.appendChild(row)
        }
}

//ADD ROWS USING FETCHED DATA
function createTableRow2(e) {
    console.log(e)

    let tableRow = document.createElement('tr')
    let tCity = document.createElement('tCity1')
    let tCountry = document.createElement('tCountry1')
    let tTs = document.createElement('tTs1')
    let thumidity = document.createElement('thumidity1')
    let tpressure = document.createElement('tpressure1')
    let twinddir = document.createElement('twinddir1')
    let twindspeed = document.createElement('twindspeed1')
    
    tCity.innerText = e.tCity
    tCountry.innerText = e.tCountry
    tTs.innerText = e.tTs
    thumidity.innerText = e.thumidity
    tpressure.innerText = e.tpressure
    twinddir.innerText = e.twinddir
    twindspeed.innerText = e.twindspeed

  
    tableRow.appendChild(tCity)
    tableRow.appendChild(tCountry)
    tableRow.appendChild(tTs)
    tableRow.appendChild(thumidity)
    tableRow.appendChild(tpressure)
    tableRow.appendChild(twinddir)
    tableRow.appendChild(twindspeed)
  
    return tableRow
  }