
// A) Muuttujat
const nimi = "Tuija";
let ika = 45;
console.log("Nimi:", nimi);
console.log("Ikä:", ika);
// B) If-else
if (ika >= 18) {
console.log("Täysi-ikäinen");
} else {
console.log("Alaikäinen");
}
// C) Funktio
function laskeNelio(luku) {
return luku * luku;
}
console.log("Luvun neliö:", laskeNelio(5));
// D) Taulukko ja silmukka
const tuotteet = [
"Kannettava tietokone",
"Näppäimistö",
"Hiiri"
];
tuotteet.forEach(function(tuote) {
console.log("Tuote:", tuote);
});
// E) Painikkeen toiminto
function naytaViesti() {
alert("Hei Tuija! JavaScript toimii.");
}
JavaScript
// F) Koirakuvan hakeminen rajapinnasta
async function haeKoira() {
const tila = document.getElementById("tila");
const koirakuva = document.getElementById("koirakuva");

tila.textContent = "Haetaan koirakuvaa...";

try {
const vastaus = await fetch(
"https://dog.ceo/api/breeds/image/random"
);

if (!vastaus.ok) {
throw new Error("Rajapintakutsu epäonnistui.");
}
const data = await vastaus.json();
console.log("Rajapinnan vastaus:", data);
koirakuva.src = data.message;
koirakuva.hidden = false;
tila.textContent = "Koirakuva haettu onnistuneesti!";
} catch (virhe) {
console.error("Koirakuvan hakemisessa tapahtui virhe:", virhe);
tila.textContent = "Koirakuvan hakeminen epäonnistui.";
}
}