var temp_collection = [];
var temp_av = 0;
var n_meting = 20;
var fail_offset = Math.ceil(n_meting / 10)
var b = require('bonescript');
var n = 0;

setInterval(check,1000);


function check(x){
	b.analogRead('P9_38', printStatus);	
}       

             
function printStatus(x){
 	var millivolts = x.value * 1800 //# 1.8V reference = 1800 mV
	var temp_c = (millivolts - 500) / 10

	//Voeg de nieuwe meet waarde toe aan de array
        temp_collection.push(temp_c);
        n = temp_collection.length;

        //Haal de oudste waarde van de array om nieuwe tempraturen toe te voegen
        if(n > n_meting){
                temp_collection = temp_collection.slice(1)
        }

	temp_av = 0;

	//Kopieer de basis array naar een tijdelijke array en sorteer hem	
	session_temp_collection = temp_collection.slice();
	session_temp_collection.sort()

	//Wanneer er voldoende metingen zijn dan haal de fout-offset van degesorteerde array van start en eind 
	if(n > n_meting){
		session_temp_collection = session_temp_collection.slice(0, (fail_offset * -1))
		session_temp_collection = session_temp_collection.slice(fail_offset)
	}

	var loop_count = session_temp_collection.length;
	
	for (var i = 0; i < loop_count; i++) {
		console.log(i + " :" + session_temp_collection[i])
		//Gemiddelde waarde is de waarde van de meeting gedeeld door het aantal metingen
    		temp_av += session_temp_collection[i]/loop_count;
	}

        console.log(loop_count + '/' + n + '/' + n_meting);

	temp = Math.round(temp_av * 100) / 100
	
	console.log(temp + '  : ' + temp_c + ' - ' + millivolts);
//      console.log('x.err = ' + x.err);
}
