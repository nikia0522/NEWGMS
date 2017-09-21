var meta=meta || {};
meta.common = (function(){
   var init = function(ctx){
      onCreate();
      meta.session.init(ctx);
      meta.index.init();
   };
   var onCreate=function(){
      setContextPath();
   };
   var setContextPath=function(){    
   };
   return { 
	   init : init  
	  	};
})();

meta.index=(function(){
   var $wrapper,$navbar, $container, ctx, img, js, css, temp,algo;
	var init=function(){
	      js=$$('j');
	      temp=js+'/template.js';
	      algo=js+'/algo.js';
	      $navbar=$('#navbar');
	      $container=$('#container');
	      ctx=$$('x');
	      img=$$('i');
	      onCreate();
   };
   var onCreate=function(){
	      $.getScript(temp,()=>{
	    	  compUI.div('content').css({'width':'100%'}).appendTo($container);
	    	  $content=$('#content');
	    	  compUI.image('loading', img+'/loading.gif').css({'width':'40%', 'margin' : '0 auto'}).appendTo($content);
	    	  compUI.h1('hbtn').attr('display', 'inline').appendTo($content);
	    	  $hBtn=$('#hBtn');
	    	 $('#btn').html('알고리즘').addClass('label label-default');
	    	 $('#hbtn').append(compUI.span('btn2')).attr('display', 'inline');
	    	 $('#btn2').html('회원관리').addClass('label label-primary');    	 
	    	 compUI.span('bbsBtn').html('게시판관리').addClass('label label-info').css({'margin-left':'10px'}).appendTo($hbtn).click(()=>{
	    		 alert('게시판 가기');
	    		 var url=ctx+'/get/board/list';
	    		 $.getJSON(url,x=>{
	    			 alert('x msg is'+x.msg);
	    		 });
	    	 });
	    	 $('#hbtn').append(compUI.span('btn4')).attr('display', 'inline');
	    	 $('#btn4').html('버튼').addClass('label label-warning');
	    	 $('#hbtn').append(compUI.span('btn5')).attr('display', 'inline');
	    	 $('#btn5').html('버튼').addClass('label label-danger');
	    	 $('#btn').click(()=>{
	    		 $container.empty();
		         //meta.auth.init();
		         meta.navbar.init();
		         $container.html(algoUI.series());
				 $('#start_txt').after(compUI.iTxt('start'));
				 $('#start').attr('placeholder','시작값');
				 $('#end_txt').after(compUI.iTxt('end'));
				 $('#end').attr('placeholder','끝값');
				 $('#result').before(compUI.iBtn('resultBtn'));
				 $('#resultBtn').val('결과보기');
				 $('#resultBtn').click(()=>{
					$.getScript(algo,(x,y)=>{
						alert('예린아 아프지말고 빨리 나아~~~<3');
						$('#result').text('결과 : '
								+series.arithmetic(
										$('#start').val(),
										$('#end').val()
						));
					});
				});
			});
		});
};  
   return {  
      init : init
   };
})();

meta.auth=(function(){
   var $wrapper,ctx,img,js,css;
   var init =function(){
      onCreate();
      $wrapper=$('#wrapper');
      img=$$('i');
      js=$$('j');
      temp=js+'/template.js';
   };
   var onCreate=function(){
      setContentView(); 
   };
   var setContentView=function(){    
	   $.getScript(temp,(i)=>{
		   $wrapper.append(intro.login(img));
		   $('#login_input').after(meta.comp.button(
				   {			
					   type : 'button',
					   id : 'login_btn',
					   value : 'LOGIN'
				   }
		   ));
		   $('#login_box').append(meta.comp.button(
				   {
					   type : 'button',
					   id : 'cancel_btn',
					   value : 'CANCEL'			
				   }
		   ));
		   
	   });
  	};
  	var joinView=function(){};
  		 return {
  		 	init : init
  		 };
  		 })();

