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
   var $wrapper,temp,img,algo,js,ctx;
	var init=function(){
      js=$$('j');
      temp=js+'/template.js';
      algo=js+'/algo.js';
      meta.ui.init();
      onCreate();
   };
   var onCreate=function(){
	     $wrapper=$('#wrapper');
	      ctx=$$('x');
	      img=$$('i');
	      $.getScript(temp,x=>{
	    	  var $image=$('<img/>', 
	    			  intro.loading(img)	  
	    	  );    	       
	    	  $wrapper.append($image);
	      var $btn=$('<input/>',
	    		  {id: 'btn',
	    	  type: 'button',
	    	  value: '버튼3'
	    		  }
	      );
	      $('#loading').after($btn);
      $('#btn').click(()=>{
         $wrapper.empty();
         //meta.auth.init();
         meta.ui.navbar();
         meta.navbar.init();
         meta.ui.arithmetic();	
         $('#resultBtn').click(()=>{
            $('#result').text('결과:'	+series.arithmetic(
               $('#start').val(),
               $('#end').val()
            ));
            });

      });
         
      });
   };
   var setContentView=()=>{ 
   };
   return {
      init : init
   };
})();

meta.auth=(function(){
   var $wrapper,ctx,img,js,css;
   var init =function(){
      onCreate();
   };
   var onCreate=function(){
      setContentView(); 
   };
   var setContentView=function(){    
         img=$$('i');
         $wrapper=$('#wrapper');
         loginView();
      };
   var loginView=function(){
         alert('로그인화면');
         var ui='<div id="container">'
            +'<form id="login_box" name="Login-box" method="get">'
            +'<img id="login_img" src="'+img+'/보.jpg" alt=""/><br />'
            +'<span id="login_id">ID</span>'
            +'<input type="text" id="login_input" name="id" value="2" /><br />'
            +'<mark>ID는 숫자 포함 8자리 이내</mark><br />'
            +'<span id="login_pass">PASSWORD</span>'
            +'<input name="password" id="input_pass" type="password" value="2" /><br />'
            +'<input type="text"/><br />'
            +'</form>'
         +'</div>'
         $wrapper.append(ui);
         $('#login_input').after(meta.component.input({
            id: 'loginBtn',
            type: 'button',
            value: 'login'}));
         $('#login_box').append(meta.component.input({
            id: 'reset',
            type: 'button',
            value: 'cancle'}));
      
      };
   return {
       init : init
      };
   })();


