const button = document.querySelector('#interactive-button')
const content = document.querySelector('#dynamic-content')
button.addEventListener('click', function () {
    content.classList.toggle('highlighted')
    content.style.transform = 'scale(1.1)';
    content.style.transition = 'transform 0.33s ease';
    if (content.classList.contains('highlighted')) {
        content.textContent = 'content is now highlighted'
    } else {
        content.textContent = ' return to normal'
    }

})
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const sideBar = this.document.querySelector('#sidebar')
    if (width < 786) {
        sideBar.style.display = 'none'
    } else {
        sideBar.style.display = 'block'
    }
 })