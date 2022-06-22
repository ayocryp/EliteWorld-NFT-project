

// function nasa() {



//   fetch(
//     `https://api.nomics.com/v1/currencies/ticker?key=7146a873cb52d5b3166912e100f6c44c8b7678e4&ids=BTC,ETH,SOL&interval=1d,30d&convert=EUR&platform-currency=SOL&per-page=100&page=1`
//   )
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data);
//       document.getElementById("live-price").innerText = data[0].price;
//       document.getElementById("live-cap").innerText = data[0].market_cap;
//       document.getElementById("live-supply").innerText = data[0].circulating_supply;
       
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

// nasa()


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
  
  document.querySelector('#days').innerText = `${days}  `
  document.querySelector('#hours').innerText = `${hours} `
  document.querySelector('#minutes').innerText = `${minutes} `
  document.querySelector('#seconds').innerText = `${seconds} `
  // mobile
  document.querySelector('#mobile-days').innerText = `${days}  `
  document.querySelector('#mobile-hours').innerText = `${hours} `
  document.querySelector('#mobile-minutes').innerText = `${minutes} `
  document.querySelector('#mobile-seconds').innerText = `${seconds} `

  if (distance < 0) {
    clearInterval(x); 
    document.querySelector('#days').innerText = `00`
    document.querySelector('#hours').innerText = `00`
    document.querySelector('#minutes').innerText = `00`
    document.querySelector('#seconds').innerText = `00`
  }
}, 1000);


// To scroll left 

// $('body').ready(function(){
// $('#scroll-left').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '#scroll-right'
//   });
// });




// //Scroll right

// $('document').ready(function(){
//   $('#scroll-right').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '#scroll-left',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });

// });


// $('.main-image-container').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });



// document.querySelector('#scroll-left').onclick( function slide(direction){
//   var container = document.querySelector('#collection-section');
//   scrollCompleted = 0;
//   var slideVar = setInterval(function(){
//       if(direction == 'left'){
//           container.scrollLeft -= 10;
//       } else {
//           container.scrollLeft += 10;
//       }
//       scrollCompleted += 10;
//       if(scrollCompleted >= 100){
//           window.clearInterval(slideVar);
//       }
//   }, 50);
// });








