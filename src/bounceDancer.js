var MakeBounceDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).toggleClass('dancer bounceDancer');
  $(this.$node).addClass('animated');

}

MakeBounceDancer.prototype = Object.create(MakeDancer.prototype);
MakeBounceDancer.prototype.constructor = MakeBounceDancer;
MakeBounceDancer.prototype.step = function() {
  this.oldStep();


}