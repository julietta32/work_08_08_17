
//_________________menu--------------------//

$(function(){

   $(".log").click(function(e)
					  {
	    e.preventDefault();
	     $('.push_log').slideToggle(700);
	       $('header').hide();
	   	     $('.section_menu').hide();
	           $('.search_invisible').hide();
	$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
	       	$('.section').html('<a href=""><img src="images/1.png"> section</a>');
		      $('.section a').css({color:'white', fontSize:'16px', heigh:'76px',});
	           $('.search').html('<img src="images/2.png"><a href=""> search</a>');
	             $('.search a').css({color:'white', fontSize:'16px', heigh:'76px',}); 
})
   });
$(function()
        {
$(".chicago_grey a").click(function(e)
					  {
	    e.preventDefault();
	      $('.push_log').hide();
	        $('header').show();
	          $('form')[0].reset();   
})
   });

$(function(){

   $(".cancel").click(function(e)
					  {
	    e.preventDefault();
	      $('.push_log').hide();
	        $('header').show();
	   
})
   });

//_________________podskazka--------------------//
$(function(){

   $(".in").click(function(e){
	   e.preventDefault();
	     var a= $('input[id="email"]').val();
	  				  if (a==""){
	                    $data_tooltip = $('input[id="email"]').attr("data-tooltip");
                         $(".tooltip").text($data_tooltip)
                           .css({ 
                                  "top" : 170,
                                  "left" :100
                            }) .show();
  }});});
		
$(function(){

   $(".in").click(function(e){
	   e.preventDefault();
	      var a= $('input[id="password"]').val();

	  				  if (a==""){
	   $data_tooltip1 = $('input[id="password"]').attr("data-tooltip1");
          $(".tooltip1").text($data_tooltip1)
             .css({ 
                "top" : 170,
                 "left" :380
              }) 
              .show();
  }});});					   
	   



$(function(){
      $('input[id="email"]').mousemove(function (eventObject){
		  
		var a= $('input[id="email"]').val();

	  				  if (a==""){  
          $data_tooltip = $('input[id="email"]').attr("data-tooltip");
              $(".tooltip").text($data_tooltip)
             .css({ 
                "top" : 170,
                "left" : 100
              }) 
              .show();} })
	
		  .mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip").hide();
	
      });
});


$(function(){
      $('input[id="password"]').mousemove(function (eventObject) {
	    var a= $('input[id="password"]').val();

	  				  if (a==""){	
		 
          $data_tooltip1 = $('input[id="password"]').attr("data-tooltip1");
           $(".tooltip1").text($data_tooltip1)
             .css({ 
                "top" : 170,
                "left" : 330
              }) 
              .show();
	} })
		  
		  .mouseout(function (e) {
		   e.preventDefault();
            $(".tooltip1").hide();
		   
 });});



//_________________________Clock-----------------------//

var hide_pos =300;
 var h_hght= 161;
  var h_mrg=0;
$(function(){
	var elem= $('header');
	  var top = $(this).scrollTop();
	
	if (top>h_hght){
		elem.css('header', h_mrg);
	}
	$(window).scroll(function(){
		top=$(this).scrollTop();
	if(top > hide_pos){
		elem.css('position', 'static');
	}
	else{
		elem.css('position', 'fixed');
	};
	if (top+h_mrg < h_hght){
		elem.css('header', (h_hght-top));
	}else {
		elem.css('header',h_mrg);}
	});
	});
var d = new Date();

var day=new Array("SUNDAY","MONDAY","TUESDAY",
"WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");

var month=new Array("JAN.","EBR.","MARCH","APRIL","MAY","JUNE",
"JULY","AUG.","SEPT.","OCT.","NOVEM.","DECEMB.");

var data=(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]
+ " " + d.getFullYear());
$(function(){
	
	 $(".date").html(data);
});
	

$(function(){

	
   $('.search a').click(function(e)
					  {
	    e.preventDefault();
	     $('.search_invisible').show();
	      $('.search').html('<a href=""> X search</a>').css ({ 
                marginTop:'18px',
		          color: '$grey',
              })  
})
   });

//________________________weather----------------------//


(function(a,f,g){
	var e=a.createElement(f);e.async=1;e.src=g; a=a.getElementsByTagName(f)[0];a.parentNode.insertBefore(e,a)})(document,'script','//nuipogoda.ru/informer/nuipogoda.js');

