/**
 * Sets up the magical hover effect for elements with the 'magical' class
 * Creates a dynamic lighting effect with 3D tilt that follows the mouse position
 * Returns a cleanup function to remove event listeners
 */
export function setupMagicalHover(): () => void {
  // Cache DOM elements to avoid repeated queries
  let elements: HTMLElement[] = [];
  let glowElements: {[key: string]: HTMLElement} = {};
  let ticking = false;
  let frameId: number | null = null;
  
  // Add necessary CSS for the glow effect
  const addGlowStyles = () => {
    // Only add the styles once
    if (document.getElementById('magical-hover-styles')) return;
    
    const styleEl = document.createElement('style');
    styleEl.id = 'magical-hover-styles';
    styleEl.textContent = `
      .magical {
        position: relative;
        overflow: hidden;
        transform-style: preserve-3d;
        transform: perspective(800px) rotateX(0) rotateY(0);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        will-change: transform, box-shadow;
      }
      
      .magical.tilt-effect {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      
      .magical::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        pointer-events: none;
      }
      
      .magical-glow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0;
        border-radius: inherit;
        pointer-events: none;
        background: radial-gradient(
          circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.1) 30%,
          rgba(255, 255, 255, 0) 70%
        );
        transition: opacity 0.15s ease;
      }
      
      /* Add a subtle light border effect */
      .magical::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(
          circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.4) 0%,
          transparent 70%
        );
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: -1;
        pointer-events: none;
        mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: xor;
        mask-clip: border-box, padding-box;
        padding: 1px;
      }
      
      .magical:hover::after {
        opacity: 1;
      }
      
      /* Add a subtle shadow inside for depth */
      .magical-inner-shadow {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 2;
      }
      
      .magical:hover .magical-inner-shadow {
        opacity: 1;
      }
    `;
    document.head.appendChild(styleEl);
  };
  
  // Debounce mousemove for better performance
  const updateElements = (e: MouseEvent) => {
    if (!ticking) {
      // Use requestAnimationFrame to optimize rendering
      frameId = requestAnimationFrame(() => {
        elements.forEach((element) => {
          // Skip if element is no longer in the DOM
          if (!element.isConnected) return;
          
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Check if mouse is over the element
          const isHovered = (
            x >= 0 && 
            x <= element.clientWidth && 
            y >= 0 && 
            y <= element.clientHeight
          );
          
          // Only update CSS variables when needed
          if (isHovered) {
            // Set the mouse position as CSS variables
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
            
            // Calculate tilt based on mouse position
            // Convert coordinates to be between -1 and 1
            const xPercent = (x / element.clientWidth) * 2 - 1;
            const yPercent = (y / element.clientHeight) * 2 - 1;
            
            // Apply tilting effect - rotation limited to +/- 5 degrees
            // Invert Y axis for natural tilting (top = tilt toward, bottom = tilt away)
            element.style.transform = `
              perspective(800px) 
              rotateX(${yPercent * -5}deg) 
              rotateY(${xPercent * 5}deg)
            `;
            
            // Add class for enhanced shadow
            element.classList.add('tilt-effect');
            
            // Activate the glow effect
            const id = element.dataset.magicalId;
            if (id && glowElements[id]) {
              glowElements[id].style.opacity = '1';
            }
          } else {
            // Reset transform when not hovering
            element.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
            element.classList.remove('tilt-effect');
            
            // Deactivate the glow effect when not hovering
            const id = element.dataset.magicalId;
            if (id && glowElements[id]) {
              glowElements[id].style.opacity = '0';
            }
          }
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  };
  
  // Initialize elements that are in the DOM
  const initializeElements = () => {
    // Add the required styles
    addGlowStyles();
    
    // Clear previous caches
    elements = [];
    glowElements = {};
    
    console.log('Initializing MagicalHover, scanning for .magical elements');
    
    // Query DOM only once
    const magicalElements = document.querySelectorAll('.magical');
    console.log(`Found ${magicalElements.length} .magical elements`);
    
    magicalElements.forEach((el, index) => {
      const element = el as HTMLElement;
      
      // Create a unique ID for this element if it doesn't exist
      if (!element.dataset.magicalId) {
        element.dataset.magicalId = `magical-${index}`;
      }
      
      // Cleanup old magical-glow elements to avoid duplication
      const oldGlowElements = element.querySelectorAll('.magical-glow');
      oldGlowElements.forEach(oldEl => {
        if (oldEl.parentNode === element) {
          element.removeChild(oldEl);
        }
      });
      
      // Cleanup old magical-inner-shadow elements to avoid duplication
      const oldShadowElements = element.querySelectorAll('.magical-inner-shadow');
      oldShadowElements.forEach(oldEl => {
        if (oldEl.parentNode === element) {
          element.removeChild(oldEl);
        }
      });
      
      // Add glow element
      const glowEl = document.createElement('div');
      glowEl.className = 'magical-glow';
      element.appendChild(glowEl);
      
      // Add inner shadow element for depth
      const shadowEl = document.createElement('div');
      shadowEl.className = 'magical-inner-shadow';
      element.appendChild(shadowEl);
      
      // Ensure parent has position relative
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }
      
      // Cache glow element
      glowElements[element.dataset.magicalId!] = glowEl;
      
      // Add initial transform style
      element.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
      
      // Add to element cache
      elements.push(element);
    });
  };
  
  // Initialize on load
  const initialize = () => {
    initializeElements();
    
    // Add debounced event listener for mouse movement
    window.addEventListener('mousemove', updateElements, { passive: true });
  };
  
  // Set up based on document readiness
  if (document.readyState === 'complete') {
    initialize();
  } else {
    window.addEventListener('load', initialize);
  }
  
  // Event listener for reinitializing magical effects
  const handleReinitialize = () => {
    console.log('Reinitializing MagicalHover effect');
    initializeElements();
  };
  
  window.addEventListener('reinitialize-magical', handleReinitialize);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('mousemove', updateElements);
    window.removeEventListener('load', initialize);
    window.removeEventListener('reinitialize-magical', handleReinitialize);
    
    // Cancel any pending animation frame
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }
    
    // Clean up elements
    console.log('Cleaning up MagicalHover effect');
  };
} 