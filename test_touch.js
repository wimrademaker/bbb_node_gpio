var b = require('bonescript');
//b.pinMode('P8_12', b.INPUT);
//b.pinMode('P8_10', b.INPUT);
b.pinMode('P8_8', b.INPUT);
setInterval(check,100);

function check(){
//      b.digitalRead('P8_12', printStatus);
//	b.digitalRead('P8_10', printStatus);
	b.digitalRead('P8_8', printStatus);
}

function printStatus(x) {
	console.log('x.value = ' + x.value);

	//console.log('x.err = ' + x.err);
}
