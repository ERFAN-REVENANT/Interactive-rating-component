document.addEventListener('DOMContentLoaded', function() {
    var selectedRating;
  
    var buttons = document.querySelectorAll('.numbers');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        buttons.forEach(btn => btn.style.backgroundColor = '#262f38'); // reset colors
        this.style.backgroundColor = '#fc7613';
        this.style.color = '#23262a';
        selectedRating = this.getAttribute('data-value');
      });
    });
  
    document.getElementById('submitBtn').addEventListener('click', function() {
      if (selectedRating) {
        document.getElementById('selectedRating').textContent = selectedRating;
        document.getElementById('card1').style.display = 'none';
        document.getElementById('card2').style.display = 'block';
      } else {
        alert('Please select a rating.');
      }
    });
  });
  