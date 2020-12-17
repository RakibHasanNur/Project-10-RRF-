$(".product-list").masonry();
// $('.product-list').masonry({
//   // options
//   itemSelector: '.single-product-item',
//   // columnWidth: 200
// });
$(".homepage-slides").owlCarousel({
	items:1,
	loop: true,
	autoplay: false,
	dots: false,
	nav: true,
	navText: ["<i class='fa fa-long-arrow-left' ></i>","<i class='fa fa-long-arrow-right' ></i>"]
});
$(".single-product-promotion").owlCarousel({
	items:1,
	loop: true,
	// autoplay: true,
	dots: true,
	nav: false,
	margin: 20
});

$(".manu-trigger").on('click',function(){
	$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
});
$(".menu-close").on('click',function(){
	$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
});
$(".off-canvas-overlay").on('click',function(){
	$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
});

