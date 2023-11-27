function handleDarkMode(){
    const darkButton = document.getElementById('dark-mode-button');
    if (darkButton.innerText === 'Dark Mode: On'){
        document.body.classList.add('dark')
        darkButton.innerText = 'Dark Mode: Off';
    } else 
    {
        document.body.classList.remove('dark')
        darkButton.innerText = 'Dark Mode: On';
    }

}