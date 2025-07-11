// Generate stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Glyph click handlers
document.querySelectorAll('.glyph').forEach(glyph => {
    glyph.addEventListener('click', function() {
        const contentType = this.getAttribute('data-content');
        const overlay = document.getElementById(contentType);
        
        // Close any open overlays
        document.querySelectorAll('.content-overlay').forEach(o => {
            o.classList.remove('active');
        });
        
        // Open the clicked overlay
        setTimeout(() => {
            overlay.classList.add('active');
        }, 100);
    });
});

// Close content function
function closeContent() {
    document.querySelectorAll('.content-overlay').forEach(overlay => {
        overlay.classList.remove('active');
    });
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContent();
    }
});

// Initialize
generateStars();
