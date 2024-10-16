
    const menuBtn = document.querySelector('.menu-btn');
    const ul = document.querySelector('#ul');
    const body = document.body;

    menuBtn.addEventListener('click', function() {
        if (ul.style.left === '0px') {
            ul.style.left = '-100%';
            ul.style.opacity = '0';
            body.classList.remove('menu-open'); // remove class to enable scroll
        } else {
            ul.style.left = '0';
            ul.style.opacity = '1';
            body.classList.add('menu-open'); // add class to disable scroll
        }
    });
    
    //check github (changes) && Updates till Education (without include images and more info but )