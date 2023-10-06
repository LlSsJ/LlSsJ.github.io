const h3Elements = document.querySelectorAll('h3');

h3Elements.forEach(h3Element => {
  h3Element.addEventListener('mouseover', function() {
    h3Element.style.color = "rebeccapurple";
  });

  h3Element.addEventListener('mouseout', function() {
    h3Element.style.color = "black";
  });
});