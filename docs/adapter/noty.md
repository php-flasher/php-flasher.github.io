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
        noty()->addSuccess('{{ site.data.messages["success"] | sample }}');
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

<br /> `Example`:

```php
# noty text

noty()
    ->text('{{ site.data.messages["error"] | sample }}')
    ->error()
    ->flash();
```

---

<p id="method-alert"><a href="#method-alert" class="anchor"><i class="fa-duotone fa-link"></i> alert</a></p>

Display alert type notification

```php
noty()->alert(string $message = null, array $options = array());
```

<br /> `Example`:

```php
# noty alert

noty()
    ->alert('{{ site.data.messages["info"] | sample }}')
    ->flash();
```

---

<p id="method-layout"><a href="#method-layout" class="anchor"><i class="fa-duotone fa-link"></i> layout</a></p>

`top`, `topLeft`, `topCenter`, `topRight`, `center`, `centerLeft`, `centerRight`, `bottom`, `bottomLeft`, `bottomCenter`, `bottomRight` <br />

ClassName generator uses this value → <span class="text-orange-600">noty_layout__${layout}</span>

```php
noty()->layout(string $layout);
```

<br /> `Example`:

```php
# noty layout

noty()
    ->layout('topCenter')
    ->addSuccess('{{ site.data.messages["success"] | sample }}');
```

---

<p id="method-theme"><a href="#method-theme" class="anchor"><i class="fa-duotone fa-link"></i> theme</a></p>

Possible values: `relax`, `mint`, `metroui`, `light`, `sunset`, `nest`.

ClassName generator uses this value → <span class="text-orange-600">noty_theme__${theme}</span>

```php
noty()->theme(string $theme);
```

> Default Theme: **mint**

<br /> Examples:

```php
# noty theme mint

noty()
    ->theme('mint')
    ->addSuccess('{{ site.data.messages["success"] | sample }}');

noty()
    ->theme('mint')
    ->addError('{{ site.data.messages["error"] | sample }}');

noty()
    ->theme('mint')
    ->addWarning('{{ site.data.messages["warning"] | sample }}');

noty()
    ->theme('mint')
    ->addInfo('{{ site.data.messages["info"] | sample }}');
```

```php
# noty theme relax

// don't the load the theme css file: https://github.com/needim/noty/blob/master/lib/themes/relax.css

noty()
    ->theme('mint')
    ->addSuccess('{{ site.data.messages["success"] | sample }}');

noty()
    ->theme('mint')
    ->addError('{{ site.data.messages["error"] | sample }}');

noty()
    ->theme('mint')
    ->addWarning('{{ site.data.messages["warning"] | sample }}');

noty()
    ->theme('mint')
    ->addInfo('{{ site.data.messages["info"] | sample }}');
```

```php
# noty theme metroui

// Theme: https://github.com/needim/noty/blob/master/lib/themes/metroui.css

noty()
    ->theme('metroui')
    ->addSuccess('{{ site.data.messages["success"] | sample }}');

noty()
    ->theme('metroui')
    ->addError('{{ site.data.messages["error"] | sample }}');

noty()
    ->theme('metroui')
    ->addWarning('{{ site.data.messages["warning"] | sample }}');

noty()
    ->theme('metroui')
    ->addInfo('{{ site.data.messages["info"] | sample }}');
```

```php
# noty theme light

// Theme: https://github.com/needim/noty/blob/master/lib/themes/light.css

noty()
    ->theme('light')
    ->addSuccess('{{ site.data.messages["success"] | sample }}');

noty()
    ->theme('light')
    ->addError('{{ site.data.messages["error"] | sample }}');

noty()
    ->theme('light')
    ->addWarning('{{ site.data.messages["warning"] | sample }}');

noty()
    ->theme('light')
    ->addInfo('{{ site.data.messages["info"] | sample }}');
```

```php
# noty theme sunset
// Theme: https://github.com/needim/noty/blob/master/lib/themes/sunset.css

noty()
    ->theme('sunset')
    ->addSuccess('{{ site.data.messages["success"] | sample }}');

noty()
    ->theme('sunset')
    ->addError('{{ site.data.messages["error"] | sample }}');

noty()
    ->theme('sunset')
    ->addWarning('{{ site.data.messages["warning"] | sample }}');

noty()
    ->theme('sunset')
    ->addInfo('{{ site.data.messages["info"] | sample }}');
```

---

<p id="method-timeout"><a href="#method-timeout" class="anchor"><i class="fa-duotone fa-link"></i> timeout</a></p>

`false`, `1000`, `3000`, `3500`, etc. Delay for closing event in milliseconds (ms). Set `false` for sticky
notifications.

```php
noty()->timeout(int|bool $timeout)
```

<br /> `Example`:

```php
# noty timeout

noty()
    ->timeout(2000) // 2 seconds
    ->addSuccess('{{ site.data.messages["success"] | sample }}');
```

---

<p id="method-progressBar"><a href="#method-progressBar" class="anchor"><i class="fa-duotone fa-link"></i> progressBar</a></p>

`true`, `false` - Displays a progress bar if timeout is not false.

```php
noty()->progressBar(bool $progressBar = false)
```

<br /> `Example`:

```php
# noty progressBar

noty()
    ->progressBar(false)
    ->addSuccess('{{ site.data.messages["success"] | sample }}');
```

---

<p id="method-closeWith"><a href="#method-closeWith" class="anchor"><i class="fa-duotone fa-link"></i> closeWith</a></p>

