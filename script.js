// script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split("/").pop();
  
    links.forEach(link => {
      if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
  
      link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  