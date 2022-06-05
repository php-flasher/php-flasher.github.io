---
permalink: /docs/framework/symfony/
title: A solid integration with the <i class="fa-brands fa-symfony text-black"></i> Symfony framework
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offer a solid integration with <i class="fa-brands fa-symfony text-black fa-xl"></i> **Symfony**, with support from **Symfony** version **2.0** to **6**

## <i class="fa-duotone fa-list-radio"></i> Installation :

You can install **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** <i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony bundle using composer :

```shell
composer require php-flasher/flasher-symfony
```

## <i class="fa-duotone fa-list-radio"></i> Enable the bundle :

If you are using <i class="fa-brands fa-symfony text-black fa-xl"></i> **Symfony** version **4+** the bundle will be registered automatically in **`config/bundles.php`**, otherwise enable the bundle in the kernel:

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

## <i class="fa-duotone fa-list-radio"></i> Usage :

Dispatch your **`notifications`** from anywhere in you application

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

### Examples :

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** show its default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>. <br>
To use another adapter, use the **`create()`** method or its **Factory** service :

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
