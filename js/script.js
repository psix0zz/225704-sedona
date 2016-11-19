	var link = document.querySelector("h2");
	var popup = document.querySelector(".search-window");
	popup.classList.add("search-window-hidden");

	link.addEventListener("click", function(event) {
	event.preventDefault();
	console.log("Click!")
	popup.classList.toggle("search-window-hidden");
	      })