var img_num,screen_w;
var index=0,i,temp=0,distance;
var interval;
$(document).ready(function(){
	
	img_num=$(".Ahmedbxslider li").length;
	screen_w=$(".fifth-blk-container").width();
	init();
	$(window).resize(function(){ resizing(); });
	$('.bxslider').bxSlider({pagerCustom: '#bx-pager'});
	
});

function init(){
	if(screen_w>=1100){
		distance=screen_w/3;
	}
	else if(screen_w>=900){
		distance=screen_w/2;
	}
	else if(screen_w>=700){
		distance=screen_w/2;
	}
	else{
		distance=screen_w/1;
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
function resizing() {
	clearInterval(interval);
	screen_w=$(".fifth-blk-container").width();
	index=0;
	temp=0;
	if(screen_w>=1100){
		distance=screen_w/3;
	}
	else if(screen_w>=900){
		distance=screen_w/2;
	}
	else if(screen_w>=700){
		distance=screen_w/2;
	}
	else{
		distance=screen_w/1;
	}
	for(i=1;i<=img_num;i++){	
		$(".item"+i).css('left',temp);
		$(".item"+i).css('width',distance);
		temp+=distance;
	}
	interval=setInterval(move,3000);
}

function move(){
	var distance,element,style,left,x,j,shift,part;
	if(screen_w>=1100){
		if(img_num-index-3==0){
			for(j=1;j<=img_num;j++)
			{
				element = document.getElementsByClassName('item'+j);
			    style = window.getComputedStyle(element[0]);
                left = style.getPropertyValue('left');
	            x = parseInt(left);
			    distance=screen_w/3;
			    x=x+distance*(img_num-3);
		        $(".item"+j).css('left',x);
			}
			index=0;
		}
		else{
			part=3;
			if(img_num-index-6>=0){
				shift=3;
				index+=3;
			}
			else{
				shift=-(img_num-index-6);
				index+=-(img_num-index-6);
			}
		}
	}
	else if(screen_w>=900){
			if(img_num-index-2==0){
				for(j=1;j<=img_num;j++)
				{
					element = document.getElementsByClassName('item'+j);
			        style = window.getComputedStyle(element[0]);
                    left = style.getPropertyValue('left');
	                x = parseInt(left);
			        distance=screen_w/4;
			        x=x+distance*(img_num-4);
		            $(".item"+j).css('left',x);
				}
				index=0;
			}
			else{
			part=2;
			if(img_num-index-4>=0){
				shift=2;
				index+=2;
			}
			else{
				shift=-(img_num-index-4);
				index+=-(img_num-index-4);
			}
		}
	}
	else if(screen_w>=700){
			if(img_num-index-2==0){
				for(j=1;j<=img_num;j++)
				{
					element = document.getElementsByClassName('item'+j);
			        style = window.getComputedStyle(element[0]);
                    left = style.getPropertyValue('left');
	                x = parseInt(left);
			        distance=screen_w/2;
			        x=x+distance*(img_num-2);
		            $(".item"+j).css('left',x);
				}
				index=0;
			}
			else{
			part=2;
			if(img_num-index-4>=0){
				shift=2;
				index+=2;
			}
			else{
				shift=-(img_num-index-4);
				index+=-(img_num-index-4);
			}
		}
	}
	else{
		if(img_num-index-1==0){
			for(j=1;j<=img_num;j++)
			{
				element = document.getElementsByClassName('item'+j);
			    style = window.getComputedStyle(element[0]);
                left = style.getPropertyValue('left');
	            x = parseInt(left);
			    distance=screen_w/1;
			    x=x+distance*(img_num-1);
		        $(".item"+j).css('left',x);
			}
			index=0;
		}
		else{
			part=1;
			if(img_num-index-2>=0){
				shift=1;
				index+=1;
			}
			else{
				shift=-(img_num-index-2);
				index+=-(img_num-index-2);
			}
		}
	}
	for(j=1;j<=img_num;j++)
	{
		element = document.getElementsByClassName('item'+j);
		style = window.getComputedStyle(element[0]);
        left = style.getPropertyValue('left');
	    x = parseInt(left);
		distance=screen_w/part;
		x=x-distance*shift;
		$(".item"+j).css('left',x);
	}
}