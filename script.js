const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    let isValid = true;
    let errors = [];
    if (nameInput.value.trim() ==='') {
        isValid=false;
    }
    if (emailInput.value.trim()==='') {
    errors.push('Please Enter Your Email ! ');
isValid = false ;
    }
    else if 
     (!isValidEmail(emailInput.value.trim())) {
        errors.push('Please Enter A Valid Email Address');
        isValid= false;
    }
    
    if (messageInput.value.trim()==='') {
        errors.push('Please Enter Your Message.');
        isValid = false;
    }
if (isValid)
{
    alert('Form Submitted Successfully!');
    contactForm.reset();
}
else {
    alert(errors.join('\n'));
}
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
} else {
console.error('Contact Form Not Found');
}
    const projectCards = document.querySelectorAll('.project-card');
    if(projectCards) {
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                const description = this.querySelector('p').textContent;
                alert(`Project Details:\nTitle: ${title}\nDescription: ${description}`);
            });
            });
        } else {
 console.error('Project Cards Not Found.');
        }
         const navItems = document.querySelectorAll('nav ul li a');
     if (navItems) {
        navItems.forEach(item => {

          });
            item.addEventListener('click',function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
if ( targetSection) {
    targetSection.scrollIntoView ({behavior: 'smooth'});
}
            });
        }
    
    else {
        console.error('Navigation Item Not Found');
    }
    