$(document).ready(function() {
  window.dancers = [];

  let limitCreationOfStalker = 1;
  let spaceBetweenDancers = 125;
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

  $('.lineUpDanceBtn').on('click', function(event) {
    let incrementer = spaceBetweenDancers;
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(400, incrementer);
      incrementer += spaceBetweenDancers;
    }
  });


  let windowWidth = $(window).width();
  console.log('width => ', windowWidth)

  // if window.dancers.length * ( incrementer + dancerWidth) > windomWidth - (2 * incrementer)
  if(window.dancers.length * (spaceBetweenDancers + dancerWidth) > (windowWidth - (2 * spaceBetweenDancers))) {
    // iterate the dancers container until the length divided by 2 (use ceiling)
      // set window.dancers[i] to static y1, x + incrementer
      //incrementer += space between dancers
    // reset the incrementer = 0
      // set window.dancers[i] to static y2, x + incrementer

  }



//10 dancers ----> each dancer takes up xxx width + the space between him and the next


//dancer          dancer          dancer
//d.width + space|d.width + space|d.width + space|

});

