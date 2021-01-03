require('../css/rgbd.scss');
//document.cookie = "RGBD-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
// console.log(readCookie("doSomethingOnlyOnce"))

//si les RGBD n'ont pas été accepté on affichge le message d'alert et on set l'event sur le boutton d'acceptation

window.onload = function (){

	if(readCookie("RGBD-accepted") == null){
		document.querySelector('#rgbd').classList.remove("d-none");
		document.querySelector('#rgbd  button').addEventListener("click", (event) =>{
			event.preventDefault();
			// document.cookie = "RGBD-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT;SameSite=Strict";
			setCookie("RGBD-accepted", "true", 30)
			document.querySelector('#rgbd').classList.add("d-none")
			})	
	}else{
		document.querySelector('#rgbd').classList.add("d-none")
	}
}
	




function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/;SameSite=Strict";
}
function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
		console.log( date.toUTCString())
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
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