---
permalink: /docs/framework/laravel/
title: A solid integration with the Laravel framework
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offers a solid integration <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel**, with supports from **Laravel**  **4.0** to **9**.

## <i class="fa-duotone fa-list-radio"></i> Requirements :

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 5.3
> <i class="fa-brands fa-laravel fa-2xl text-red-900 mr-1 ml-4"></i> **Laravel** >= 4.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation :

You can install the **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** Laravel package using composer.<br />
This is the base package for all Laravel adapters.

```shell
composer require php-flasher/flasher-laravel
```

Then add the service provider to **`config/app.php`**.

> in Laravel version 5.5 and beyond this step can be skipped if package auto-discovery is enabled.

```php
'providers' => [
    ...
    Flasher\Laravel\FlasherServiceProvider::class,
    ...
];
```

Optionally include the Facade in `config/app.php`.

```php
'Flasher' => Flasher\Laravel\Facade\Flasher::class,
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage:

Dispatch **`notifications`** from anywhere in your application

```php
namespace App\Http\Controllers;

use App\Post;
use App\Http\Requests\PostRequest;
use Flasher\Prime\FlasherInterface;

class PostController extends Controller
{
    public function store(PostRequest $request, FlasherInterface $flasher)
    {
        $post = Post::create($request->only(['title', 'body']));

        if ($post instanceof Post) {
            $flasher->addSuccess('Data has been saved successfully!');
            // if you like to use Facades : Flasher::addSuccess('Data has been saved successfully!');
            // or functions flash()->addSuccess('Data has been saved successfully!');

            return redirect()->route('posts.index');
        }

        $flasher->addError('An error has occurred please try again later.');

        return back();
    }
}
```
