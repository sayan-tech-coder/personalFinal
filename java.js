$(document).ready(function() {
    // Fancybox Configuration
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
      loop: false,
      protect: true
    });
  
    // Image filter event listener
    const filterRadios = document.querySelectorAll('.filter-container input[type="radio"]');
    filterRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const selectedCategory = radio.value;
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'all' || selectedCategory === cardCategory) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
  