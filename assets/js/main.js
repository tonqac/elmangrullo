$(function(){
	// Sub menú pages
	$(".submenu a").on("click", function(){
		$(".submenu .active").removeClass("active");
		$(this).closest("li").addClass("active");

		var rel = $(this).attr("rel");
		$(".texto_interno .active").removeClass("active").hide();
		$(".texto_interno ."+rel).addClass("active").fadeIn(500);

		console.log(".texto_interno ."+rel, $(".texto_interno ."+rel));


		console.log("Muestro gráfico: " + rel);
	});


	// Menú principal
	$("#nav a").on("click", function(){
		$("#nav .active").removeClass("active");
		$(this).addClass("active");

		var rel = $(this).attr("rel");

		$(".page.active").removeClass("active").fadeOut(300);
		$(".page."+rel).addClass("active").fadeIn(500);

		$(".page.active").find(".submenu li:first-child a").trigger("click");
	});

	$("#nav ul li:first-child a").trigger("click");
});