var introUI={
		login : i=>{
			return '<div id="container">'
			'<div id="login_box">'
				'<img src="'+i+'/zootopia" alt=""/><br />'
				+	'<span id="login_id">ID:</span><input type="text" id="input_id" name="id" /> <br />'
				+	'<span id="login_pass">PASSWORD:</span><input type="password" id="input_pass" name="pass"/> <br />'		
				+	'<input id="loginBtn" type="submit" value="LOGIN" />'
				+	'<input type="reset" value="CANCEL"/>'
				+	'<input type="hidden" name="action" value="login">'
				+	'<input type="hidden" name="page" value="main">'
				+	'<br /><br /><br /><br />'
		},
		
	navbar : ()=>{
	      return '<nav class="navbar navbar-inverse">'
	       +' <div class="container-fluid">'
	       +'   <div class="navbar-header">'
	       +'   <a class="navbar-brand" href="#">LYL</a>'
	       +' </div>'
	       +'  <ul class="nav navbar-nav">'
	       +'   <li class="active"><a id="nav_move"><span class="glyphicon glyphicon-home"></span> &nbsp; Home</a></li>'
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
	       +'      <ul id="navbar_drop_series" class="dropdown-menu">'
	       +'      <li><a id="arithBtn">등차수열</a></li>'
	       +'      <li><a id="switchBtn">스위치수열</a></li>'
	       +'      <li><a id="diffBtn">계차수열 </a></li>'
	       +'      <li><a id="facBtn">팩토리얼</a></li>'
	       +'      <li><a id="fiboBtn">피보나치</a></li>'
	       +'      </ul>'
	       +'      </li>'       
	       +'         <li class="dropdown">'
	       +'    <a href="#" class="dropdown-toggle"'
	       +'       data-toggle="dropdown" role="button"'
	       +'      aria-haspopup="true"'
	       +'      aria-expanded="false">배열 <span class="caret">'
	       +'      </span></a>'
	       +'      <ul id="navbar_drop_sort" class="dropdown-menu">'
	       +'      <li><a id="selBtn">선택정렬</a></li>'
	       +'      <li><a id="burbleBtn">버블정렬</a></li>'
	       +'      <li><a id="insertBtn">삽입정렬 </a></li>'
	       +'      <li><a id="rankBtn">석차구하기</a></li>'
	       +'      <li><a id="binSearchBtn">이분검색</a></li>'
	       +'      <li><a id="mergeBtn">병합</a></li>'
	       +'      <li><a id="stackBtn">스택</a></li>'
	       +'      </ul>'
	       +'      </li>'
	       +'    </ul>'
	       +'</div>'
	       +'</nav>'        
	    }
	};

var compUI={
		br : ()=>{return $('<br/>')},
		div : x =>{return $('<div/>',{id:x});},
		h1 : x=> {return $('<h1/>',{id:x});},
		span : x => {return $('<span/>', {id:x});},
		iTxt : x => {return $('<input/>',{id : x, type : 'text'});}, //=> append처리
		aBtn : x => {return $('<a>', {href:'#', role:'button', id:x});},
		iBtn : x => {return $('<input/>', {id: x, type: 'button'});},
		image : (x,y)=>{return $('<img/>',{id : x,src : y});},
		input : (x,y)=>{return $('<input/>',{id : x,type : y});}
}

var algoUI={
	series : ()=>{
		return '<div id="content">'
        +	'<h1>등차 수열의 합</h1>'
        +	'<span id="start_txt">첫번째 숫자</span>'
        +	'<span id="end_txt">마지막 숫자</span>'
        +	'<div id="result"></div></div>'       
	},
	sort : ()=>{
		return '<div id="content">'
        +	'<h1>배열-selection</h1>'
        +	'<span id="start_txt">숫자입력:</span>'
        +	'<div id="result"></div></div>'       	
	}
};
