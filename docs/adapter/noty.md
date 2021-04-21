---
permalink: /docs/adapter/noty/
title: Noty adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2020-11-28
---

# Installation

### For Vanilla PHP 

<pre class="snippet"><code>composer require php-flasher/flasher-noty</code></pre>

### For Laravel

<pre class="snippet"><code>composer require php-flasher/flasher-noty-laravel</code></pre>

### For Symfony

<pre class="snippet"><code>composer require php-flasher/flasher-noty-symfony</code></pre>

# Usage

Just instanciate the `NotyFactory` and start calling build methods

```php
<?php

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