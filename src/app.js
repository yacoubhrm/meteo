const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Installation du service worker en cours");
        } else if (registration.waiting) {
          console.log("Service worker installé");
        } else if (registration.active) {
          console.log("Service worker actif");
        }
      } catch (error) {
        console.error(`L'enregistrement a échoué : ${error}`);
      }
    }
  };
  
  // …
  
  registerServiceWorker();
  