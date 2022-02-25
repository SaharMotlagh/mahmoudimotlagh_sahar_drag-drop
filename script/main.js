(() => {
	// make the connection to the elements on the page
	//that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
		  theGameBoard = document.querySelector(".puzzle-board");

	// theButtons become these:
	// [
	// <img>
	// <img>
	// <img>
	// ]

	function changeBgImg() {
		//debugger;//
		let key = this.dataset.bgref;
		console.log(key);
		theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
		// `` => this is a java script template string. you can use it to writh a bit of inline javascript which will be interpreted at runtime.
		// search for MDN javascript template string
	}
     // these are the "trigger" we want the user to use to fire off events
	  
	theButtons.forEach(button => button.addEventListener("click", changeBgImg));
	
})();
