function init(){
    console.log("测试test");
}

function addAd(){
	var $aside = $("aside[class='sidebar']")
	$aside.prepend(
		'<div class="blok_url" style="text-align: center;padding:10px ">' +
				'<img style="height: 100%; width: 100%" src="/img/blog.png"></img>' +
		'</div>'
	)
	
	var $blokUrl = $("div[class='blok_url']")
	$blokUrl.click(function(){
	  window.open('https://blog.csdn.net/weixin_38150130')
	});
}


//因为界面加载原因，我们延迟500ms再调用init
setTimeout("init()",1000)
setTimeout("addAd()",1000)
