var btn = $(".login")[0]
var alertInfo = $(".alert");
$(document).ready(function(){


	$(btn).click(function(){
		var username = $("#username").val();
		var password = $("#password").val();
		$.ajax(
			{
				
			url:"wrongfile.txt",  //自主填写后台处理程序的文件地址

			error:function(xhr,statuet,data){
				$(alertInfo[0]).show(300);
				$(alertInfo[0]).text("发生了一个错误:"+statuet);
				$(alertInfo).delay(5000).hide(300);
			},

			success:function(result){
				$(alertInfo[1]).show(300);
				$(alertInfo).delay(2000).hide(300);
			}


	});
	});
});