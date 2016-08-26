(function(){
'use strict';
	
	// var nextParagraph = function(){
	// 	$("#careerText").replaceWith("<p>" +"A few months before I completed my first year of my masters program, my husband told me about Codeup and how they offered scholarships for women. I started to think it was not too late to redeem my past mistakes. I thought the only way for me to become a software developer was to return to college and major in computer science in college. However, I remember receiving a phone call from one of my sisters that day, who told me about one of her friends who graduated with a bachelors in business but learned to program in different languages and is now a successful software developer."
 //                  + "</p>"+
 //                  "<p>" +"I know finishing Codeup’s Full Stack Development program is only the beginning of my career. After Codeup, I would like to become an expert in other languages, such as Python and Java, as well as refine my knowledge of PHP, JavaScript, and in general, the other other major topics we cover in Codeup. My 'end goal' would be to find a job in a company that encourages mentorship, constant growth and development, where I can gain a wide breadth of knowledge about many different aspects of the software development industry. Thanks to Codeup, for the first time in a long time, I feel like I’m on right path. For the first time, I feel like I’m reaching past my potential."
 //                  +"</p>")
	// }
	var paragraphs = [  "<p>As an immigrant from Mexico, I grew up with the constant reminder that my parents sacrificed their \
					financial stability in order for my sisters and I to have more educational and vocational opportunities. \
					Because of this, I felt I had to pursue a career that contributed to both society and my family. From early on,\
					 I thought this career would be in engineering, where I could solve complex problems directly affecting people’s lives.</p>\
					 <p>However, when it came time to choose a major in college, I couldn’t quite make the leap. I had taken a few math\
					  classes, but felt as though I did not fit the stereotype of what a “computer science engineer” was. I became afraid\
					   to fail and disappoint my family, so I choose fields of study I thought I could safely succeed in: Psychology and \
					   Business.</p>",

					 "<p>When I graduated from the University of Texas at Austin, I decided to first focus on a role in a business setting\
					 and was hired as a call center consultant at a credit union. I excelled at this job, but felt like I was wasting my\
					 potential. So I switched gears and explored options in Psychology, ultimately enrolling in a masters degree program\
					 in clinical mental health. Again, while I excelled in my program I was never quite satisfied and craved more objective work. </p>\
                  	<p>While I was enrolled in my masters program, I worked for a nonprofit organization called Girlstart, which empowers young\
                  	 women to pursue careers in STEM. I was in charge of delivering after-school science lessons to inspire and foster their scientific\
                  	 curiosity. I felt very passionate about this program, because I wanted to prevent these young women from making the same\
                  	 mistake that I had: shying away from engineering because I believed I wasn’t smart enough. </p>",

                  	 "<p>A few months before I completed my first year of my masters program, my husband told me about Codeup and how they offered\
                  	 scholarships for women. I started to think it was not too late to redeem my past mistakes. I thought the only way for me to\
                  	 become a software developer was to return to college and major in computer science in college. However, I remember receiving\
                  	 a phone call from one of my sisters that day, who told me about one of her friends who graduated with a bachelors in business\
                  	 but learned to program in different languages and is now a successful software developer. </p>\
                  	<p>I know finishing Codeup’s Full Stack Development program is only the beginning of my career. After Codeup, I would like to\
                  	 become an expert in other languages, such as Python and Java, as well as refine my knowledge of PHP, JavaScript, and in general,\
                  	 the other other major topics we cover in Codeup. My “end goal” would be to find a job in a company that encourages mentorship,\
                  	 constant growth and development, where I can gain a wide breadth of knowledge about many different aspects of the software\
                  	 development industry. Thanks to Codeup, for the first time in a long time, I feel like I’m on right path. For the first time,\
                  	 I feel like I’m reaching past my potential.</p> "]

 	var chooseParagraph = function(event){
 		if ($(this).is("#leftButton")){
 			var newPageNum = parseInt($("#pageNum").html())+1;
 			$("#careerText").html(paragraphs[+(newPageNum % 3)]);
 			$("#pageNum").html((newPageNum % 3) + 1);
 		} else if($(this).is("#rightButton")){
 			var newPageNum = parseInt($("#pageNum").html());
 			$("#careerText").html(paragraphs[newPageNum % 3]);
 			$("#pageNum").html((newPageNum % 3) + 1);
 		}
 	}
	$(".btn").click(chooseParagraph);
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