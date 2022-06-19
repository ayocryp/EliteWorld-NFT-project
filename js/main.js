// function getFetch() {
//     //   const choice = document.querySelector("input").value;
//       const url =
//         "https://api.nomics.com/v1/currencies/ticker?key=7146a873cb52d5b3166912e100f6c44c8b7678e4&ids=BTC,ETH,SOL&interval=1d,30d&convert=EUR&platform-currency=SOL&per-page=100&page=1";
    
//       fetch(url)
//         .then((res) => res.json()) // parse response as JSON
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log(`error ${err}`);
//         });
//     }
  
// getFetch()
    

// async function solPrice() {
//     // let userInput = document.querySelector("input").value;
//     const res = await fetch(
//       `https://api.nomics.com/v1/currencies/ticker?key=7146a873cb52d5b3166912e100f6c44c8b7678e4&ids=BTC,ETH,SOL&interval=1d,30d&convert=EUR&platform-currency=SOL&per-page=100&page=1`
//     );
//     const data = await res.json();
//     console.log(data);
//     document.querySelector("#live-price").innerText = data.price;
   
//   }
// solPrice();

function nasa() {
//   let userInput = document.querySelector("input").value;


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