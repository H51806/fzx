jQuery(function($){
    $view = $(".view-MainImg");
    console.log($view);
    $xiaotu = $(".xiaotu");
    $shuoming = $(".shuoming");
    $p0 = $(".p0");
    $curprice = $(".curprice");
    $oldprice = $(".oldprice");
    $discountdesc = $(".discountdesc");
    $jiesheng = $(".jiesheng");
    $guige = $(".guige");
    // console.log($guige);
    // =======================
    
    // $("#elevator").toTop(); 
    $view = $(".view-LoginStatus");
    if($.cookie("username") != null){
          $view.children().remove();
          var uname = $.cookie("username");

            after();

           $tuichu = $(".tuichu");
            $tuichu.on("click",function(){
                $view.children().remove();
                 $.cookie("username",null,{expires: -1,path:"/"});
               preve();
                
            })
            
    }else{
        preve();
    }
    
  // =============登陆后
     function after(){
             var str = "";
              str +=  '<a class="lv-icon lv1" c-bname="通顶菜单-用户等级图标" clog="" c-emit="click" c-et="event" c-etl="" href="#">'+'</a>'+
                '<a class="striking-link" c-bname="通顶菜单-用户名" clog="" c-emit="click" c-et="event" c-etl="" href="#">'+uname+'</a>'+
                '<a c-bname="通顶菜单-退出" class="tuichu" href="#" rel="nofollow">'+'[退出]'+'</a>';
                $view.append(str);
          }

// =================登录前
           function preve(){
                var s0 = "";
                s0 += '<span>'+'您好，'+'</span>'+
                    '<a class="view-ActionBack" c-bname="请登录" clog="" c-emit="click" c-et="event" c-etl="" href="../html/login.html" clog-get="true">'+'请登录'+'</a>' +
                    '<a class="view-ActionBack striking-link" c-bname="免费注册" clog="" c-emit="click" c-et="event" c-etl="" href="html/zhuce.html" rel="nofollow" clog-get="true">'+'免费注册'+'</a>';
                    $view.append(s0);
                    console.log(s0);
           }
    
    // =====================生成详情表
    var params = decodeURI(location.search).slice(1,-1);
                var paramsArr = params.split("&");
                
                var paramsObj = {};
                paramsArr.forEach(function(item){

                    var arr = item.split("=");

                    paramsObj[arr[0]] = arr[1];
                });
                if(!/^..\//.test(paramsObj.img)){
                    
                   $(".view-MainImg").attr("src","../"+paramsObj.img);
                    $xiaotu.attr("src","../"+paramsObj.img);
                    $shuoming.append(paramsObj.name);
                    $p0.append(paramsObj.name);
                    $curprice.text(paramsObj.price);
                    // $oldprice.text(paramsObj.oldprice);
                    // $discountdesc.text(paramsObj.discountdesc+'折');
            
                    // $guige.attr("src","../"+paramsObj.img);
                }else{
                    $view.attr("src",paramsObj.img);

                    $xiaotu.attr("src",paramsObj.img);
                    $shuoming.append(paramsObj.name);
                    $p0.append(paramsObj.name);
                    $curprice.text(paramsObj.price);
                    // $oldprice.text(paramsObj.oldprice);
                    // $discountdesc.text(paramsObj.discountdesc+'折');
                    
                  // $guige.attr("src",paramsObj.imgsrc);
                }
                // console.log($view.attr());


            // =============添加购物车
            $carAdd = $(".cantAdd");
            // ======判断是否为登录状态
            if($.cookie("username") != null){
                $add = $(".add-num");
                $del = $(".del-num");
                $input = $(".view-BuyNum");
                $a = 1;
             
            // val = $("#id")[0].value; $("#id")[0].value = "new value"; 赋值： $("#id")[0].value = "new value";
            // $jia = ++; 
            // console.log($carAdd);
            // console.log($jieshao);
            // console.log($xiaoji);
            
            // console.log($curprice);
            // console.log($title);
            // console.log($oldprice);
            // console.log($imgsrc);
           
            // console.log($name);
            // function jia(){

            // }
            $add.on("click",function(){
                // console.log() ;
                // var a = parseInt($input.val());
                $a++;
                 $input.val($a);
                  // console.log($input.val());
                  $qty=$input.val();
            })
           
            $del.on("click",function(){
                $a--;
                if($a < 1){
                    $a = 1;
                }
                 $input.val($a);
                  $qty=$input.val();
            })






            $name = $.cookie("username");
            $curprice = paramsObj.price;
            $title = paramsObj.name;
            // $oldprice = paramsObj.oldprice;
            $id = paramsObj.id;
            console.log($title);
            console.log($curprice);
            $qty = $input.val();
            console.log($qty);
            $xiaoji = $curprice;
            $imgsrc = $(".view-MainImg").attr("src");
            // console.log($imgsrc);
            $jieshao = $title;
            // if($id == $id){

            //         $qty++;
            //     } 
            $carAdd.on("click",function(){
                
                $.ajax({
                    url: '../api/xiangqingye.php',
                    type: 'POST',
                    data: { id :$id,
                            uname: $name,
                            imgsrc:$imgsrc,
                            utitle:$title,
                            jieshao:$jieshao,
                            curprice:$curprice,
                            // oldprice:$oldprice,
                            xiaoji:$xiaoji,
                            qty:$qty},
                    success: function(data){

                            if(data == "true"){
                                alert("插入成功");
                                }
                                // console.log(data);
                            }
                            
                    }) 
            })

 }else{
    $carAdd.on("click",function(){
        $carAdd.attr("href","../html/login.html");
    })
 }

// // =======================放大镜=================================

//                 $("#zoom_01").ezPlus();
//                 $("#zoom_03").ezPlus({
//                     gallery: 'gallery_01',
//                     cursor: 'pointer',
//                     galleryActiveClass: "active",
//                     imageCrossfade: true,
//                     loadingIcon: "images/spinner.gif"
//                 });

//                 $("#zoom_03").bind("click", function (e) {
//                     var ez = $('#zoom_03').data('ezPlus');
//                     ez.closeAll(); //NEW: This function force hides the lens, tint and window
//                     $.fancybox(ez.getGalleryList());
//                     return false;
//                 });

//             // });

 



 })




