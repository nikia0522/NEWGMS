<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
<title>**Student Detail**</title>
</head>
<body>
<div id="wrapper">
	<div id="container">
	<h2>학생관리</h2>
	<form id="login_box" name="login_box" >
		<img src="${path.img}/zootopia.gif" alt="" style="width:50%;height:50%;"/><br />
		<span id="login_id">ID:</span><input type="text" id="input_id" name="id" /> <br />
		<span id="login_pass">PASSWORD:</span><input type="password" id="input_pass" name="pass"/> <br />		
		<input id="loginBtn" type="submit" value="LOGIN" />
		<input type="reset" value="CANCEL"/>
		<input type="hidden" name="action" value="login">
		<input type="hidden" name="page" value="main">
		<br /><br /><br /><br />
		</form>
	</div>
	<div style="text-align:center; width:100%"><h4 style="font-size:20px; colour:red">${result}</h4></div>
<script>
app.auth.init();
</script>