---
permalink: /docs/installation/
title: Installation
hide_title: true
published_at: 2020-11-28
updated_at: 2022-05-08
---

> If you like **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** please consider giving it a <i class="fa-duotone fa-star text-yellow-700"></i> on <a href="https://github.com/php-flasher/php-flasher">github</a> or by <a href="https://twitter.com/yoeunes/status/1446792536090161153">tweeting</a> about this library or by contributing to the documentation <i class="fa-solid fa-heart text-red-600"></i>

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** consists of multiple parts, each of which is a separate library.
so you can install only the parts you need.

## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer.

<pre class="snippet"><code>composer require php-flasher/flasher</code></pre>

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** cames with default notification adapter, but you can install other adapters as well:

* **[Toastr](/docs/adapter/toastr/)**
* **[Noty](/docs/adapter/noty/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Sweet Alert](/docs/adapter/sweetalert/)**
* **[Pnotify](/docs/adapter/pnotify/)**

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** also offers a solid integration
with <i class="fa-brands fa-laravel text-red-900"></i> Laravel and <i class="fa-brands fa-symfony text-black"></i> Symfony :

**<i class="fa-brands fa-laravel text-red-900"></i> Laravel**:
<pre class="snippet"><code>composer require php-flasher/flasher-laravel</code></pre>

**<i class="fa-brands fa-symfony text-black"></i> Symfony**:
<pre class="snippet"><code>composer require php-flasher/flasher-symfony</code></pre>

## <i class="fa-duotone fa-list-radio"></i> General Usage

If you're using a framework like <i class="fa-brands fa-laravel text-red-900"></i> __Laravel__ or <i class="fa-brands fa-symfony text-black"></i> __Symfony__, just grab an instance of __FlasherInterface__ from the
container and use it to flash messages.

```php
<?php

namespace App\Controller;

use Flasher\Prime\FlasherInterface;

class BookController
{
    public function save(FlasherInterface $flasher)
    {
        // ...

        $flasher->addSuccess('Data has been saved successfully!');

        flash('Data has been saved successfully!') // laravel helper function

        // ... finally redirect or render the view
    }
}
```
