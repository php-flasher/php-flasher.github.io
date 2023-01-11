---
permalink: /laravel/
redirect_from: /docs/framework/laravel/
title: Laravel
handler: flasher
description: Easily add flash notification messages to your Laravel application with PHPFlasher. Follow our step-by-step guide to install and use the library in your project, and start engaging and informing your users with powerful flash messages.
---

## <i class="fa-duotone fa-list-radio"></i> **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** Laravel

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is a trusted and well-supported package 
that allows you to easily integrate flash notification messages into your <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> **Laravel** projects.

Its compatibility with **Laravel** versions **4.0** to **9** makes it a reliable choice for use in a wide range of Laravel projects, ensuring seamless integration and hassle-free functionality.

To use **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** in a **Laravel** application, you need :

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 5.3
> <i class="fa-brands fa-laravel fa-2xl text-red-900 mr-1 ml-4"></i> **Laravel** >= 4.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is modular and consists of multiple libraries, 
allowing users to install and use only the specific components they need for their project.

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer :

```shell
composer require php-flasher/flasher-laravel
```

---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** includes a default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>, but users can also install additional adapters to customize the appearance of notifications within their projects such as :

* **[Toastr](/library/toastr/)**
* **[Noty](/library/noty/)**
* **[Notyf](/library/notyf/)**
* **[Sweet Alert](/library/sweetalert/)**
* **[Pnotify](/library/pnotify/)**

---

{% include _usage.md %}

---

## <i class="fa-duotone fa-list-radio"></i> Configuration

As optional, if you want to modify the default configuration, you can publish the configuration file:

```shell
php artisan vendor:publish --tag=flasher-config
```

The configuration file will be located at `config/flasher.php` and will have the following content:

```php
<?php // config/flasher.php

return [

    /*
    |--------------------------------------------------------------------------
    | Default PHPFlasher library
    |--------------------------------------------------------------------------
    | This option controls the default library that will be used by PHPFlasher
    | to display notifications in your Laravel application. PHPFlasher supports
    | several libraries, including "flasher", "toastr", "noty", "notyf", 
    | "sweetalert" and "pnotify". 
    | 
    | The "flasher" library is used by default. If you want to use a different
    | library, you will need to install it using composer. For example, to use
    | the "toastr" library, run the following command:
    |     composer require php-flasher/flasher-toastr-laravel
    |
    | Here is a list of the supported libraries and the corresponding composer
    | commands to install them:
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
    | This option specifies the location of the main javascript file that is
    | required by PHPFlasher to display notifications in your Laravel application.
    |
    | By default, PHPFlasher uses a CDN to serve the latest version of the library.
    | However, you can also choose to download the library locally or install it
    | using npm. 
    |
    | To use the local version of the library, run the following command:
    |     php artisan vendor:publish --force --tag=flasher-assets
    |
    | This will copy the necessary assets to your application's public folder. 
    | You can then specify the local path to the javascript file in the 'local'
    | field of this option.
    */
    'root_script' => [
        'cdn' => 'https://cdn.jsdelivr.net/npm/@flasher/flasher@1.2.4/dist/flasher.min.js',
        'local' => '/vendor/flasher/flasher.min.js',
    ],

    /*
    |--------------------------------------------------------------------------
    | Whether to use CDN for PHPFlasher assets or not
    |--------------------------------------------------------------------------
    | This option controls whether PHPFlasher should use CDN links or local assets
    | for its javascript and CSS files. By default, PHPFlasher uses CDN links
    | to serve the latest version of the library. However, you can also choose
    | to use local assets by setting this option to 'false'.
    |
    | If you decide to use local assets, don't forget to publish the necessary
    | files to your application's public folder by running the following command:
    |     php artisan vendor:publish --force --tag=flasher-assets
    |
    | This will copy the necessary assets to your application's public folder. 
    */
    'use_cdn' => true,


    /*
    |--------------------------------------------------------------------------
    | Translate PHPFlasher messages
    |--------------------------------------------------------------------------
    | This option controls whether PHPFlasher should pass its messages to the Laravel's
    | translation service for localization. 
    |
    | By default, this option is set to 'true', which means that PHPFlasher will 
    | attempt to translate its messages using the translation service.
    |
    | If you don't want PHPFlasher to use the Laravel's translation service, you can
    | set this option to 'false'. In this case, PHPFlasher will use the messages
    | as-is, without attempting to translate them.
    */
    'auto_translate' => true,

    
    /*
    |--------------------------------------------------------------------------
    | Inject PHPFlasher in Response
    |--------------------------------------------------------------------------
    | This option controls whether PHPFlasher should automatically inject its
    | javascript and CSS files into the HTML response of your Laravel application.
    |
    | By default, this option is set to 'true', which means that PHPFlasher will
    | listen to the response of your application and automatically insert its
    | scripts and stylesheets into the HTML before the closing `</body>` tag.
    |
    | If you don't want PHPFlasher to automatically inject its scripts and stylesheets
    | into the response, you can set this option to 'false'. In this case, you will
    | need to manually include the necessary files in your application's layout.
    */
    'auto_render' => true,

    
    'flash_bag' => [
        /*
        |-----------------------------------------------------------------------
        | Enable flash bag
        |-----------------------------------------------------------------------
        | This option controls whether PHPFlasher should automatically convert
        | Laravel's flash messages to PHPFlasher notifications. This feature is
        | useful when you want to migrate from a legacy system or another
        | library that uses similar conventions for flash messages.
        |
        | When this option is set to 'true', PHPFlasher will check for flash
        | messages in the session and convert them to notifications using the
        | mapping specified in the 'mapping' option. When this option is set
        | to 'false', PHPFlasher will ignore flash messages in the session.
        */
        'enabled' => true,
        
        /*
        |-----------------------------------------------------------------------
        | Flash bag type mapping
        |-----------------------------------------------------------------------
        | This option allows you to map or convert session keys to PHPFlasher
        | notification types. On the left side are the PHPFlasher types.
        | On the right side are the Laravel session keys that you want to
        | convert to PHPFlasher types.
        |
        | For example, if you want to convert Laravel's 'danger' flash
        | messages to PHPFlasher's 'error' notifications, you can add
        | the following entry to the mapping:
        |     'error' => ['danger'],
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
    | in your Laravel application. By default, all notifications are displayed,
    | but you can use this option to limit the number of notifications or
    | filter them by type.
    |
    | For example, to limit the number of notifications to 5, you can set
    | the 'limit' field to 5:
    |     'limit' => 5,
    |
    | To filter the notifications by type, you can specify an array of
    | types that you want to display. For example, to only display
    | error notifications, you can set the 'types' field to ['error']:
    |     'types' => ['error'],
    |
    | You can also combine multiple criteria by specifying multiple fields.
    | For example, to display up to 5 error notifications, you can set
    | the 'limit' and 'types' fields like this:
    |     'limit' => 5,
    |     'types' => ['error'],
    */
    'filter_criteria' => [
        'limit' => 5, // Limit the number of notifications to display
    ],

];
```

