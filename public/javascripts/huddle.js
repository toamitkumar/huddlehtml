var roundNum = 1;
var scoreCard = {};

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
			$(".container").html("Result Page");
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
	clickedImageName = $(object).attr("src").split("/")[1];
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
		scoreCard[imageId] = scoreCard[imageId]++;
	}
}

function decrementCounter(imageId) {
	if(scoreCard[imageId] === undefined) {
		scoreCard[imageId] = -1;
	}
	else {
		scoreCard[imageId] = scoreCard[imageId]--;
	}
}