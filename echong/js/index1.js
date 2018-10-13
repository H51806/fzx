
jQuery(function($){
    $shows = $(".shows");
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
                    '<a class="view-ActionBack" c-bname="请登录" clog="" c-emit="click" c-et="event" c-etl="" href="html/login.html" clog-get="true">'+'请登录'+'</a>' +
                    '<a class="view-ActionBack striking-link" c-bname="免费注册" clog="" c-emit="click" c-et="event" c-etl="" href="html/zhuce.html" rel="nofollow" clog-get="true">'+'免费注册'+'</a>';
                    $view.append(s0);
                    console.log(s0);
           }

    $.ajax({
            url: 'api/shouye.php',
            type: 'GET',
            success: function(data){
                var data = JSON.parse(data);
                var res = [];
                // for(var key in data){
                //     res += key + "=" + data[key] + "&";
                // }
                // console.log(res);
                for(var i=0;i<data.length;i++){
                   
              $shows.append( ` <li class="m-sale" data-id="${data[i].id}">                
                  <div class="aqImgBox">
                    <a href="#" >
                  <img class="view-LoginStatus" src="${data[i].img}"></a>
                     </div>
                  <p class="rowhidden ptop5"><a href="#">${data[i].name}</a></p>
                  <div class="ft16 cstress aqPrice ptop5">${data[i].price}</div>
                      </li>` );
                         
                        res.push(data[i]);
                   }
                          // console.log(res);
                          
                    $(".m-sale").each(function(idx,item){
                          
                           item.onclick = function(){
                               
                                 var str = "";
                                for(var key in res[idx]){
                                    str += key + "=" + res[idx][key] + "&";
                                }
                                str = str.slice(0,-1);
                                location.href = "html/xiangqingye.html?" + encodeURI(str);
                                console.log(str);
                           }

            }); 
        }
            

    });
     








})



















