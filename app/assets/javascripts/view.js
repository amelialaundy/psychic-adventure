function View () {
  this.mainImage = $('#main-image');
  self = this;
}

View.prototype = {
  editImage: function () {
    self.mainImage.css('display', 'none')
  }
}