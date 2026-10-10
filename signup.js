const signupForm = document.querySelector(".signup-form");
signupForm.addEventListener("submit", function(event) {
 // STOP the page from refreshing
 event.preventDefault();
 // Get all form values
 const fullname = document.getElementById("fullname").value.trim();
 const email = document.getElementById("email").value.trim();
 const phone = document.getElementById("phone").value.trim();
 const password = document.getElementById("password").value;
 const confirmPassword = document.getElementById("confirm-password").value;
 const city = document.getElementById("city").value;
 const terms = document.getElementById("terms").checked;
 // ====================
 // VALIDATION
 // ====================
 // 1. Name check
 if (fullname.length < 3) {
 alert("Please enter your full name (at least 3 characters)");
 return;
 }
 // 2. Email check (basic regex)
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(email)) {
 alert("Please enter a valid email address");
 return;
 }
 // 3. Phone check (10 digits, optional field)
 if (phone && !/^[0-9]{10}$/.test(phone)) {
 alert("Phone number must be exactly 10 digits");
 return;
 }
 // 4. Password strength
 if (password.length < 8) {
 alert("Password must be at least 8 characters");
 return;
 }
 // 5. Password match
 if (password !== confirmPassword) {
 alert("Passwords don't match!");
 return;
 }
 // 6. Terms check
 if (!terms) {
 alert("Please accept the Terms and Conditions");
 return;
 }
 // ====================
 // ALL CHECKS PASSED
 // ====================
 // Create user object
 const newUser = {
 fullname: fullname,
 email: email,
 phone: phone,
 city: city,
 signupDate: new Date().toISOString()
 };
 // Save to localStorage (in real apps, this goes to a server)
 localStorage.setItem("bookhive-user", JSON.stringify(newUser));
 // Show success
 alert(`Welcome to BookHive, ${fullname}! 🛒`);
 // Redirect to home page
 window.location.href = "index.html";
});