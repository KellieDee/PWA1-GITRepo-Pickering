/*

	Kellie Pickering
	May 9th, 2015
	Programming for Web Applications I
	ANALYZE Buggy Search v1

 */

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),								// Create a variable for the container that holds the search results.
		searchInput = document.forms[0].search,											// Create a variable for search input text area.
		currentSearch = ''																// Create a variable that holds the current search query
	;
	

																						// 	Create a function that:
																						// validates a search query by passing it through like an argument and
 	// Validates search query															// assigns the results to a variable. */
	var validate = function(query){
		
		// Trim whitespace from start and end of search query
		while(query.charAt[0] === " "){													// While the first character in the search query is a space,
			query = query.substring(1, query.length);									// Convert the entire search query to begin at the second character and end at the last character.
		}

		while(query.charAt[query.length-1] === ""){										// While the second-to-last character in the search query is an empty string,
			query = query.substring(0, query.length-1);									// Convert the entire search query to begin at the first character and end at the second-to-last character.
		}

		// Check search length, must have 3 characters
		if(query.length < 3){															// IF search term is less than three characters long,
			alert("Your search query is too small, try again.");						// alert the user.
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();														// Set focus on the search input text area.
			return;																		// End the function and return the value.
		}

		search(query);																	// When all criteria for search query is met, initialize the search.
	};

	var search = function(query){														// Finds search matches

		var queryArray = query.join(" ");												// split the user's search query string into an array
		var results = [];																// array to store matched results from database.js

		for(var i=0, j=db.length; i<j; i++) {											// loop through each index of db array

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
				var qItem = queryArray[ii].toLowerCase();

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qItem);
				if (compare !== -1) {
					results.push(db[i]);
				}
			}
		}

		results.sort();																	// Place the search results in alphanumerical order.
		
		// Check that matches were found, and run output functions
		if(results.length = 0){															// IF there are zero results
			noMatch();																	// Call the noMatch function.
		}else{																			// ELSE
			showMatches(results);														// Call the showMatches function and pass the results as an argument.
		}
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {											// Submit a search query (by clicking a button) to initialize the function.
		var query = searchInput.value;													// Assign the search query to a variable
		validate(query);																// Validate the query by calling the validate function.

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	}

})();