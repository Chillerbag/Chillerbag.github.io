document.addEventListener("DOMContentLoaded", function() {
    const expandButtons = document.querySelectorAll(".expand-button");
  
    expandButtons.forEach(button => {
      button.addEventListener("click", function() {
        const entryContent = this.previousElementSibling.querySelector('.full-content');
        entryContent.style.display = entryContent.style.display === "none" ? "inline" : "none";
        this.innerText = entryContent.style.display === "none" ? "Read More" : "Read Less";
      });
    });
  });
  