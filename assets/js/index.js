window.onload = function(){
	console.log("感谢您的浏览，期待能够加入贵公司！我的 GitHub：https://github.com/topgg");
}
function password() {
        var password=""
        password=prompt('请输入密码以查看简历:','');
        function custom_close()
        {
            window.opener=null;
            window.open('','_self');
            window.close();        
        }   
        if  (password !='gg')
            {
            
            custom_close();            
            //加这一段是为了避免有些浏览器不支持关闭浏览器的js ,所以请求跳转到一个新页面！
            window.location.href='www.baidu.com';
            }
        }
document.write(password());
