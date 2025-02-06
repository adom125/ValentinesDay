function startFloatingHearts() 
{
    const heartContainer = document.getElementById('heart-container');
    const numberOfHearts = 11;

    for (let i = 0; i < numberOfHearts; i++) {
        createHeart();
    }

    function createHeart()
     {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '♥︎';  
        
        const randomX = Math.random() * 100 - 50;  
        const randomY = Math.random() * -500 - 200;  

        heart.style.setProperty('--rand-x', `${randomX}%`);
        heart.style.setProperty('--rand-y', `${randomY}px`);

        heart.style.left = `${Math.random() * 100}%`; 
        heart.style.animationDelay = `${Math.random() * 1}s`;  

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);  
    }
}
function displayMessage() 
{
    const yayMessageContainer = document.getElementById('yay-message-container');
    
    yayMessageContainer.textContent = "Yay!";
}
