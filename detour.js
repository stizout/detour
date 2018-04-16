// $("#icon").click(function(){
// 	$("body").css("backgroundColor", "red");
// })

$("#icon").click(function(){
	$("#listenPage").toggle();
	$("#mainPage").toggle();
	$("body").css("backgroundColor", "#fff9e6");
})

$("#li1").hover(function(){
	$("body").css("backgroundColor", "rgba(204, 0, 102, 0.2)");
	$(this).css("font-size", "1.2em");
	mouseout();
});

$("#li2").hover(function(){
	$("body").css("backgroundColor", "rgba(102, 0, 255, 0.2)");
		$(this).css("font-size", "1.2em");
		mouseout();

});
$("#li3").hover(function(){
	$("body").css("backgroundColor", "rgba(0, 153, 51, 0.2)");
		$(this).css("font-size", "1.2em");
		mouseout();

});
$("#li4").hover(function(){
	$("body").css("backgroundColor", "rgba(255, 119, 51, 0.5)");
		$(this).css("font-size", "1.2em");
		mouseout();

});
$("#li5").hover(function(){
	$("body").css("backgroundColor", "rgba(107, 0, 179, 0.5)");
		$(this).css("font-size", "1.2em");
		mouseout();

});
$("#li6").hover(function(){
	$("body").css("backgroundColor", "rgba(230, 0, 230, 0.5)");
		$(this).css("font-size", "1.2em");
		mouseout();

});

var mouseout = function(){
	$("li").mouseleave(function(){
		$("body").css("backgroundColor", "#fff9e6");
		$(this).css("font-size", "1.5vw");
	});
};