---
permalink: /docs/concepts/custom-themes/
title: Adding a Custom Theme to <span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>
published_at: 2022-06-01
updated_at: 2022-06-01
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows you to specify a custom theme for your notifications. 
and apply your own html/css markup to it.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@flasher/flasher@1.0.17/dist/flasher.min.js"></script>
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

> The reason why we are registering custom themes with JavaScript is because we want to be able to use the same theme for both the backend and the frontend. <br>

---

The next step is straightforward, send your notification with `theme.boostrap` like the following:

```php
class BookController
{
    public function save(FlasherInterface $flasher)
    {
        // ...

        $flasher->using('theme.bootstrap')->addSuccess('Book saved successfully');
```

Or maybe use it as the default adapter for your application:

For **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```php
// config/flasher.php
return [
    'default' => 'theme.bootstrap',
];
```

For **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```yaml
# config/packages/flasher.yaml
flasher:
    default: theme.bootstrap
```
