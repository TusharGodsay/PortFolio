
    const menuBtn = document.querySelector('.menu-btn');
    const ul = document.querySelector('#ul');
    const body = document.body;
    const Navbar = document.querySelector('#navbar')
    menuBtn.addEventListener('click', function() {
        if (ul.style.left === '0px') {
            ul.style.left = '-100%';
            ul.style.opacity = '0';
            body.classList.remove('menu-open'); // remove class to enable scroll
            Navbar.classList.remove('nav-open')

        } else {
            ul.style.left = '0';
            ul.style.opacity = '1';
            body.classList.add('menu-open'); // add class to disable scroll
            Navbar.classList.add('nav-open')
        }
    });
    function confirmDownload() {
        const userConfirmed = confirm("Do you want to download My CV?");
    
        if (userConfirmed) {
            window.location.href = './Assets/Images/Resume.pdf';
        } else {
            alert("Download cancelled.");
        }
    }