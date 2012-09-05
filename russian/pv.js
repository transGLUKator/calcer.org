/*Эта функция считает приведенную стоимость*/
function calculatePv(){
	var r = document.getElementById("r").value;
	var n = document.getElementById("n").value;
	var pmt = document.getElementById("pmt").value;
	var fv = document.getElementById("fv").value;
	var resultPv = document.getElementById("resultPv");
	
	var rCorrected = r/100 + 1;
	var rStored = rCorrected;
	
	if (pmt !== ""){
		pv = pmt/rCorrected;
		for(i = 2; i <= n; i++){
		pv += pmt/Math.pow(rCorrected,i); 
		}
		resultPv.innerHTML = "<input type='text' disabled='disabled' value='Приведенная стоимость is " + pv + "'>";
	}
	
	else{
	if (r !== "" && n !== "" && (pmt !== "" || fv !== "")){
		
		for (i = 2; i <= n; i++){
			rStored *= rCorrected;	
		}
		
		var pv = fv/rStored;
		resultPv.innerHTML = "<input type='text' disabled='disabled' value='Приведенная стоимость " + pv + "'>";
				
	}
	
	else resultPv.innerHTML = "Вы ввели не все данные";
	}
	
};
/*Конец функции PV*/

/*Эта функция считает FV*/
function calculateFv(){
	var r1 = document.getElementById("r1").value;
	var n1 = document.getElementById("n1").value;
	var pmt1 = document.getElementById("pmt1").value;
	var pv = document.getElementById("pv").value;
	var resultFv = document.getElementById("resultFv");
	
	
	if(pmt1 !== "") {
		fv1 = 0;
		for(i = 1; i <= n1; i++){
		fv1 += pmt1*Math.pow(r1/100+1,i-1);	
		}
		
		resultFv.innerHTML = "Будущая стоимость " + fv1;
		}
	
	else {r1 = r1/100+1;
	fv1 = pv*Math.pow(r1,n1);
	resultFv.innerHTML = "<input type='text' disabled='disabled' value='Будущая стоимость " + fv1+"'>";}
};
/*Конец функции FV */

/*Добавляем поле для подсчета NPV*/
fields = 0;
function addInput() {
document.getElementById('yearNpv').innerHTML += "Год "+(fields+2)+" <input type='text' value='' name='field[]' id='year"+(fields+2)+"'/><br />";
fields += 1;
return fields;
};
/*Конец*/

/*Считаем NPV*/
function calculateNpv(){
	var resultNpv = document.getElementById("resultNpv");
	var r2 = document.getElementById("r2").value;
	var inv = document.getElementById("inv").value;
	
	var npv = 0;
	var year =[];
	for (i=0; i<=fields; i++){
		year.push(document.getElementById("year"+(i+1)).value);
	}
	var yearCount = year.length;
	for (i = 1; i <= yearCount; i++){
		npv += year[i-1]/Math.pow(r2/100+1,i);
	}
	
	resultNpv.innerHTML = "<input type='text' disabled='disabled' value='Чистая приведенная стоимость " +  (npv-inv) + "'>";
	};
/*Конец подсчета NPV*/

//Считаем размер платежа
function calculatePmt() {
	var pmt2;
	var correctIr2;
	var fv2;
	var ir2 = document.getElementById("r2").value;
	var n2 = document.getElementById("n2").value;
	var pv2 = document.getElementById("pv2").value;
	var resultPmt2 = document.getElementById("resultPmt2");
	
	ir2 = ir2/100;
	fv2 = pv2*Math.pow(ir2+1,n2);
	correctIr2 = 0;
	for (i = 1; i <= n2; i++){
		correctIr2 += Math.pow(ir2+1,i-1);
	}
	
	pmt2 = fv2/correctIr2;
	resultPmt2.innerHTML = "<input type='text' disabled='disabled' value='Размер платежа " +  pmt2 + "'>";
	
};
//Конец функции подсчета платежа