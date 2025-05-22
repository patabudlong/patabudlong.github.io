document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.show-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.closest('.project-card-content');
            content.classList.toggle('expanded');
            const btnText = this.querySelector('.btn-text');
            btnText.textContent = content.classList.contains('expanded') ? 'Show Less' : 'Show More';
        });
    });
});
