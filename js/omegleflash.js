var splitDomain=document.domain.split(".");
if(splitDomain.length>1){
	document.domain=splitDomain[splitDomain.length-2]+"."+splitDomain[splitDomain.length-1]
}

var flashingTimeout=null;
function isFlashing(){
	return flashingTimeout!==null
}

function startFlashing(){
	if(isFlashing()){
		return
	}
	flashing=true;
	var b=[["___Omegle___","/static/favicon.png"],["\xAF\xAF\xAFOmegle\xAF\xAF\xAF","/static/altfavicon.png"]];
	function a(){
		var c=b.pop();
		document.title=c[0];
		setFavicon(c[1]);
		b.unshift(c);
		flashingTimeout=setTimeout(a,500)
	}
	a()
}
function stopFlashing(){
	if(!isFlashing()){
		return
	}
	clearTimeout(flashingTimeout);
	flashingTimeout=null;
	document.title="Omegle";
	setFavicon("/static/favicon.png")
}
function setFavicon(a){
	$$("link[rel=icon]").dispose();
	var b=new Element("link");
	b.rel="icon";
	b.type="image/png";
	b.href=a;
	$$("head")[0].grab(b)
};
