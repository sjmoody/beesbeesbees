var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};

// set prototype and constructor

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// forage method
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}
