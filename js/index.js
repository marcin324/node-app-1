/* Dzięki temu zapisowi node odczyta komunikaty jako stringi z kodowaniem UTF-8 */
process.stdin.setEncoding('utf-8');

 
 /* Poniższe można czytać: na zdarzenie (.on) odczytu ('readable') masz wykonać funkcję (function () ) */
 /*process.stdin.on('readable', function(){

 	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
		if(input !== null){
			// teraz jest sens cokolwiek wyświetlać :)
			process.stdout.write(input);
		}
});*/

/*process.stdin.on('readable', function(){
	
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if(input !== null){
		/*process.stdout.write(input);*/
		/*var instruction = input.toString().trim();
		
		if (instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		}
		if (instruction === 'node_version') {
			process.stdout.write(JSON.stringify(process.versions));
			process.stdout.write('\n');
		}
		else {
			process.stderr.write('Wrong instruction!\n');
		}
	}
});*/

process.stdin.on('readable', function(){	
	var input = process.stdin.read();

	if(input !== null){90
		/*process.stdout.write(input);*/
		var instruction = input.toString().trim();


		switch(instruction){
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			break;

			case 'node_version':
				process.stdout.write(JSON.stringify(process.versions));
				process.stdout.write('\n');
			break;

			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});