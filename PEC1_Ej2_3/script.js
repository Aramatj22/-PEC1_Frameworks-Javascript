const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; /// + es para convertir el string en número

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function Change(rate, currency) {
  let movieName = movieSelect.selectedOptions[0].text;
  const moviePrice = movieSelect.value;
  let price = moviePrice * rate;
  movieSelect.selectedOptions[0].text = movieName + ` (${price} ${currency})`
}

// Update total and count
function updateSelectedCount() {

  const currency_one = currencySelected.value;
        fetch(`https://open.er-api.com/v6/latest`)
        .then(res => res.json())
        .then(data => {
            rateCurrency =  data.rates[currency_one] / data.rates['USD'];
            rateCurrency = +rateCurrency.toFixed(2);
            nameChanger(rateCurrency, currency_one);
            return rateCurrency;
        })
        .catch(error => { 
            console.log('Error!');
        })


  const selectedSeats = document.querySelectorAll('.row .seat.selected'); //asientos seleccionados

 const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat)); ///menos los asinentos ocupados

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); ///localStorage no requiere librería, viene implementado en el navegador
  localStorage.setItem('selectedCurrency', currency_one);

  const selectedSeatsCount = selectedSeats.length*1;

// Change option

  textCurrency.innerText = currency_one;
  textCurrency.style.color = 'white'



  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice* rateCurrency;
  
  setMovieData(movieSelect.selectedIndex, movieSelect.value); //selectedIndex propiedad que devuelve valor ****
}

// Get data from local storage and populate UI // para que los asientos seleccionados se graben en pantalla
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }


  const selectedCurrency = localStorage.getItem('selectedCurrency')
  const currencySelect = document.getElementById('currency')
  if (selectedCurrency !== null) {
      currencySelect.value = selectedCurrency;
  }  
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  //updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();