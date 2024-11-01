
let colletionButtons = document.getElementsByClassName('page-item__button');
let boolMouseOver = true;

Array.from(colletionButtons).forEach(e => {
    let parent = e.parentElement.parentElement.parentElement;
    e.addEventListener('click',() =>
    {
        boolMouseOver =!boolMouseOver;
        parent.addEventListener('mouseout',()=> {
            if(boolMouseOver)
            {
                parent.firstChild.classList.add('focus');
                parent.lastChild.classList.add('focus')
            }
        });
        parent.parentElement.addEventListener('click',()=> {
            parent.firstChild.classList.remove('focus');
            parent.lastChild.classList.remove('focus');
            boolMouseOver =!boolMouseOver;
        });
    });
});

