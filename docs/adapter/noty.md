---
permalink: /docs/adapter/noty/
title: Noty adapter for PHP flasher
---

## <i class="fa-duotone fa-list-radio"></i> Installation

For more information about noty click <a href="https://ned.im/noty/">here</a>.

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```shell
composer require php-flasher/flasher-noty-laravel
```

<br />

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```shell
composer require php-flasher/flasher-noty-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Just instantiate the `NotyFactory` and start calling build methods

```php
# noty

<?php

namespace App\Controller;

use Flasher\Prime\FlasherInterface;

class BookController
{
    public function saveBook()
    {        
        noty()addSuccess('The book has been added to the library successfully!');
    }
}
```

---

## <i class="fa-duotone fa-list-radio"></i> Fluent Builder methods

All methods in the **[Usage](/docs/usage/)** section are available also for `NotyFactory`

---

<p id="method-text"><a href="#method-text" class="anchor"><i class="fa-duotone fa-link"></i> text</a></p>

This string can contain HTML too. But be careful and don't pass user inputs to this parameter.

```php
noty()->text(string $text);
```

<br /> Example:

```php
# noty text

noty()
    ->text('Oops, something went wrong.')
    ->error()
    ->flash();
```

---

<p id="method-alert"><a href="#method-alert" class="anchor"><i class="fa-duotone fa-link"></i> alert</a></p>

display alert type notification

```php
noty()->alert(string $message = null, array $options = array());
```

<br /> Example:

```php
# noty alert

noty()
    ->alert('This may take a while. Do not refresh the page.')
    ->flash();
```

---

<p id="method-layout"><a href="#method-layout" class="anchor"><i class="fa-duotone fa-link"></i> layout</a></p>

top, topLeft, topCenter, topRight, center, centerLeft, centerRight, bottom, bottomLeft, bottomCenter, bottomRight <br />
> ClassName generator uses this value → noty_layout__${layout}

```php
noty()->layout(string $layout);
```

<br /> Example:

```php
# noty layout

noty()
    ->layout('topCenter')
    ->addSuccess('The action was completed successfully.');
```

---

<p id="method-theme"><a href="#method-theme" class="anchor"><i class="fa-duotone fa-link"></i> theme</a></p>

Possible values: `relax`, `mint`, `metroui`, `light`, `sunset`, `nest`.

> ClassName generator uses this value → noty_theme__${theme}

```php
noty()->theme(string $theme);
```

> Default Theme: **mint**

<br /> Examples:

```php
# noty theme mint

noty()
    ->theme('mint')
    ->addSuccess('Your request was successfully sent.');

noty()
    ->theme('mint')
    ->addError('An error occurred while sending your request.');

noty()
    ->theme('mint')
    ->addWarning('You must fill out all required fields before submitting the form.');

noty()
    ->theme('mint')
    ->addInfo('This page will be updated in 10 minutes.');
```

```php
# noty theme relax

// don't the load the theme css file: https://github.com/needim/noty/blob/master/lib/themes/relax.css

noty()
    ->theme('mint')
    ->addSuccess('Your request was successfully sent.');

noty()
    ->theme('mint')
    ->addError('An error occurred while sending your request.');

noty()
    ->theme('mint')
    ->addWarning('You must fill out all required fields before submitting the form.');

noty()
    ->theme('mint')
    ->addInfo('This page will be updated in 10 minutes.');
```

```php
# noty theme metroui

// Theme: https://github.com/needim/noty/blob/master/lib/themes/metroui.css

noty()
    ->theme('metroui')
    ->addSuccess('Your request was successfully sent.');

noty()
    ->theme('metroui')
    ->addError('An error occurred while sending your request.');

noty()
    ->theme('metroui')
    ->addWarning('You must fill out all required fields before submitting the form.');

noty()
    ->theme('metroui')
    ->addInfo('This page will be updated in 10 minutes.');
```

```php
# noty theme light

// Theme: https://github.com/needim/noty/blob/master/lib/themes/light.css

noty()
    ->theme('light')
    ->addSuccess('Your request was successfully sent.');

noty()
    ->theme('light')
    ->addError('An error occurred while sending your request.');