//_______________slider-------------------------------//

$(document).ready(function(){
	
 function slider_1(){ 
       $(".slider_1").each(function () {
  var obj = $(this);
   $(obj).append("<div class='nav_1'></div>");
     $(obj).find("li").each(function () {
       $(obj).find(".nav_1").append("<span rel='"+$(this).index()+"'></span>"); 
        $(this).addClass("slider_1"+$(this).index());
    });
         $(obj).find("span").first().addClass("on"); 
    });
function sliderJS (obj, sl) { 
  var ul = $(sl).find(".ul_1"); 
    var bl = $(sl).find("li.slider_1"+obj); 
      var step = $(bl).width(); 
         $(ul).animate({marginLeft: "-"+step*obj}, 500); 
}
	   
$(document).on("click", ".slider_1 .nav_1 span", function() { 
  var sl = $(this).closest(".slider_1"); 
    $(sl).find("span").removeClass("on"); 
      $(this).addClass("on"); 
       var obj = $(this).attr("rel"); 
        sliderJS(obj, sl); 
           return false;})
   };
 slider_1()});


//_______________________________________menu blue-----------------//


$ (function(){
	var $links = $('.section a');
	$links.on('click', function(e){
		e.preventDefault();
        	var $submenu = 	$('.section_menu');
	           	$('.section').html('<a href="">X sections</a>');
	          	$('.section a').css({color:'grey', marginTop:'30',});
		$submenu.slideToggle();});});


$ (function(){
	var $links1 = $('.strela1');
	 $links1.on('click', function(e){
		e.preventDefault();
	       var $submenu1 = $('.sub_1');
	        	$submenu1.slideToggle();
		$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
	});});




$ (function(){
		var $links2 = $('.strela2');
	$links2.on('click', function(e){
		e.preventDefault();
          	var $submenu2 = $('.sub_2');
	        	$submenu2.slideToggle();
		$('.sub_1').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
		
	
	});});
		
		
$ (function(){
		var $links3 = $('.strela3');
	$links3.on('click', function(e){
		e.preventDefault();
	          $submenu3 = $('.sub_3');
		        $submenu3.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
		

	});});
		
		
$ (function(){
		var $links4 = $('.strela4');
	      $links4.on('click', function(e){
		e.preventDefault();
	        var $submenu4 = $('.sub_4');
	        	$submenu4.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
	
			
	});});
		
		
$ (function(){
		var $links5 = $('.strela5');
	$links5.on('click', function(e){
		e.preventDefault();
	      var $submenu5 = $('.sub_5');
	     	$submenu5.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
	
		
	});});
		
		
$ (function(){
		var $links6 = $('.strela6');
	$links6.on('click', function(e){
		e.preventDefault();
	       var $submenu6 = $('.sub_6');
	     	$submenu6.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_7').hide();$('.sub_8').hide();$('.sub_9').hide();
	
		
		});});
		
		
$ (function(){
		var $links7 = $('.strela7');
	$links7.on('click', function(e){
		e.preventDefault();
	      var $submenu7 = $('.sub_7');
	         	$submenu7.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_8').hide();$('.sub_9').hide();
	
	});});
		
		
$ (function(){
		var $links8 = $('.strela8');
	$links8.on('click', function(e){
		e.preventDefault();
	         var $submenu8 = $('.sub_8');
	            	$submenu8.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_9').hide();
	
	});});
		
		
$ (function(){
		var $links9 = $('.strela9');
	$links9.on('click', function(e){
		e.preventDefault();
	         var $submenu9 = $('.sub_9');
	        	$submenu9.slideToggle();
		$('.sub_1').hide();$('.sub_2').hide();$('.sub_3').hide();$('.sub_4').hide();$('.sub_5').hide();$('.sub_6').hide();$('.sub_7').hide();$('.sub_8').hide();
	
	});});
	

//______________search button____________________//

	$ (function(){
	var $ls = $('#s_i');
    	$ls.keyup (function(e){
		 e.preventDefault();

		$('.search_b').css({backgroundColor: 'grey', color: 'white',});
		
		 $('.search_b').hover(function(e){
	        $('.search_b').css({backgroundColor: '#585858', color: 'white',});		
		})
		
	});});




