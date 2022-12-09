let loadTime = -1;

(() => {
    const start = new Date().getTime();

    document.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('load', () => {
            loadTime = (new Date().getTime() - start) / 1000;
            document.getElementsByClassName('load-time')[0].innerHTML = loadTime.toString();
        })

    });
})();