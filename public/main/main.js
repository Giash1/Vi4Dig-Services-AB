// Optional JavaScript to enhance user interactions

document.addEventListener('DOMContentLoaded', () => {
    // Additional JS functionality can be added here
    // For example, adding a hover effect to highlight each box
    const boxes = document.querySelectorAll('.main-box');
    
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s ease';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });
});
