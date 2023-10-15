const h2Elements = document.querySelectorAll('h2');

h2Elements.forEach(h2Element => {
  h2Element.addEventListener('mouseover', function() {
    h2Element.style.color = "rebeccapurple";
  });

  h2Element.addEventListener('mouseout', function() {
    h2Element.style.color = "black";
  });
});