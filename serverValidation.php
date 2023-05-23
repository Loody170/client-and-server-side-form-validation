<?php
$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['comments'];

if (!validateName($name)) {
  die("Please enter a valid name (first and last name).");
}

if (!validateEmail($email)) {
  die("Please enter a valid email address.");
}

if (!validateComments($comments)) {
  die("Comments should not exceed 150 characters.");
}

if(validateName($name) &&  validateEmail($email) && validateComments($comments)){
    echo "<p>Thank you for your feedback :)</p>";
}

function validateName($name) {
  $nameRegex = '/^[a-zA-Z]+\s+[a-zA-Z]+$/';
  return preg_match($nameRegex, $name);
}

function validateEmail($email) {
  $emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
  return preg_match($emailRegex, $email);
}

function validateComments($comments) {
  return strlen($comments) <= 150;
}
?>
