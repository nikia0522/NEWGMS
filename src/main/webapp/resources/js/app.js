/**
 * 
 */

var app = app||{};

app.path=(function(){ //login이후에도 저장되어야할 정보는 앱에 저장
	var init=function(ctx){ //생성자, init, onCreate, setContentView는 항상 만들어야함.
		app.session.init(ctx);
		app.auth.init();
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
		alert('aaa');
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};


	return{
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css //은닉화 가능, close에 포함 시키지 않으면 됨
	};
})();
app.session=(function(){ //login시에만 유지될 정보 session에 저장
	var init=function(ctx){
		sessionStorage.setItem('ctx', ctx); 
		sessionStorage.setItem('js', ctx+'/resources/js');
		sessionStorage.setItem('img', ctx+'/resources/img');
		sessionStorage.setItem('css', ctx+'/resources/css');
	}; //semi-colon을 꼭 찍어야함 -> clock pulse (cpu가 실행하고 돌아옴) *********IIFE(즉시실행)*********
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,  // key : value 객체-제이슨만 있음... 너무 빨라서 이미 존재하는 객체가 되어버렸기때문에 value(method)뒤에 ()를 안붙인다. 
		getPath : getPath	
	}; //function은 return값이 꼭!! 있어야함. 아무것도 안주면 return true가 됨. closure개념인데 기능들이 모여있는 객체의 리턴은 {}로 함
})();

app.auth=(function(){
	var init=function(){
		$('#loginBtn').on('click',function(){
			alert('로그인 버튼 click');
			if($('#input_id').val()===""){
				alert('ID를 입력해주세요');
				return false;
			}
			if($('#input_pass').val()===""){
				alert('PASS를 입력해주세요');
				return false;
			}
			$('#login_box').attr('action',app.path.ctx()+"/auth/login");
			$('#login_box').attr('method','post');
			return true; //return 생략 가능 - 항상 true로 리턴
		});
	};

	return {
		init : init,
	};
})();


app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group a').eq( 0 ).on('click',function(){
			alert('0');
			app.controller.moveTo('member', 'member_add');
		});
		$('.list-group a').eq( 1 ).on('click',function(){
			alert('1');
			app.controller.list('member', 'member_list', '1');
		});
		$('.list-group a').eq( 2 ).on('click',function(){
			app.controller.moveTo('member', 'member_detail');
		});
		$('.list-group a').eq( 3 ).on('click',function(){
			app.controller.moveTo('member', 'member_update');
		});
		$('.list-group a').eq( 4 ).on('click',function(){
			alert('4');
			app.controller.moveTo('member', 'member_delete');
		});
		$('.list-group a').eq( 5 ).on('click', function(){
			app.controller.moveTo('grade', 'grade_add');
		});
		$('.list-group a').eq( 6 ).on('click', function(){
			app.controller.moveTo('grade', 'grade_list');
		});
		$('.list-group a').eq( 7 ).on('click', function(){
			app.controller.moveTo('grade', 'grade_detail');
		});
		$('.list-group a').eq( 8 ).on('click', function(){
			app.controller.moveTo('grade', 'grade_update');
		});
		$('.list-group a').eq( 9 ).on('click', function(){
			app.controller.moveTo('grade', 'grade_delete');
		});
		$('.list-group a').eq( 10 ).on('click', function(){
			app.controller.moveTo('board', 'board_add');
		});
		$('.list-group a').eq( 11 ).on('click', function(){
			app.controller.moveTo('board', 'board_list');
		});
		$('.list-group a').eq( 12 ).on('click', function(){
			app.controller.moveTo('board', 'board_detail');
		});
		$('.list-group a').eq( 13 ).on('click', function(){
			app.controller.moveTo('board', 'board_update');
		});
		$('.list-group a').eq( 14 ).on('click', function(){
			app.controller.moveTo('board', 'board_delete');
		});
	};
	var setContentView=function(){
		var $u1=$('#main_ul_stu'); // 변수 앞에 $를 붙이면 component 객체가 됨.
		var $u2=$('#main_ul_grade');
		var $u3=$('#main_ul_board');
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
	};
	
	return{
		init : init
		
		
	};
})();


