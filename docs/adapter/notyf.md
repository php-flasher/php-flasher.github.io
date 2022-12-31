---
permalink: /docs/adapter/notyf/
title: Notyf adapter for PHP flasher
---

## <i class="fa-duotone fa-list-radio"></i> Installation

For more information about notyf click <a href="https://carlosroso.com/notyf/">here</a>.

**For Vanilla PHP:**
```shell
composer require php-flasher/flasher-notyf
```

**For Laravel:**
```shell
composer require php-flasher/flasher-notyf-laravel
```

**For Symfony:**
```shell
composer require php-flasher/flasher-notyf-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Just instantiate the `NotyfFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\Notyf\Prime\NotyfFactory;

class NotifyController
{
    public function flasher(NotyfFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```

---

## <i class="fa-duotone fa-list-radio"></i> Fluent Builder methods

All methods in the **[Usage](/docs/usage/)** section are available also for `NotyfFactory`

---

<p id="method-duration"><a href="#method-duration" class="anchor"><i class="fa-duotone fa-link"></i> duration</a></p>

Number of miliseconds before hiding the notification. Use 0 for infinite duration.
```php
$flasher->duration(int $duration)
```

---

<p id="method-ripple"><a href="#method-ripple" class="anchor"><i class="fa-duotone fa-link"></i> ripple</a></p>

Whether to show the notification with a ripple effect
```php
$flasher->ripple(bool $ripple)
```

---

<p id="method-position"><a href="#method-position" class="anchor"><i class="fa-duotone fa-link"></i> position</a></p>

Viewport location where notifications are rendered
```php
$flasher->position(string $position, string $value)
```

---

<p id="method-dismissible"><a href="#method-dismissible" class="anchor"><i class="fa-duotone fa-link"></i> dismissible</a></p>

Whether to allow users to dismiss the notification with a button
```php
$flasher->dismissible(bool $dismissible)
```
