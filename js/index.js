// if(menu == null){
// 	activo = 1;
// 	menu.style.display = "block";
// 	menu.style.display = "flex";
// 	menu.style.padding = "1em";
// 	menu.style.marginRight = "10px";
// 	link.style.marginBottom = "0";
// }
let body = document.getElementsByTagName("body")[0];
let menu = document.querySelector(".nav-list");
function MostrarMenu(){
	menu.classList.toggle('show');
	if(body.style.overflowY == ""){
		body.style.overflowY = "hidden";	
	}else{
		body.style.overflowY = "";
	}
}
// menu.addEventListener("click", function(){
// 	if()

// });
