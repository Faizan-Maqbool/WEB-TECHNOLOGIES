document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

// Add interactivity for project sections (if needed)
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert(`You clicked on: ${project.querySelector('p').textContent}`);
    });
});

