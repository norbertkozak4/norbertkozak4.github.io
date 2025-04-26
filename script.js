function showSection(sectionId) {
    // Összes szekció elrejtése
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.hidden = true;
    });
  
    // Megadott szekció megjelenítése
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.hidden = false;
  }
  