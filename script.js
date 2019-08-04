var list = document.getElementsByTagName('li')
for (var i = 0; i<list.length; i++) {
  list[i].style.position = 'relative';
  var span = document.createElement('span');
  span.style.cssText = 'position:absolute; left0; top:0';
  span.innerHTML = 1;
  list[i].appendChild(span);
}

var width = 750;
var count = 1;

var carousel = document.getElementById('carousel');
var listImages = carousel.querySelector('ul');
var listElements = carousel.querySelectorAll('li')

var position = 0;

carousel.querySelector('.prev').onclick = function() {
  position = Math.min(position + width * count, 0);
  listImages.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position = Math.max(position - width * count, -width*(listElements.length - count));
  listImages.style.marginLeft = position + 'px';
};
