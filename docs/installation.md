---
permalink: /docs/installation/
title: Installation
published_at: 2020-11-28
updated_at: 2021-10-05
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** consists of multiple parts and
came with a default __template__ driver which include __tailwindcss__ and __bootstrap__ notifications.

## Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using
composer.

<pre class="snippet"><code>composer require php-flasher/flasher</code></pre>

Additionally, you may want to install an extra adapter (library) to display a specific type of notifications, you can
find the adapters in the menu.

* **[Toastr](/docs/adapter/toastr/)**
* **[Sweet Alert](/docs/adapter/sweet-alert/)**
* **[Pnotify](/docs/adapter/pnotify/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Noty](/docs/adapter/noty/)**
* **[Tailwind CSS](/docs/adapter/template/tailwindcss/)**
* **[Bootstrap](/docs/adapter/template/bootstrap/)**
* **[Desktop](/docs/adapter/template/desktop/)**

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** also offers a solid integration
with Laravel and Symfony :

**For Laravel**:
<pre class="snippet"><code>composer require php-flasher/flasher-laravel</code></pre>

**For Symfony**:
<pre class="snippet"><code>composer require php-flasher/flasher-symfony</code></pre>

## General Usage

If you're using a framework like __Laravel__ or __Symfony__, just grab an instance of __FlasherInterface__ from the
container

```php
<?php

namespace App\Controller;

use Flasher\Prime\FlasherInterface;

class NotifyController
{
    public function flasher(FlasherInterface $flasher)
    {
        // ...

        $flasher->addSuccess('Data has been saved successfully!');

        flasher('Data has been saved successfully!') // only for the Laravel framework
        // ... redirect or render a view here
    }
}
```