meta.navbar=(function(){
	var algo, js,temp,$container;
	var init=function(){
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=function(){
		$.getScript(temp,function(){
			var $u1=$('#navbar_ul_stu');
			var $u2=$('#navbar_ul_grade');
			var $u3=$('#navbar_ul_board');
			var $u4=$('#navbar_ul_series');
			var $u5=$('#navbar_ul_sort');
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			$u4.addClass("dropdown-menu");
			$u5.addClass("dropdown-menu");
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.input('resultBtn','button'));
			$('#resultBtn').val('결과보기');
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				})
		});
		$('#go_main').on('click',function(){
			app.controller.moveTo('/auth','/login');
		});
			$('.dropdown-menu a').eq( 0 ).on('click',function(){
				alert('0');
				app.controller.moveTo('member', 'member_add');
			});
			$('.dropdown-menu a').eq( 1 ).on('click',function(){
				alert('1');
				app.member.list(1);
			});
			$('.dropdown-menu a').eq( 2 ).on('click',function(){
				app.controller.moveTo('member', 'member_detail');
			});
			$('.dropdown-menu a').eq( 3 ).on('click',function(){
				app.controller.moveTo('member', 'member_update');
			});
			$('.dropdown-menu a').eq( 4 ).on('click',function(){
				app.controller.moveTo('member', 'member_delete');
			});
			$('.dropdown-menu a').eq( 5 ).on('click',function(){
				app.controller.moveTo('grade', 'grade_add');
			});
			$('.dropdown-menu a').eq( 6 ).on('click',function(){
				app.controller.moveTo('grade', 'grade_list');
			});
			$('.dropdown-menu a').eq( 7 ).on('click',function(){
				app.controller.moveTo('grade', 'grade_detail');
			});
			$('.dropdown-menu a').eq( 8 ).on('click',function(){
				app.controller.moveTo('grade', 'grade_update');
			});
			$('.dropdown-menu a').eq( 9 ).on('click',function(){
				app.controller.moveTo('grade', 'grade_delete');
			});
			$('.dropdown-menu a').eq( 10 ).on('click',function(){
				app.controller.moveTo('board', 'board_add');
			});
			$('.dropdown-menu a').eq( 11 ).on('click',function(){
				app.controller.moveTo('board', 'board_list');
			});
			$('#arithBtn').on('click',function(){
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등차수열의 합');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#switchBtn').click(()=>{
	             alert('스위치 클릭');
	             $container.html(algoUI.series());
	             $('#start_txt').after(compUI.input('start','text'));
					$('#start').attr('placeholder','시작값');
					$('#end_txt').after(compUI.input('end','text'));
					$('#end').attr('placeholder','끝값');
					$('#result').before(compUI.input('resultBtn','button'));
					$('#resultBtn').val('결과보기');
					$('h1').html('스위치수열의 합');
					$('#start').val('1').attr('readonly','true');
					$('#end').val('100').attr('readonly','true');
					$('#resultBtn').click(()=>{
						$.getScript(algo,()=>{
							$('#result').text('결과값'+series.switchSeries());
						});
					})
				});
			$('#diffBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('계차수열의 합');
				$('#start').val('1').attr('readonly','true');
					$('#resultBtn').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result').text('결과값'+series.differSeries(
								$('#end').val()));
					});
				})
			});
			$('#facBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('팩토리얼의 합');
				$('#start').val('1').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result').text('결과값'+series.factorial(
								$('#end').val()
						));
					});
				})
			});
			$('#fiboBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('피보나치의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.fibonacci());
					});
				})
			});
		$('#selBtn').click(()=> {
			alert('selection1');
			$container.html(algoUI.sort());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','숫자를 입력하세여');
			$('#result').before(compUI.input('resultBtn', 'button'));
			$('#resultBtn').val('결과보기');	
			$('h1').html('셀렉션 정렬');
			$('#resultBtn').click(()=>{
				$.getScript(algo,()=>{
					$('#result').text('결과값'+sort.selection());
				});
			})
			});
		});
	};
	return{
		init : init
	};
})();
meta.session ={
  init :(x)=>{
               sessionStorage.setItem('x',x);
               sessionStorage.setItem('j',x+'/resources/js');
               sessionStorage.setItem('i',x+'/resources/img');
               sessionStorage.setItem('c',x+'/resources/css');
   },
 getPath : function(x){
      return sessionStorage.getItem(x);
   }
};
   var $$=function(x){return meta.session.getPath(x);};