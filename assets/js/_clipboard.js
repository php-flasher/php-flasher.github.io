import "../css/_clipboard.pcss";

const codeBlocks = document.querySelectorAll("pre > code");

codeBlocks.forEach(function (codeBlock) {
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy", "text-indigo-500");
    copyButton.type = "button";
    copyButton.ariaLabel = "Copy code to clipboard";

    const copyIcon = '<i class="fa-duotone fa-clipboard"></i>';
    copyButton.innerHTML = copyIcon;

    const parent = codeBlock.parentElement;
    parent.classList.add("copyable");

    parent.append(copyButton);

    copyButton.addEventListener("click", function () {
        const code = codeBlock.innerText.trim();
        window.navigator.clipboard.writeText(code);

        copyButton.innerHTML = '<i class="fa-duotone fa-clipboard-check"></i>';

        setTimeout(function () {
            copyButton.innerHTML = copyIcon;
        }, 1000);
    });
});
