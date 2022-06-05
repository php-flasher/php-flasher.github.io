---
permalink: /docs/concepts/custom-themes/
title: Custom Theme
published_at: 2022-06-01
updated_at: 2022-06-01
---

<h1 class="text-center">Draft...</h1>
**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows you change
the default notification style, and apply you own html/css styles

```html
<script defer src="https://cdn.jsdelivr.net/npm/@flasher/flasher@1.0.17/dist/flasher.min.js"></script>
<script src="{{ asset('packages/flasher/dist/flasher.js') }}"></script>
<script>
    flasher.addTheme('bootstrap', {
        styles: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', // optional
        render(envelope) {
            const notification = envelope.notification;
            const map = {
                success: 'alert-success',
                info: 'alert-info',
                warning: 'alert-warning',
                error: 'alert-danger',
            };

            return `
                <div class="alert ${map[notification.type]}">
                  ${notification.message}
                </div>
            `;
        },
    })
</script>
```
