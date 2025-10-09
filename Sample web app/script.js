document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('Aunt Lee').value;
    const email = document.getElementById('leesa@gmail.com').value;
    const message = document.getElementById('message').value;

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent: ' + data.status);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});