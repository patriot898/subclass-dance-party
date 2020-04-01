var MakeFollowDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;


  //console.log(top, left)
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="followDancer"></span>');
  $(this.$node).toggleClass('dancer followDancer');
  $(this.$node).prepend('<img class = "dancerImg" src = "girl_dance_1.gif" />');



};

MakeFollowDancer.prototype = Object.create(MakeDancer.prototype);

MakeFollowDancer.prototype.constructor = MakeFollowDancer;

MakeFollowDancer.prototype.step = function() {
  this.timeBetweenSteps = 1000;
  this.oldStep();



  this.xOffset = Math.floor(Math.random() * (30 - (-30) + 1) - 30);
    if(this.xOffset > 0) {
      this.xOffset += 15
    } else {
      this.xOffset -= 75;
    }
  this.yOffset = Math.floor(Math.random() * (30 - (-30) + 1) - 30);
    if(this.yOffset > 0) {
      this.yOffset += 15
    } else {
      this.yOffset -= 115;
    }
  //this.newXPosition = this.xOffset;
  //this.newYPosition = this.yOffset;

  $(document).on('mousemove', function(e){
      //this.newYPosition += e.pageY;
      //this.newXPosition += e.pageX;
      this.setPosition(e.pageY + this.yOffset, e.pageX + this.xOffset);
    }.bind(this));

    //if newOffset is different from the randomly generated offSet
    //if(this.newXPosition !== this.xOffset) {
      //this.setPosition(this.newYPosition, this.newYPosition);
   // }




}

