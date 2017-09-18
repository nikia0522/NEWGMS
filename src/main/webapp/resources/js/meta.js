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
	var $wrapper;
	var ctx;
	var img;
	var init=function(){
		onCreate();
		meta.ui.init();
	};
	var onCreate=function(){
		setContentView();
		$('#btn').on('click',function(){
			$wrapper.empty();
			//meta.auth.init();
			meta.ui.navbar();
			meta.ui.arithmetic();
			$('#arithBtn').on('click',function(){
				alert('등차수열클릭');
				$('#content').empty();
				meta.ui.arithmetic();
				$('#result').on('click',function(){
					alert('클릭!');
					$('#result_btn').text('결과: '+meta.algo.arithmetic(
							$('#start').val(),
							$('#end').val()
					));
					;
				});
			});
			$('#switchBtn').on('click',function(){
				alert('switch클릭');
				$('#content').empty();
				meta.ui.switchSeries();
				$('#result').on('click',function(){
					alert('클릭!');
					$('#result_btn').text('결과: '+meta.algo.switchSeries(
							$('#start').val(),
							$('#end').val()
					));
					;
				});
			});
			$('#geoBtn').on('click',function(){
				alert('등비수열클릭');
				$('#content').empty();
			});
			$('#facBtn').on('click',function(){
				alert('팩토리얼 클릭');
				$('#content').empty();
			});
			$('#fiboBtn').on('click',function(){
				alert('피보나치 클릭');
				$('#content').empty();
			});
		});
	};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		var $image=$('<img/>', 
			{
				img: 'loading',
				src: img+'/loading.gif'
			}
		);
		$image.appendTo($wrapper);		
		
		var $btn=$('<input/>',
			{
				id: 'btn',
				type: 'button',
				value: '버튼3'
			}
		);
		$wrapper.append($btn);

	};
	return {
		init : init
	};
})();
meta.algo={
		arithmetic : function(s,e){
			var sum=0;
			var start=s*1;
			var end=e*1;
			for(var i=start; i<=end; i++){
				sum+=i;
				
			}
			return sum;
		},
		switchSeries : function(s,e){
	         var sum = 0;
	         var start = s*1;
	         var end = e*1;
	         var opcode = 1;
	         for(var i=start;i<=end;i++){
	            if(opcode> 0){
	               sum = sum + i;
	            }else{
	               sum = sum - i;
	            }
	            opcode=opcode*-1;
	         }
	         return sum;
	      }
	};

