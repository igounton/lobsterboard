/**
 * OpenClaw Dashboard Builder - Widget Registry Initialization
 * 
 * Initializes the global WIDGETS object that other widget modules will populate.
 * This must be loaded before any widget category modules.
 */

(function() {
  'use strict';
  
  // Initialize the global widgets registry
  if (typeof window !== 'undefined') {
    window.WIDGETS = {};
  }
  
  // For Node.js environments (testing, etc.)
  if (typeof global !== 'undefined' && typeof module !== 'undefined') {
    global.WIDGETS = {};
    module.exports = global.WIDGETS;
  }
})();