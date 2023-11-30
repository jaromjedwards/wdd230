function handleViewChange() {
    const viewButton = document.getElementById('toggle-view-button');
    const memberSections = document.querySelectorAll('.members');

    if (viewButton.innerText === 'Change to Simple View') {
        document.getElementById('directory-cards-container').classList.add('simple-view');
        memberSections.forEach(section => section.classList.remove('members'));
        viewButton.innerText = 'Change to Better View';
    } else {
        document.getElementById('directory-cards-container').classList.remove('simple-view');
        memberSections.forEach(section => section.classList.add('members'));
        viewButton.innerText = 'Change to Simple View';
    }
}
