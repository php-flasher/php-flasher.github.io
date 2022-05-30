---
permalink: /docs/adapter/noty/
title: Noty adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
---

## <i class="fa-duotone fa-list-radio"></i> Installation

For more information about noty click <a href="https://ned.im/noty/">here</a>.

**For Vanilla PHP:**
```shell
composer require php-flasher/flasher-noty
```

**For Laravel:**
```shell
composer require php-flasher/flasher-noty-laravel
```

**For Symfony:**
```shell
composer require php-flasher/flasher-noty-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Just instantiate the `NotyFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\Noty\Prime\NotyFactory;

class NotifyController
{
    public function flasher(NotyFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```

---

## <i class="fa-duotone fa-list-radio"></i> Noty specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `NotyFactory`

---

<p id="method-text"><a href="#method-text" class="anchor"><i class="fa-duotone fa-link"></i> text</a></p>

This string can contain HTML too. But be careful and don't pass user inputs to this parameter.
```php
$flasher->text(string $text)
```

---

<p id="method-alert"><a href="#method-alert" class="anchor"><i class="fa-duotone fa-link"></i> alert</a></p>

display alert type notification
```php
$flasher->alert(string $message = null, array $options = array())
```

---

<p id="method-layout"><a href="#method-layout" class="anchor"><i class="fa-duotone fa-link"></i> layout</a></p>

top, topLeft, topCenter, topRight, center, centerLeft, centerRight, bottom, bottomLeft, bottomCenter, bottomRight
    - ClassName generator uses this value → noty_layout__${layout}
```php
$flasher->layout(string $layout)
```

---

<p id="method-theme"><a href="#method-theme" class="anchor"><i class="fa-duotone fa-link"></i> theme</a></p>

relax, mint, metroui - ClassName generator uses this value → noty_theme__${theme}
```php
$flasher->theme(string $theme)
```

---

<p id="method-timeout"><a href="#method-timeout" class="anchor"><i class="fa-duotone fa-link"></i> timeout</a></p>

false, 1000, 3000, 3500, etc. Delay for closing event in milliseconds (ms). Set 'false' for sticky notifications.
```php
$flasher->timeout(int|bool $timeout)
```

---

<p id="method-progressBar"><a href="#method-progressBar" class="anchor"><i class="fa-duotone fa-link"></i> progressBar</a></p>

true, false - Displays a progress bar if timeout is not false.
```php
$flasher->progressBar(bool $progressBar = false)
```

---

<p id="method-closeWith"><a href="#method-closeWith" class="anchor"><i class="fa-duotone fa-link"></i> closeWith</a></p>

click, button
```php
$flasher->closeWith(string|array $closeWith)
```

---

<p id="method-animation"><a href="#method-animation" class="anchor"><i class="fa-duotone fa-link"></i> animation</a></p>

If string, assumed to be CSS class name. If null, no animation at all. If function, runs the function. (v3.0.1+)
You can use animate.css class names or your custom css animations as well.
```php
$flasher->animation(string $animation, string $effect)
```

---

<p id="method-sounds"><a href="#method-sounds" class="anchor"><i class="fa-duotone fa-link"></i> sounds</a></p>

```php
$flasher->sounds(string $option, mixed $value)
```

---

<p id="method-docTitle"><a href="#method-docTitle" class="anchor"><i class="fa-duotone fa-link"></i> docTitle</a></p>

```php
$flasher->docTitle(string $option, mixed $docTitle)
```

---

<p id="method-modal"><a href="#method-modal" class="anchor"><i class="fa-duotone fa-link"></i> modal</a></p>

```php
$flasher->modal(bool $modal = true)
```

---

<p id="method-id"><a href="#method-id" class="anchor"><i class="fa-duotone fa-link"></i> id</a></p>

You can use this id with querySelectors. Generated automatically if false.
```php
$flasher->id(bool|string $id)
```

---

<p id="method-force"><a href="#method-force" class="anchor"><i class="fa-duotone fa-link"></i> force</a></p>

DOM insert method depends on this parameter. If false uses append, if true uses prepend.
```php
$flasher->force(bool $force = true)
```

---

<p id="method-queue"><a href="#method-queue" class="anchor"><i class="fa-duotone fa-link"></i> queue</a></p>

```php
$flasher->queue(string $queue)
```

---

<p id="method-killer"><a href="#method-killer" class="anchor"><i class="fa-duotone fa-link"></i> killer</a></p>

If true closes all visible notifications and shows itself. If string(queueName) closes all visible notification
on this queue and shows itself.
```php
$flasher->killer(bool|string $killer)
```

---

<p id="method-container"><a href="#method-container" class="anchor"><i class="fa-duotone fa-link"></i> container</a></p>

Custom container selector string. Like '.my-custom-container'. Layout parameter will be ignored.
```php
$flasher->container(bool|string $container)
```

---

<p id="method-buttons"><a href="#method-buttons" class="anchor"><i class="fa-duotone fa-link"></i> buttons</a></p>

An array of Noty.button, for creating confirmation dialogs.
```php
$flasher->buttons(array $buttons)
```

---

<p id="method-visibilityControl"><a href="#method-visibilityControl" class="anchor"><i class="fa-duotone fa-link"></i> visibilityControl</a></p>

If true Noty uses PageVisibility API to handle timeout. To ensure that users do not miss their notifications.
```php
$flasher->visibilityControl(bool $visibilityControl)
```
