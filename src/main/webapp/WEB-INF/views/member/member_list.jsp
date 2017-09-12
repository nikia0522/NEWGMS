<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>   

<div id="container">
<div class="row">
  <div class="col-lg-7" style="margin:0 auto">
    <div class="input-group">
      <input id="search" name="search" type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button onclick="searchStudent()" class="btn btn-default" type="button" >Go!</button>

      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<div style="height: 40px; width:300pxl;">
	회원수: ${count}
</div>
<table id="member_list_tab" style="margin-top:50px">
	<tr>
		<th style="width:5%">NO</th>
		<th style="width:10%">아이디</th>
		<th style="width:10%">이름</th>
		<th style="width:10%">생년월일</th>
		<th style="width:15%">전화번호</th>
		<th style="width:10%">이메일</th>
		<th style="width:10%">수강과목</th>
		<th style="width:10%">등록일</th>
		<th style="width:10%">수정/삭제</th>
	
	</tr>
	<c:forEach var="i" items="${requestScope.list}">
	<tr>
		<td style="width:5%">${i.num}</td>
		<td style="width:10%">${i.id}</td>
		<td style="width:10%"><a onclick="controller.detailStudent('${i.id}')">${i.name}</a></td>
		<td style="width:10%">${i.ssn}</td>
		<td style="width:15%">${i.phone}</td>
		<td style="width:10%">${i.email}</td>
		<td style="width:10%">${i.subjects}</td>
		<td style="width:10%">${i.regdate}</td>
		<td style="width:10%"><a onclick="updateStudent('${i.id}')">수정</a>/<a onclick="deleteStudent('${i.id}')">삭제</a></td>
		
	</tr>
	</c:forEach>
	</table>
		<nav aria-label="Page navigation" >
	  <ul class="pagination">
	  <c:if test="${requestScope.prevBlock gt 0 }">
		<li><a onclick="list('member','member_list', '1')"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>  
	    <li><a onclick="list('member','member_list', '${requestScope.startPage-1}')"  aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
	    </c:if>
	    <c:forEach varStatus="i" begin="${requestScope.startPage}" end="${requestScope.endPage}" step="1">  	
	    	<c:choose>
		    	<c:when test="${i.index eq requestScope.pageNumber}">
		    	<li class="active"><a href="#">${i.index }</a></li>	    
		    	</c:when>	    	
		    	<c:otherwise>
		    	<li> <a onclick="list('member','member_list', '${i.index}')">${i.index}</a></li>
		    	</c:otherwise>
	    	</c:choose>
	    </c:forEach>
	   <c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages }">
	   <li><a onclick="list('member','member_list', '${requestScope.endPage+1}')" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
		<li><a onclick="list('member','member_list', '${requestScope.theNumberOfPages}')"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>  

	   </c:if>
	</nav>
 </div>

<script> memberDetail.init </script>

	<jsp:include page="../common/footer.jsp"/>	