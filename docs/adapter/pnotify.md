---
permalink: /docs/adapter/pnotify/
title: Pnotify adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2020-11-28
---

# Installation

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-pnotify</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-pnotify-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-pnotify-symfony</code></pre>

# Usage

Just instanciate the `PnotifyFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\Pnotify\Prime\PnotifyFactory;

class NotifyController
{
    public function flasher(PnotifyFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```