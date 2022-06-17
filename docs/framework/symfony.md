---
permalink: /docs/framework/symfony/
title: A solid integration with the <i class="fa-brands fa-symfony text-black"></i> Symfony framework
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offer a solid integration with <i class="fa-brands fa-symfony text-black fa-xl"></i> **Symfony**, with support from **Symfony** version **2.0** to **6**

## <i class="fa-duotone fa-list-radio"></i> Symfony

By default <i class="fa-brands fa-symfony text-black fa-xl"></i> **Symfony** has a built-in <span class="text-indifo-600 font-bold">flashing</span> system.
you can check it in the <a href="https://symfony.com/doc/current/components/http_foundation/sessions.html#flash-messages" class="text-blue-600 font-bold">session</a> or the <a href="https://symfony.com/doc/current/controller.html#flash-messages" class="text-blue-600 font-bold">controller</a> sections of the documentation.

By design, flash messages are stored in the session, and they vanish from the session automatically as soon as you retrieve them.

```php
// if your controller extends the AbstractController class
$this->addFlash('success', 'Your changes were saved!');
```

And then somewhere in the view, you can use the `flashes()` method provided by the Twig global app variable:

{% raw %}
```twig
{# templates/base.html.twig #}

{% for message in app.flashes('success') %}
    <div class="fixed bg-green-600 text-white py-2 px-4 rounded-xl bottom-3 right-3 text-sm">
        {{ message }}
    </div>
{% endfor %}
```
{% endraw %}

This example uses <a href="https://tailwindcss.com/">tailwindcss</a> for styling, but you can use any CSS framework you want.

This approach is simple enough to add a flash message to your app. But :

1. You have to make changes to the view to use another CSS framework than `tailwindcss` like `bootstrap` or `material-ui`
2. But what if you want to use multiple CSS frameworks for different types of flash messages ?
3. How you can sort or limit the displayed flash messages ?
4. How about translations and rtl languages ?
5. Do you want to use some javascript library to display the flash messages ? (like [sweetalert](https://sweetalert2.github.io/) or [toastr](https://github.com/CodeSeven/toastr))

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** take this approach of storing the flash messages in the session and then retrieving it in the view to the next level.
And solve all the above issues in a simple and easy way.

## <i class="fa-duotone fa-list-radio"></i> Requirements

To use **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** in a Symfony application, you need :

## <i class="fa-duotone fa-list-radio"></i> Requirements

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 5.3
> <i class="fa-brands fa-symfony fa-2xl text-black mr-1 ml-4"></i> **Symfony** >= 2.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation

You can install **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** <i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony bundle using composer :

```shell
composer require php-flasher/flasher-symfony
```

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
