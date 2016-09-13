$(function() {
	var carouselList = $('#carousel ul');
	function moveFirstSlide() {
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			lastItem.after(firstItem);
			carouselList.css({'margin-left': 0});
			increaseImgNumber();
			changeIndicator();
	}
	function changeSlides() {		
		carouselList.animate({'margin-left':-700}, 500, moveFirstSlide());
	}
	setInterval(changeSlides, 10000);

	var currentImg = 0;
	var imgCount = carouselList.children().length;
	function increaseImgNumber() {
		if(currentImg < imgCount-1) {
			currentImg++;
		} else {
			currentImg = 0;
		}
	}
	function changeIndicator() {
		$(".carousel-indicators li").removeClass("active");
		$(".carousel-indicators li").eq(currentImg).addClass("active");
	}
	var slidesArray = $("ul li");

	$('.carousel-indicators li').click(function() {
		var slideTo = parseInt($(this).attr('data-slide-to'));
		var numberOfMoves = 0;
		if (slideTo >= currentImg) {
			numberOfMoves = slideTo - currentImg;
		} else {
			numberOfMoves = imgCount - currentImg + slideTo;
		}
		var i = 0;
		for(i = 0; i < numberOfMoves; i++) {
			moveFirstSlide();
		}
	})
});