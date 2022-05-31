---
permalink: /docs/installation/
title: Installation
hide_title: true
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** consists of multiple parts, each of which is a separate library.
so you can install only the parts you need.

## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer <i class="fa-brands fa-php fa-xl text-indigo-900"></i> :

```shell
composer require php-flasher/flasher
```

**or** choose one of the following integration with :

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```shell
composer require php-flasher/flasher-laravel
```

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```shell
composer require php-flasher/flasher-symfony
```

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** show its default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>, but you can install additional adapters as well :

* **[Toastr](/docs/adapter/toastr/)**
* **[Noty](/docs/adapter/noty/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Sweet Alert](/docs/adapter/sweetalert/)**
* **[Pnotify](/docs/adapter/pnotify/)**

---

## <i class="fa-duotone fa-list-radio"></i> General Usage

If you're using a framework like <i class="fa-brands fa-laravel text-red-900"></i> __Laravel__ or <i class="fa-brands fa-symfony text-black"></i> __Symfony__, just grab an instance of __FlasherInterface__ from the
service container and use it to display your notifications.

```php
<?php

namespace App\Controller;

use Flasher\Prime\FlasherInterface;

class BookController
{
    public function save(FlasherInterface $flasher)
    {
        // ...

        $flasher->addSuccess('Book saved successfully');

        flash('Data has been saved successfully!') // laravel helper function

        // ... finally redirect or render the view
    }
}
```
