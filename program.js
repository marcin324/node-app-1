process.stdin.setEncoding('utf-8');

 // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu

/*process.stdin.on('readable', function(){
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
			process.stdout.write(console.log(process.versions));
		}

		else {
			process.stderr.write('Wrong instruction!\n');
		}
	}
});*/

process.stdin.on('readable', function(){	
	var input = process.stdin.read();

	if(input !== null){
		/*process.stdout.write(input);*/
		var instruction = input.toString().trim();


		switch(instruction){
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			break;

			case 'node_version':
				process.stdout.write(console.log(process.versions));
			break;

			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});