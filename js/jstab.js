/*
	JS Tab v1.1
	Author : Hira Kumar Maharjan
	URL : https://github.com/hirakumar/jstab
	License : MIT license
	Date : 2018-03-13
	**************************************
	Default Property of TabControl Object
	**************************************
	TabControl.activeTabLinkClass="active";
	TabControl.activeTabClass="activeLi";
	TabControl.activeTabBoxClass="activeTab";
	
*/

const TabControl=function(myTab){
	this.myTab=document.querySelectorAll(myTab)[0];
	for(let i=0; i<this.myTab.children.length; i++){
				
		if(this.myTab.children[i].nodeName=="UL"){
			let li=this.myTab.childNodes[i].nextElementSibling.children;
							
			for(let j=0; j<li.length; j++){
				let alink=li[j].children[0];
				
				alink.addEventListener("click",this.processTab.bind(this),false)
			}
			
			
			
		}
				
	}
	this.loadData=this.processTab.bind(this);
	window.addEventListener("hashchange",this.processTab.bind(this),false);
	window.addEventListener("load",this.processTab.bind(this),false);
}
	
TabControl.prototype.activeTabLinkClass="active";
TabControl.prototype.activeTabClass="activeLi";
TabControl.prototype.activeTabBoxClass="activeTab";

TabControl.prototype.sendHashLink=function(hash){
	var allLinks=document.getElementsByTagName("a");
	for(let i=0; i<allLinks.length; i++){
		let myPage=allLinks[i].hash.split("#");
		if(myPage[1]==hash){
			return allLinks[i];
		}
	}
}

TabControl.prototype.processTab=function(event){
			
	var eventhash="";
	// Event : load
	if(event.type=="load"){
		eventhash=event.target.location.href;
		// Stop if can not found hash on location
		if(eventhash.search("#")==-1){
		return false;
	 }
	 eventhash=eventhash.split("#");
	 
	}else if(event.type=="hashchange"){
		if(event.newURL.search("#")==-1){
			return false;
		}
		eventhash=event.newURL.split("#");
		
	}else if(event.type=="click"){
		eventhash=event.target.href;
		if(eventhash.search("#")==-1){
			return false;
		}
		eventhash=eventhash.split("#");
	}
		
		
	let hashElement=this.sendHashLink(eventhash[1]);
	let myTab=hashElement.parentNode.parentNode.parentNode;
		
	// Tab Button
	for(let i=0; i<myTab.children.length; i++){
		
		if(myTab.children[i].nodeName=="UL"){
			let li=myTab.childNodes[i].nextElementSibling.children;
			
			for(let j=0; j<li.length; j++){
				let alink=li[j].children[0];
				let aLinkHref=alink.href;
				let alinkHash=aLinkHref.split("#");
				
				// Setting Active Class on A tag
				
				if(alinkHash[1]==eventhash[1]){
					alink.className=this.activeTabLinkClass;
					alink.parentElement.className=this.activeTabClass;
					
				}else{
					alink.className="";
					alink.parentElement.className="";
				}
				
				
				
			}
			
		}
		// Tab Content
		if(myTab.children[i].nodeName=="DIV" && myTab.children[i].className=="tabs"){
			let divTab=myTab.children[i];
			
			for(let i=0; i<divTab.children.length; i++){
				//console.log(divTab.children[i]);
				if(divTab.children[i].id==eventhash[1]){
					divTab.children[i].setAttribute("class","tab "+this.activeTabBoxClass);
				}else{
					//console.log("Not Found");
					divTab.children[i].setAttribute("class","tab");
				}
			}
		}
	}
			
}