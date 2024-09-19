// script.js

document.addEventListener('DOMContentLoaded', () => {
  const dropdownTitles = document.querySelectorAll('.dropdown-title');
  
  dropdownTitles.forEach(title => {
    title.addEventListener('click', () => {
      const currentDropdown = title.parentElement;
      
      // Fecha todos os dropdowns, exceto o clicado
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (dropdown !== currentDropdown) {
          dropdown.classList.remove('show');
        }
      });
      
      // Alterna a visibilidade do dropdown clicado
      currentDropdown.classList.toggle('show');
    });
  });
});
