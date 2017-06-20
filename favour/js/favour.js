 						$(".purchase-num").click(function(){
				        layer.open({
				            type: 1,
				            title:false,
				            closeBtn: 1, //显示关闭按钮
				            shift: 2,
				            scrollbar: false,
				            shadeClose: false, //开启遮罩关闭
				            content: $("#affirm-express"),
				            area: ['100%','287px'],
				        });
				    });
				    
				//绑定领券按钮的触发事件 
				$(".get").click(function(){ 
				
				$(".mask").css("opacity","0.3").show(); 
				showDialog(); 
				$(".dialog").show(); 
				}); 
				
				/* 
				* 根据当前页面于滚动条的位置，设置提示对话框的TOP和left 
				*/ 
				function showDialog(){ 
				var objw=$(window);//当前窗口 
				var objc=$(".dialog");//当前对话框 
				var brsw=objw.width(); 
				var brsh=objw.height(); 
				var sclL=objw.scrollLeft(); 
				var sclT=objw.scrollTop(); 
				var curw=objc.width(); 
				var curh=objc.height(); 
				//计算对话框居中时的左边距 
				var left=sclL+(brsw -curw)/2; 
				var top=sclT+(brsh-curh)/2; 
				
				//设置对话框居中 
				objc.css({"left":left,"top":top}); 
				
				} 
				
				//当页面窗口大小改变时触发的事件 
				$(window).resize(function(){ 
				
				if(!$(".dialog").is(":visible")){ 
				return; 
				} 
				showDialog(); 
				}); 
				
				
				//取消按钮事件 
				$("#noOk").click(function(){ 
				$(".dialog").hide(); 
				$(".mask").hide(); 
				}); 
				
				//确定按钮事假 
				$("#ok").click(function(){ 
				
				$(".dialog").hide(); 
				$(".mask").hide();
				$(".model-two").remove();
				alert("领取成功");
				}); 