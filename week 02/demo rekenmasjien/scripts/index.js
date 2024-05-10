
const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);
} 

const optellen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");
	
	let g1=Number.parseInt(txtLinks.value, 10);
	let g2=Number.parseInt(txtRechts.value, 10);
	let resultaat = g1+g2;

	let resultaatTekst=g1+" + "+g2+" = "+resultaat;
	txtOutput.textContent=resultaatTekst;
}

const aftrekken = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");


	let g3=Number.parseInt(txtLinks.value, 10);
	let g4=Number.parseInt(txtRechts.value, 10);
	let resultaat = g3 - g4;

	let resultaatTekst=g3+" - "+g4+" = "+resultaat;
	txtOutput.textContent=resultaatTekst;
}

const vermenigvuldigen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");


	let g5=Number.parseInt(txtLinks.value, 10);
	let g6=Number.parseInt(txtRechts.value, 10);
	let resultaat = g5 * g6;

	let resultaatTekst=g5+" X "+g6+" = "+resultaat;
	txtOutput.textContent=resultaatTekst;
}

const delen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");


	let g7=Number.parseInt(txtLinks.value, 10);
	let g8=Number.parseInt(txtRechts.value, 10);
	let resultaat = g7 / g8;

	let resultaatTekst=g7+" / "+g8+" = "+resultaat;
	txtOutput.textContent=resultaatTekst;}
 
window.addEventListener('load',setup); 

















