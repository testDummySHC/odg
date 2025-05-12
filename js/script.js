// Modal functionality
function openModal() {
    const modal = document.getElementById('formModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('formModal');
    modal.classList.remove('show');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    }, 300); // Match this with CSS transition duration
}

// Health Record Modal functionality
function openHealthRecordModal() {
    const modal = document.getElementById('healthRecordModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeHealthRecordModal() {
    const modal = document.getElementById('healthRecordModal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const formModal = document.getElementById('formModal');
    const healthRecordModal = document.getElementById('healthRecordModal');
    
    if (event.target == formModal) {
        closeModal();
    }
    if (event.target == healthRecordModal) {
        closeHealthRecordModal();
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const formModal = document.getElementById('formModal');
        const healthRecordModal = document.getElementById('healthRecordModal');
        
        if (formModal.style.display === 'block') {
            closeModal();
        }
        if (healthRecordModal.style.display === 'block') {
            closeHealthRecordModal();
        }
    }
});

// Hero carousel background
(function() {
    const images = document.querySelectorAll('.carousel-image');
    let current = 0;
    if (images.length > 0) {
        images[0].classList.add('active');
        setInterval(() => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        }, 5000);
    }
})(); 
