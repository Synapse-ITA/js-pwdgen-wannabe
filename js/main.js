/*INFORMAZIONI UTENTE*/
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favouritecolor = prompt("Inserisci il tuo colore preferito");
let firstnumber = prompt("Inserisci il primo numero");
let secondnumber = prompt("Inserisci il secondo numero");

/* DIVISIONE DEL NUMERO */
firstnumber = parseInt(firstnumber);
secondnumber = parseInt(secondnumber);
let numdivision = firstnumber / secondnumber;

/*PASSWORD GENERATOR*/

document.getElementById("PasswordGenerator").addEventListener("click", function () {
    firstnumber = parseInt(firstnumber);
    secondnumber = parseInt(secondnumber);
    let numdivision = firstnumber / secondnumber;

    let passwordgenerator = name + surname + favouritecolor + numdivision;

    // Visualizza la password nella pagina
    document.getElementById("GeneratedPassword").innerHTML = `Password Generata: ${passwordgenerator}`;
});


/*PARTE CONSOLE*/

let informations = `
>Informazioni Utente:
Nome e Cognome: ${name} ${surname}
Colore preferito: ${favouritecolor}
Primo numero scelto: ${firstnumber}
Secondo numero scelto: ${secondnumber}
I due numeri scelti divisi: ${numdivision}
Password Generata: ${passwordgenerator}
`

console.log(informations);