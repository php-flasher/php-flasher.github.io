---
permalink: /docs/concepts/themes/
title: Adding a Custom Theme to <span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** 
allows you to specify a custom `theme` for your notifications,
and apply your own html/css markup to it to fit your app design.

The preferred way to do this is to add your `theme` to 
**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** with JavaScript code this
way you can use the same `theme` to display notifications from both JavaScript and PHP.

## <i class="fa-duotone fa-list-radio"></i> Using JavaScript

First you need to require `flasher` main script, and then use the `addTheme()` method to add your theme.

The usage is very simple : 

```html
<script defer src="https://cdn.jsdelivr.net/npm/@flasher/flasher@1.2.4/dist/flasher.min.js"></script>
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

## <i class="fa-duotone fa-list-radio"></i> Using PHP

For backend developers this is maybe a simple and fast approche, because we only need to create 
a `Blade` or `Twig` view with our custom theme and it's done.

But it has some drawbacks:
1. You cannot use the same theme if you want to display notifications from JavaScript.
2. Response size will be bigger especially for ajax requests.

I suggest you to use the above [JavaScript](/docs/concepts/themes/#-using-javascript) approche instead.

But if you still want to use render a `Blade` or `Twig` view to add your own custom theme,
check [laravel](/docs/concepts/themes/#-using-php) or [symfony](/docs/concepts/themes/#-using-php) to see how to do it.
