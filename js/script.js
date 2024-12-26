const projects = document.querySelectorAll('.project-card');
const filterInput = document.getElementById('filter');

filterInput.addEventListener('input', function() {
    const filterText = filterInput.value.toLowerCase();
    projects.forEach(project => {
        const title = project.querySelector('h2').textContent.toLowerCase();
        project.style.display = title.includes(filterText) ? 'block' : 'none';
    });
});