---

## <i class="fa-duotone fa-list-radio"></i> Presets

You can create a preset for a custom notification that you want to reuse in multiple places by adding a presets entry in the configuration file.

> You can think of a preset as a pre-defined message that you can use in multiple locations. <br>

For example, you can create a preset named `entity_saved` in the configuration file and then use

{% assign id = '#/ laravel addPreset' %}
{% assign type = 'success' %}
{% assign message = 'Entity saved successfully' %}
{% assign title = 'Entity saved' %}
{% assign options = '{}' %}
{% include example.html %}

```php
<?php // config/flasher.php

return [
    'presets' => [
        'entity_saved' => [
            'type' => '{{ type }}',
            'message' => '{{ message }}',
            'title' => '{{ title }}',
        ],
    ],
];
```

To use the preset, you can call the `addPreset()` method and pass the name of the preset as the first argument:

```php
{{ id }}

class BookController
{
    public function save()
    {
        flash()->addPreset('entity_saved');
```

This is equivalent to:

```php
class BookController
{
    public function save()
    {
        flash()->add{{ type | capitalize }}('{{ message }}', '{{ title }}');
```

---

## <i class="fa-duotone fa-list-radio"></i> Dark Mode 

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** supports &nbsp; <i class="fa-duotone fa-circle-half-stroke text-indigo-900 mr-1 fa-lg"></i> **dark mode**, 
allowing you to seamlessly integrate it with the dark mode of your design.
By default, **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** uses the `prefers-color-scheme` CSS media query to automatically detect the user's dark mode preference. 
However, you can also choose to manually toggle dark mode using the `class strategy`.

{% assign id = '#/ flasher darkMode' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"darkMode": "class"}' %}
{% include example.html %}

```php
{{ id }}

// config/flasher.php

return [
    'themes' => [
        'flasher' => [
            'options' => [
                'darkMode' => 'class',
            ],
        ],
    ],
];
```

Now instead of relying on the `prefers-color-scheme` CSS media query, dark mode will be applied whenever **.dark** class is present earlier in the HTML tree.

To enable dark mode, add dark class to the `<html>` or `<body>` tag, as follows:

```html
<!-- Dark mode enabled -->
<html class="dark">
```

or

```html
<!-- Dark mode enabled -->
<body class="dark">
```

You can even customize the dark mode **selector** by setting `darkMode` to an array with your desired class name as the second item.

