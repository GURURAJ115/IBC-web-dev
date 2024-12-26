const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.content');

// Show the homepage by default
document.querySelector('#homepage').style.display = 'block';

// Add event listeners for navigation links
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Hide all sections
        sections.forEach((section) => {
            section.style.display = 'none';
        });

        // Display the corresponding section
        const targetSectionId = link.getAttribute('href').substring(1);
        document.querySelector(`#${targetSectionId}`).style.display = 'block';
    });
});


// Add event listeners for Edit buttons
document.getElementById('edit-name').addEventListener('click', () => {
    document.getElementById('full-name').style.display = 'block';
    document.getElementById('edit-name').style.display = 'none';
});

document.getElementById('edit-phone').addEventListener('click', () => {
    document.getElementById('phone-number').style.display = 'block';
    document.getElementById('edit-phone').style.display = 'none';
});

document.getElementById('edit-email').addEventListener('click', () => {
    document.getElementById('email').style.display = 'block';
    document.getElementById('edit-email').style.display = 'none';
});

// Add event listener for Save button
document.getElementById('save-profile').addEventListener('click', () => {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    
    // Update the displayed name and email
    document.getElementById('full-name-display').textContent = `Full Name: ${fullName}`;
    document.getElementById('email-display').textContent = `Email: ${email}`;
    
    // Hide the input fields and show Edit buttons
    document.getElementById('full-name').style.display = 'none';
    document.getElementById('edit-name').style.display = 'block';
    document.getElementById('email').style.display = 'none';
    document.getElementById('edit-email').style.display = 'block';
});

document.getElementById('save-phone').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phone-number').value;
    
    // Update the displayed phone number
    document.getElementById('phone-number-display').textContent = `Phone Number: ${phoneNumber}`;
    
    // Hide the input field and show the Edit button
    document.getElementById('phone-number').style.display = 'none';
    document.getElementById('edit-phone').style.display = 'block';
});

// Add event listener for Change Password button
document.getElementById('change-password').addEventListener('click', () => {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Implement password change logic here
    
    // Clear password fields
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    alert('Password changed successfully!');
});

// Add event listener for Update button
document.getElementById('update-settings').addEventListener('click', () => {
    // Implement the logic for updating user settings
    
    alert('Settings updated successfully!');
});


// Add event listener to the "Add" button in the "Dashboard" section
document.getElementById('add-seva-data').addEventListener('click', () => {
    const sevaType = document.getElementById('new-seva-type').value;
    const totalCount = document.getElementById('new-total-count').value;
    const completed = document.getElementById('new-completed').value;
    const inProgress = document.getElementById('new-in-progress').value;

    // Update the table with the new data
    const dashboardTable = document.querySelector('#dashboard table tbody');
    const newRow = dashboardTable.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = sevaType;
    cell2.innerHTML = totalCount;
    cell3.innerHTML = completed;
    cell4.innerHTML = inProgress;

    // Clear the input fields
    document.getElementById('new-seva-type').value = '';
    document.getElementById('new-total-count').value = '';
    document.getElementById('new-completed').value = '';
    document.getElementById('new-in-progress').value = '';
});
