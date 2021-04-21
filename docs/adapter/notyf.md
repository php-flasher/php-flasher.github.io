---
permalink: /docs/adapter/notyf/
title: Notyf adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2020-11-28
---

# Installation

### For Vanilla PHP 

<pre class="snippet"><code>composer require php-flasher/flasher-notyf</code></pre>

### For Laravel

<pre class="snippet"><code>composer require php-flasher/flasher-notyf-laravel</code></pre>

### For Symfony

<pre class="snippet"><code>composer require php-flasher/flasher-notyf-symfony</code></pre>

# Usage

Just instanciate the `NotyfFactory` and start calling build methods

```php
<?php

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