let open_button=document.querySelector('.open-button');
let modal=document.querySelector('.modal-container');
let close_button=document.querySelector('.close-button');
open_button.addEventListener('click',function()
{
    modal.style.display='block'; 
})
close_button.addEventListener('click',function()
{
    modal.style.display='none';
    
})
window.addEventListener('click',function(e)
{
    if(e.target === modal)
    {
        modal.style.display='none';
    }
});