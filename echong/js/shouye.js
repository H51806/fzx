 document.addEventListener('DOMContentLoaded',function(){
				var aja = document.querySelector(".aqList4");
				var aja1 = document.querySelector(".aqLisb1");
				var aja2 = document.querySelector(".aqLisb2");
				var aja3 = document.querySelector(".aqLisb3");
				var aja4 = document.querySelector(".aqLisb4");
                var xhr = new XMLHttpRequest();
	            var status =[200,304];
	            xhr.onload = function(){
            	if(status.indexOf(xhr.status)!=-1){
                   var res = JSON.parse(xhr.responseText);
                   
									//  aja.innerHTML = res.map(function(item){
									// 	// var {id,img,name,price} = item;	
									// 	return `
									//    <li data-id="${item.id}">								
									// <div class="aqImgBox">
									//   <a href="#" >
									// <img class="zom" src="${item.img}"></a>
									//    </div>
									// <p class="rowhidden ptop5"><a href="#">${item.name}</a></p>
									// <div class="ft16 cstress aqPrice ptop5">${item.price}</div>
									//     </li>			   					
									// 	`;
									// }).join("");

									 aja1.innerHTML = res.map(function(item){
										var {id,img,name,price} = item;	
										return `
									   <li data-id="${item.id}">								
									<div class="aqImgBox">
									  <a href="html/xiangqingye.html" >
									<img class="zom" src="${item.img}"></a>
									   </div>
									<p class="rowhidden ptop5"><a href="#">${item.name}</a></p>
									<div class="ft16 cstress aqPrice ptop5">${item.price}</div>
									    </li>			   					
										`;
									}).join("");

									  aja2.innerHTML = res.map(function(item){
										var {id,img,name,price} = item;	
										return `
									   <li data-id="${item.id}">								
									<div class="aqImgBox">
									  <a href="html/xiangqingye.html" >
									<img class="zom" src="${item.img}"></a>
									   </div>
									<p class="rowhidden ptop5"><a href="#">${item.name}</a></p>
									<div class="ft16 cstress aqPrice ptop5">${item.price}</div>
									    </li>			   					
										`;
									}).join("");

									   aja3.innerHTML = res.map(function(item){
										var {id,img,name,price} = item;	
										return `
									   <li data-id="${item.id}">								
									<div class="aqImgBox">
									  <a href="html/xiangqingye.html" >
									<img class="zom" src="${item.img}"></a>
									   </div>
									<p class="rowhidden ptop5"><a href="#">${item.name}</a></p>
									<div class="ft16 cstress aqPrice ptop5">${item.price}</div>
									    </li>			   					
										`;
									}).join("");

									    aja4.innerHTML = res.map(function(item){
										var {id,img,name,price} = item;	
										return `
									   <li data-id="${item.id}">								
									<div class="aqImgBox">
									  <a href="html/xiangqingye.html" >
									<img class="zom" src="${item.img}"></a>
									   </div>
									<p class="rowhidden ptop5"><a href="#">${item.name}</a></p>
									<div class="ft16 cstress aqPrice ptop5">${item.price}</div>
									    </li>			   					
										`;
									}).join("");
								                }
								        }
											xhr.open("get","api/shouye.php",true);
								            xhr.send(null);

								       
								        })
