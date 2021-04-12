
const btnYes = document.querySelector('#btn-yes');
const btnNot = document.querySelector('#btn-not');
const boxNot = document.querySelector('.box-button-not');


btnYes.addEventListener('click', () => {
    Swal.fire({
        // showConfirmButton: false,
        confirmButtonText: `Casemonos`,
        closeOnClickOutside: false,
        allowOutsideClick: false,
        title: 'Sabía que dirias que si!.😏\n\t🔥🔥🔥',
        width: 600,
        padding: '3em',
        background: '#fff url()',
        backdrop: `
            rgba(149, 165, 166, 0.4)
            url("https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif")
            left top
            no-repeat
        `
    });
});


btnNot.addEventListener('mouseover', () => {
    moveBox();
})


document.onmousemove = function( e ) {
    const mousex = parseFloat( e.clientX );
    const mousey = parseFloat( e.clientY );
    const boxleft = parseFloat( boxNot.getBoundingClientRect().left );
    const boxtbotton = parseFloat( boxNot.getBoundingClientRect().bottom );
    const boxright = parseFloat( boxNot.getBoundingClientRect().right );
    const boxttop = parseFloat( boxNot.getBoundingClientRect().top );
    const boxposL = Math.round( boxleft - mousex );
    const boxposR = Math.round( boxright - mousex );
    const boxposB = Math.round( boxtbotton - mousey );
    const boxposT = Math.round( boxttop - mousey );


    if ( boxposL == 0 || boxposR == 0 || boxposB == 0 || boxposT == 0 ) {
        moveBox();
    }
}


function moveBox() {
    boxNot.style.left = Math.round(Math.random()*900) + 'px';
    boxNot.style.right = Math.round(Math.random()*900) + 'px';
    boxNot.style.bottom = Math.round(Math.random()*900) + 'px';
    boxNot.style.top = Math.round(Math.random()*900) + 'px';
}


