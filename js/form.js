//表单验证
function validate() {
		//定义标示
		var flag = true;

		//判断验证
		//1.获取表单数据
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		//账号
		if(username == "") {
			document.getElementById('usernameInfo').innerHTML = "<font color='red'>X</font>账号不能为空！";
			flag = false;
		} else {
			document.getElementById('usernameInfo').innerHTML = "<font color='green'>√</font>";
		}

		//密码
		if(password.length < 6 || password.length > 12) {
			document.getElementById('passwordInfo').innerHTML = "<font color='red'>X</font>密码必须在6-12之间！";
			flag = false;
		} else {
			document.getElementById('passwordInfo').innerHTML = "<font color='green'>√</font>";
		}
} 