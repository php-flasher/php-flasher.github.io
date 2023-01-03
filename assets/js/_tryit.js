import "../css/_tryit.pcss";

import flasher from "@flasher/flasher";
import toastr from "@flasher/flasher-toastr";
import noty from "@flasher/flasher-noty";
import notyf from "@flasher/flasher-notyf";
import sweetalert from "@flasher/flasher-sweetalert";

window.flasher = flasher;
window.toastr = toastr;
window.noty = noty;
window.notyf = notyf;
window.sweetalert = sweetalert;

const messages = window.messages;

const flashMessage = ({ handler, type, message, title, options }) => {
    const factory = flasher.create(handler);
    if (!factory) {
        return;
    }

    if (title) {
        factory.flash(type, message, title, options);
    } else {
        factory.flash(type, message, options);
    }
};

const codeBlocks = document.querySelectorAll("pre > code");

codeBlocks.forEach(function (codeBlock) {
    const code = codeBlock.innerText.trim();
    if (!code.startsWith("#")) {
        return;
    }

    const button = document.createElement("button");
    button.classList.add("tryit", "text-indigo-500");
    button.type = "button";
    button.ariaLabel = button.title = "Try it!";

    const icon = '<i class="fa-duotone fa-play"></i>';
    button.innerHTML = icon;

    const parent = codeBlock.parentElement;
    parent.classList.add("tryable");

    parent.append(button);

    button.addEventListener("click", function () {
        button.innerHTML = '<i class="fa-duotone fa-spinner-third spin"></i>';

        const example = code.split("\n")[0].trim();
        const themes = {
            "# noty theme sunset": "sunset.css",
            "# noty theme relax": "relax.css",
            "# noty theme light": "light.css",
            "# noty theme metroui": "metroui.css",
        };

        try {
            if (example in themes) {
                import(`noty/lib/themes/${themes[example]}`).then(() => {
                    messages[example].forEach(flashMessage);
                });
            } else if (Array.isArray(messages[example])) {
                messages[example].forEach(flashMessage);
            } else {
                flashMessage(messages[example]);
            }
        } catch (error) {
            console.error(error);
        }

        setTimeout(function () {
            button.innerHTML = icon;
        }, 500);
    });
});
