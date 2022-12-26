---
permalink: /docs/framework/laravel/
title: A solid integration with the Laravel framework
published_at: 2020-11-28
updated_at: 2022-05-08
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offers a solid integration <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel**, with supports from **Laravel**  **4.0** to **9**.

## <i class="fa-duotone fa-list-radio"></i> Introduction

By default <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel** has a built-in <span class="text-indifo-600 font-bold">flashing</span> system.
<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel** flash toast messages, can be found in the <a href="https://laravel.com/docs/session#flash-data" class="text-blue-600 font-bold">session</a> section of the documentation.

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

## <i class="fa-duotone fa-list-radio"></i> PHPFlasher Laravel

To use **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** in a Laravel application, you need :

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 5.3
> <i class="fa-brands fa-laravel fa-2xl text-red-900 mr-1 ml-4"></i> **Laravel** >= 4.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation

You can install the **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** Laravel package using composer.<br />
This is the base package for all Laravel adapters.

```shell
composer require php-flasher/flasher-laravel
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Dispatch `notifications` anywhere from your application

```php
<?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Requests\PostRequest;
use Flasher\Prime\FlasherInterface;

class PostController extends Controller
{
    public function store(PostRequest $request)
    {
        $post = Post::create($request->only(['title', 'body']));

        if ($post instanceof Post) {
            flash()->addSuccess('Data has been saved successfully!');

            return redirect()->route('posts.index');
        }

        flash()->addError('An error has occurred please try again later.');

        return back();
    }
}
```

---

## <i class="fa-duotone fa-list-radio"></i> Configuration

As optional if you want to modify the default configuration, you can publish the configuration file:

```shell
php artisan vendor:publish --tag=flasher-config
```

The Configuration file will be located at `config/flasher.php` and will have the following content :

```php
<?php // config/flasher.php

return [

    /*
    |--------------------------------------------------------------------------
    | Default PHPFlasher library
    |--------------------------------------------------------------------------
    | This option controls the default library that will be used by PHPFlasher.
    |
    | Supported libraries: "flasher", "toastr", "noty", "notyf", "sweetalert", "pnotify"
    | 
    | The "flasher" library is used by default, other libraries must be installed using composer.
    |
    | "toastr"     : composer require php-flasher/flasher-toastr-laravel
    | "noty"       : composer require php-flasher/flasher-noty-laravel
    | "notyf"      : composer require php-flasher/flasher-notyf-laravel
    | "sweetalert" : composer require php-flasher/flasher-sweetalert-laravel
    | "pnotify"    : composer require php-flasher/flasher-pnotify-laravel
    */
    'default' => 'flasher',
    
    /*
    |--------------------------------------------------------------------------
    | Main PHPFlasher javascript file 
    |--------------------------------------------------------------------------
    | This is the main javascript file that will be included in the page
    | when a notification is ready to be displayed, by defaut PHPFlasher
    | use a CDN with the latest version of the library. but you
    | could download it locally or install it with npm.
    |
    | To use the local version of the library, run the following command:
    |     php artisan vendor:publish --force --tag=flasher-assets
    */
    'root_script' => [
        'cdn' => 'https://cdn.jsdelivr.net/npm/@flasher/flasher@1.2.4/dist/flasher.min.js',
        'local' => '/vendor/flasher/flasher.min.js',
    ],

    /*
    |--------------------------------------------------------------------------
    | Whether to use CDN for PHPFlasher assets or not
    |--------------------------------------------------------------------------
    | By default PHPFlasher use CDN links for its assets, to use local version of
    | the assets set use_cdn to false.
    |
    | Don't forget to publish your assets with:
    |     php artisan vendor:publish --force --tag=flasher-assets
    */
    'use_cdn' => true,

     /*
     |--------------------------------------------------------------------------
     | Translate PHPFlasher messages
     |--------------------------------------------------------------------------
     | By default PHPFlasher messages are passed to Laravel translator service
     | to disable this behavior, set this option to `false`.
     */
    'auto_translate' => true,
    
     /*
     |--------------------------------------------------------------------------
     | Inject PHPFlasher in Response
     |--------------------------------------------------------------------------
     | PHPFlasher scripts are added automatically before </body>, by listening
     | to the Response after the App is done.
     */
    'auto_render' => true,
    
    'flash_bag' => [
        /*
        |-----------------------------------------------------------------------
        | Enable flash bag
        |-----------------------------------------------------------------------
        | This option allows you to automatically convert Laravel's flash
        | messages to PHPFlasher notifications. This is useful when
        | you want to migrate from a Legacy system or another
        | library similar to PHPFlasher.
        */
        'enabled' => true,
        
        /*
        |-----------------------------------------------------------------------
        | Flash bag type mapping
        |-----------------------------------------------------------------------
        | This option allows you to map or convert session keys to PHPFlasher
        | notification types. on the right side are the PHPFlasher types
        | On the left side are the Laravel session keys that you
        | want to convert to PHPFlasher types.
        */
        'mapping' => [
            'success' => ['success'],
            'error' => ['error', 'danger'],
            'warning' => ['warning', 'alarm'],
            'info' => ['info', 'notice', 'alert'],
        ],
    ],
    
    /*
    |-----------------------------------------------------------------------
    | Global Filter Criteria
    |-----------------------------------------------------------------------
    | This option allows you to filter the notifications that are displayed
    | by default all notifications are displayed, but you can filter
    | them, for example to only display errors.
    */
    'filter_criteria' => [
        'limit' => 5, // Limit the number of notifications to display
    ],
];
```

---

## <i class="fa-duotone fa-list-radio"></i> Presets

Let's say you have a custom notification that you want to use in multiple places. 
You can create a preset for it and then use it in multiple places.

> You can think of a preset as a pre-defined message that you can use in multiple places. <br>

Add a `presets` entry in the configuration file, for example `entity_saved` is the name of the preset

```php
<?php // config/flasher.php

