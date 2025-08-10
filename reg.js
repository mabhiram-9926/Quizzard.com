
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // prevent form from submitting
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let gender = document.getElementById("gender").value;
        let dob = document.getElementById("dob").value;
        let course = document.getElementById("course").value;
        let errorMessage = document.getElementById("errorMessage");

        // Reset error
        errorMessage.textContent = "";

        // Validation
        if (!name || !email || !password || !confirmPassword || !gender || !dob || !course) {
            errorMessage.textContent = "Please fill in all fields.";
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage.textContent = "Invalid email format.";
            return;
        }
        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters.";
            return;
        }
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }

        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    });