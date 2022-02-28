fInitModalCenter();

function fInitModalCenter(modal = '#f-modal', 
    closeModal = '.f-close-modal', 
    openModal = '.f-show-modal', 
    contentModal = '.f-content-modal') 
    {
        
    const select = (element) => document.querySelector(element);
    const selectAll = (element) => document.querySelectorAll(element);

    fCloseModal();
    fShowModal();

    function fCloseModal() {    
        selectAll(closeModal).forEach(close => {
            close.addEventListener('click', (e) => {
                e.preventDefault();
                select(modal).classList.remove('show');
                setTimeout(() => select(modal).classList.add('f-none'), 500);
            })
        })
    }

    function fShowModal() {
        selectAll(openModal).forEach(open => {
            open.addEventListener('click', (e) => {
                e.preventDefault();
                preventDefault();
                select(modal).classList.add('show');
                setTimeout(() => select(modal).classList.remove('f-none'), 500);
            })
        })
    }

    function preventDefault() {
        select(contentModal).addEventListener('click', (e) => e.stopPropagation());
    }
}