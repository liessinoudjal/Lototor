require('../css/rgbd.scss');
//document.cookie = "RGBD-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
console.log(readCookie("doSomethingOnlyOnce"))

//si les RGBDont ete accepté on cache le message
if(readCookie("RGBD-accepted") == null){
		document.querySelector('.rgbd').classList.remove("d-none");
		document.querySelector('.rgbd  button').addEventListener("click", (event) =>{
			event.preventDefault();
			document.cookie = "RGBD-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
			document.querySelector('.rgbd').classList.add("d-none")
			})	
}


	

console.log(document.cookie);


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}