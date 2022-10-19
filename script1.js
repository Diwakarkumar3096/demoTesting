let ball=document.querySelector('.ball');
let moveBy=10;


window.addEventListener('load',()=>{
    ball.style.postion= "absolute";
    ball.style.left= 0;
    ball.style.top=0;
})
window.addEventListener('keyup',(e)=>{
    switch(e.key){
               case 'ArrowLeft':
                ball.style.left=parseInt(ball.style.left)-moveBy+px;
               break;

               case 'ArrowRight':
                ball.style.right=parseInt(ball.style.right)+moveBy+px;
               break;
               case 'ArrowUp':
                ball.style.Up=parseInt(ball.style.Up)-moveBy+px;
               break;
               case 'ArrowDown':
                ball.style.Down=parseInt(ball.style.Down)+moveBy+px;
               break;
            }
           
        })
        
