// Minimal accessibility widget loader template.
// Replace script src or options with your provider's details if needed.

export const accessibilityWidgetScript = `
(function() {
  // Create accessibility toolbar
  const createAccessibilityToolbar = () => {
    if (document.getElementById('accessibility-toolbar')) return;
    
    const toolbar = document.createElement('div');
    toolbar.id = 'accessibility-toolbar';
    toolbar.style.cssText = \`
      position: fixed;
      top: 10px;
      right: 10px;
      background: #2c3e50;
      color: white;
      padding: 15px;
      border-radius: 8px;
      z-index: 999999;
      font-family: Arial, sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 250px;
    \`;
    
    toolbar.innerHTML = \`
      <h3 style="margin: 0 0 10px 0; color: #ecf0f1;">Accessibility Tools</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button id="font-size-increase" style="padding: 8px; border: none; border-radius: 4px; background: #3498db; color: white; cursor: pointer;">Increase Font Size</button>
        <button id="font-size-decrease" style="padding: 8px; border: none; border-radius: 4px; background: #3498db; color: white; cursor: pointer;">Decrease Font Size</button>
        <button id="toggle-contrast" style="padding: 8px; border: none; border-radius: 4px; background: #e74c3c; color: white; cursor: pointer;">High Contrast</button>
        <button id="toggle-focus" style="padding: 8px; border: none; border-radius: 4px; background: #f39c12; color: white; cursor: pointer;">Focus Highlight</button>
        <button id="toggle-keyboard-nav" style="padding: 8px; border: none; border-radius: 4px; background: #9b59b6; color: white; cursor: pointer;">Keyboard Navigation</button>
        <button id="read-page" style="padding: 8px; border: none; border-radius: 4px; background: #27ae60; color: white; cursor: pointer;">Read Page</button>
        <button id="close-toolbar" style="padding: 8px; border: none; border-radius: 4px; background: #95a5a6; color: white; cursor: pointer;">Close</button>
      </div>
    \`;
    
    document.body.appendChild(toolbar);
    addToolbarListeners();
  };
  
  const addToolbarListeners = () => {
    let currentFontScale = 1;
    let highContrastEnabled = false;
    let focusHighlightEnabled = false;
    let keyboardNavEnabled = false;
    
    document.getElementById('font-size-increase').addEventListener('click', () => {
      currentFontScale += 0.1;
      document.body.style.fontSize = \`\${currentFontScale}em\`;
    });
    
    document.getElementById('font-size-decrease').addEventListener('click', () => {
      currentFontScale = Math.max(0.8, currentFontScale - 0.1);
      document.body.style.fontSize = \`\${currentFontScale}em\`;
    });
    
    document.getElementById('toggle-contrast').addEventListener('click', () => {
      highContrastEnabled = !highContrastEnabled;
      if (highContrastEnabled) {
        document.body.style.filter = 'contrast(200%) brightness(150%)';
        document.body.style.background = '#000';
        document.body.style.color = '#fff';
      } else {
        document.body.style.filter = '';
        document.body.style.background = '';
        document.body.style.color = '';
      }
    });
    
    document.getElementById('toggle-focus').addEventListener('click', () => {
      focusHighlightEnabled = !focusHighlightEnabled;
      if (focusHighlightEnabled) {
        const style = document.createElement('style');
        style.id = 'focus-highlight-style';
        style.textContent = \`
          *:focus {
            outline: 3px solid #ff6b35 !important;
            outline-offset: 2px !important;
          }
        \`;
        document.head.appendChild(style);
      } else {
        const style = document.getElementById('focus-highlight-style');
        if (style) style.remove();
      }
    });
    
    document.getElementById('toggle-keyboard-nav').addEventListener('click', () => {
      keyboardNavEnabled = !keyboardNavEnabled;
      if (keyboardNavEnabled) {
        document.addEventListener('keydown', handleKeyboardNavigation);
      } else {
        document.removeEventListener('keydown', handleKeyboardNavigation);
      }
    });
    
    document.getElementById('read-page').addEventListener('click', () => {
      const text = document.body.innerText;
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      } else {
        alert('Speech synthesis not supported in this browser');
      }
    });
    
    document.getElementById('close-toolbar').addEventListener('click', () => {
      const toolbar = document.getElementById('accessibility-toolbar');
      if (toolbar) toolbar.remove();
    });
  };
  
  const handleKeyboardNavigation = (e) => {
    if (e.altKey) {
      switch(e.key) {
        case 'h':
          e.preventDefault();
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          if (headings.length > 0) headings[0].focus();
          break;
        case 'l':
          e.preventDefault();
          const links = document.querySelectorAll('a[href]');
          if (links.length > 0) links[0].focus();
          break;
        case 'b':
          e.preventDefault();
          const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
          if (buttons.length > 0) buttons[0].focus();
          break;
      }
    }
  };
  
  // Initialize
  createAccessibilityToolbar();
})();
`;

declare global {
  interface Window {
    AccessibilityWidget?: {
      init: (opts?: Record<string, unknown>) => void;
      fontSizer?: { increase: () => void; decrease: () => void };
      contrast?: { toggle: () => void };
      focus?: { toggle: () => void };
      keyboard?: { toggle: () => void };
      screenReader?: { read: () => void };
    };
  }
}


