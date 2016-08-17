/*$active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
    $('#accordion .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
    $('#accordion').on('show.bs.collapse', function (e) {
        $('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })*/
var flag = false;
$(window).load(function(){
	var element = $('.number-section');

$(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() > element.offset().top + element.height() /3 && !flag){
        	flag = true;
			var interval = setInterval(updateTimer, 70);
			function updateTimer() {
				var counterTable = $('.counter');
				for (var i = 0; i < counterTable.length; i++){
					var dataTo = parseInt($(counterTable[i]).attr("data-to"));
					var currentValue = parseInt($(counterTable[i]).text());
					var change = parseInt($(counterTable[i]).attr("delta"));
					currentValue = currentValue + change;
					if (currentValue > dataTo) {
						currentValue = dataTo;
						var finishedCounters = 0;
						for (var j = 0; j < counterTable.length; j++) {
  							if(parseInt($(counterTable[j]).attr("data-to")) == parseInt($(counterTable[j]).text())) {
    							finishedCounters++;
    						}
  						}
						if (finishedCounters == counterTable.length) {
							clearInterval(interval);
						}
					}
					$(counterTable[i]).text(currentValue);
				}
			}
		}

});
});