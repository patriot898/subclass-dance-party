var MakeFollowDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;


  //console.log(top, left)
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="followDancer"></span>');
  $(this.$node).toggleClass('dancer followDancer');
  this.xOffset = Math.floor(Math.random() * (30 - (-30) + 1) - 30);
    if(this.xOffset > 0) {
      this.xOffset += 15
    } else {
      this.xOffset -= 15;
    }
  this.yOffset = Math.floor(Math.random() * (30 - (-30) + 1) - 30);
    if(this.yOffset > 0) {
      this.yOffset += 15
    } else {
      this.yOffset -= 15;
  }
  //this.timeBetweenSteps = Infinity;

};

MakeFollowDancer.prototype = Object.create(MakeDancer.prototype);

MakeFollowDancer.prototype.constructor = MakeFollowDancer;

MakeFollowDancer.prototype.step = function() {
  this.oldStep();

  $(document).on('mousemove', function(e){
    console.log(this);
      this.setPosition(e.pageY + this.yOffset, e.pageX + this.xOffset);
    }.bind(this));

}

