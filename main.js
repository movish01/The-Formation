function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}



window.addEventListener('mouseup', function(event){
	var con = document.getElementsById('menu-bar');
	if(event.target != con){
		con.style.display = 'none';
	}
})