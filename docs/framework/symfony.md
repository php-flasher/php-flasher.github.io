---
permalink: /docs/framework/symfony/
title: A solid integration with the Symfony framework
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offers a solid integration with Symfony, with supports from Symfony **2.0** to **6**

## Installation :

you can install the bundle using composer

```shell
composer require php-flasher/flasher-symfony
```

## Enable the bundle :

If you are using Symfony 4+ the bundle will be registered automatically in **`config/bundles.php`**, otherwise enable the bundle in the kernel:

```php
<?php

// app/AppKernel.php

public function registerBundles()
{
    $bundles = array(
        // ...
        new Flasher\Symfony\FlasherSymfonyBundle(),
        // ...
    );
}
```

## Usage :

1. add __`{% raw %}{{ flasher_render() }}{% endraw %}`__  at the **head** section of your base template

```twig
<!doctype html>
<html>
    <head>
        <title>PHPFlasher</title>
        {% raw %}{{ flasher_render() }}{% endraw %}
    </head>
    <body>

    </body>
</html>
```

2. dispatch `notifications` from anywhere in you application

```php
namespace App\Controller;

use Flasher\Prime\FlasherInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class BookController extends AbstractController
{
    public function save(FlasherInterface $flasher): Response
    {
        // ...

        $flasher->addSuccess('Data has been saved successfully!');

        return $this->render('book/index.html.twig');
    }
}
```

### Examples :

By default, the **template** adapter is used when creating your notification,
to use another adapter you could use the **`create()`** method:

```php
class PostController
{
   public function create(FlasherInterface $flasher): Response
   {
      $flasher
         ->error('An error has occurred, please try again later.')
         ->priority(3)
         ->flash();
   }

   public function edit(FlasherInterface $flasher): Response
   {
      $toastr = $flasher->create('toastr'); // You need to require php-flasher/flasher-toastr-symfony
      $toastr->addSuccess('This notification will be rendered using the toastr adapter');
   }

   public function update(ToastrFactory $toastr): Response
   {
      $toastr
         ->title('Oops...')
         ->warning('Something went wrong!')
         ->timeOut(3000)
         ->progressBar()
         ->flash();
   }
}
```
