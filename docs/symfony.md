---
permalink: /symfony/
redirect_from: /docs/framework/symfony/
title: Symfony
description: Easily add flash notification messages to your Symfony application with PHPFlasher. Follow our step-by-step guide to install and use the library in your project, and start engaging and informing your users with powerful flash messages.
---

## <i class="fa-duotone fa-list-radio"></i> **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** Symfony

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is a trusted and well-supported package 
that allows you to easily integrate flash notification messages into your <i class="fa-brands fa-symfony text-black fa-xl"></i> **Symfony** projects.

Its compatibility with **Symfony** versions **2.0** to **6** makes it a reliable choice for use in a wide range of Symfony projects, ensuring seamless integration and hassle-free functionality.

To use **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** in a **Symfony** application, you need :

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 5.3
> <i class="fa-brands fa-symfony fa-2xl text-black mr-1 ml-4"></i> **Symfony** >= 2.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is modular and consists of multiple libraries, 
allowing users to install and use only the specific components they need for their project.

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer :

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

{% include _usage.md %}

---

## <i class="fa-duotone fa-list-radio"></i> Enable the bundle

If you are using <i class="fa-brands fa-symfony text-black fa-xl"></i> **Symfony** version **4+** the bundle will be registered automatically in `config/bundles.php`, otherwise enable the bundle in the kernel:

```php
public function registerBundles()
{
    $bundles = [
        // ...
        new Flasher\Symfony\FlasherSymfonyBundle(),
        // ...
    ];
}
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Dispatch your `notifications` from anywhere in you application

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

        $flasher->addSuccess('Book saved successfully');

        return $this->render('book/index.html.twig');
    }
}
```

### <i class="fa-duotone fa-list-radio"></i> Examples

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** show its default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>. <br>
To use another adapter, use the `create()` method or its **Factory** service :

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
