window.onload=function()
{
	alert("1111");
    var correct_name=";
    var correct_password="TRX142669";

    var oname=document.getElementById("name");
    var opassword=document.getElementById("password");
    var obutton=document.getElementById("password_botton");
    function cilck_botton()
    {
        let oname_temp=oname.value.toString();
        let opassword_temp=opassword.value.toString();
        if(correct_name==oname_temp&&correct_password==opassword_temp)
            window.location.href="loading.html?index";
        else
            alert("用户名或密码输入错误，请重试！");
    }
    obutton.onclick=function()
    {
        cilck_botton();
    }

    //显示 影藏密码
    var plaintext=document.getElementById("fa-eye");
    plaintext.onmouseover=function()
    {
        opassword.type="text";
    }

    plaintext.onmouseout=function()
    {
        opassword.type="password";
    }

    document.onkeydown = function(e)
    {
        if((e.keyCode || e.which) == 13)
            cilck_botton();
    }   
}