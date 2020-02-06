var mid,left,right,screen_w,img_num;
var img_num2,screen_w2;
var index=0,i,temp=0,distance;
var interval;
$(document).ready(function(){
	
	$(".dropdown-menu a").click(function(){
		
		var html="<div class='arrow-up'></div>";
		$(this).append(html);
		
	});
	$('.bxslider').bxSlider();
	
    init();
	$(window).resize(function(){ resizing(); });
	
	$(".btn_next").click(function(){
		
        removeClasses();
		newCoordinatesnext();
		addingClasses();
		resizing();
	});
	
	$(".btn_prev").click(function(){
		
		removeClasses();
		newCoordinatesprev();
        addingClasses();
		resizing();	
	});
	img_num2=$(".Ahmedbxslider li").length;
	screen_w2=$(".container5").width();
	init2();
	$(window).resize(function(){ resizing2(); });

});

function init() {
	img_num=$(".bxslider22 li").length;
	mid=img_num-1;
	left=mid+1;
	right=mid-1;
	addingClasses();
	resizing();
}

function resizing() {
	
	screen_w=$(".container").width();
	$(".mid").css('left',screen_w/4+'px');
	$(".mid").css('width',screen_w/2+'px');
	$(".left").css('left',2*screen_w/3+'px');
	$(".left").css('width',screen_w/3+'px');
	$(".right").css('left','0px');
	$(".right").css('width',screen_w/3+'px');
	$(".other").css('left','0px');
	$(".other").css('width',screen_w/3+'px');
}

function addingClasses(){
	
	$("#item"+mid).addClass("mid");
	$("#item"+left).addClass("left");
	$("#item"+right).addClass("right");
	var i;
	for(i=1; i<=img_num; i++){
		if($("#item"+i).hasClass("mid") || $("#item"+i).hasClass("left") || $("#item"+i).hasClass("right")){
			continue;
		}
		$("#item"+i).addClass("other");
	}
}

function removeClasses(){
	
	$("#item"+mid).removeClass("mid");
	$("#item"+right).removeClass("right");
	$("#item"+left).removeClass("left");
	var j;
	for(j=1;j<=img_num;j++){
		$("#item"+j).removeClass("other");
	}
}

function newCoordinatesprev(){
	right=mid;
	mid=left;
	if(left==img_num){
		left=1;
	}
	else{
		left++;
	}
}

function newCoordinatesnext(){
	left=mid;
	mid=right
	if(right==1){
		right=img_num;
	}
	else{
		right--;
	}
}




function init2(){
	if(screen_w2>=1100){
		distance=screen_w2/6;
	}
	else if(screen_w2>=900){
		distance=screen_w2/4;
	}
	else if(screen_w2>=700){
		distance=screen_w2/3;
	}
	else{
		distance=screen_w2/1;
	}
	var counter=0;
	$(".Ahmedbxslider li").each(function(){	
		counter++;
		$(this).addClass("item"+counter);
		$(".item"+counter).css('left',temp);
		$(".item"+counter).css('width',distance);
		temp+=distance;
	});
	interval=setInterval(move,3000);
}
function resizing2() {
	clearInterval(interval);
	screen_w2=$(".container5").width();
	index=0;
	temp=0;
	if(screen_w2>=1100){
		distance=screen_w2/6;
	}
	else if(screen_w2>=900){
		distance=screen_w2/4;
	}
	else if(screen_w2>=700){
		distance=screen_w2/3;
	}
	else{
		distance=screen_w2/1;
	}
	for(i=1;i<=img_num2;i++){	
		$(".item"+i).css('left',temp);
		$(".item"+i).css('width',distance);
		temp+=distance;
	}
	interval=setInterval(move,3000);
}

function move(){
	var distance,element,style,left,x,j,shift,part;
	if(screen_w2>=1100){
		if(img_num2-index-6==0){
			for(j=1;j<=img_num2;j++)
			{
				element = document.getElementsByClassName('item'+j);
			    style = window.getComputedStyle(element[0]);
                left = style.getPropertyValue('left');
	            x = parseInt(left);
			    distance=screen_w2/6;
			    x=x+distance*(img_num2-6);
		        $(".item"+j).css('left',x);
			}
			index=0;
		}
		else{
			part=6;
			if(img_num2-index-12>=0){
				shift=6;
				index+=6;
			}
			else{
				shift=-(img_num2-index-12);
				index+=-(img_num2-index-12);
			}
		}
	}
	else if(screen_w2>=900){
			if(img_num2-index-4==0){
				for(j=1;j<=img_num2;j++)
				{
					element = document.getElementsByClassName('item'+j);
			        style = window.getComputedStyle(element[0]);
                    left = style.getPropertyValue('left');
	                x = parseInt(left);
			        distance=screen_w2/4;
			        x=x+distance*(img_num2-4);
		            $(".item"+j).css('left',x);
				}
				index=0;
			}
			else{
			part=4;
			if(img_num2-index-8>=0){
				shift=4;
				index+=4;
			}
			else{
				shift=-(img_num2-index-8);
				index+=-(img_num2-index-8);
			}
		}
	}
	else if(screen_w2>=700){
			if(img_num2-index-3==0){
				for(j=1;j<=img_num2;j++)
				{
					element = document.getElementsByClassName('item'+j);
			        style = window.getComputedStyle(element[0]);
                    left = style.getPropertyValue('left');
	                x = parseInt(left);
			        distance=screen_w2/3;
			        x=x+distance*(img_num2-3);
		            $(".item"+j).css('left',x);
				}
				index=0;
			}
			else{
			part=3;
			if(img_num2-index-6>=0){
				shift=3;
				index+=3;
			}
			else{
				shift=-(img_num2-index-6);
				index+=-(img_num2-index-6);
			}
		}
	}
	else{
		if(img_num2-index-1==0){
			for(j=1;j<=img_num2;j++)
			{
				element = document.getElementsByClassName('item'+j);
			    style = window.getComputedStyle(element[0]);
                left = style.getPropertyValue('left');
	            x = parseInt(left);
			    distance=screen_w2/1;
			    x=x+distance*(img_num2-1);
		        $(".item"+j).css('left',x);
			}
			index=0;
		}
		else{
			part=1;
			if(img_num2-index-2>=0){
				shift=1;
				index+=1;
			}
			else{
				shift=-(img_num2-index-2);
				index+=-(img_num2-index-2);
			}
		}
	}
	for(j=1;j<=img_num2;j++)
	{
		element = document.getElementsByClassName('item'+j);
		style = window.getComputedStyle(element[0]);
        left = style.getPropertyValue('left');
	    x = parseInt(left);
		distance=screen_w2/part;
		x=x-distance*shift;
		$(".item"+j).css('left',x);
	}
}