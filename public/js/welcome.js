(function(){
'use strict';
     
    function animateTitle(){
     	 $(".cover-heading").animate({
    		top: "+=50",
            left: "+=200"
        }, 1000).animate({
            left: "+=50"
        }, 500).animate({
            top: "+=-50"
        }, 1000).animate({
            left: "-=250"
        }, 500);
     	// alert("you clicked the document");
     }

     $(document).click(animateTitle)

})();