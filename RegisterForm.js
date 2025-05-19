
	
	function checkInput()
	{
		const username = document.getElementById("username").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirmpassword").value;
		let submitDisabled = document.getElementById("submitButton");
				
		let passwordUppercase = /[A-Z]+/;
		let passwordLowercase = /[a-z]+/;
		let passwordNumbers   = /[0-9]+/;
		let passwordSpecialCharacters = /[!@#$%^&*()]+/;
		/*let passwordLength = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,10}/;*/
		let passwordLength;
		if (password.length >= 8 )
			passwordLength = true;
		else
			passwordLength = false;
		
		let currentActiveElement = document.activeElement;
		const currentActiveElementId = currentActiveElement.id ? currentActiveElement.id.toLowerCase() : '';
		console.log(currentActiveElementId);
		
		if(currentActiveElement && currentActiveElement.type === "password" && currentActiveElementId == "password")
		{
			if(passwordUppercase.test(password) == true)
				document.getElementById("uppercaseMatch").checked = true;
			else
			    document.getElementById("uppercaseMatch").checked = false;
			
			if(passwordLowercase.test(password) == true)
				document.getElementById("lowercaseMatch").checked = true;
			else
				document.getElementById("lowercaseMatch").checked = false;
			
			if(passwordNumbers.test(password) == true)
				document.getElementById("numberMatch").checked = true;
			else
				document.getElementById("numberMatch").checked = false;
			
			if(passwordSpecialCharacters.test(password) == true)
				document.getElementById("specialMatch").checked = true;
			else
				document.getElementById("specialMatch").checked = false;
			
			if(passwordLength == true)
				document.getElementById("lengthMatch").checked = true;
			else
				document.getElementById("lengthMatch").checked = false;
			
		}
		
		if(currentActiveElement && currentActiveElement.type == "password" && currentActiveElementId == "confirmpassword")
		{
			if(password == confirmPassword)
				document.getElementById("confirm_passwordp").innerHTML = "";
			else
				document.getElementById("confirm_passwordp").innerHTML = "Passwords do not match";	
		}
		/*else
				document.getElementById("passwordp").innerHTML = "";
			*/
	
		
		if( username !="" && email != "" && password != "" && confirmPassword != "" )	
				submitDisabled.disabled = false;
		else
				submitDisabled.disabled = true;
			
	}
	
	function validateForm()
	{
		const form = document.querySelector("#register_form");	
		
		const username = document.getElementById("username").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirmpassword").value;
		
		let usernamePattern = /^[A-Za-z]{1,30}$/;
		let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,10}/;
		let confirmPasswordPattern = /[A-Z][a-z][0-9]*(=-_#@%^&*(){}[];:'\",<>.?\/|)/;
		
		let counter = 0;
		let timeout;	
		
		if(usernamePattern.test(username) == false)
		{
			document.querySelector("#usernamep").innerHTML = "Username can contain only alphabets upto 30 characters";
		}
		    
		else
		{
			counter++;
			document.querySelector("#usernamep").innerHTML = "";

		}
			
		
		if(emailPattern.test(email) == false)
			document.querySelector("#emailp").innerHTML = "Email is not valid";
		
		else
		{
			counter++;
			document.querySelector("#emailp").innerHTML = "";

		}
		
	    if(passwordPattern.test(password) == false)
			document.querySelector("#passwordp").innerHTML = "Password must contain minimum 8 characters with atleast one uppercase, lowercase, special character and number";
		
		
        else
		{			
			counter++;
			document.querySelector("#passwordp").innerHTML = "";

		}
		
		
		if(confirmPassword != "" && confirmPasswordPattern.test("confirmPassword") == true && confirmPassword == password)
		{
			counter++;
			document.querySelector("#confirm_passwordp").innerHTML = "";

		}
		else
		{			
			document.querySelector("#confirm_passwordp").innerHTML = "Passwords do not match";
		}
		
		
		if(counter == 4)
		{
			form.reset();
			let submitDisabled = document.getElementById("submitButton");
			submitDisabled.disabled = true;
			timeout = setTimeout(function() {			
			alert("Form submitted successfully!"); }, 1); 
			
			
		}
		
	}
	