meta.auth=(function(){
	var $wrapper, ctx, img, js, css;
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		alert('로그인화면');
		$wrapper=$('#wrapper');
		img=$$('i');
		loginView();
	};
	var loginView=function(){
		var ui=
		'<div id="container">'
			+'<div id="login_box" name="login_box" >'
				+'<img src="'+img+'/zootopia.gif" alt="" style="width:50%;height:50%;"/><br />'
				+'<span id="login_id">ID:</span><input type="text" id="login_input" name="id" /> <br />'
				+'<span id="login_pass">PASSWORD:</span><input type="password" id="input_pass" name="pass"/> <br />'		
				+'&nbsp;&nbsp;'
				+'<input type="hidden" name="action" value="login">'
				+'<input type="hidden" name="page" value="main">'
				+'<br /><br /><br /><br />'
			+'</div>'
		+'</div>'
		$wrapper.append(ui);
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
	};
	return {
		init : init
	};
})();
meta.ui=(function(){
	var $wrapper, ctx, img, js, css;
	var init=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
	};
	var navbar=function(){
		$wrapper.html(
				'<nav class="navbar navbar-inverse">'
				+'<div class="container-fluid">'
				+'    <div class="navbar-header">'
				+'      <a class="navbar-brand" href="#">LYL</a>'
				+'    </div>'
				+'    <ul class="nav navbar-nav">'
				+'      <li class="active"><a id="go_main" ><span class="glyphicon glyphicon-home"></span> &nbsp;Home</a></li>'
				+'      <li class="dropdown">'
				+'      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">학생관리 <span class="caret"></span></a>'
				+'      <ul id="navbar_ul_stu" class="dropdown-menu">'
				+'      	<li><a >학생추가</a></li>'
				+'        <li><a >학생목록</a></li>'
				+'        <li><a >학생조회</a></li>'
				+'        <li><a >학생수정</a></li>'
				+'        <li ></li>'
				+'        <li><a >학생삭제</a></li>'
				+'      </ul>'
				+'      </li>'
				+'      <li class="dropdown">'
				+'      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
				+'      <ul id="navbar_ul_grade" class="dropdown-menu">'
				+'      	<li><a >성적추가</a></li>'
				+'        <li><a >성적목록</a></li>'
				+'        <li><a >성적관리</a></li>'
				+'        <li><a >성적수정</a></li>'
				+'        <li ></li>'
				+'        <li><a >성적삭제</a></li>'
				+'      </ul>'
				+'      </li>'
				+'      <li class="dropdown">'
				+'      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
				+'      <ul id="navbar_ul_board" class="dropdown-menu">'
				+'      	<li><a >게시글추가</a></li>'
				+'        <li><a >게시판목록</a></li>'
				+'        <li><a >게시판조회</a></li>'
				+'        <li><a >게시판수정</a></li>'
				+'        <li ></li>'
				+'        <li><a >게시판삭제</a></li>'
				+'      </ul>'
				+'      </li>'
				+'      <li class="dropdown">'
				+'      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
				+'      <ul id="navbar_ul_series" class="dropdown-menu">'
				+'        <li><a id="arithBtn">등차수열</a></li>'
				+'        <li><a id="switchBtn">스위치수열</a></li>'
				+'        <li><a id="geoBtn">등비수열</a></li>'
				+'        <li><a id="facBtn">팩토리얼</a></li>'
				+'        <li><a id="fiboBtn">피보나치</a></li>'
				+'      </ul>'
				+'      </li>'
				+'    </ul>'
				+'    <span class="float-right" style="color:white">${user.name} &nbsp; <a id="logout" > 로그아웃</a></span>'
				+'  </div>'
				+'</nav>'
		);
	};
	var arithmetic=function(){
		/*1부터 100까지 등차수열의 합*/
		var content='<div id="content">'
			+'<h1>Arithmetic Sum</h1>'	
			+'<span id="start_text">시작값 &nbsp; &nbsp;</span><br />'
			+'<span id="end_text">끝값 &nbsp; &nbsp; &nbsp; &nbsp;</span><br />'
			+'<div id="result_btn"></div>';
			$wrapper.after(content);
		$('#start_text').after(meta.comp.input(
			{			
				type : 'text',
				id : 'start'
			}
		));
		$('#end_text').after(meta.comp.input(
			{
				type : 'text',
				id: 'end'
			}					
		));
		$('#result_btn').before(meta.comp.input(
			{
				id: 'result',
				type: 'button',
				value: '연산'
			}
		));
	};
	var switchSeries=function(){
		var content='<div id="content">'
			+'<h1>Calculating Switch-Series Sum</h1>'	
			+'<span id="start_text">시작값 &nbsp; &nbsp;</span><br />'
			+'<span id="end_text">끝값 &nbsp; &nbsp; &nbsp; &nbsp;</span><br />'
			+'<div id="result_btn"></div>';
			$wrapper.after(content);
		$('#start_text').after(meta.comp.input(
			{			
				type : 'text',
				id : 'start'
			}
		));
		$('#end_text').after(meta.comp.input(
			{
				type : 'text',
				id: 'end'
			}					
		));
		$('#result_btn').before(meta.comp.input(
			{
				id: 'result',
				type: 'button',
				value: '연산'
			}
		));
	}
	return {
		init : init,
		navbar : navbar,
		arithmetic : arithmetic,
		switchSeries : switchSeries
		};
})();
meta.comp={
			input : function(jason){
			return $('<input/>', jason);
			}
	};

meta.session = {
      init : function(ctx){
          sessionStorage.setItem('x',ctx);
          sessionStorage.setItem('j',ctx+'/resources/js');
          sessionStorage.setItem('i',ctx+'/resources/img');
          sessionStorage.setItem('c',ctx+'/resources/css');
      },
      getPath : function(x){
          return sessionStorage.getItem(x);
      }
   };

	var $$=function(x){return meta.session.getPath(x);};
