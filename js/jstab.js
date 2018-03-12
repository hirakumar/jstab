const TabControl=function(myTab){
		
		
		this.init=function(myTab){
			var myTab=document.querySelectorAll(myTab)[0];
			this.loadData=this.processTab.bind(myTab);
			for(let i=0; i<myTab.children.length; i++){
				if(myTab.children[i].nodeName=="NAV"){
					let li=myTab.childNodes[i].nextElementSibling.children[0].children;
					
					for(let j=0; j<li.length; j++){
						let alink=li[j].children[0];
						
						alink.addEventListener("click",this.loadData,false)
					}
					
				}
			}
			window.addEventListener("hashchange",this.loadData,false);
			
			window.addEventListener("load",this.loadData,false);
			
		}
		
		this.processTab=function(event){
			console.log("event");
			var myTab=document.querySelectorAll("#myTab")[0];
			var eventhash="";
			// Event : load
			if(event.type=="load"){
				eventhash=event.target.location.href;
			 // Stop if can not found hash on location
			 if(eventhash.search("#")==-1){
				return false;
			 }
			 eventhash=eventhash.split("#");
			}
			// Event : hashChange
			if(event.type=="hashchange"){
				if(event.newURL.search("#")==-1){
					return false;
				}
				eventhash=event.newURL.split("#");
			}
			
			// Tab Button
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
							alink.parentElement.className="activeLi";
							
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
							divTab.children[i].setAttribute("class","tab activeTab");
						}else{
							//console.log("Not Found");
							divTab.children[i].setAttribute("class","tab");
						}
					}
				}
			}
			
		}
		

		
		
	}