`click`, `button`

Default `click`

```php
noty()->closeWith(string|array $closeWith)
```

<br /> `Example`:

```php
# noty closeWith

noty()
    ->closeWith(['click', 'button'])
    ->addError('{{ site.data.messages["error"] | sample }}');
```

---

<p id="method-animation"><a href="#method-animation" class="anchor"><i class="fa-duotone fa-link"></i> animation</a></p>

If `string`, assumed to be CSS class name. <br />
If `null`, no animation at all. <br />
If `function`, runs the function. (v3.0.1+) <br /><br />
You can use `animate.css` class names or your custom css animations as well.

```php
noty()->animation(string $animation, string $effect)
```

<br /> `Example`:

```php
# noty animation

noty()
    ->animation(null)
    ->addInfo('{{ site.data.messages["info"] | sample }}');
```

---

<p id="method-sounds"><a href="#method-sounds" class="anchor"><i class="fa-duotone fa-link"></i> sounds</a></p>

`sources` : Array of audio sources e.g 'some.wav' <br />
`volume` : nteger value between 0-1 e.g 0.5 <br />
`conditions` : There are two conditions for now: 'docVisible' & 'docHidden'. You can use one of them or both. <br />

```php
noty()->sounds(string $option, mixed $value)
```

<br /> `Example`:

```php
# noty sounds

noty()
    ->sounds('sources', ['/dist/sounds/notification.wav'])
    ->sounds('volume', 0.3)
    ->sounds('conditions', ['docVisible', 'docHidden'])
    ->addSuccess('{{ site.data.messages["success"] | sample }}');
```

---

<p id="method-docTitle"><a href="#method-docTitle" class="anchor"><i class="fa-duotone fa-link"></i> docTitle</a></p>

There are two conditions for now: `docVisible` & `docHidden`. You can use one of them or both.

```php
noty()->docTitle(string $option, mixed $docTitle)
```

<br /> `Example`:

```php
# noty docTitle

noty()
    ->docTitle('conditions', ['docVisible', 'docHidden'])
    ->addSuccess('{{ site.data.messages["success"] | sample }}');
```

---

<p id="method-modal"><a href="#method-modal" class="anchor"><i class="fa-duotone fa-link"></i> modal</a></p>

```php
noty()->modal(bool $modal = true)
```

<br /> `Example`:

```php
# noty modal

noty()
    ->modal(true)
    ->addError('{{ site.data.messages["error"] | sample }}');
```

---

<p id="method-id"><a href="#method-id" class="anchor"><i class="fa-duotone fa-link"></i> id</a></p>

You can use this id with querySelectors. <br />
Generated automatically if false.

```php
noty()->id(bool|string $id)
```

<br /> `Example`:

```php
# noty id

noty()
    ->id(false)
    ->addWarning('{{ site.data.messages["warning"] | sample }}');
```

---

<p id="method-force"><a href="#method-force" class="anchor"><i class="fa-duotone fa-link"></i> force</a></p>

DOM insert method depends on this parameter. <br />
If `false` uses append, if `true` uses prepend.

```php
noty()->force(bool $force = true)
```

<br /> `Example`:

```php
# noty force

noty()
    ->force(false)
    ->addWarning('{{ site.data.messages["warning"] | sample }}');
```

---

<p id="method-queue"><a href="#method-queue" class="anchor"><i class="fa-duotone fa-link"></i> queue</a></p>

NEW Named queue system. Details are [here](https://ned.im/noty/#/api).

```php
noty()->queue(string $queue)
```

Default: `global`

<br /> `Example`:

```php
# noty force

noty()
    ->queue('global')
    ->addWarning('{{ site.data.messages["warning"] | sample }}');
```

---

<p id="method-killer"><a href="#method-killer" class="anchor"><i class="fa-duotone fa-link"></i> killer</a></p>

If `true` closes all `visible` notifications and shows itself. <br />
If `string(queueName)` closes all `visible` notification on this queue and shows itself.

```php
noty()->killer(bool|string $killer)
```

<br /> `Example`:

```php
# noty killer

noty()
    ->killer(true)
    ->addError('{{ site.data.messages["error"] | sample }}');
```

---

<p id="method-container"><a href="#method-container" class="anchor"><i class="fa-duotone fa-link"></i> container</a></p>

Custom container selector string. Like `.my-custom-container`. <br />
Layout parameter will be ignored.

```php
noty()->container(bool|string $container)
```

<br /> `Example`:

```php
# noty container

noty()
    ->container(false)
    ->addError('{{ site.data.messages["error"] | sample }}');
```

---

<p id="method-buttons"><a href="#method-buttons" class="anchor"><i class="fa-duotone fa-link"></i> buttons</a></p>

An `array` of <span class="text-orange-600">Noty.button</span>, for creating confirmation dialogs. Details are [here](https://ned.im/noty/#/confirm).

```php
noty()->buttons(array $buttons)
```

---

<p id="method-visibilityControl"><a href="#method-visibilityControl" class="anchor"><i class="fa-duotone fa-link"></i> visibilityControl</a></p>

If `true` Noty uses PageVisibility API to handle timeout. <br />
To ensure that users do not miss their notifications.

```php
noty()->visibilityControl(bool $visibilityControl)
```

<br /> `Example`:

```php
# noty visibilityControl

noty()
    ->visibilityControl(true)
    ->addError('{{ site.data.messages["error"] | sample }}');
```
