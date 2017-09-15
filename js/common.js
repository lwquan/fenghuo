if($(window).width()<=414){
	document.onreadystatechange = subSomething//当页面加载状态改变的时候执行这个方法. 
	function subSomething(){ 
		if(document.readyState == "complete"){//当页面加载状态 	
			$("#loadbg").remove()
			$("#loadingBar").remove()
		} 
	}		
}
$(function(){	
	if($(window).width()<=780){
		$(".navbar-brand img").attr("src","images/huudon_logo_gray.png")
		$(".navbar-toggle").click(function(event){
			$(this).toggleClass("active")
			$(".navbar-collapse").toggleClass("in")
			event.stopPropagation()
		})
		$(document).click(function(){
			$(".navbar-toggle").removeClass("active")
			$(".navbar-collapse").removeClass("in")
			$(".navbar-collapse").stop().slideUp()
		})
	}
	$(window).resize(function(){
		if($(window).width()<=1100){
			$(".navbar-brand img").attr("src","images/huudon_logo_gray.png")
		}			
	})
	
	if($(window).width()>991){
		//signing company
		var mySwiper = new Swiper('.signing .swiper-container',{
			pagination: '.signing .pagination',
			loop:true,    
			autoplay: 3000,
			slidesPerView: 4,
			slidesPerGroup: 4,
			paginationClickable: true
		})	
		
		if($(document).scrollTop()>1){
			$(".navbar").addClass("add")
			if($(window).width()>=1200){
				$(".nav-top>li:last-child >span").addClass("add")
			}else{
				$(".nav-top>li:first-child >span").addClass("add")
			}
			$(".navbar-brand img").attr("src","images/huudon_logo_gray.png")
		}	
		
		var url = document.URL
		$(window).scroll(function(){
			if($(window).scrollTop()>1){
				$(".navbar").addClass("add")
				if($(window).width()>=1200){
					$(".nav-top>li:last-child >span").addClass("add")
				}else{
					$(".nav-top>li:first-child >span").addClass("add")
				}
				$(".nav-top .icon_s1").css("background-image","url(images/icon_s1s.png)")
				$(".navbar-brand img").attr("src","images/huudon_logo_gray.png")
			}else{
				$(".navbar").removeClass("add")
				$("#success-top").addClass("add")
				$(".nav-top .icon_s1").css("background-image","url(images/icon_s1.png)")		
				$("#success-top .icon_s1").css("background-image","url(images/icon_s1s.png)")
				if($(window).width()>=1200){
					$(".nav-top>li:last-child >span").removeClass("add")
				}else{
					$(".nav-top>li:first-child >span").removeClass("add")
				}	
				if(/index/.test(url.toLowerCase()) || /10000300/.test(url.toLowerCase()) || /service/.test(url.toLowerCase()) || /about/.test(url.toLowerCase()) || /contact/.test(url.toLowerCase()) || /program/.test(url.toLowerCase())){
					$(".navbar-brand img").attr("src","images/huudon_logo.png")	
					
				}
			}			
		})
	}
	
	if($(window).width()>=1200){
		//弹窗
		/*setTimeout(function(){
			$(".huudon-layout").stop().fadeIn()
		},10000)
		$(".huudon-layout span").click(function(){
			$(".huudon-layout").stop().fadeOut()
		})	*/	
		
		//悬浮框
		$(".huudon-float li.style2").hover(function(){ 
			var _this = $(this);
			_this.removeClass("hidden").stop().animate({left : - 184}, 400)
		}, function(){
			var _this = $(this);
			_this.stop().animate({left : 0}, 400, function(){
				_this.addClass("hidden")
			})
		})
		$(".huudon-float li.style1").hover(function(){
			$(this).removeClass("hidden").stop().animate({marginLeft : - 10}, 400)
		}, function(){
			var _this = $(this);
			_this.stop().animate({marginLeft : 0}, 400, function(){
				_this.addClass("hidden")
			})
		})	
		$(".gotop").click(function(){
			$("html,body").stop().animate({scrollTop: "0"},600)
		})
			
		$(".subnav li").hover(function(){
			$(this).stop().animate({top:"-10"},300)
		},function(){
			$(this).stop().animate({top:"0"},300)
		})
	}
})
