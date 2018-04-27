/**
 * Created by 子于 on 2017/9/19.
 */

// login切换
function logintoggle(targetid){
        var target=document.getElementById(targetid);
  
//      alert(target);
        if (target.style.display=="block"){
            target.style.display="none";
        }
        else {
            target.style.display="block";
            target.style.position="fixed";
        }
}

//close login
function closelogin(zhuceid,loginid){
	var login=document.getElementById(loginid);
	var zhuce=document.getElementById(zhuceid);
//	alert(login);
//	alert(zhuce);
	if(login.style.display=="block"||zhuce.style.display=="block"){
		login.style.display="none";
		zhuce.style.display="none";
	}
}

//新用户注册
function newuser(zhuceid,targetid){
	var zhuce=document.getElementById(zhuceid);
	var target=document.getElementById(targetid);
	if (zhuce.style.display=="block"){
	        zhuce.style.display="none";
	        target.style.display="block";
	        target.style.position="fixed";
        }
    else {
            zhuce.style.display="block";
            zhuce.style.position="fixed";
            target.style.display="none";
        }
}

//返回登录
function backlogin(zhuceid,loginid){
	var login=document.getElementById(loginid);
	var zhuce=document.getElementById(zhuceid);
		alert(login);
		alert(zhuce);
	if (zhuce.style.display=="block"){
		
		zhuce.style.display=="none";
		login.style.display=="block";
		login.style.position="fixed";
	}
    
}

// 轮播
   $(document).ready(function(){
       $('.flexslider').flexslider({
           directionNav: true,
           pauseOnAction: false,
           slideshowSpeed: 6000
       });
   });

//*********************轮播**************

//风琴特效
$(function() {
    $('#wrap #wrap-dongtai ul li:eq(0)').addClass('on');
    $('#wrap #wrap-dongtai ul li:eq(1)').addClass('b2');
    $('#wrap #wrap-dongtai ul li:eq(2)').addClass('b3');
    $('#wrap #wrap-dongtai ul li:eq(3)').addClass('b4');
    $('#wrap #wrap-dongtai ul li:eq(4)').addClass('b5');
    $('#wrap #wrap-dongtai ul li:eq(5)').addClass('b6');
    $('#wrap #wrap-dongtai ul li:gt(4)').hide();
    //当三级分类大于7个的是，成两排显示
    $('#wrap #wrap-dongtai ul li').each(function() {
        var len = $(this).find('.right dl a').length;
        if (len > 6) {
            $(this).find('.right dl a').addClass('yichu');
        }
    });

    //解决方案效果
    $('#wrap #wrap-dongtai ul li').each(function() {
        var left_h = $(this).find('.left_top').height();
        $(this).find('.left_top').css({
            'top': '50%',
            'margin-top': -left_h / 2
        });

        var dl_h = $(this).find('.right dl').height();
        $(this).find('.right dl').css({
            'margin-top': -dl_h / 2
        });
    });
    $('#wrap #wrap-dongtai ul li').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });
    $('#wrap #wrap-dongtai ul li:first-child').addClass('on');

    $('#wrap #wrap-dongtai ul li').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });

    $(".solu-category .solu-description").each(function() {
        var maxwidth = 60;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + '...');
        }
    });

});
//**********************************风琴************************


/*回到顶部功能*/
function returnTop()
{
	//开启定时器
	var timeid = setInterval(function(){
		
		//滚动函数
		scrollBy(0,-50);
		
		//判断滚动条是否到顶部，如果到达顶部关掉定时器
	 	/*console.info();*/
	 	var scrollnum= document.documentElement.scrollTop+document.body.scrollTop;
	 	
	 	//判断
	 	if(scrollnum==0)
	 	{
	 		clearInterval(timeid);
	 	}
		
	},10);/*以毫秒为单位*/
	
}

//nav导航
	window.onscroll = function() {
				var t = parseInt(document.documentElement.scrollTop || document.body.scrollTop);
//				    alert(t);	
				var nav = parseInt(document.getElementById("nav").offsetTop);
//				    alert(nav);
				var n = nav - t;
//				alert(n);
				if(n<=0) {
					//      			document.getElementById("nav").style.display="block";
					document.getElementById("nav").style.position = "fixed";
					document.getElementById("nav").style.top = "0px";
					document.getElementById("nav").style.left = "0px";
					
				} 	
				if (t<=620) {
					document.getElementById("navmain").style.position="relative";
					document.getElementById("nav").style.position="absolute";
					document.getElementById("nav").style.top="0px";        	
					document.getElementById("nav").style.left="0px";
				}
				
			
			}
//	**********nav导航*************

//壁纸展示
function display(targetid){
        if (document.getElementById(targetid)){
            target=document.getElementById(targetid);
            if (target.style.display=="block"){
                target.style.display="none";
            }
            else {
                target.style.display="block";
                target.style.position="fixed";
            }
        }
    }

//表单验证
function validate() {
		//定义标示
		var flag = true;

		//判断验证
		//1.获取表单数据
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		//账号
		if(username == "") {
			document.getElementById('usernameInfo').innerHTML = "<font color='red'>X</font>账号不能为空！";
			flag = false;
		} else {
			document.getElementById('usernameInfo').innerHTML = "<font color='green'>√</font>";
		}

		//密码
		if(password.length < 6 || password.length > 12) {
			document.getElementById('passwordInfo').innerHTML = "<font color='red'>X</font>密码必须在6-12之间！";
			flag = false;
		} else {
			document.getElementById('passwordInfo').innerHTML = "<font color='green'>√</font>";
		}
}

//*********************baike*******************
    window.onload=function(){  
    	var str="";
		for (var i=1;i<=16;i++) {
			str+="<div class='baike-content'>"+
			'<div class="baike-box">'+
			'<img src="img/lunbo/卫庄.jpg" alt="" />'+
			'<div class="baike-bac">'+
			'</div>'+
			'<div class="baike-title">'+
			'<h2>'+"第"+i+"回"+'</h2>'+
			'</div>'+
			'</div>'+
			'</div>';
		}
		$(".baikecontent").html(str);	
		
	
//  ************************nav切换*************
    var navmain=document.getElementById("navmain");
	 var nav=document.getElementsByClassName("nav");
	 var navContent=document.getElementsByClassName("nav-content");
//	 console.log(navmain);
//	 console.log(nav);
//	 console.log(navContent);
	
	for(var i=0;i<nav.length;i++) {
		nav[i].index=i;
//		console.log(i);
		nav[i].onclick=function(){
				for(var i=0;i<nav.length;i++){
//					alert(i);
	                nav[i].ID="";                
	                navContent[i].style.display="none"	            
	           }	             
	           this.ID="active";
	           navContent[this.index].style.display="block";
	    }
	}	
    }
