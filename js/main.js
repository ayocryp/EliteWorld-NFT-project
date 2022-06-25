
// SOL price
function nasa() {



  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=Solana&vs_currencies=USD&include_market_cap=true&include_24hr_change=true"
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.getElementById("live-price").innerText = `${data.solana.usd}/$`;
      document.getElementById("live-cap").innerText = `${data.solana.usd_market_cap.toFixed(2)}`;
        document.getElementById("live-supply").innerText = `${data.solana.usd_24h_change.toFixed(2)}%`
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



// Left and right scroll

$('.main-image-container').slick({
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(this).ekkolightbox({
  loadingMessage: "Loading…",
  showArrows: true,
  leftArrow: "<<<",
  rightArrow: ">>>"
});





      