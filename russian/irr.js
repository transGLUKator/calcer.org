/*Добавляем поле для ввода платежа за текущий год*/
fieldsIrr = 0;
function addInputIrr() {
document.getElementById('yearIrr').innerHTML += "Год "+(fieldsIrr+2)+" <input type='text' value='' name='field[]' id='yearIrr"+(fieldsIrr+2)+"'/><br />";
fieldsIrr += 1;
return fieldsIrr;
};
/*Конец*/

function calculateIrr(){
	var invest = document.getElementById("invest").value;
	var resultIrr = document.getElementById("resultIrr");
	
	//формируем массив с платежавми за конкретный год
	var yearIrr = [];
	for (i = 0; i <= fieldsIrr; i++){
		yearIrr.push(document.getElementById("yearIrr"+(i+1)).value);
	}
	
	//подбором определяем размер IRR
	var countYears = yearIrr.length;
	var inc = 0.0001;
	var r = -1;
	var npv;
	do {r += inc;
		npv = 0;
		for (i = 1; i <= countYears; i ++){
			npv += yearIrr[i-1]/Math.pow(r+1,i);
			}
	}
	while (npv > invest);
	r=Math.round(r*10000)/100-0.01;
	resultIrr.innerHTML = "<input type='text' disabled='disabled' value='Внутренняя ставка доходности " + r +"'>";
};