var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).prepend('<img class = "dancerImg" src = "break_dance.gif" />');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = MakeDancer.prototype.step; //MakeDancer.prototype.step.bind(this); why can we not assign this property to an old function?

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //MakeDancer.prototype.step.call(this);
  this.timeBetweenSteps = 50;
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