```php
return [
    'themes' => [
        'flasher' => [
            'options' => [
                'darkMode' => ['class', '[data-mode="dark"]'],
            ],
        ],
    ],
];
```

And now you can add the [data-mode="dark"] selector to the <html> or <body> tag, as follows:

```html
<!-- Dark mode enabled -->
<html data-mode="dark">
```

or 

```html
<!-- Dark mode enabled -->
<body data-mode="dark">
```

---

## <i class="fa-duotone fa-list-radio"></i> RTL support

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** makes it easy to incorporate <i class="fa-duotone fa-signs-post text-indigo-900 mr-1 fa-lg"></i> **right-to-left** languages like `Arabic` or `Hebrew`. 
it automatically detects the text direction and handles the necessary adjustments for you. 

Simply make sure the translation service is enabled and let **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** handle the rest.

{% assign id = '#/ phpflasher rtl' %}
{% assign type = 'success' %}
{% assign message = 'تمت العملية بنجاح.' %}
{% assign title = 'تهانينا' %}
{% assign options = '{"rtl": true}' %}
{% include example.html %}

```php
{{ id }}

flash()
    ->translate('ar')
    ->add{{ type | capitalize }}('Your request was processed successfully.', 'Congratulations!');
```

---

## <i class="fa-duotone fa-list-radio"></i> Translation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows you to translate your notification `messages`, `presets`, it comes with `Arabic`, `English` and `French` translations out of the box, but you can easily add your own translations.

For example, if you need to override the `English` translation strings for **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**,  you can create a language file at the following location:
**`/resources/lang/vendor/flasher/en/messages.php`**. 

In this file, you should **only** define the translation strings you want to override. Any translation strings that you don't override will still be loaded from **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**'s original language files.

Here is a list of the default translation keys for **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**:

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

{% assign id = '#/ laravel arabic translations' %}
{% assign successMessage = 'تم إنشاء الملف' %}
{% assign errorMessage = 'حدث خطأ أثناء إرسال طلبك.' %}
{% assign warningMessage = 'يجب إكمال جميع الحقول الإلزامية قبل إرسال النموذج' %}
{% assign infoMessage = 'سيتم تحديث هذه الصفحة في غضون 10 دقائق.' %}

<script type="text/javascript">
    messages["{{ id }}"] = [
        {
            handler: "flasher",
            type: "success",
            message: "{{ successMessage }}",
            title: "نجاح",
            options: {},
        },
        {
            handler: "flasher",
            type: "error",
            message: "{{ errorMessage }}",
            title: "خطأ",
            options: {},
        },
        {
            handler: "flasher",
            type: "warning",
            message: "{{ warningMessage }}",
            title: "تحذير",
            options: {},
        },
        {
            handler: "flasher",
            type: "info",
            message: "{{ infoMessage }}",
            title: "معلومة",
            options: {},
        },
        
    ];
</script>

```php
{{ id }}

use Illuminate\Support\Facades\App;

// Set the locale to be used for the translation
App::setLocale('ar');

// Translate the flash message using the PHPFlasher translation files
flash()->addSuccess('The resource was created');

flash()->addError('{{ errorMessage }}');
flash()->addWarning('{{ warningMessage }}');
flash()->addInfo('{{ infoMessage }}');
```

{% assign id = '#/ laravel french translations' %}
{% assign successMessage = "La ressource a été ajoutée" %}
{% assign errorMessage = "Une erreur s’est produite lors de l’envoi de votre demande." %}
{% assign warningMessage = "Vous devez remplir tous les champs obligatoires avant de soumettre le formulaire." %}
{% assign infoMessage = "Cette page sera mise à jour dans 10 minutes."%}

<script type="text/javascript">
    messages["{{ id }}"] = [
        {
            handler: "flasher",
            type: "success",
            message: "{{ successMessage }}",
            title: "Succès",
            options: {},
        },
        {
            handler: "flasher",
            type: "error",
            message: "{{ errorMessage }}",
            title: "Erreur",
            options: {},
        },
        {
            handler: "flasher",
            type: "warning",
            message: "{{ warningMessage }}",
            title: "Avertissement",
            options: {},
        },
        {
            handler: "flasher",
            type: "info",
            message: "{{ infoMessage }}",
            title: "Information",
            options: {},
        },
        
    ];
</script>

```php
{{ id }}

use Illuminate\Support\Facades\App;

// Set the locale to be used for the translation
App::setLocale('fr');

// Translate the flash message using the PHPFlasher translation files
flash()->addSuccess('The resource was created');

flash()->addError('{{ errorMessage }}');
flash()->addWarning('{{ warningMessage }}');
flash()->addInfo('{{ infoMessage }}');
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
