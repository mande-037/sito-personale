function calcolaMultipli(){
    const k = parseInt (document.getElementById("k").value);
    const a = parseInt (document.getElementById("a").value);
    const b = parseInt (document.getElementById("b").value);

    let conta = 0;

    for (let i = a; i <= b; i++) {
        if (Number.isInteger(i/k)){
            conta++;
        }
    }
    document.getElementById("risultato").innerHTML = "Ci sono " + (conta-1) + " lap di " + k;
}

function calcolabanconote() {
    let c = parseInt(document.getElementById("c").value);

    if (isNaN(c) || c <= 0) {
        document.getElementById("risultato2").innerHTML = "Inserisci un numero valido!";
        return;
    }

    let banconote = [200, 100, 50, 20, 10, 5, 1];
    let risultato = "";

    for (let i = 0; i < banconote.length; i++) {
        let numBanconote = Math.floor(c / banconote[i]);
        if (numBanconote > 0) {
            risultato += `Banconote da ${banconote[i]}: ${numBanconote} <br>`;
            c -= numBanconote * banconote[i];
        }
    }
    document.getElementById("risultato2").innerHTML = risultato;
}