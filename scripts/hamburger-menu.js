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



