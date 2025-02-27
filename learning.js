const nodes = document.querySelectorAll('.node');

nodes.forEach(node => {
    node.addEventListener('click', () => {
        node.classList.toggle('flipped');
    });
});

const terms = document.querySelectorAll('.term');
const definitions = document.querySelectorAll('.definition');

terms.forEach(term => {
    term.addEventListener('dragstart', dragStart);
});

definitions.forEach(definition => {
    definition.addEventListener('dragover', dragOver);
    definition.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const termId = e.dataTransfer.getData('text/plain');
    const term = document.getElementById(termId);
    if (e.target.getAttribute('data-term') === termId) {
        e.target.appendChild(term);
        term.setAttribute('draggable', 'false');
        term.style.backgroundColor = '#4caf50';
        adjustContainerHeight();
    }
}

function adjustContainerHeight() {
    const container = document.querySelector('.container');
    container.style.height = 'auto';
}

function goToNextPage() {
    window.location.href = 'activity.html';
}