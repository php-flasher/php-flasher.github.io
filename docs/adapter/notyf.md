---
permalink: /docs/adapter/notyf/
title: Notyf adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
---

# Installation

For more information about notyf click <a href="https://carlosroso.com/notyf/">here</a>.

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-notyf</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-notyf-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-notyf-symfony</code></pre>

# Usage

Just instanciate the `NotyfFactory` and start calling build methods

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

## Notyf specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `NotyfFactory`


### duration :
Number of miliseconds before hiding the notification. Use 0 for infinite duration.
```php
$flasher->duration(int $duration)
```

### ripple :
Whether to show the notification with a ripple effect
```php
$flasher->ripple(bool $ripple)
```

### position :
Viewport location where notifications are rendered
```php
$flasher->position(string $position, string $value)
```

### dismissible :
Whether to allow users to dismiss the notification with a button
```php
$flasher->dismissible(bool $dismissible)
```
