var roundNum = 1;
var scoreCard = {};
var output = {};

$(document).ready(function() {
	showRandomImages();

	$(".themeImage").click(function() {
		if(roundNum < 10) {
			trackImageScore(this);
			showRandomImages();
			incrementRoundString();
		}
		else {
			trackImageScore(this);
			$(".container").html(constructResultsPage());
		}
	});
});

function incrementRoundString() {
	roundNum++;
	$("#round-start").html(roundNum);
}

function showRandomImages() {
	$("#firstImage").attr("src", getRandomImagePath(10, 19));
	$("#secondImage").attr("src", getRandomImagePath(10, 19));
}

function trackImageScore(object) {
	imageIds = getImageNumbers();
	splitArr = $(object).attr("src").split("/")
	clickedImageName = splitArr[splitArr.length-1];
	clickedImageId = clickedImageName.split(".")[0];

	incrementCounter(clickedImageId);
	for (var i = 0; i < imageIds.length; i++) {
		if(clickedImageId.toString() != imageIds[i].toString()) {
			decrementCounter(imageIds[i]);
		}
	}
}

function incrementCounter(imageId) {
	if(scoreCard[imageId] === undefined) {
		scoreCard[imageId] = 1;
	}
	else {
		scoreCard[imageId] = scoreCard[imageId] + 1;
	}
}

function decrementCounter(imageId) {
	if(scoreCard[imageId] === undefined) {
		scoreCard[imageId] = -1;
	}
	else {
		scoreCard[imageId] = scoreCard[imageId] - 1;
	}
}

function constructResultsPage() {
	generateOutput();
	str = '<div class="span8 offset2">';
	for(var key in output) {
		images = output[key];
		str += '<ul class="thumbnails">';
		str += '<li>'+key+'</li>';
		for(var i=0; i<images.length; i++) {
			str += '<li>';
			str += '<img src="'+images[i]+'" height="160" width="160" class="themeImage"/>';
			str += '</li>';
		}
		str += '</ul>';
	}
	str += "</div>";
	return str;
}

function generateOutput() {
	for(var imageId in scoreCard) {
		scoreCount = scoreCard[imageId].toString();
		if(output[scoreCount] === undefined) {
			output[scoreCount] = []
			output[scoreCount].push(getImagePath(imageId));	
		}
		else {
			output[scoreCount].push(getImagePath(imageId));	
		}
	}	
}