const panels = document.querySelectorAll('.panel');

function expandPanel() {
    if (Array.from(this.classList).includes('panel-open')) {
        this.classList.remove('panel-open');
    } else {
        panels.forEach(panel => panel.classList.remove('panel-open'));
        this.classList.add('panel-open');
    };
}

panels.forEach(panel => panel.addEventListener('click', expandPanel));