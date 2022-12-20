let ipAddress = document.getElementById('ip-address')
let search = document.getElementById('search')
let place = document.querySelector('[location]')
let isp = document.querySelector('[isp]')
let timezone = document.querySelector('[timezone]')
let findSearch = document.querySelector('[findSearch]')

search.addEventListener('click', (e)=> {
    fetch('https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_fxIZgEXd7lurOUGlwkG7kY5Sjs07A&ipAddress=').then(res => res.json()).then((data) => {
     if (findSearch.value = data.ip) {
        ipAddress.innerText = data.ip
        place.innerText = `${data.location.country} ${data.location.city}`
        timezone.innerText = data.location.timezone
        isp.innerText = data.isp
     }
    })
})









  
  
    








// L.tileLayer('https://tile.openstreetmap.org.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);