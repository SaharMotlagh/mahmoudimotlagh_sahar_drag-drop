(() => {
	// make the connection to the elements on the page
	//that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
		  puzzlePieces = document.querySelectorAll(".puzzle-pieces *"), 
	// * means all elemets in that class
		  dropZones = document.querySelectorAll(".drop-zone"),
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

	function startDrag(event) {
		//console.log("started dragging");
   // save a reference to the element we are dragging
   //this rule is for dragging
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function draggedOver(event)  {
		// event is the user event (a click, a drag, a drop)
		// some elements have default behaviour (like an anchor tag) -> we need to block that behaviour
		// and script our own
		// that's what event.preventDefault() does -> override the default behaviour (block it)
		event.preventDefault();
		//console.log("dragged over me");
	}
	function handleDrop(event)  {
		event.preventDefault();
		//console.log("dropped on me");
		// this rule is for dropping
		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);
		//append means add
		// adds an ellemnet to a container element

		// the "this" keyword is a refrence to the element you are dropping onto (or into)
		this.appendChild(document.querySelector(`#${currentEl}`));
	}
	
     // these are the "trigger" we want the user to use to fire off events

	theButtons.forEach(button => button.addEventListener("click", changeBgImg));
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});
})();
