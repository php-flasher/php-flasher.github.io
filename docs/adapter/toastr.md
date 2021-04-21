---
permalink: /docs/adapter/toastr/
title: Toastr.js adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2020-11-28
---

# Installation

This package can be installed through Composer.

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-toastr</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-toastr-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-toastr-symfony</code></pre>

# Usage

Just instanciate the `ToastrFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\Toastr\Prime\ToastrFactory;

class NotifyController
{
    public function flasher(ToastrFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```