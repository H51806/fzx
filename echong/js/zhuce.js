jQuery(function($){
    $nickname = $(".loguser");
    $password = $(".logpass");
    $repassword = $(".logbtn");
    $s1 = $(".s1");
    $btn = $(".ipt-btn-area");
    $s0 = $(".s0");
    console.log($repassword);
    $s0.text("");
    $nickname.blur(function(){
        $_nickname = $nickname.val();
        $.ajax({
            url: '../api/zhuce.php',
            type: 'GET',
            data: {nickname: $_nickname},
            success: function(data){
                    if(data == "true"){
                        $s0.text("您的用户名已经被占用");
                    }else if(data == "" && $_nickname != ""){
                         $s0.text("用户名正确");
                         zhuce();
                    }else if($_nickname == ""){
                        $s0.text("用户名不能为空");
                    }
                    console.log(data);
                 }
         });   
        
    });
    $repassword.blur(function(){
        $_repassword = $repassword.val();
        if($_repassword != $password.val()){
            $s1.text("您两次密码输入的不一致");
             return;
        }else if($_repassword == $password.val()){
            $s1.text("");
        }
    })
    function zhuce(){
        $btn.on("click",function(){
        $_nickname = $nickname.val();
        $_password = $password.val();
         $.ajax({
            url: '../api/zhuce2.php',
            type: 'POST',
            data: {nickname: $_nickname,
                    password:$_password},
            success: function(data){
                    if(data == "true" && $_password == $repassword.val()){
                        alert("注册成功");
                        }
                    }
                    // console.log(data);
            })  
        })
    }
    
})