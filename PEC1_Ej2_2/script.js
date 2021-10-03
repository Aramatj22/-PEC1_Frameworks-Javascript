
const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
const ErrorM = document.getElementById('modal');
const Load = document.getElementById('loading');

//modal

// function showModal(e){
//     swap.addEventListener('click', (e) => {
//         modal.setAttribute('data-isVisible', true); //css
//         modal.textContent = e.target.parentNode.cells[1].textContent;
//     });
// }


///Si se produce un error al hacer la consulta al API mostrar un mensaje con el error.

function showModal( ){
    // ErrorM.setAttribute('data-isVisible', true); //css
    ErrorM.style.display = 'flex'; 
    ErrorM.addEventListener("click", () => {
        ErrorM.style.display = 'none'; 
        
    })
}

// Cuando se realiza la consulta a la API, indicar estado de espera mediante logo o mensaje por pantalla


function loading() {
    Load.style.display = 'flex'; 
    Load.visibility = 'visible';    
    setTimeout(() => {
        Load.style.display = 'none';   
    }, 400);
}


//fetch--API

function calculate() {

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://open.er-api.com/v6/latest/${currency_one}`)
    
    .then(res => res.json())
    .then (data => {
        //console.log(data);
        const rate = data.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

    })
//si hay error de conexión con la api

    .catch(error => {
        showModal();

    });

    loading();
}




//event listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);


swap.addEventListener("click", () => {

    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();