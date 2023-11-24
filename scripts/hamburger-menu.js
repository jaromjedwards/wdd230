

function handleMenuClick(){

    console.log('clicked')
    const menuElement = document.getElementById('menu');
    const changeButton = document.getElementById('j-hamburger-menu');

    if (menuElement.classList.contains('hidden')){
        menuElement.classList.remove('hidden');
        changeButton.innerText = 'X'
    } else 
    {
        menuElement.classList.add('hidden');
        changeButton.innerText = '☰'
    }
}

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



