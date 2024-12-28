document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            
            // Simulate form submission
            alert(`Thank you ${name}! We'll contact you at ${email} soon.`);
            contactForm.reset();
        });
    }

    // Add click handlers to Read More buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const card = e.target.closest('.destination-card');
            const destination = card.querySelector('h2').textContent;
            alert(`Reading more about ${destination}`);
        });
    });

    // Add hover effect to destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const element = document.querySelector(this.getAttribute('href'));
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add form validation
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = 'red';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });
});


    

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Loop through all "Read More" buttons
    readMoreButtons.forEach((button, index) => {
        const modal = document.getElementById(`popup-overlay-${index + 1}`);
        const closeButton = document.getElementById(`close-btn-${index + 1}`);
        const modalContent = document.getElementById(`popup-overlay-${index + 1}`).querySelector('.popup-content');

        // Show the modal when the "Read More" button is clicked
        button.addEventListener('click', function() {
            modal.style.display = 'flex';  
            setTimeout(() => {
                modal.classList.add('show');          
                modalContent.classList.add('show');  
                closeButton.classList.add('show');   
            }, 10); 
        });

        // Close the modal when the close button is clicked
        closeButton.addEventListener('click', function() {
            modal.classList.remove('show');          
            modalContent.classList.remove('show');  
            closeButton.classList.remove('show');   

           
            setTimeout(() => {
                modal.style.display = 'none';  
            }, 300);  
        });

        // Close the modal if the overlay background is clicked
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                modalContent.classList.remove('show');
                closeButton.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';  // Hide the modal completely after animation
                }, 300);
            }
        });
    });
});

