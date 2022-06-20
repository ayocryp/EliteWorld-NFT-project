

function nasa() {



  fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=7146a873cb52d5b3166912e100f6c44c8b7678e4&ids=BTC,ETH,SOL&interval=1d,30d&convert=EUR&platform-currency=SOL&per-page=100&page=1`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.getElementById("live-price").innerText = data[0].price;
      document.getElementById("live-cap").innerText = data[0].market_cap;
      document.getElementById("live-supply").innerText = data[0].circulating_supply;
       
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

nasa()


// Countdown 
let countDown = new Date("Oct 16, 2022 00:00:00").getTime(); 
let x = setInterval(function () {
  // get current date
  let now = new Date().getTime();
  // time distance
  let distance = countDown - now;

  // days hours minutes & seconds calculation
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.querySelector('#days').innerText = `${days} : `
  document.querySelector('#hours').innerText = `${hours} : `
  document.querySelector('#minutes').innerText = `${minutes} : `
  document.querySelector('#seconds').innerText = `${seconds} `

  if (distance < 0) {
    clearInterval(x); 
    document.querySelector('#days').innerText = `00`
    document.querySelector('#hours').innerText = `00`
    document.querySelector('#minutes').innerText = `00`
    document.querySelector('#seconds').innerText = `00`
  }
}, 1000);