function WelcomeController () {
  this.view = new View ();
  this.start();
};

WelcomeController.prototype = {
  start: function () {
    this.bindEvents ();
  },

  bindEvents: function () {
    this.view.mainImage.on('click', this.view.nextImage);
  }
}