noty()
    ->theme('light')
    ->addWarning('You must fill out all required fields before submitting the form.');

noty()
    ->theme('light')
    ->addInfo('This page will be updated in 10 minutes.');
```

```php
# noty theme sunset
// Theme: https://github.com/needim/noty/blob/master/lib/themes/sunset.css

noty()
    ->theme('sunset')
    ->addSuccess('Your request was successfully sent.');

noty()
    ->theme('sunset')
    ->addError('An error occurred while sending your request.');

noty()
    ->theme('sunset')
    ->addWarning('You must fill out all required fields before submitting the form.');

noty()
    ->theme('sunset')
    ->addInfo('This page will be updated in 10 minutes.');
```

---

<p id="method-timeout"><a href="#method-timeout" class="anchor"><i class="fa-duotone fa-link"></i> timeout</a></p>

false, 1000, 3000, 3500, etc. Delay for closing event in milliseconds (ms). Set 'false' for sticky notifications.
```php
noty()->timeout(int|bool $timeout)
```

---

<p id="method-progressBar"><a href="#method-progressBar" class="anchor"><i class="fa-duotone fa-link"></i> progressBar</a></p>

true, false - Displays a progress bar if timeout is not false.
```php
noty()->progressBar(bool $progressBar = false)
```

---

<p id="method-closeWith"><a href="#method-closeWith" class="anchor"><i class="fa-duotone fa-link"></i> closeWith</a></p>

click, button
```php
noty()->closeWith(string|array $closeWith)
```

---

<p id="method-animation"><a href="#method-animation" class="anchor"><i class="fa-duotone fa-link"></i> animation</a></p>

If string, assumed to be CSS class name. If null, no animation at all. If function, runs the function. (v3.0.1+)
You can use animate.css class names or your custom css animations as well.
```php
noty()->animation(string $animation, string $effect)
```

---

<p id="method-sounds"><a href="#method-sounds" class="anchor"><i class="fa-duotone fa-link"></i> sounds</a></p>

```php
noty()->sounds(string $option, mixed $value)
```

---

<p id="method-docTitle"><a href="#method-docTitle" class="anchor"><i class="fa-duotone fa-link"></i> docTitle</a></p>

```php
noty()->docTitle(string $option, mixed $docTitle)
```

---

<p id="method-modal"><a href="#method-modal" class="anchor"><i class="fa-duotone fa-link"></i> modal</a></p>

```php
noty()->modal(bool $modal = true)
```

---

<p id="method-id"><a href="#method-id" class="anchor"><i class="fa-duotone fa-link"></i> id</a></p>

You can use this id with querySelectors. Generated automatically if false.
```php
noty()->id(bool|string $id)
```

---

<p id="method-force"><a href="#method-force" class="anchor"><i class="fa-duotone fa-link"></i> force</a></p>

DOM insert method depends on this parameter. If false uses append, if true uses prepend.
```php
noty()->force(bool $force = true)
```

---

<p id="method-queue"><a href="#method-queue" class="anchor"><i class="fa-duotone fa-link"></i> queue</a></p>

```php
noty()->queue(string $queue)
```

---

<p id="method-killer"><a href="#method-killer" class="anchor"><i class="fa-duotone fa-link"></i> killer</a></p>

If true closes all visible notifications and shows itself. If string(queueName) closes all visible notification
on this queue and shows itself.
```php
noty()->killer(bool|string $killer)
```

---

<p id="method-container"><a href="#method-container" class="anchor"><i class="fa-duotone fa-link"></i> container</a></p>

Custom container selector string. Like '.my-custom-container'. Layout parameter will be ignored.
```php
noty()->container(bool|string $container)
```

---

<p id="method-buttons"><a href="#method-buttons" class="anchor"><i class="fa-duotone fa-link"></i> buttons</a></p>

An array of Noty.button, for creating confirmation dialogs.
```php
noty()->buttons(array $buttons)
```

---

<p id="method-visibilityControl"><a href="#method-visibilityControl" class="anchor"><i class="fa-duotone fa-link"></i> visibilityControl</a></p>

If true Noty uses PageVisibility API to handle timeout. To ensure that users do not miss their notifications.
```php
noty()->visibilityControl(bool $visibilityControl)
```
