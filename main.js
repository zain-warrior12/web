window.onload = function () {
  const gmailIcon = document.getElementById("gmailIcon");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  gmailIcon.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
};

 function toggleProfileDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("show");
    console.log("Menu toggled:", dropdown.classList.contains("show") ? "Opened" : "Closed");
  }

  function logout() {
    alert("Logout successful! (add Firebase or your logic here)");
    // Example: firebase.auth().signOut();
  }

