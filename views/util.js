let cout_place = 45;
let assurance = 20;
let nb_place = parseInt(document.getElementById('nbseat').value);
let totals = cout_place * nb_place;
let total= document.getElementById('total');
total.innerText= totals +'€' ;