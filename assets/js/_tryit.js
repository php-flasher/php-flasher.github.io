import "../css/_tryit.pcss";

import flasher from "@flasher/flasher";
import toastr from "@flasher/flasher-toastr";
import noty from "@flasher/flasher-noty";

const messages = {
    success: [
        "Success!",
        "Operation completed successfully.",
        "Task completed successfully.",
        "Your request was processed successfully.",
        "The operation was successful.",
        "Great success!",
        "The action was completed successfully.",
        "Your submission has been received successfully.",
        "The process was completed successfully.",
        "The operation completed successfully.",
    ],
    error: [
        "Error!",
        "An error occurred.",
        "There was a problem processing your request.",
        "Something went wrong.",
        "The operation failed.",
        "Sorry, something went wrong.",
        "Oops, something went wrong.",
        "An error has occurred.",
        "We're sorry, but an error occurred.",
        "An unexpected error occurred.",
    ],
    warning: [
        "Warning: This cannot be undone.",
        "Caution: May have unintended consequences.",
        "Exercise caution when performing this action.",
        "This may have unintended consequences. Proceed with caution.",
        "Warning: This may be irreversible.",
        "Caution: May have unintended results.",
        "Warning: Proceed with caution.",
    ],
    info: [
        "Heads up: This may take a while.",
        "This may take some time. Please be patient.",
        "This may take a while. Do not refresh the page.",
        "Heads up: This may take a while. Be patient.",
        "This may take some time. Do not refresh the page.",
    ],
};

function getRandomMessageByType(type) {
    const messagesByType = messages[type];
    const random = Math.floor(Math.random() * messagesByType.length);

    return messagesByType[random];
}

function getRandomType() {
    const types = Object.keys(messages);
    const random = Math.floor(Math.random() * types.length);

    return types[random];
}

function getRandomMessage() {
    const type = getRandomType();

    return getRandomMessageByType(type);
}

