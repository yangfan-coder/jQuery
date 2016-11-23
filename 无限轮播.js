

$(function(){

	
	// 获取元素
	var vcon = $(".v_cont");
	var offset = ($(".v_cont li").width())*-1;
		
	/*
		right_Btn
	*/
	$(".you").click(function(){
		vcon.stop().animate({marginLeft:offset},"slow",function(){
				// 点击的时候控制的 vcon 的marginLeft 然后再 animate 回调的时候获取li的第一个元素 添加到ul的最后一个 以此循环
				var firstItem = $(".v_cont ul li").first();
				vcon.find(".flder").append(firstItem);
				$(this).css("margin-left","0px");
		});
	});
	/*
		left_Btn
	*/
	$(".zuo").click(function(){
		// 原理也一样
		var vcon = $(".v_cont");
		var offset = ($(".v_cont li").width()*-1);
		var lastItem = $(".v_cont ul li").last();
		vcon.find(".flder").prepend(lastItem);
		vcon.css("margin-left",offset);
		vcon.animate({marginLeft:"0px"},"slow")
	});
});