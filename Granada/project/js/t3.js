var bx_btn_ltoggle=true;
$(document).ready(function(){
	
	var mySlidebars = new $.slidebars();
	$('.bxslider').bxSlider({pagerCustom: '#bx-pager',auto:true});
	$('.About').click(function(event){
		$('html, body').animate({
			scrollTop: $("#About").offset().top
		}, 500);
		mySlidebars.slidebars.toggle('right');
		return false;
	});
	$('.Feature').click(function(){
		$('html, body').animate({
			scrollTop: $("#Feature").offset().top
		}, 500);
		mySlidebars.slidebars.toggle('right');
		return false;
	});
	$('.Contact').click(function(){
		$('html, body').animate({
			scrollTop: $("#Contact").offset().top
		}, 500);
		mySlidebars.slidebars.toggle('right');
		return false;
	});
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st<100){
			$('.lines').removeClass('l1');
			$('.logo-btn').removeClass('l2');
			$('.logo').removeClass('l3');
			$('.logo3').removeClass('l4');
			$('.logo2').removeClass('l5');
		}else{
			$('.lines').addClass('l1');
			$('.logo-btn').addClass('l2');
			$('.logo').addClass('l3');
			$('.logo3').addClass('l4');
			$('.logo2').addClass('l5');
		}
   });
   $('.text1').children('.btn').click(function(){
	  
	   
	   $header=$(this).parent('.text1').children('.title').children('p').text();
	   $source=$(this).data("source");
	   $('.modal-title').empty();
	   $('.modal-title').append($header);
	   $('.modal-body').empty();
	   $('.modal-body').load($source);
   });
   $('.first-part').children('.row').children('.col-sm-6').children('.btn').click(function(){
	     
	   $source=$(this).data("source");
	   $title=$(this).data("title");
	   $('.modal-title').empty();
	   $('.modal-title').append($title);
	   $(".modal-body" ).empty();
	   $( ".modal-body" ).load($source);
   });
   
});