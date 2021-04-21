---
permalink: /docs/adapter/sweet-alert/
title: Sweert Alert 2 adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2020-11-28
---
# Installation

### For Vanilla PHP 

<pre class="snippet"><code>composer require php-flasher/flasher-sweet-alert</code></pre>

### For Laravel

<pre class="snippet"><code>composer require php-flasher/flasher-sweet-alert-laravel</code></pre>

### For Symfony

<pre class="snippet"><code>composer require php-flasher/flasher-sweet-alert-symfony</code></pre>

# Usage

Just instanciate the `SweetAlertFactory` and start calling build methods

```php
<?php

namespace App\Controller;

use Flasher\SweetAlert\Prime\SweetAlertFactory;

class NotifyController
{
    public function flasher(SweetAlertFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```