app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#go_main').on('click',function(){
			app.controller.moveTo('/auth','/login');
		});
		$('.dropdown-menu a').eq( 0 ).on('click',function(){
			alert('0');
			app.controller.moveTo('member', 'member_add');
		});
		$('.dropdown-menu a').eq( 1 ).on('click',function(){
			alert('1');
			app.controller.moveTo('member', 'member_list');
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
		$('.dropdown-menu a').eq( 12 ).on('click',function(){
			app.controller.moveTo('board', 'board_detail');
		});
		$('.dropdown-menu a').eq( 13 ).on('click',function(){
			app.controller.moveTo('board', 'board_update');
		});
		$('.dropdown-menu a').eq( 14 ).on('click',function(){
			app.controller.moveTo('board', 'board_delete');
		});
		$('#logout').on('click', function(){
			app.controller.moveTo('/auth', '/login_view');
		});
		
	};
	var setContentView=function(){		
		var $u1=$('#navbar_ul_stu');
		var $u2=$('#navbar_ul_grade');
		var $u3=$('#navbar_ul_board');
		var $logout=$('#logout');
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");

	};
	
	return{
		init : init
	};
})();

app.member=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#updateBtn').on('click',function(){
			//id,phone,email,title
			
			sessionStorage.setItem('id', $('#detail_id').text()); 
			sessionStorage.setItem('phone', $('#detail_phone').text());
			alert($('#detail_phone').text());
			sessionStorage.setItem('email', $('#detail_email').text());
			sessionStorage.setItem('title', $('#detail_title').text());			
			controller.moveTo('member','member_update');
			
		});
	};
	var setContentView=function(){		
		alert('멤버디테일 진입');
	};
	return{
		init : init
	};
})();

app.grade =(function(){
	   var init=function(){
	      onCreate();
	   };
	   var onCreate=function(){
	      setContentView();
	   }
	   var setContentView=function(){
	      
	   };
	   return{
	      init : init
	   };
	})();

	app.board =(function(){
	   var init=function(){
	      onCreate();
	   };
	   var onCreate=function(){
	      setContentView();
	   };
	   var setContentView=function(){
	      
	   };
	   return{
	      init : init
	   };
	})();


app.controller=(function(){
	var init=function(){

	};
	var moveTo=function(dir, page){
		location.href=app.path.ctx()+"/common/path"+"/"+dir+"/"+page;
	};
	var logout=function(dir,page){
		location.href=app.path.ctx()+'/'+dir+".do?action=logout&page="+page;
	};
	var deleteTarget=function(target){
		prompt(target+"의 ID?");
	};
	var list=function(dir,page,pageNumber){
		location.href=app.path.ctx()+"/member/path"+'/'+dir+"/"+page+"/"+pageNumber;
	};
	var updateStudent=function(id,email){
		alert('수정할 id='+$('#detail_id').text());
		location.href=app.ctx()+'/'+"member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function(id){
		alert('삭제할 id='+id);
		location.href=app.ctx()+'/'+"member.do?action=delete&page=member_list&id="+id;
	};
	var detailStudent=function(id){
		alert('조회할 id='+id);
		location.href=app.path.ctx()+'/'+"member.do?action=detail&page=member_detail&id="+id;
	};
	var searchStudent=function(){
		var search=document.getElementById('search').value;
		location.href=app.ctx()+'/'+"member.do?action=search&page=member_list&search="+search;
	};

	return{
		init : init,
		moveTo : moveTo,
		logout : logout,
		deleteTarget : deleteTarget,
		list : list,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		searchStudent : searchStudent
	};
})();


app.home=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){		
	};
	return{
		init : init
	};

})();