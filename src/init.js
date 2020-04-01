$(document).ready(function() {
  window.dancers = [];

  let limitCreationOfStalker = 1;
  let spaceBetweenDancers = 75;
  let stalkerCount = 0;
  let dancerWidth = 100;


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if(dancerMakerFunctionName === 'MakeFollowDancer') {
      stalkerCount++;

      if(stalkerCount >= limitCreationOfStalker) {
       $('.followDancerBtn').unbind('click');
      }
    }

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  /*$('.lineUpDanceBtn').on('click', function(event) {
    let incrementer = spaceBetweenDancers;
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(400, incrementer);
      incrementer += spaceBetweenDancers;
    }
  });*/

  $('.lineUpDanceBtn').on('click', function(event) {
    let windowWidth = $(window).width();
    let windowHeight = $(window).height();
    console.log('width => ', windowWidth)

    // if window.dancers.length * ( incrementer + dancerWidth) > windomWidth - (2 * incrementer)
    if(window.dancers.length * (spaceBetweenDancers + dancerWidth) > (windowWidth - (2 * spaceBetweenDancers))) {
      // iterate the dancers container until the length divided by 2 (use ceiling)
      var startingXPosition = 100;
      var staticYPosition1 = windowHeight * 0.40;
      var staticYPosition2 = windowHeight * 0.70;
      var incrementer = 0; //(or whatever the starting position of x is)
      for(let i = 0; i < Math.ceil(window.dancers.length/2); i++) {
        // set window.dancers[i] to static y1, x + incrementer
        window.dancers[i].setPosition(staticYPosition1, startingXPosition + incrementer);
        //incrementer += space between dancers
        incrementer += spaceBetweenDancers;

      }
      // reset the incrementer = 0
      incrementer = 0;
      // iterate the dancers container from Math.floor until the end
      for(let j = Math.floor(window.dancers.length/2); j < window.dancers.length; j++) {
        window.dancers[j].setPosition(staticYPosition2, startingXPosition + incrementer);
        incrementer += spaceBetweenDancers;
      }

      // set window.dancers[i] to static y2, x + incrementer
    } else {
      let incrementer = spaceBetweenDancers;
      for(var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].setPosition(windowHeight * 0.50, incrementer);
        incrementer += spaceBetweenDancers;
      }
    }
  });



//10 dancers ----> each dancer takes up xxx width + the space between him and the next


//dancer          dancer          dancer
//d.width + space|d.width + space|d.width + space|

});

