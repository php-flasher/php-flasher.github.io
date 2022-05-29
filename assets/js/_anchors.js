createAnchorNavigation();
highlightCurrentAnchor();

const links = document.querySelectorAll('a.anchor, #anchor-navigation ul li a');
links.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();

        window.location.hash = anchor.hash;
        highlightCurrentAnchor(anchor.hash);
    });
});

function createAnchorNavigation() {
    const container = document.querySelector('#anchor-navigation ul');
    const anchors = document.querySelectorAll('a.anchor');

    anchors.forEach((anchor) => {
        const link = document.createElement('a');
        link.href = anchor.hash;
        link.innerText = anchor.innerText;
        link.classList.add('leading-loose', 'text-md', 'w-full', 'text-indigo-500');

        const li = document.createElement('li');
        li.classList.add('px-6', 'rounded', 'w-36');
        li.appendChild(link);

        container.appendChild(li);
    });
}

function highlightCurrentAnchor(hash) {
    if (typeof hash === 'undefined') {
        hash = window.location.hash;
    }

    const links = document.querySelectorAll('a.anchor, #anchor-navigation ul li a');
    links.forEach((link) => {
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
