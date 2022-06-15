---
permalink: /docs/framework/laravel/
title: A solid integration with the Laravel framework
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offers a solid integration <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel**, with supports from **Laravel**  **4.0** to **9**.

## <i class="fa-duotone fa-list-radio"></i> Laravel

By default <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel** has a built-in <span class="text-indifo-600 font-bold">flashing</span> system.
you can check it in the <a href="https://laravel.com/docs/9.x/session#flash-data" class="text-blue-600 font-bold">session</a> section of the documentation.

Data stored in the session using this method will be available immediately and during the subsequent HTTP request. After the subsequent HTTP request, the flashed data will be deleted.

```php 
$request->session()->flash('success', 'Task was successful!');
```

And then somewhere in the view, you can use the `session()->get('success')` method to get the data.

{% raw %}
```twig
@if (session()->has('success'))
    <div class="fixed bg-green-600 text-white py-2 px-4 rounded-xl bottom-3 right-3 text-sm">
        <p>{{ session()->get('success') }}</p>
    </div>
@endif
```
{% endraw %}

This example uses <a href="https://tailwindcss.com/">tailwindcss</a> for styling, but you can use any CSS framework you want.

This approach is simple enough to add a flash message to your app. But :

1. You can store only on flash type at a time. like `success`, `error`, `info`, `warning`
2. You have to make changes to the view to use another CSS framework than `tailwindcss` like `bootstrap` or `material-ui`
3. But what if you want to use multiple CSS frameworks for different types of flash messages ?
4. How you can sort or limit the displayed flash messages ?
5. How about translations and rtl languages ?
6. Do you want to use some javascript library to display the flash messages ? (like [sweetalert](https://sweetalert2.github.io/) or [toastr](https://github.com/CodeSeven/toastr))

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** take this approach of storing the flash messages in the session and then retrieving it in the view to the next level.
And solve all the above issues in a simple and easy way.

## <i class="fa-duotone fa-list-radio"></i> Requirements

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 5.3
> <i class="fa-brands fa-laravel fa-2xl text-red-900 mr-1 ml-4"></i> **Laravel** >= 4.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation

You can install the **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** Laravel package using composer.<br />
This is the base package for all Laravel adapters.

```shell
composer require php-flasher/flasher-laravel
```

Then add the service provider to `config/app.php`.

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

## <i class="fa-duotone fa-list-radio"></i> Usage

Dispatch `notifications` from anywhere in your application

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
