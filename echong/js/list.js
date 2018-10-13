document.addEventListener('DOMContentLoaded',function(){
				p=new Promise(function(resolve,reject){
                        var  xhr = new XMLHttpRequest();
                        var status =[200,304];
                        xhr.onload = function(){
                            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                                var data = JSON.parse(xhr.responseText);
                                // console.log(xhr.responseText);
                                resolve(data);
                            }
                        }
                        xhr.open("get","../api/list.php",true);
                        xhr.send(null);
                    });	
   p.then(
        function(data){
            var shoppings = document.getElementsByClassName("glist1")[0];
                //中间页面渲染
                function  middleRomance(){
                    var str = "";
                 str+= data.map(function(item){
			     return `
					 <div class="list_box-li" data-gid="193972">
            <div class="list-box-con">
                <div class="gimg rela">
                    <a href="../html/xiangqingye.html">
                        <img width="200" height="200"  src="${item.img}">
                         <span>${item.name}</span>
                    </a>
                </div> 
                <p class="gprice">
                    <span class="c999 through market-price">${item.price}</span>
                    <span class="cred ft16 price">${item.newprice}</span>
                </p>
                </div>
                </div>
							`;
						}).join("");
					 shoppings.innerHTML = str;
                    // console.log(shoppings);

                    }
                
                middleRomance(data);


		 // =============================价格排序
                        var paixufl = document.querySelector(".paixufl");
                         var G_D_on = document.querySelector(".dianji");
                                           
                 var da = true;
                G_D_on.onclick=function(){

                    if(da == true){
                        var res = data.sort(function(a,b){
                        return a.newprice - b.newprice;
                        
                        });

                         ddleRomance(data);
                    }
                    else if(da == false){
                         var res = data.sort(function(a,b){
                         return b.newprice - a.newprice;
                         });
                         ddleRomance(data);
                    }
                    da = ! da;
                    // console.log(res);
                    function  ddleRomance(){
                    var str = "";
                   str+= data.map(function(item){
                 return `
                     <div class="list_box-li">
                   <div class="list-box-con">
                  <div class="gimg rela">
                    <a href="../html/xiangqingye.html">
                        <img width="200" height="200"  src="${item.img}">
                         <span>${item.name}</span>
                    </a>
                </div> 
                <p class="gprice">
                    <span class="c999 through market-price">${item.price}</span>
                    <span class="cred ft16 price">${item.newprice}</span>
                </p>
                </div>
                </div>`;
                        }).join("");
                   
                     shoppings.innerHTML = str;
                    // console.log(shoppings);
                }
                    
               ddleRomance(data);
              }
             })
    });
                    
// ======================================封装排序=========================================
 // function compare(attr){
 //    if(attr=="datetime"){
 //        return function bijiao(obj1,obj2){ 
 //        // var d = new Date;
 //        var value1 = new Date(obj1[attr]);
 //        var value2 = new Date(obj2[attr]);
 //        return value1-value2;}
 //    }
 //    else{
 //        return function bijiao(obj1,obj2){ 
 //        var value1 = obj1[attr];
 //        var value2 = obj2[attr];
 //        return value1-value2;}
 //    }                            
 // }







 
