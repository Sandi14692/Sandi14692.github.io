const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}


fa_custom_setup_cdn_webfont(
    'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
    'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
  );
