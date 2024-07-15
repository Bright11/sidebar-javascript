document.addEventListener("DOMContentLoaded", () => {
    const navigateTo = (url) => {
        history.pushState(null, null, url);
        handleLocation();
    };

    const handleLocation = () => {
        const path = window.location.pathname;
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.querySelector(`#${path.substring(1)}`) || document.querySelector('#home');
        activePage.classList.add('active');
    };

    window.onpopstate = handleLocation;

    document.querySelectorAll('a[data-link]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.getAttribute('href');
            navigateTo(url);
        });
    });

    handleLocation();
});
