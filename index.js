const click= document.getElementById('click');
const form= document.getElementById('form');
const iconError=document.getElementById('icon-error');
const iconMessage=document.getElementById('icon-message')

click.addEventListener('click',()=>{
    form.classList.toggle('active');
});

click.addEventListener('click',()=>{
iconError.classList.toggle('icon-error-active');
});

click.addEventListener('click',()=>{
iconMessage.classList.toggle('reactive');
});
