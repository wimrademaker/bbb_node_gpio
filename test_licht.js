var b = require('bonescript');
b.analogRead('P9_36', check);

setInterval(check,800);

function check(x){
	b.analogRead('P9_36', printStatus);	
}       
             
function printStatus(x){
        console.log('x.value = ' + x.value);
//        console.log('x.err = ' + x.err);
}