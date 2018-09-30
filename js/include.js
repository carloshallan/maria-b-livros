(function includeHTML() {


	let include = $('[include]');

	$.each(include, function (index, includeElem) {

		let includeMenu = new XMLHttpRequest();
		let includeE = $(includeElem);
		let includeURL = $(includeElem).attr('include');

		includeMenu.open('GET', includeURL);

		includeMenu.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status == 200) {includeE.html(this.responseText);}
				if (this.status == 404) {includeE.html("Page not found.");}
				/*remove the attribute, and call this function once more:*/
				includeE.removeAttr("include");
			  }
		}

		includeMenu.send();
	});



}());