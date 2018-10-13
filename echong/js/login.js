
jQuery(function($){
    $username = $(".loguser");
    $password = $(".logpass");
    $queding = $(".logbtn");
    $queding.on("mousedown",function(){


        $_username = $username.val();
        $_password = $password.val();

        $.ajax({
            url: '../api/login.php',
            type: 'GET',
            data: {username: $_username,
                    wpassword: $_password},
            success: function(data){
                    if(data == "true"){
                        $queding.attr(
                           'href', '../index.html');
                            $.cookie("username", $_username,{path: '/'});
                        }else{
                        alert("账号或密码错误");
                    }
                } 
            })  
     })
    
})



