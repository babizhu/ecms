<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%

    String path =request.getContextPath();

    String basePath =request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTDHTML 4.01 Transitional//EN">

<html>

<head>

    <base href="<%=basePath%>">

    <title><%=path%>ext5 <%=basePath%></title>

    <link rel="stylesheet"type="text/css" href="/ext/ext-theme-classic/build/resources/ext-theme-classic-all.css">

    <script type="text/javascript"src="/ext/ext-all.js"></script>

    <%--<script type="text/javascript"src="/ext/ext-bootstrap.js"></script>--%>

    <script type="text/javascript"src="/ext/ext-theme-classic/build/ext-theme-classic.js"></script>

    <script type="text/javascript"src="/js/app.js"></script>

</head>

<body>

</body>

</html>