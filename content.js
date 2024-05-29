document.addEventListener('DOMContentLoaded', () => {
    const newProfilePicURL = chrome.runtime.getURL("./image.png");
    console.log("New Profile Picture URL:", newProfilePicURL); // Debugging
  
    function changeProfilePictures() {
      const profilePictures = document.querySelectorAll(
        'img.EntityPhoto-square-3, img.EntityPhoto-square-0, img.EntityPhoto-circle-3, img.EntityPhoto-circle-2, img.EntityPhoto-circle-0, img.ivm-image-view-model__circle-img'
      );
  
      console.log("Found profile pictures:", profilePictures.length); // Debugging
  
      profilePictures.forEach((picture) => {
        console.log("Changing picture src:", picture); // Debugging
        picture.src = `${newProfilePicURL}?${new Date().getTime()}`;
      });
    }
  
    changeProfilePictures();
  
    const observer = new MutationObserver(changeProfilePictures);
    observer.observe(document.body, { childList: true, subtree: true });
  });
  