var wrapperWidth = $('.wrapper').width();
var $wrapper = $('.wrapper');

var columns;
var rows;
var boxWidth;

printGrid();

function printGrid() {
	columns = prompt("Columns:");
	rows = prompt("Rows:");
	boxWidth = wrapperWidth / columns;

	$('.wrapper').empty();

	for(var i = 0; i < rows; i++) {
		for(var j = 0; j < columns; j++) {
			$wrapper.append("<div class=\"sketch_box\"></div>");
		}
	}

	$wrapper.append("<br class=\"clear\" />");

	$('.sketch_box').css('width', boxWidth);
	$('.sketch_box').css('height', boxWidth);

	$(document).ready(function() {
	$('div.sketch_box').mouseenter(function() {
		$(this).css('background-color', '#3E9A22');
	});

	$('div.sketch_box').click(function() {
		printGrid();
	});
});
}
