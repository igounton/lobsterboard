/**
 * Editor Widget Library Module
 * Handles widget library sidebar, categories, and widget item display
 */
(function() {
  'use strict';
  
  var state = window.BuilderState;
  
  window.initWidgetLibrary = function initWidgetLibrary() {
    if (!window.WIDGETS) {
      console.warn('WIDGETS not loaded yet, widget library will be empty');
      return;
    }
    
    // Widget library is typically populated by the main builder code
    // This module can extend widget functionality if needed
    
    // Add any widget-specific event handlers or customizations here
    initWidgetCategories();
    initWidgetSearch();
  };
  
  function initWidgetCategories() {
    // Handle widget category expansion/collapse
    var categoryHeaders = document.querySelectorAll('.widget-category-header');
    categoryHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        var category = this.parentElement;
        category.classList.toggle('collapsed');
      });
    });
  }
  
  function initWidgetSearch() {
    // Add widget search functionality if search input exists
    var searchInput = document.querySelector('.widget-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        var query = this.value.toLowerCase();
        var widgets = document.querySelectorAll('.widget-item');
        
        widgets.forEach(function(widget) {
          var name = widget.querySelector('.widget-name');
          var visible = !query || (name && name.textContent.toLowerCase().includes(query));
          widget.style.display = visible ? '' : 'none';
        });
      });
    }
  }
  
  // Auto-initialize if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidgetLibrary);
  } else {
    initWidgetLibrary();
  }
  
})();