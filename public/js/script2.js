cartIcon = document.querySelector('.cart');
viewBox = document.querySelector('.view-box');
isViewBoxHovered = false;
cartIcon.addEventListener('mouseover', () => {
  viewBox.style.display = 'block';
});
viewBox.addEventListener('mouseover', () => {
  viewBox.style.display = 'block';
});
viewBox.addEventListener('mouseout', () => {
  viewBox.style.display = 'none';
});
