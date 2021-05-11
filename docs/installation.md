---
permalink: /docs/installation/
title: Installation
published_at: 2020-11-28
updated_at: 2020-11-28
---

PHP flasher consists of multiple parts and came with a default __template__ driver which include __tailwindcss__ and __bootstrap__ notifications. 

## Installation

PHP Flasher can be installed using composer.

<pre class="snippet"><code>composer require php-flasher/flasher</code></pre>

Additionally, you may want to install an extra adapter (library) to show a specific types of toast notifications, you can find the adapters in the menu.

* **[Installation](/docs/installation/)**
* **[Toastr](/docs/adapter/toastr/)**
* **[Sweet Alert](/docs/adapter/sweet-alert/)**
* **[Pnotify](/docs/adapter/pnotify/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Noty](/docs/adapter/noty/)**
* **[Tailwind CSS](/docs/adapter/template/tailwindcss/)**
* **[Bootstrap](/docs/adapter/template/bootstrap/)**

PHP Flasher also offers a solid integration with Laravel and Symfony :

**For Laravel**:
<pre class="snippet"><code>composer require php-flasher/flasher-laravel</code></pre>

**For Symfony**:
<pre class="snippet"><code>composer require php-flasher/flasher-symfony</code></pre>

## Simple Usage

The Flasher API is the most important interface Flasher describes when you want to use Flasher in your application.

> If you're using a framework like __Laravel__ or __Symfony__, just grab an instance of __FlasherInterface__.

```php
$flasher->addSuccess('Data has been saved successfully!');
```

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
        
        // ... redirect or render a view here
    }
}    
```