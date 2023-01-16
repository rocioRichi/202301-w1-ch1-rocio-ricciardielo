// window.load = nomen, welcoming, availableFlights, withScale, averageCost, lastFlights, removeAccentsLowerCase, userOrAdmin;
const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];



function nomen() {
  let nomen = prompt("Hola! cómo te llamas?");
  return nomen;
}

function welcoming() {
  alert(`Nos encanta tenerte por aquí ${nomen()} :-)`);
}
welcoming();


function availableFlights() {
  let scaleFlights = "";
  let noScaleFlights = "";

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      scaleFlights += `Vuelo con origen ${flights[i].from} y destino ${flights[i].to}. Coste = ${flights[i].cost} €.\n`
    } else {
      noScaleFlights += `Vuelo con origen ${flights[i].from} y destino ${flights[i].to}. Coste = ${flights[i].cost} €.\n`
    }
  }
  alert(`Vuelos con escalas:\n\n${scaleFlights}\nVuelos sin escalas:\n\n${noScaleFlights}`)
}

function withScale() {
  let scaleFlights = "";
  let noScaleFlights = "";

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      scaleFlights += `Vuelo con origen ${flights[i].from} y destino ${flights[i].to}. Coste = ${flights[i].cost} €.\n`
    }
  }
  alert(`Vuelos con escalas:\n\n${scaleFlights}`);
}

function averageCost() {
  let average = 0;
  for (let i = 0; i < flights.length; i++) {
    average += flights[i].cost
  }
  alert(`El coste medio de los vuelos es de ${(average / (flights.length)).toFixed(2)} €`)
}

function lastFlights() {

  let howManyflights = flights.length;
  let last5 = howManyflights - 5;
  let last5Flights = ``;

  for (let i = last5; i < flights.length; i++) {

    last5Flights += (`Vuelo con origen ${flights[i].from} y destino ${flights[i].to}. Coste = ${flights[i].cost} €.\n`)
  }

  alert(last5Flights);
}

const removeAccentsLowerCase = (text) => {

  const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
  return text.split('').map(letra => acentos[letra] || letra).join('').toString().toLowerCase();

}

const userOrAdmin = () => {
  let role = prompt(' Are you user or Admin?');
  role = removeAccentsLowerCase(role);

  if (role === null) {
    userOrAdmin();
  }
  if (role === `user`) {
    youAreUser();
  }
  if (role === `admin`) {
    youAreAdmin();

  }

}

function youAreUser() {
  let textToShow = ``;
  let yourPrice = +prompt(`Mostrar vuelos con un coste menor a ...`);

  let underprice = (lalala) => lalala.cost <= yourPrice;
  let cheaperFlights = flights.filter(underprice);
  let yourSelection;
  console.log(cheaperFlights);

  for (let i = 0; i < cheaperFlights.length; i++) {

    yourSelection += `Vuelo con origen ${cheaperFlights[i].from} y destino ${cheaperFlights[i].to}. Coste = ${cheaperFlights[i].cost} €.\n`
  }
  alert(yourSelection)
}

const youAreAdmin = () => {
  let role = prompt(' Quieres registrar(R) o eliminar (E) un nuevo vuelo?. Para salir (#)');
  role = removeAccentsLowerCase(role);

  if (role === `#`) {
    alert(`Gracias por incluir un nuevo vuelo.`)

  } else if (role === null) {
    youAreAdmin();
  } else if (role === `r`) {
    alert(`Quieres registrar un vuelo`);
    newFlight();
  } else if (role === `e`) {
    alert(`Quieres eliminar un vuelo`);
    deleteFlight();

  } else { youAreAdmin() };

}
function newFlight() {
  let cumulative = 0;

  flights[flights.length] = {
  

    id: flights.length,
    to: prompt(`Indique el destino del nuevo vuelo.`),
    from: prompt(`Indique el origen del nuevo vuelo.`),
    cost: +prompt(`Indique el precio del vuelo.`),
    scale: prompt(`¿Realiza escalas el vuelo? S/N`)

  }
 
  console.log(flights);

  cumulative++;
  console.log(cumulative);

  youAreAdmin();
}

function deleteFlight(){
  let idIntroduced = +prompt(`Introduzca el número de ID (0X) del vuelo a eliminar. Si el Id es correcto, confirmaremos la eliminación del registro`);

  for (const key in flights) {
    if (flights.hasOwnProperty.call(flights, key)) {
      const element = flights[key];
      if(element.id===idIntroduced){


          if (window.confirm(`Vas a eliminar el vuelo con id = ${flights[idIntroduced].id} con origen ${flights[idIntroduced].from} y destino ${flights[idIntroduced].to}`)) {
            
            var removed = flights.splice(idIntroduced, 1);
            if(idIntroduced<=flights.length){
              alert(`Vuelo eliminado`);

            }
          }
          
      }
    }
  }

}





// const arreglo = [1,2,3,4,5,]
// let porDebajoDe = `introduzca umbral`;
// let arregle2=arreglo.filter(lalala=>arreglo<porDebajoDe);
// console.log(arregle2);



