document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM fully loaded and parsed');
  
    // Dynamically import the modules
    await import('./gsap/utils/main');
    await import('./components/Swipers/mainSwiper');
    await import('./components/FAQ/faqs');
  
    // If you have any additional initialization code, you can add it here
    console.log('Modules imported and executed');
  });
  
  // Fallback to window load event
  window.addEventListener('load', async () => {
    console.log('Window fully loaded');
  
    // Dynamically import the modules
    await import('./gsap/utils/main');
    await import('./components/Swipers/mainSwiper');
    await import('./components/FAQ/faqs');
  
    // If you have any additional initialization code, you can add it here
    console.log('Modules imported and executed');
  });