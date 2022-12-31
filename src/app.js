import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Seleccionamos los elementos a modificar
  let cardNumber = document.querySelector("#cardNumber");
  cardNumber.style.fontSize = "80px";
  let cardSeeds = document.querySelectorAll(".cardSeed");

  // Creamos un array para almacenar las cartas ya generadas
  let generatedCards = [];

  // Aplicamos la funcionalidad de aleatoriedad al array numbers fuera del Botón
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let randomNumberIndex = Math.floor(Math.random() * numbers.length);
  let number = numbers[randomNumberIndex];

  // Aplicamos la funcionalidad de aleatoriedad al array seeds fuera del Botón
  let seeds = ["♦", "♥", "♠", "♣"];
  let randomSeedIndex = Math.floor(Math.random() * seeds.length);
  let seed = seeds[randomSeedIndex];

  // Creamos una variable para almacenar la carta generada
  let card = { number, seed };

  // Comparamos la carta generada con las cartas ya generadas
  if (generatedCards.includes(card)) {
    // Si la carta ya ha sido generada, generamos una nueva tirada
    randomNumberIndex = Math.floor(Math.random() * numbers.length);
    number = numbers[randomNumberIndex];
    randomSeedIndex = Math.floor(Math.random() * seeds.length);
    seed = seeds[randomSeedIndex];
    card = { number, seed };
  }

  // Añadimos la carta generada al array de cartas generadas
  generatedCards.push(card);

  // Actualizamos el elemento cardNumber con el número generado
  cardNumber.innerHTML = number;

  // Actualizamos el elemento cardSeeds con la seed generada
  for (let x = 0; x < cardSeeds.length; x++) {
    if (randomSeedIndex <= 1) {
      cardSeeds[x].style.color = "red";
    } else {
      cardSeeds[x].style.color = "black";
    }
    cardSeeds[x].innerHTML = seed;
    cardSeeds[x].style.fontSize = "100px";
  }

  // Añadimos un botón para generar números y Seeds aleatorios

  let randomButton = document.querySelector("#randomButton");
  randomButton.addEventListener("click", function() {
    // Aplicamos la funcionalidad de aleatoriedad al array numbers

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let randomNumberIndex = Math.floor(Math.random() * numbers.length);
    let number = numbers[randomNumberIndex];

    // Aplicamos la funcionalidad de aleatoriedad al array seeds

    let seeds = ["♦", "♥", "♠", "♣"];
    let randomSeedIndex = Math.floor(Math.random() * seeds.length);
    let seed = seeds[randomSeedIndex];

    // Creamos una variable para almacenar la carta generada
    let card = { number, seed };

    // Comparamos la carta generada con las cartas ya generadas
    if (generatedCards.includes(card)) {
      // Si la carta ya ha sido generada, generamos una nueva tirada

      randomNumberIndex = Math.floor(Math.random() * numbers.length);
      number = numbers[randomNumberIndex];
      randomSeedIndex = Math.floor(Math.random() * seeds.length);
      seed = seeds[randomSeedIndex];
      card = { number, seed };
    }

    // Añadimos la carta generada al array de cartas generadas
    generatedCards.push(card);

    // Actualizamos el elemento cardNumber con el número generado
    cardNumber.innerHTML = number;

    // Actualizamos el elemento cardSeeds con la seed generada

    for (let x = 0; x < cardSeeds.length; x++) {
      if (randomSeedIndex <= 1) {
        cardSeeds[x].style.color = "red";
      } else {
        cardSeeds[x].style.color = "black";
      }
      cardSeeds[x].innerHTML = seed;
      cardSeeds[x].style.fontSize = "100px";
    }
  });
};
