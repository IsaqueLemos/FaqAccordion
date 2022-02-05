const section = document.getElementsByTagName('section');

for (const i of section) {
    let arrow = i.getElementsByTagName('img')[0];
    let title = i.querySelector('.titles');
    let text = i.children[1];
    i.addEventListener('click', () => {
        arrow.classList.toggle('active')
        title.classList.toggle('active')
        text.classList.toggle('active');
    })
}