return [
    /*
    |--------------------------------------------------------------------------
    | Default PHPFlasher library
    |--------------------------------------------------------------------------
    | This option controls the default library that will be used by PHPFlasher.
    |
    | Supported libraries: "flasher", "toastr", "noty", "notyf", "sweetalert", "pnotify"
    | 
    | The "flasher" library is used by default, other libraries must be installed using composer.
    |
    | "toastr"     : composer require php-flasher/flasher-toastr-laravel
    | "noty"       : composer require php-flasher/flasher-noty-laravel
    | "notyf"      : composer require php-flasher/flasher-notyf-laravel
    | "sweetalert" : composer require php-flasher/flasher-sweetalert-laravel
    | "pnotify"    : composer require php-flasher/flasher-pnotify-laravel
    */
    'default' => 'flasher',
    
    'presets' => [
        'entity_saved' => [
            'type' => 'success',
            'message' => 'Entity saved successfully',
            'title' => 'Entity saved',
        ],
    ],
];
```

And then use it in your controller like the following:

```php
<?php

class BookController
{
    public function save()
    {
        flash()->addPreset('entity_saved');
```

This is equivalent to:

```php
<?php

class BookController
{
    public function save()
    {
        flash()->addSuccess('Entity saved successfully', 'Entity saved');
```

---

## <i class="fa-duotone fa-list-radio"></i> Translation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows you to translate your notification messages, presets and automatically detect RTL support.

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** came with Arabic, English and French translations, but you can add your own translations easily.

For example, if you need to override the English translation strings for **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**,  you should place a language file at the following location:
**`/resources/lang/vendor/flasher/en/messages.php`**. 

Within this file, you should only define the translation strings you wish to override.

Any translation strings you don't override will still be loaded from the **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**'s original language files.

Here is the list of the default translation keys for **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**:

```php
<?php // /resources/lang/vendor/flasher/ar/messages.php

return [
        'success' => 'نجاح',
        'error' => 'خطأ',
        'warning' => 'تحذير',
        'info' => 'معلومة',

        'The resource was created' => 'تم إنشاء :resource',
        'The resource was updated' => 'تم تعديل :resource',
        'The resource was saved' => 'تم حفظ :resource',
        'The resource was deleted' => 'تم حذف :resource',

        'resource' => 'الملف',
];
```

```php
<?php // /resources/lang/vendor/flasher/en/messages.php

return [
    'success' => 'Success',
    'error' => 'Error',
    'warning' => 'Warning',
    'info' => 'Info',

    'The resource was created' => 'The :resource was created',
    'The resource was updated' => 'The :resource was updated',
    'The resource was saved' => 'The :resource was saved',
    'The resource was deleted' => 'The :resource was deleted',

    'resource' => 'resource',
];
```

```php
<?php // /resources/lang/vendor/flasher/fr/messages.php

return [
        'success' => 'Succès',
        'error' => 'Erreur',
        'warning' => 'Avertissement',
        'info' => 'Information',

        'The resource was created' => 'La ressource :resource a été ajoutée',
        'The resource was updated' => 'La ressource :resource a été mise à jour',
        'The resource was saved' => 'La ressource :resource a été enregistrée',
        'The resource was deleted' => 'La ressource :resource a été supprimée',

        'resource' => '',
];
```

---

## <i class="fa-duotone fa-list-radio"></i> cdn - local - npm

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** use **cdn** link to include all of its assets.

To pull in the **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** via CDN, grab the latest version from [jsdelivr](https://www.jsdelivr.com/package/npm/@flasher/flasher)

<span>
    <a href="https://cdn.jsdelivr.net/npm/@flasher/flasher/dist/flasher.min.js" target="_blank">
        <img src="https://img.shields.io/badge/cdn-jsdelivr-blue.svg?style=flat-square" alt="cdn-jsdelivr" />
    </a>
    <a href="https://cdn.jsdelivr.net/npm/@flasher/flasher/dist/flasher.min.js">
        <img src="https://img.badgesize.io/php-flasher/flasher-js/main/packages/flasher/dist/flasher.min.js.svg?compression=brotli&label=flasher.min.js"/>
    </a>
</span>

```html
<script defer src="https://cdn.jsdelivr.net/npm/@flasher/flasher@1.2.4/dist/flasher.min.js"></script>
```

<br/>

But you can use **local** version of the assets or install them using **npm**.

---

To use the **local** version of the assets, first publish the assets to the public folder by running:

```shell
php artisan vendor:publish --force --tag=flasher-assets
```

The published assets will be copied to the `/public/vendor/flasher` folder.

Then update the configuration file at `config/flasher.php`, set **`use_cdn`** to false

```php
<?php // config/flasher.php

return [
    /*
    |--------------------------------------------------------------------------
    | Whether to use CDN for PHPFlasher assets or not
    |--------------------------------------------------------------------------
    | By default PHPFlasher use CDN links for its assets, to use local version of
    | the assets set use_cdn to false.
    |
    | Don't forget to publish your assets with:
    |     php artisan vendor:publish --force --tag=flasher-assets
    */
    'use_cdn' => false,
];
```

---

To install **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** using npm, run the following command:

```shell
npm i @flasher/flasher
```

<br/>

Then attach `flasher` to the `window` object. Add the following lines at the end of your application's `/resources/js/bootstrap.js` file:

```javascript
import flasher from "@flasher/flasher";
window.flasher = flasher;
```

Then update the configuration file:

```php
<?php // /config/flasher.php

return [
    /*
    |--------------------------------------------------------------------------
    | Main PHPFlasher javascript file 
    |--------------------------------------------------------------------------
    | This is the main javascript file that will be included in the page
    | when a notification is ready to be displayed, by defaut PHPFlasher
    | use a CDN with the latest version of the library. but you
    | could download it locally or install it with npm.
    |
    | To use the local version of the library, run the following command:
    |     php artisan vendor:publish --force --tag=flasher-assets
    */
    'root_script' => [], // set this to empty array
];
```
---

## <i class="fa-duotone fa-list-radio"></i> Laravel version < 5.5

> in Laravel version 5.5 and beyond this step can be skipped if package auto-discovery is enabled.

Add the service provider to `config/app.php`.

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
