document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values (simulating collection)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulate sending (visual feedback)
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'SENDING...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = 'MESSAGE SENT!';
                btn.style.background = '#4caf50'; // Green for success
                btn.style.color = '#fff';
                btn.style.opacity = '1';
                
                // Alert for the user as requested
                alert(`Thanks ${name}! Your message has been "sent".`);
                
                // Reset form
                contactForm.reset();
                
                // Retrieve button state after a delay
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = ''; // Revert to CSS default
                    btn.style.color = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
