$(function(){

//轮播图部分
	var r = 0;
	//向右开始切换
	function set(){
		$('.banner').children().eq(r+1).fadeIn('slow').siblings().hide();
			r++;
		if(r > 2){
			$('.banner').children().eq(0).fadeIn('slow').siblings().hide();
			r = 0;
		}
	}
	
	//左右按钮翻页
	$('.icon-rightarrow').click(function(){
		set();
	});
	$('.icon-leftarrow').click(function(){
		$('.banner').children().eq(r-1).fadeIn('slow').siblings().hide();
		r--;
		if(r < 0){
			$('.banner').children().eq(2).fadeIn('slow').siblings().hide();
			r = 2;
		}
	});
	
	//定时器自动
	time = setInterval(set,3000);
	
	$('.banner,.page,.login').mouseover(function(){
		clearInterval(time);
	})
	$('.banner,.page,.login').mouseout(function(){
		time = setInterval(set,3000);
	})
	
	
//选项卡部分
	$('.login-tab').children().click(function(){
		$(this).addClass('active').siblings('a').removeClass('active');
		
		var index = $(this).index();
		$('.div-contain').children().eq(index).show().siblings().hide();
	})

	//底部滑动条
	
	var t1 = $('main').offset().top;
	
	$(window).scroll(function(){
		var top =$(window).scrollTop();
		if(top > 400 && top < 4500){
			$('.glide').addClass('slide-up');
		}else{
			if($('.glide').css('bottom')== '-210px'){
				$('.glide').removeClass('slide-up').removeClass('slide-down');
			}
			else{
				$('.glide').removeClass('slide-up').addClass('slide-down');
				
			}
			
		}
		
	})
	
	
})