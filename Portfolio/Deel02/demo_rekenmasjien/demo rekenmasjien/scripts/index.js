
const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);


	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");
	
	}
	
	
const optellen = () => {

	let g1=Number.parseInt(txtLinks.value, 10);
	let g2=Number.parseInt(txtRechts.value, 10);
	
	let resultaat = g1+g2;

	let resultaatTekst=g1+" + "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

const aftrekken = () => {
	let g3=Number.parseInt(txtLinks.value, 10);
	let g4=Number.parseInt(txtRechts.value, 10);

	let resultaatAftrekken = g3-g4;

	let resultaatTekst=g3+" - "+g4+" = "+resultaatAftrekken;
	txtOutput.innerHTML=resultaatTekst;
}

const vermenigvuldigen = () => {
	let g5=Number.parseInt(txtLinks.value, 10);
	let g6=Number.parseInt(txtRechts.value, 10);

	let resultaatVermenigvuldigen = g5*g6;

	let resultaatTekst=g5+" X "+g6+" = "+resultaatVermenigvuldigen;
	txtOutput.innerHTML=resultaatTekst;}

const delen = () => {
	let g7=Number.parseInt(txtLinks.value, 10);
	let g8=Number.parseInt(txtRechts.value, 10);

let resultaatDelen = g7/g8;

let resultaatTekst=g7+" / "+g8+" = "+resultaatDelen;
txtOutput.innerHTML=resultaatTekst;
}
 
window.addEventListener('load',setup); 

















