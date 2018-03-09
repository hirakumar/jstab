const TabControl=function(myTab){
		this.myTab=document.querySelectorAll(myTab)[0];
		
		this.init=function(){
			for(let i=0; i<this.myTab.children.length; i++){
				if(this.myTab.children[i].nodeName=="NAV"){
					let li=this.myTab.childNodes[i].nextElementSibling.children[0].children;
					
					for(let j=0; j<li.length; j++){
						let alink=li[j].children[0];
						let mydata=this.goTarget.bind(this);
						alink.addEventListener("click",mydata,false)
					}
					
				}
			}
			window.addEventListener("hashchange",this.setTabClass,false);
			let loadData=this.winLoadSetTabClass.bind(this.myTab);
			window.addEventListener("load",loadData,false);
		}
		this.winLoadSetTabClass=function(event){
			
			myTab=document.querySelectorAll(myTab)[0];
			var eventhash=event.target.location.href;
			 // Stop if can not found hash on location
			 if(eventhash.search("#")==-1){
				return false;
			 }
			 eventhash=eventhash.split("#");
			for(let i=0; i<myTab.children.length; i++){
				if(myTab.children[i].nodeName=="NAV"){
					let li=myTab.childNodes[i].nextElementSibling.children[0].children;
					
					for(let j=0; j<li.length; j++){
						let alink=li[j].children[0];
						let aLinkHref=alink.href;
						let alinkHash=aLinkHref.split("#");
						
						// Setting Active Class on A tag
						if(alinkHash[1]==eventhash[1]){
							alink.className="active";
							
						}else{
							alink.className="";
						}
						
						
						
					}
					
				}
				// Find div.tabs and set activeTab class 
				if(myTab.children[i].nodeName=="DIV" && myTab.children[i].className=="tabs"){
					let divTab=myTab.children[i];
					
					for(let i=0; i<divTab.children.length; i++){
						//console.log(divTab.children[i]);
						if(divTab.children[i].id==eventhash[1]){
							divTab.children[i].setAttribute("class","tab activeTab");
						}else{
							//console.log("Not Found");
							divTab.children[i].setAttribute("class","tab");
						}
					}
				}
			}
			
		}
		this.setTabClass=function(event){
			//console.log(event.newURL);
			if(event.newURL.search("#")==-1){
				return false;
			}
			
			var eventhash=event.newURL.split("#");
			
			for(let i=0; i<this.myTab.children.length; i++){
				if(this.myTab.children[i].nodeName=="NAV"){
					let li=this.myTab.childNodes[i].nextElementSibling.children[0].children;
					
					for(let j=0; j<li.length; j++){
						let alink=li[j].children[0];
						let aLinkHref=alink.href;
						let alinkHash=aLinkHref.split("#");
						
						// Setting Active Class on A tag
						if(alinkHash[1]==eventhash[1]){
							alink.className="active";
						}else{
							alink.className="";
						}
						
						
						
					}
					
				}
				// Find div.tabs and set activeTab class 
				if(this.myTab.children[i].nodeName=="DIV" && this.myTab.children[i].className=="tabs"){
					let divTab=this.myTab.children[i];
					
					for(let i=0; i<divTab.children.length; i++){
						console.log(divTab.children[i]);
						if(divTab.children[i].id==eventhash[1]){
							divTab.children[i].setAttribute("class","tab activeTab");
						}else{
							console.log("Not Found");
							divTab.children[i].setAttribute("class","tab");
						}
					}
				}
			}
		}
		this.goTarget=function(event){
			
			let eachLink=event.target.parentElement.parentElement.children;
			// Removing all class from a links
			for(let i=0; i<eachLink.length; i++){
				eachLink[i].children[0].className="";
			}
			// Set Active Class on target link
			event.target.className="active";
			
			let link=event.target.hash.split("#");
			let myTab=document.querySelectorAll("#myTab")[0];
			
			for(var i=0;i<myTab.children[1].children.length;i++){
				myTab.children[1].children[i].className="tab";
				if(myTab.children[1].children[i].id==link[1]){
					myTab.children[1].children[i].className="tab activeTab";
				}else{
					myTab.children[1].children[i].className="tab";
				}
			}
		}
	}