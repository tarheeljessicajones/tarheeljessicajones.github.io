  //declare variables
  var majors = ["Computer Science", "Communications", "Political Science", "Education" , "Art", "Business Administration", "Engineering", "English", "Psychology","Nursing","Biology"];

      //buttons appear in the "top" section of the document
      function renderButtons() {
        $("#top").empty();
        for (var i = 0; i < majors.length; i++) {
          var a = $("<button>");
               // Adding a class
              a.addClass("major");
              // Added a data-attribute
              a.attr("data-search", majors[i]);
              // Provided the initial button text
              a.text(majors[i]);
              // Added the button to the HTML
              $("#top").append(a);
          }
      } 

      //ajax call to get gifs of the button selected
      function displayMajorInfo() {
        $("#outcome").empty();
         var x = $(this).data("search");
          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10"; 
          console.log(queryURL);

      $.ajax({url:queryURL,method:"GET"})
        //get stills and animated gifs... default view is still
        .done(function(response) {
          var results = response.data;
          for (var i=0; i<results.length ; i++) {
            var rating = results[i].rating;
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-animate", results[i].images.fixed_height.url);
            image.attr("class", 'url');
            image.attr("data-state", 'still');

            //display images in outcome section 
            $("#outcome").prepend(image);

          }

          //on click of each image, change data-state from still to animated
          $(".url").on("click", function() {
                var state = $(this).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                     $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    }
              });
        });
      }
  
      //on click of the add-major button, add a corresponding button to the button array. Then clear the input field
      $("#add-major").on("click", function(event) {
        event.preventDefault();
        var major = $("#major-input").val().trim();
        // The major from the textbox is then added to our array
        majors.push(major);
        // Calling renderButtons which handles the processing of our major array
        renderButtons();
        $("#major-input").val("");
      });

    //on cick of a major button, display ajax info
     $(document).on("click", ".major", displayMajorInfo);

    //on page ready; show buttons
    renderButtons();
