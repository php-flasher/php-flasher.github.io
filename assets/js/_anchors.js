const container = document.querySelector('#anchor-navigation');

createAnchorNavigation();
highlightCurrentAnchor();
stickyHeight();

const links = document.querySelectorAll('a.anchor, #anchor-navigation ul li a');
links.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();

        window.location.hash = anchor.hash;
        highlightCurrentAnchor(anchor.hash);
    });
});

function createAnchorNavigation() {
    const ul = document.querySelector('#anchor-navigation ul');
    const anchors = document.querySelectorAll('#main-article h3, #main-article h2, #main-article a.anchor');

    if (anchors.length === 0) {
        container.remove();
        return;
    }

    container.classList.add('lg:block');

    anchors.forEach(anchor => {
        const parent = anchor.parentElement;
        parent.classList.add('px-6', 'rounded');

        anchor.classList.add('leading-loose');

        const link = document.createElement('a');
        link.href = 'A' === anchor.tagName ? anchor.hash : '#'+anchor.getAttribute('id');
        link.innerHTML = 'A' === anchor.tagName ? anchor.innerText : '<i class="fa-duotone fa-angle-right"></i>' + anchor.innerText;
        link.classList.add('leading-loose', 'text-md', 'inline-block', 'w-full', 'text-indigo-500');

        const li = document.createElement('li');
        li.classList.add('px-6', 'rounded', 'w-full');
        if ('A' === anchor.tagName) {
            li.classList.remove('px-6');
            li.classList.add('px-12');
        }

        li.appendChild(link);

        ul.appendChild(li);
    });
}

function highlightCurrentAnchor(hash) {
    if (typeof hash === 'undefined') {
        hash = window.location.hash;
    }

    const links = document.querySelectorAll('a.anchor, #anchor-navigation ul li a');
    links.forEach(link => {
        const parent = link.parentElement;
        link.classList.remove('text-gray-900');
        link.classList.add('text-indigo-500');
        parent.classList.remove('bg-indigo-500');

        if (hash === link.hash) {
            link.classList.remove('text-indigo-500');
            link.classList.add('text-white');

            parent.classList.add('bg-indigo-500');
        }
    });
}

function stickyHeight() {
    const article = document.querySelector('#main-article');
    const elements = document.querySelectorAll('.sticky');

    elements.forEach(element => {
        if (element.offsetHeight <= window.innerHeight || article.clientHeight <= element.offsetHeight) {
            return;
        }

        const div = document.createElement('div');
        div.classList.add('h-screen', 'overflow-y-auto');
        div.innerHTML = element.innerHTML;

        element.innerHTML = div.outerHTML;
    });
}
