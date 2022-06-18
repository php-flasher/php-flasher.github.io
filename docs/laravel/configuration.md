---
permalink: /docs/laravel/configuration/
title: Laravel Configuration
published_at: 2022-06-01
updated_at: 2022-06-01
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** laravel configuration file is located at `config/flasher.php`

```php 
<?php
// config/flasher.php

return [

    /*
    |--------------------------------------------------------------------------
    | Default PHPFlasher driver
    |--------------------------------------------------------------------------
    | This option controls the default driver that will be used by PHPFlasher.
    |
    | Supported drivers: "flasher", "toastr", "noty", "sweetalert", "pnotify"
    | 
    | Only "flasher" is supported by default, but you can install other options using composer.
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
    | This is the main javascript file that will be included in the page ony
    | when a notification is ready to be displayed, by defaut PHPFlasher
    | use a CDN with the latest version of the library. but you
    | could download it locally or install it with npm.
    */
    'root_script' => 'https://cdn.jsdelivr.net/npm/@flasher/flasher@1.1.0/dist/flasher.min.js',
    
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
     | to the Response after the App is done. If you disable this, you
     | have to add them in your template yourself.
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
];
```
