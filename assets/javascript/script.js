const travelKm = prompt("Ciao utente! Quanti chilometri devi percorrere?");

const age = prompt("Quanti anni hai?");

const pricePerKm = 0.21;

const totalPrice = (travelKm * pricePerKm).toFixed(2);

document.getElementById("total_price").innerHTML = `Il prezzo totale del biglietto è di ${totalPrice} euro`;

if (age < 18) {
    const discountMinor = ((totalPrice * 20) / 100);
    const finalPrice = (totalPrice - discountMinor).toFixed(2);

    document.getElementById("discount_under_18").innerHTML = `Con lo sconto applicato per i minori di 18 anni il prezzo finale è ${finalPrice} euro`;
} else if ( age > 65) {
    const discountOver = ((totalPrice * 40) / 100);
    const finalPrice = (totalPrice - discountOver).toFixed(2);

    document.getElementById("discount_over_65").innerHTML = `Con lo sconto applicato per gli over 65 il prezzo finale è ${finalPrice} euro`;
}