import flasher from "@flasher/flasher";

window.flasher = flasher;

function showNotifications(notifications) {
    if (notifications.length === 0) {
        return;
    }

    setTimeout(() => {
        notifications[0]();
        showNotifications(notifications.slice(1));
    }, 1500);
}

export function showNotificationsForHandler(handler) {
    const factory = flasher.create(handler);

    console.warn(handler)
    // factory.info("Welcome back");
    // factory.error("Oops! Something went wrong!");
    // factory.warning("Are you sure you want to proceed ?");
    // factory.success("Data has been saved successfully!");

    if (["sweetalert", "pnotify"].includes(handler)) {
        return;
    }

    showNotifications([
        () => factory.info("Welcome back"),
        () => factory.error("Oops! Something went wrong!"),
        () => factory.warning("Are you sure you want to proceed ?"),
        () => factory.success("Data has been saved successfully!"),
    ]);
}
