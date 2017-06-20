//toggle
				function toggle(ele,className){
						var hasClass =  ele.hasClass(className);
							if(!hasClass){
								ele.addClass(className)
							}else{
								ele.removeClass(className)
								}
							}
				$(".circle-initial").on("click",function(){
					if($(".circle-initial").hasClass("selected")){
						$(this).removeClass("selected");
					}else{
						$(this).addClass("selected");
					}	
						
				})
				