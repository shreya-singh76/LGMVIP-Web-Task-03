var registrations = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var skills = [];

	// Loop through checkboxes to get selected skills
	var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	checkboxes.forEach(function(checkbox) {
		skills.push(checkbox.id);
	});

	registrations.push({
		fname: fname,
		lname: lname,
		email: email,
		skills: skills
	});

	var display = document.querySelector('.display');
	var card = document.createElement('div');
	card.className = 'card';
	var skillsStr = skills.length > 0 ? '<strong>Skills:</strong> ' + skills.join(', ') : ''; // Display selected skills if any
	card.innerHTML = '<h3>Registration ' + registrations.length + '</h3><p><strong>First Name:</strong> ' + fname + '</p><p><strong>Last Name:</strong> ' + lname + '</p><p><strong>Email:</strong> ' + email + '</p>' + skillsStr;
	display.appendChild(card);

	// Clear form input
	document.getElementById('registrationForm').reset();
});
