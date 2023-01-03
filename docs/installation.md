---
permalink: /docs/installation/
title: Installation
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is modular and consists of multiple libraries, 
allowing users to install and use only the specific components they need for their project.

## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer :

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```shell
composer require php-flasher/flasher-laravel
```

<br />

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```shell
composer require php-flasher/flasher-symfony
```

---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** includes a default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>, but users can also install additional adapters to customize the appearance of notifications within their projects such as :

* **[Toastr](/docs/adapter/toastr/)**
* **[Noty](/docs/adapter/noty/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Sweet Alert](/docs/adapter/sweetalert/)**
* **[Pnotify](/docs/adapter/pnotify/)**

---

## <i class="fa-duotone fa-list-radio"></i> General Usage

To display a notification message, you can either use the `flash()` helper method or obtain an instance of `flasher` from the service container. 
Then, before returning a view or redirecting, call the `addSuccess()` method and pass in the desired message to be displayed.

```php
# General usage

<?php

namespace App\Controller;

use Flasher\Prime\FlasherInterface;

class BookController
{
    public function saveBook()
    {
        // ...

        flash('{{ site.data.messages["success"] | sample }}');
        
        flash()->addSuccess('{{ site.data.messages["success"] | sample }}');
        
        flash()
            ->success('{{ site.data.messages["success"] | sample }}')
            ->flash();
            
        app('flasher')->addSuccess('{{ site.data.messages["success"] | sample }}');

        // ... redirect or render the view
    }
    
    /**
     * if you prefer to use dependency injection 
     */
    public function register(FlasherInterface $flasher)
    {
        // ...
        
        $flasher->addSuccess('{{ site.data.messages["success"] | sample }}');
        
        // ... redirect or render the view
    }
}
```

<br />

It's important to choose a message that is clear and concise, and that accurately reflects the outcome of the operation. <br />
In this case, `"Book has been created successfully!"` is already a good message,
but you may want to tailor it to fit the specific context and language of your application.
