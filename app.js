$(document).ready(function(){
	$("#email").keyup(function(){
	var email=$("#email").val();

	if (email.indexOf('@') == -1) {
   		$("#chk_email").text("please insert valid email");
	}
	else{
		$("#chk_email").text("email is valid");
	}
	
	});
	$("#pass").keyup(function(){
		var pass=$("#pass").val();
		if(pass.length<6){
			$("#chk_pass").text("please insert strong password");
		}
		else{
			$("#chk_pass").text("");
		}
	})
});