const examples = {
    "# General usage": function () {
        flasher.success("Book has been created successfully!");
    },
    "# success": function () {
        flasher.success(getRandomMessageByType("success"));
    },
    "# error": function () {
        flasher.error(getRandomMessageByType("error"));
    },
    "# warning": function () {
        flasher.warning(getRandomMessageByType("warning"));
    },
    "# info": function () {
        flasher.info(getRandomMessageByType("info"));
    },
    "# notification builder with toastr": function () {
        toastr.success('The action was completed successfully.', 'Great!', {
            timeOut: 10000,
        });
    },
    "# example with type": function () {
        flasher.error('An error has occurred please try again later.');
    },
    "# success type with title": function () {
        flasher.success(getRandomMessageByType("success"), 'Congratulations!');
    },
    "# error message": function () {
        flasher.error("This may take some time. Do not refresh the page.");
    },
    "# error message with title": function () {
        flasher.error("This may take some time. Do not refresh the page.", "Oops!");
    },
    "# error message with options": function () {
        flasher.error("This may take some time. Do not refresh the page.", "Oops!", {
            timeout: 10000,
            position: "top-center",
        });
    },
    "# success message with options": function () {
        flasher.success("The action was completed successfully.", "Congratulations!", {
            timeout: 10000,
            position: "top-center",
        });
    },
    "# Message with priority": function () {
        flasher.warning("Message with priority 4");
        flasher.success("Message with priority 3");
        flasher.info("Message with priority 2");
        flasher.error("Message with priority 1");
    },
    "# Translated message": function () {
        flasher.success("تمت العملية بنجاح.", "تهانينا!", {
            rtl: true,
            position: "top-right",
        });
    },
    "# Translated message top-left": function () {
        flasher.success("تمت العملية بنجاح.", "تهانينا!", {
            rtl: true,
            position: "top-left",
        });
    },
    "# preset entity_saved": function () {
        flasher.success("Entity saved successfully", "Entity saved");
    },
    "# arabic translation": function () {
        flasher.success('تم إرسال طلبك بنجاح.', 'نجاح', {rtl: true});
        flasher.error('حدث خطأ أثناء إرسال طلبك.', 'خطأ', {rtl: true});
        flasher.warning('يجب إكمال جميع الحقول الإلزامية قبل إرسال النموذج', 'تحذير', {rtl: true});
        flasher.info('سيتم تحديث هذه الصفحة في غضون 10 دقائق.', 'معلومة', {rtl: true});
    },
    "# french translation": function () {
        flasher.success('Votre demande a été envoyée avec succès.', 'Succès');
        flasher.error('Une erreur s\'est produite lors de l\'envoi de votre demande.', 'Erreur');
        flasher.warning('Vous devez remplir tous les champs obligatoires avant de soumettre le formulaire.', 'Avertissement');
        flasher.info('Cette page sera mise à jour dans 10 minutes.', 'Information');
    },
    "# noty": function () {
        noty.success("The book has been added to the library successfully!");
    },
    "# noty text": function () {
        noty.error("Oops, something went wrong.");
    },
    "# noty alert": function () {
        noty.flash("alert", "This may take a while. Do not refresh the page.")
    },
    "# noty layout": function () {
        noty.success("The action was completed successfully.", {
            layout: "topCenter",
        });
    },
    "# noty theme mint": function () {
        noty.success('Your request was successfully sent.', {theme: "mint"});
        noty.error('An error occurred while sending your request.', {theme: "mint"});
        noty.warning('You must fill out all required fields before submitting the form.', {theme: "mint"});
        noty.info('This page will be updated in 10 minutes.', {theme: "mint"});
    },
    "# noty theme relax": function () {
        import("noty/lib/themes/relax.css").then(function () {
            noty.success('Your request was successfully sent.', {theme: "relax"});
            noty.error('An error occurred while sending your request.', {theme: "relax"});
            noty.warning('You must fill out all required fields before submitting the form.', {theme: "relax"});
            noty.info('This page will be updated in 10 minutes.', {theme: "relax"});
        });
    },
    "# noty theme metroui": function () {
        import("noty/lib/themes/metroui.css").then(function () {
            noty.success('Your request was successfully sent.', {theme: "metroui"});
            noty.error('An error occurred while sending your request.', {theme: "metroui"});
            noty.warning('You must fill out all required fields before submitting the form.', {theme: "metroui"});
            noty.info('This page will be updated in 10 minutes.', {theme: "metroui"});
        });
    },
    "# noty theme light": function () {
        import("noty/lib/themes/light.css").then(function () {
            noty.success('Your request was successfully sent.', {theme: "light"});
            noty.error('An error occurred while sending your request.', {theme: "light"});
            noty.warning('You must fill out all required fields before submitting the form.', {theme: "light"});
            noty.info('This page will be updated in 10 minutes.', {theme: "light"});
        });
    },
    "# noty theme nest": function () {
        import("noty/lib/themes/nest.css").then(function () {
            noty.success('Your request was successfully sent.', {theme: "nest"});
            noty.error('An error occurred while sending your request.', {theme: "nest"});
            noty.warning('You must fill out all required fields before submitting the form.', {theme: "nest"});
            noty.info('This page will be updated in 10 minutes.', {theme: "nest"});
        });
    },
    "# noty theme sunset": function () {
        import("noty/lib/themes/sunset.css").then(function () {
            noty.success('Your request was successfully sent.', {theme: "sunset"});
            noty.error('An error occurred while sending your request.', {theme: "sunset"});
            noty.warning('You must fill out all required fields before submitting the form.', {theme: "sunset"});
            noty.info('This page will be updated in 10 minutes.', {theme: "sunset"});
        });
    },
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

        try {
            examples[example]();
        } catch (error) {
            console.error(error);
            console.log(`${example} example doest not exist`);
        }

        setTimeout(function () {
            button.innerHTML = icon;
        }, 500);
    });
});
