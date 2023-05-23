document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
  
    if (!validateName(name)) {
      alert("Please enter a valid name (first and last name).");
      event.preventDefault(); 
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); 
    }
  
    if (!validateComments(comments)) {
      alert("Comments should not exceed 150 characters.");
      event.preventDefault(); 
    }
  });
  
  function validateName(name) {
    var nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
    return nameRegex.test(name);
  }
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateComments(comments) {
    return comments.length <= 150;
  }
  