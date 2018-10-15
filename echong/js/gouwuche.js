jQuery(function($){
  // $pure = $(".pure-table");
  $tbody = $(".view-CartList");
  $uname = $.cookie("username");
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
  // =========生成购物车列表
  if($uname != null){


  $.ajax({
            url: '../api/gouwuche.php',
            type: 'GET',
            data: {uname:$uname},
            success: function(data){
                    data = JSON.parse(data);
                    // console.log(data);
                    // $.each(data,function(idx,item){
                    //   console.log(idx);
                    // })
                    
                    for(var i=0;i<data.length;i++){
				  $tbody.append('<tr class="cart-order item-entry view-ItemEntry" data-eventid="'+data[i].id+'">'+
								'<td width="50" align="center">'+
								'<input autocomplete="off" class="J_itemCheck cart-td-check" checked="checked" type="checkbox" name="check_goods_150590" doclick="check" data-eventid="'+data[i].id+'">'+
								'</td>'+
								'<td width="500" valign="middle">'+
								'<div class="por-img fl overflow bgwhite ftc">'+
								'<a href="#" target="_blank">'+
								'<img src="'+data[i].imgsrc+'" width="80">'+
								'</a>'+
								'</div>'+
								'<div class="por-intro fl ml20 mt" style="margin-top: 30px;">'+data[i].title+
								'<a href="#" target="_blank" class="c333">'+data[i].title+'</a>'+
								'</div>'+
								'<div class="clear">'+'</div>'+
								'</td>'+
								'<td width="150" align="center" style="padding-top:20px;">'+
								'<div class="buynum-wrap clearfix cart-td-number">'+
								'<span id="less1" doclick="changeBuyNum" act="sub" class="ft18 fl del-num">'+'-'+'</span>'+
								'<input autocomplete="off" name="gnum_150590" stock="517" oldnum="1" type="text" class="text buynum ftc fl bgwhite  view-ItemEntryNum" value="'+data[i].qty+'" id="num" >'+
								'<span doclick="changeBuyNum" act="add" id="add1" class="fl add-num">'+'+'+'</span>'+
								'</div>'+
								'<p class="c666 mtneg10">有货</p>'+
								'</td>'+
								'<td width="200" align="center" class="c000 bold ft14 view-ItemEntryPrice">'+
								data[i].curprice+'</td>'+
								'<td width="200" align="center">'+
								'<a href="#" onclick="Epet.Common.addFavors(150590)" class="c666">'+'[收藏]'+'</a>'+
								'<a href="#" doclick="deleteGoods" gid="150590" class="c666 view-BatchDelBtn">'+'[删除]'+'</a>'+
								'</td>'+
								'</tr>'+
								'<tr>'+
								'<td colspan="5" class="pt30 pb10">'+
								'<div class="balance">'+
								'<div class="w-max ct">'+
								'<div class="fl c333 pl10">'+
								'<label class="mr20">'+
								'<input autocomplete="off" checked="checked" type="checkbox" class="all-checkbox J_checkAll J_eventCheck aa td" name="check_all_" data-eventid="'+data[i].id+'" doclick="check">'+'全选'+
								'</label>'+
								'<a href="#" doclick="deleteSelected" class="c333 view-BatchDelBtn">'+'[ 删除选中商品 ]'+'</a>'+
								'<a href="#" doclick="favorSelected" class="c333 ml5">'+'[ 收藏选中商品 ]'+'</a>'+
								'</div>'+
								'<div class="fr cart-price">'+
								'总价（不含运费）'+'<strong class="ft18 view-ItemEntryPrice qi"></strong>'+
								'<a href="#" onclick="Epet.Cart.Submit.checkOut(this)" class="cfff epet_sensor_settlement go-balance ftc bold ft18 ml20 bggreen">'+'去结算('+data[i].qty+')'+'</a>'+
								'</div>'+
								'<div class="clear">'+'</div>'+
								'</div>'+
								'</div>'+
								'</td>'+
								'</tr>'+
								'<tr>'+
								'<td colspan="2" class="pt20">'+
								'<a href="#" class="go-buy">'+'继续购物'+'</a>'+
								'<a href="#" class="auto-buy hide">'+'按月自动购买'+'</a>'+
								'</td>'+
								'<td colspan="3" align="right" class="pt20">'+
								'<b class="cred cart-tip mt5 hide" style="display: none;">'+'</b>'+
								'</td>'+
								'</tr>') 
                      $len = data[i].id.length;
                    /*  $qtyAll=data[i].qty.length;
                      console.log($qtyAll);*/
                    } 

                      // ==========获取元素
                      $checkAll = $(".J_checkAll");
                      $checkAll2 = $("#s-all-f");
                      $checkBox = $(":checkbox").not(".J_checkAll");
                      $checkBox2 = $(":checkbox").not("#s-all-f");
                      $check = $(".J_eventCheck");
                      $itemCheck = $(".J_itemCheck");
                      $input = $(".view-ItemEntryNum");

                      $check.addClass("aa");
                      $qian = $(".qian");
                      zongshu();
                     
                      // console.log($jian);
                     // ==========
                    $checkAll.on("click",function(){
                      $checkBox.prop("checked",this.checked);
                      $checkAll2.prop("checked",this.checked);
                      zongshu();
                    })
                    $("#s-all-f").on("click",function(){
                      $checkBox.prop("checked",this.checked);
                      $checkAll.prop("checked",this.checked);
                      zongshu();
                     });
                    
                        $(".J_eventCheck").on("click",function(){ 
              
                         
                        $z = $(this).filter("input[data-eventid]").attr("data-eventid");
                       
                        $t = $(".J_itemCheck").filter('[data-eventid="' + $z + '"]')
                         $t.prop("checked",this.checked);
                        
                    
                        changeCheckAll();
                     
                        zongshu();
                      })
                     
                    
                    $itemCheck.on("click",function(){
                      $e = $(this).filter("input[data-eventid]").attr("data-eventid") ;
                      $r = $(".J_eventCheck").filter('[data-eventid="' + $e + '"]')
                      $r.prop("checked",this.checked);
                      changeCheckAll();
                      zongshu();
                     

                    })
                 
                  

                      // ==============
                      $add = $(".add-num");
                      $jian = $(".del-num");
                      
                      // console.log($add);
                     // ==========加
                    $.each($add,function(idx,item){
                      $(this).click(function(){
                        $a = Number($(this).closest(".cart-td-number").find(".view-ItemEntryNum").val());
                       $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val($a+1);
                      zongshu();
                      // ===============
                       $shuliang = $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val();
                      $id = $(this).closest(".item-entry").attr("data-eventid");

                        change();
                      })
                    })
                    // ======减
                     $.each($jian,function(idx,item){
                      $(this).click(function(){
                        $a = Number($(this).closest(".cart-td-number").find(".view-ItemEntryNum").val());
                      $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val($a-1);
                       if($a <=1){
                        $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val(1);
                       }
                      zongshu();
                      $shuliang = $(this).closest(".cart-td-number").find(".view-ItemEntryNum").val();
                      $id = $(this).closest(".item-entry").attr("data-eventid");

                      change();
                      })

                    })

                     // =======删除
                     $.each($(".view-DelItemBtn"),function(idx,item){
                     $(this).click(function(){
                      // $(this).closest(".view-CartList");
                      // $(this).closest(".view-CartList").remove("data-eventid");
                      $ea = $(this).closest(".view-CartList").find("tr[data-eventid]").attr("data-eventid") ;
                      console.log($ea);
                       $(this).closest(".view-CartList").find('[data-eventid="' + $ea + '"]').remove();
                       zongshu();
                      
                      $id = $(this).closest(".item-entry").attr("data-eventid");
                       $.ajax({
                            url: '../api/shangchu.php',
                            type: 'POST',
                            data: {id:$id,
                                  uname:$uname,
                                  },
                            success: function(data){
                                    console.log(data);
                                  }
                                });
                    })
                  })
                  // =======删除所有
                  $(".view-BatchDelBtn").on("click",function(){
                    $(this).parent().parent().parent().prev().prev().find(".view-CartList").empty();
                    zongshu();
                    // $id = $(this).closest(".item-entry").attr("data-eventid");
                       $.ajax({
                            url: '../api/shangchuall.php',
                            type: 'POST',
                            data: {
                                  uname:$uname,
                                  },
                            success: function(data){
                                    console.log(data);
                                  }
                                });
                       // console.log($id);
                       console.log($uname);
                  })

 
// ========================================
                    function zongshu(){
                     $jian = $(".jian");
                      var input = $(".td input:checked");
                        ;

                        var zong=0;
                        $p = $(".view-ItemEntryPrice");
                        // console.log($p.text());
                      $.each(input,function(idx,item){
                        // console.log(input);
                        
                        zong+=$(this).closest(".td").find("input[ type='checkbox' ]").length;
                       		
                      })

                   
                       console.log(zong);
                       $jian.text(zong);
                       function qian(){
                         var input1 = $(".cart-td-check input:checked");
                         $num = $(".view-ItemEntryNum");
                         var jiage=0;
                          $.each(input1,function(idx,item){
                            $.each($num,function(idx1,item1){
                              jiage += parseInt($(this).closest(".view-ItemEntry").find(".view-ItemEntryPrice").text()*item1.value);
                            })
                            
                            // console.log($(this).closest(".cart-td-check"));
                            // console.log(jiage);
                          })
                          $(".qi").text(jiage);

                           console.log(jiage);
                       }
                        qian();

                      }


// =================================
                  // function change(){
                    // $qty = 
                    // $.ajax({
                    //   url: '../api/changeCar.php',
                    //   type: 'GET',
                    //   data: {id:$id,
                    //         uname:$uname,
                    //          qty:$qty},
                    //   success: function(data){
                    //           data = JSON.parse(data);
                    //         }
                    //       )}
                  // }
    
                  function change(){
                    
                          $.ajax({
                            url: '../api/changCar.php',
                            type: 'POST',
                            data: {id:$id,
                                  uname:$uname,
                                   qty:$shuliang},
                            success: function(data){
                                    console.log(data);
                                  }
                                });
                      console.log($id);
                      console.log($shuliang);
                      console.log($uname);
                  }








// =================================
                      
                    function changeCheckAll(){
                      $checkeds = $checkBox.filter(":checked").not("#s-all-f");
                     
                      if($checkeds.length == $checkBox.length  ){
                          $checkAll[0].checked =  true;
                          $checkAll2[0].checked = true;
                      }else{
                          $checkAll[0].checked = false;
                          $checkAll2[0].checked = false;
                      }
                  } 
                     
            }  
        })
}
        
// ===========购物车列表end


 








})






























