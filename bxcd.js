// ==UserScript==
// @name         保险词典
// @namespace    localhost
// @version      0.1
// @description  enter something useful
// @author       ILscObject
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
// @grant        none
// @include      http://www.qzr.cn/newsfile/bxcd/*
// ==/UserScript==

var tags = document.getElementsByTagName('td'); 
 for(var n=0;n <tags.length;n++){ 
	if (tags[n].align == 'center')
	{
		if (tags[n].height == '21')
		{
			//alert(tags[n].innerText);
			tags[n].parentNode.removeChild (tags[n]);
		}
	}
 }
 
var imgs = document.getElementsByTagName('img'); 
 for(var n=0;n <imgs.length;n++){ 
	if (imgs[n].src.indexOf('qzrgzh_s.jpg')>=0)
	{
		imgs[n].parentNode.removeChild (imgs[n]);
	}
 }

var span = document.getElementsByTagName('span');
 for(var n=0;n <span.length;n++){
     if (span[n].className == 'neirong'){
         span[n].style.display="none";
     }
 }


 
var span = document.getElementsByTagName('span');
 for(var n=0;n <span.length;n++){
     if (span[n].className == 'style1'){
         var str = (span[n].innerText);
		 str = (str.replace(/\（/,"\t"));
		 str = (str.replace(/\）/,","));
		 str = (str.replace(/\r\n/g,""));
		 str = (str.replace(/\n/g,""));
		 //span[n].innerText = (str + text);
     }
 }

var tds = document.getElementsByTagName('td');
 for(var n=0;n <tds.length;n++){
	if (tds[n].align == 'justify')
	{
		if (tds[n].className == 'artibody')
		{
            tds[n].innerText = (str + tds[n].innerText);
			//var text = tds[n].innerText;
		}
	}
 }

var brs = document.getElementsByTagName('br');
 for(var n=0;n <tags.length;n++){
	brs[n].parentNode.removeChild (brs[n]);
 }