let greeting = '{"greetText": "Wishing That the new year will bring joy, love, peace, and happiness to you.", "from": "Rahul", "to": "Varakumar"}';
 
let parsedValue = JSON.parse(greeting);

let greetTextEl = document.getElementById("greetText");
let greetFromEl = document.getElementById("greetFrom");
let greetToEl = document.getElementById("greetTo");

greetTextEl.textContent = parsedValue.greetText;
greetFromEl.textContent = "From: " + parsedValue.from;
greetToEl.textContent = "To: " + parsedValue.to;