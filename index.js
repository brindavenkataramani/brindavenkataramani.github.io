function showProjects() {
	var main = document.getElementById("main")
	main.classList.add("mainAsHeader")
	main.style.marginTop = "5%"

	var projects = document.getElementById("projects")
	projects.classList.remove("hidden")
	projects.classList.add("waitABit")
	projects.classList.add("animated")
	projects.classList.add("fadeIn")
	projects.classList.remove("disabled")
}
