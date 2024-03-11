function validate(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const username = document.querySelector('input[name="txt"]').value;
    const password = document.querySelector('input[name="passwordvalue;
  
    if (username === "akash-verma" && password === "pass123") {
      alert("Login successful");
    } else {
      alert("Username or password incorrect");
    }
  }