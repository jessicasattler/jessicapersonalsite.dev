(function(){
'use strict';

 

/////////ziplining
 	var first = function(){
 		$(this).animate({
 			opacity: 1.00
 		}, 1000);
 		$("#addWords").append("<br>"+"I've only ziplined once in my life, but I loved it. Sometimes I'm hesitant to try new things but moments like these remind me that it's worth the risk to try something new every now and then.");
 		$(".zipliningClass").css("background-color","black");
 		// $(".zipliningClass").animate({
 		// 	backgroundColor: "black"
 		// },1000)
 	}

 	var second = function(){
 		$(this).animate({
 			opacity: .5
 		},500);
 		$(".zipliningClass").html("<img src=/img/zipliningDream.jpg>");
 		$(".zipliningClass").css("background-color","transparent");
 	}
 	$(".zipliningClass").hover(first,second);
//////////whit and jessi

 	 	var first2 = function(){
 		$(this).animate({
 			opacity: 1.00
 		}, 1000);
 		$("#addWords2").append("<br>"+"Spending time in downtown San Antonio, Texas with my husband, family, and friends is one of my favorite things to do. I love exploring my beautiful city.");
 		$(".whitAndJessClass").css("background-color","black");
 	}

 	var second2 = function(){
 		$(this).animate({
 			opacity: .5
 		},500);
 		$(".whitAndJessClass").html("<img src=/img/whitAndJessDream2.jpg>");
 		$(".whitAndJessClass").css("background-color","transparent");
 	}

 	$(".whitAndJessClass").hover(first2,second2);
////////Fabi
 	var first3 = function(){
 		$(this).animate({
 			opacity: 1.00
 		}, 1000);
 		$("#addWords3").append("<br>"+"This is a picture of my cute cat, Fabiana. After a long day, I enjoy playing with her and/or watching tv as she sleeps in the couch next to me.");
 		$(".fabiClass").css("background-color", "black");
 		$(".picture").css("height","200px");
 	}

 	var second3 = function(){
 		$(this).animate({
 			opacity: .5
 		},500);
 		$(".fabiClass").html("<img src=/img/FabiDream.jpg>");
 		$(".fabiClass").css("background-color","transparent");
 		$(".picture").css("height","240");


 	}

 	$(".fabiClass").hover(first3,second3);




////////China
 	var first4 = function(){
 		$(this).animate({
 			opacity: 1.00
 		},1000);
 		$("#addWords4").append("<br>"+"I love traveling to both places that are twenty-minutes away, or across the globe. The furthest place I've traveled to is Beijing, China. I hope to travel more in the future.");
 		$(".chinaClass").css("background-color","black");
 	}

 	var second4 = function(){
 		$(this).animate({
 			opacity: .5
 		},500);
 		$(".chinaClass").html("<img src=/img/chinaDream2.jpg>");
 		$(".chinaClass").css("background-color","transparent");

 	}

    $(".chinaClass").hover(first4,second4);

})();