<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
<title>**Student Detail**</title>
<link rel="stylesheet" href="<%=application.getContextPath() %>/resources/css/member.css"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="<%=application.getContextPath() %>/resources/js/app.js"></script>
</head>
<body>
<div id="wrapper">
	<div id="container">
	<form id="login_box" name="login_box" >
		<img src="<%=application.getContextPath() %>/resources/img/zootopia.gif" alt="" style="width:50%;height:50%;"/><br />
		<span id="login_id">ID:</span><input type="text" id="input_id" name="login_id" /> <br />
		<span id="login_pass">PASSWORD:</span><input type="password" id="input_pass" name="pass"/> <br />
		<input id="loginBtn" type="submit" value="LOGIN" />
		<input type="reset" value="CANCEL"/>
		<input type="hidden" name="action" value="login">
		<input type="hidden" name="page" value="main">
		<br /><br /><br /><br />
		</form>
	</div>
<script>
app.auth.init();
</script>