$(function(){
	//监视文本框输入内容
	//change确实可以监视内容，不过并不是时时监控的
	/*$(".comment").change(function(){
		console.log($(this).val());
	})*/
	//这里可以委任body进行时时监视
	$("body").delegate(".comment","propertychange input",function(){
		//操作属性节点可以使用attr和prop，因为返回值为true或者false，可以用后一个
		if($(this).val().length>0){
			//操作属性控制能不能使用，文本框有值得话就可以使用
			$("#summit").prop("disabled",false);
		}else{
			$("#summit").prop("disabled",true);
		}
	});
	//监听其他三个按钮的点击事件，因为是动态创建的，所以必须用到时间委托
	//第一个按钮事件
	$("body").delegate(".a1","click",function(){
		//在此处设置a标签中的文本元素,text函数默认生成字符串，需要强行转型,不然相加会字符串合并
		$(this).text(parseInt($(this).text())+1);
	});
	//第二个按钮事件,给文本设置内容值
	$("body").delegate(".a2","click",function(){
		$(this).text(parseInt($(this).text())+1);
	});
	//第三个按钮事件，清除相应的列表,知己找到父元素进行清空
	$("body").delegate(".a3","click",function(){
		$(this).parents(".text_list").remove();
	});
	//获取input点击按钮事件,可以通过disable属性将input的点击事件取消
	//通过点击按钮进行内容链表的插入
	$("#summit").click(function(){
		//首先输入拿到内容
		var $text = $(".comment").val();
		var $weiboText = createEle($text);
		//插入微博
		$(".text").prepend($weiboText);
		//创建节点的方法
		function createEle($text){
			var $weiboText = $("<div class=\"text_list\">\n"+
								"<p class=\"list_top\">"+$text+"</p>\n"+
								"<p class=\"list_down\">\n"+
								"<span class=\"list_left\">"+createTime()+"</span>\n"+
								"<span class=\"list_right\">\n"+
									"<a href=\"javascript:\" class=\"a1\">0</a>\n"+
									"<a href=\"javascript:\" class=\"a2\">0</a>\n"+
									"<a href=\"javascript:\" class=\"a3\">删除</a>\n"+
								"<s/span>"+
							"</p>\n"+
						"</div>");
						return $weiboText;
			}
		//生成时间的方法
		function createTime(){
			var date = new Date();
			var arr = [date.getFullYear()+"-",
						date.getMonth()+1+"-",
						date.getDay()+" ",
						date.getHours()+":",
						date.getMinutes()+":",
						date.getSeconds()];
			//数组变成字符串
			console.log(arr.join(""));
			return arr.join("");
		}
	});
})
