document.addEventListener("DOMContentLoaded", function() {
    // Select all .nav_parent elements (which are the clickable elements)
    const navParents = document.querySelectorAll('.nav_parent');
  
    // Add a click event to each nav_parent to toggle the visibility of .items
    navParents.forEach(navParent => {
      navParent.addEventListener('click', function() {
        // Get the next sibling (the .items list) of the clicked .nav_parent
        const items = this.nextElementSibling;
        
        // Check if the items are currently visible or not
        const isActive = this.classList.contains('active');
        
        // First, close all dropdowns by removing 'active' class and hiding all items
        document.querySelectorAll('.nav_parent').forEach(parent => {
          parent.classList.remove('active');
          const siblingItems = parent.nextElementSibling;
          siblingItems.style.display = 'none';
          siblingItems.style.maxHeight = '0';
        });
  
        // If the items were not already visible (not active), open them
        if (!isActive) {
          this.classList.add('active');
          items.style.display = 'block';
          items.style.maxHeight = '500px'; // Expand the items list
        }
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const navParents = document.querySelectorAll('.footer_nav .title');
  
    navParents.forEach(navParent => {
      navParent.addEventListener('click', function () {
        const parentLi = navParent.closest('li'); // Get the closest <li> (nav_parent's parent)
        parentLi.classList.toggle('active'); // Toggle the 'active' class on the parent <li>
      });
    });
  });
  
