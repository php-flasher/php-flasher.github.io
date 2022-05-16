---
permalink: /docs/adapter/noty/
title: Noty adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
---

# Installation

For more information about noty click <a href="https://ned.im/noty/">here</a>.

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-noty</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-noty-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-noty-symfony</code></pre>

# Usage

Just instanciate the `NotyFactory` and start calling build methods

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

## Noty specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `NotyFactory`

### text :
This string can contain HTML too. But be careful and don't pass user inputs to this parameter.
```php
$flasher->text(string $text)
```

### alert :
display alert type notification
```php
$flasher->alert(string $message = null, array $options = array())
```

### layout :
top, topLeft, topCenter, topRight, center, centerLeft, centerRight, bottom, bottomLeft, bottomCenter, bottomRight
    - ClassName generator uses this value → noty_layout__${layout}
```php
$flasher->layout(string $layout)
```

### theme :
relax, mint, metroui - ClassName generator uses this value → noty_theme__${theme}
```php
$flasher->theme(string $theme)
```

### timeout :
false, 1000, 3000, 3500, etc. Delay for closing event in milliseconds (ms). Set 'false' for sticky notifications.
```php
$flasher->timeout(int|bool $timeout)
```

### progressBar :
true, false - Displays a progress bar if timeout is not false.
```php
$flasher->progressBar(bool $progressBar = false)
```

### closeWith :
click, button
```php
$flasher->closeWith(string|array $closeWith)
```

### animation :
If string, assumed to be CSS class name. If null, no animation at all. If function, runs the function. (v3.0.1+)
You can use animate.css class names or your custom css animations as well.
```php
$flasher->animation(string $animation, string $effect)
```

### sounds :

```php
$flasher->sounds(string $option, mixed $value)
```

### docTitle :

```php
$flasher->docTitle(string $option, mixed $docTitle)
```

### modal :

```php
$flasher->modal(bool $modal = true)
```

### id :
You can use this id with querySelectors. Generated automatically if false.
```php
$flasher->id(bool|string $id)
```

### force :
DOM insert method depends on this parameter. If false uses append, if true uses prepend.
```php
$flasher->force(bool $force = true)
```

### queue :

```php
$flasher->queue(string $queue)
```

### killer :
If true closes all visible notifications and shows itself. If string(queueName) closes all visible notification
on this queue and shows itself.
```php
$flasher->killer(bool|string $killer)
```

### container :
Custom container selector string. Like '.my-custom-container'. Layout parameter will be ignored.
```php
$flasher->container(bool|string $container)
```

### buttons :
An array of Noty.button, for creating confirmation dialogs.
```php
$flasher->buttons(array $buttons)
```


### visibilityControl :
If true Noty uses PageVisibility API to handle timeout. To ensure that users do not miss their notifications.
```php
$flasher->visibilityControl(bool $visibilityControl)
```
