	$(document).ready(function{
		alert("Hi, there!");
		var name = prompt("Digite seu nome:");
		var age = prompt("Digite sua idade:");
		var text = name +", você tem "+" anos.";
		document.getElementByID('contentBox').innerHtml=text;
	});
