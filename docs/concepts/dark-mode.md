---
permalink: /docs/concepts/dark-mode/
title: Dark Mode
---

## <i class="fa-duotone fa-list-radio"></i> Dark Mode Support

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** supports dark mode to go along with the dark mode of your design.

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** uses the `prefers-color-scheme` CSS media query to determine if the user is in dark mode.
But you can also use the `class` strategy if you want to toggle the dark mode manually.

---

## <i class="fa-duotone fa-list-radio"></i> Class Strategy

If you want to support toggling dark mode manually instead of relying on the operating system preference, use the `class` strategy instead of the `media` strategy:

For **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```php 
// config/flasher.php
return [
    'default' => 'flasher',
    'themes' => [
        'flasher' => [
            'options' => [
                'darkMode' => 'class',
            ],
        ],
    ],
];
```

For **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```yaml
flasher:
    default: flasher
    themes:
        flasher:
            options:
                darkMode: class
```

Now instead of relying on the `prefers-color-scheme` CSS media query, dark mode will be applied whenever `.dark` class is present earlier in the HTML tree.

To enable dark mode, add `dark` class to the `<html>` or `<body>` tag, as follows:

```html
<!-- Dark mode enabled -->
<html class="dark">
```

or

```html
<!-- Dark mode enabled -->
<body class="dark">
```

Only by adding `dark` class **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** will automatically switch to dark mode.

---

## <i class="fa-duotone fa-list-radio"></i> Custom Class name

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** uses the `.dark` class to toggle dark mode. 

But you can choose your own approach to enabling dark mode and add a different class name when dark mode is active.

You can customize the dark mode selector name by setting darkMode to an array with your custom selector as the second item:

For **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```php 
// config/flasher.php
return [
    'default' => 'flasher',
    'themes' => [
        'flasher' => [
            'options' => [
                'darkMode' => ['class', '[data-mode="dark"]'],
            ],
        ],
    ],
];
```

For **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```yaml
flasher:
    default: flasher
    themes:
        flasher:
            options:
                darkMode: ['class', '[data-mode="dark"]']
```

And now you can add the `[data-mode="dark"]` selector to the `<html>` or `<body>` tag, as follows:

```html 
<!-- Dark mode enabled -->
<html data-mode="dark">
```

or
 
```html
<!-- Dark mode enabled -->
<body data-mode="dark">
```
