document.getElementById('gotoStart').addEventListener('click', () => {
    document.body.style.opacity = '0'
    setTimeout(() => {
        window.location = 'index.html'
    }, 200);
})

document.getElementById('gotoBook').addEventListener('click', () => {
    document.body.style.opacity = '0'
    setTimeout(() => {
        window.location = 'book.html'
    }, 200);
})

document.getElementById('gotoSearch').addEventListener('click', () => {
    document.body.style.opacity = '0'
    setTimeout(() => {
        window.location = 'search.html'
    }, 200);
})

document.getElementById('gotoHelp').addEventListener('click', () => {
    document.body.style.opacity = '0'
    setTimeout(() => {
        window.location = 'help.html'
    }, 200);
})