meta.navbar=(function(){
	var algo, js;
	var init=function(){
		onCreate();
		js=$$('j');
		algo=js+'/algo.js';
	};
	var onCreate=function(){
		setContentView();
			
	};
	var setContentView=function(){		
		var $u1=$('#navbar_ul_stu');
		var $u2=$('#navbar_ul_grade');
		var $u3=$('#navbar_ul_board');
		var $logout=$('#logout');
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
		
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
		/*$('.dropdown-menu a').eq( 12 ).on('click',function(){
			app.controller.moveTo('board', 'board_detail');
		});
		$('.dropdown-menu a').eq( 13 ).on('click',function(){
			app.controller.moveTo('board', 'board_update');
		});
		$('.dropdown-menu a').eq( 14 ).on('click',function(){
			app.controller.moveTo('board', 'board_delete');
		});*/
        $('#arithBtn').click(()=>{
            alert('등차수열 클릭');
            $.getScript(algo,()=>{
            	series.arithmetic('hello aritotles@!');
            });
            $('#content').empty();
            meta.ui.arithmetic();         
            $('#resultBtn').click(()=>{
        	 $.getScript(algo,(f,l)=>{
        		 $('#result').text('결과:'+series.arithmetic(
        				 $('#start').val(),
        				 $('#end').val()
        		 		));	 
        	 		});
               });
         });
         $('#switchBtn').click(()=>{
            alert('스위치 클릭');
            $.getScript(algo,()=>{
            	series.switchSeries('hello switch@!');
            });
            $('#content').empty();
            meta.ui.arithmetic();
            $('h1').html('1부터 100 스위치수열 합');
            $('#start').val('1');
            $('#end').val('100');
         $('#resultBtn').click(()=>{
        	 $.getScript(algo,()=>{
        		 $('#result').text('결과:'   +series.switchSeries(
        		 	));
        	 	});      		 
        	 });
         });
         $('#diffBtn').click(()=>{
            alert('등비수열 클릭');
            $('#content').empty();
            meta.ui.arithmetic();
            $('h1').html('등비수열의 합');
            $('#last_num').html('몇번째까지?');
            $('#start').val('1').attr('readonly','true');
            $('#resultBtn').click(()=>{
            	$.getScript(algo,(n)=>{
/*            		series.diffSeries('hello diff@!');*/
            		$('#result').text('결과:' +series.diffSeries(
            				$('#end').val()
            		));
            	});
            	});
         });
         $('#facBtn').click(()=>{
            alert('팩토리얼 클릭');
            $.getScript(algo,(n)=>{
            	series.factorial('hello factorial');
            });
            $('#content').empty();
            meta.ui.arithmetic();
            $('h1').html('팩토리얼~');
            $('#last_num').html('몇번째까지?');
            $('#start').val('1').attr('readonly','true');
            $('#resultBtn').click(()=>{
            	$('#result').text('결과:'+series.factorial(
            			$('#end').val()
            	));
            });
         });
         $('#fiboBtn').click(()=>{
            alert('피보나치 클릭');
            $.getScript(algo,(n)=>{
            	series.fibonacci('helllo fibo');
            });
            $('#content').empty();
            meta.ui.arithmetic();
            $('h1').html('Fibonacci~~');
            $('#last_num').html('몇번째까지?');
            $('#start').val('1').attr('readonly','true');
            $('#resultBtn').click(()=>{
            	$('#result').text('결과:'+series.fibonacci(
            		$('#end').val()	
            	));
            });
         });
         $('#logout').on('click', function(){
        	 app.controller.moveTo('/auth', '/login_view');
         });
   
	};
	
	return{
		init : init
	};
})();
meta.ui=(function(){
   var $wrapper,ctx,img,js,css;
   var init=function(){
      $wrapper=$('#wrapper');
      img=$$('i');
   };
   var navbar =function(){
      $wrapper.html(
      '<nav class="navbar navbar-inverse">'
       +' <div class="container-fluid">'
       +'   <div class="navbar-header">'
       +'   <a class="navbar-brand" href="#">WebSiteName</a>'
       +' </div>'
       +'  <ul class="nav navbar-nav">'
       +'   <li class="active"><a id="nav_move"><span class="glyphicon glyphicon-piggy-bank"></span> &nbsp; Home</a></li>'
       +'    <li class="dropdown">'
       +'    <a href="#" class="dropdown-toggle"'
       +'      data-toggle="dropdown" role="button"'
       +'      aria-haspopup="true"'
       +'      aria-expanded="false">회원관리 <span class="caret">'
       +'      </span></a>'
       +'         <ul id="navbar_drop_stu" class="dropdown-menu">'
       +'         <li><a >학생추가</a></li>'
       +'         <li><a >학생목록</a></li>'
       +'         <li><a >학생조회</a></li>'
       +'         <li ></li>'
       +'         <li><a >학생삭제</a></li>'
       +'      </ul>'
       +'      </li>'
       +'      <li class="dropdown">'
       +'     <a href="#" class="dropdown-toggle"'
       +'      data-toggle="dropdown" role="button"'
       +'      aria-haspopup="true"'
       +'      aria-expanded="false">성적관리 <span class="caret">'
       +'      </span></a>'
       +'      <ul id="navbar_drop_grade" class="dropdown-menu">'
       +'      <li><a >성적추가</a></li>'
       +'      <li><a >성적목록</a></li>'
       +'      <li><a >성적조회</a></li>'
       +'      <li ></li>'
       +'      <li><a >성적 삭제</a></li>'
       +'      </ul>'
       +'      </li>'
       +'         <li class="dropdown">'
       +'    <a href="#" class="dropdown-toggle"'
       +'       data-toggle="dropdown" role="button"'
       +'      aria-haspopup="true"'
       +'      aria-expanded="false">게시글관리 <span class="caret">'
       +'      </span></a>'
       +'      <ul id="navbar_drop_board" class="dropdown-menu" >'
       +'      <li><a >게시글추가</a></li>'
       +'      <li><a >게시글목록</a></li>'
       +'      <li><a >게시글조회</a></li>'
       +'      <li ></li>'
       +'      <li><a >게시글 삭제</a></li>'
       +'      </ul>'
       +'      </li>'
       +'         <li class="dropdown">'
       +'    <a href="#" class="dropdown-toggle"'
       +'       data-toggle="dropdown" role="button"'
       +'      aria-haspopup="true"'
       +'      aria-expanded="false">수열 <span class="caret">'
       +'      </span></a>'
       +'      <ul id="navbar_drop_board" class="dropdown-menu">'
       +'      <li><a id="arithBtn">등차수열</a></li>'
       +'      <li><a id="switchBtn">스위치수열</a></li>'
       +'      <li><a id="diffBtn">등비수열 </a></li>'
       +'      <li><a id="facBtn">팩토리얼</a></li>'
       +'      <li><a id="fiboBtn">피보나치</a></li>'
       +'      </ul>'
       +'      </li>'
       +'    </ul>'
       +'      <span class="gms-float-right" style="color:white"> ${user.name} &nbsp;'
       +'       <a  id="logout" >로그아웃</a></span>'
       +'</div>'
       +'</nav>'   
       );   };
   var arithmetic=()=>{
      var content='<div id="content">'
         + '<h1>등차 수열의 합</h1>'
         +'<span id="first_num">첫번째 숫자</span>'
         +'<span id="last_num">마지막 숫자</span>'
         +'<div id="result"></div></div>'         
      $wrapper.after(content);
      $('#first_num').after(meta.component.input({
         id: 'start',
         type: 'text'
      
         }));
      
      $('#last_num').after(meta.component.input({
         id: 'end',
         type: 'text'
         
            }));
         
      $('#result').before(meta.component.input({
         id: 'resultBtn',
         type: 'button',
         value :'결과보기'
      }
      ));
   };
      return{
         init :init,
         arithmetic:arithmetic,
         navbar:navbar
      };
})();
meta.component={
      input:function(json){
      return $('<input/>',json);}
   
};

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