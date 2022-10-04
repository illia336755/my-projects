const iconMenu = document.querySelector(".navbar");
if (iconMenu) {
	const menuBody = document.querySelector(".menu_body");
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock"); 
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
	})
}