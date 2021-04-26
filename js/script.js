// chiedo all’utente il suo nome
var nomeUtente = prompt('Qual è il tuo nome?');

// chiedo all'utente il suo cognome
var cognomeUtente = prompt('Qual è il tuo cognome?');

// chiedo all'utente il suo colore preferito
var colorePreferito = prompt('Qual è il tuo colore preferito?');

var password = nomeUtente + cognomeUtente + colorePreferito + "21";

// password
document.getElementById("password-generata").innerHTML = password;

// dati di input raccolti
document.getElementById('nome-utente').innerHTML = nomeUtente;

document.getElementById('cognome-utente').innerHTML = cognomeUtente;

document.getElementById('colore-preferito').innerHTML = colorePreferito;