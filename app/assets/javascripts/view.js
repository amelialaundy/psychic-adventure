function View () {
  this.mainImage = $('#main-image');
  self = this;
   $('#magazine').turn({gradients: true, acceleration: true});
}

View.prototype = {
  nextImage: function () {
    // self.mainImage.css('display', 'none')
    $('#magazine').turn({gradients: true, acceleration: true});
  }
}