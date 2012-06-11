var generatedNumbers = [];

function getRandomImageId(startNum, endNum) {
	return Math.floor(startNum+(Math.random()*(endNum-startNum)));
}

function getRandomImagePath(startNum, endNum) {
	number = getRandomImageId(startNum, endNum);

	if(generatedNumbers.length == 0) {
		generatedNumbers.push(number);
	}
	else if(generatedNumbers.length == 1) {
		while(number == generatedNumbers[0]) {
			number = getRandomImageId(startNum, endNum);		
		}
		generatedNumbers.push(number);
	}
	else if(generatedNumbers.length == 2) {
		generatedNumbers = [];
		generatedNumbers.push(number);	
	}

	return getImagePath(number);
}

function getImageNumbers() {
	return generatedNumbers;
}

function getImagePath(imageNum) {
	return "/images/"+imageNum+".jpg";	
}