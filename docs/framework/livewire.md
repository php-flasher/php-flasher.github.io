---
permalink: /docs/framework/livewire/
title: A solid integration with Laravel Livewire
published_at: 2021-08-29
updated_at: 2021-08-29
---

PHP Flasher offers a solid integration with the Laravel Livewire v2.

## installation :

you can install the package using composer

<pre class="snippet"><code>composer require php-flasher/flasher-livewire</code></pre>

Then add the service provider to `config/app.php`. this step can be skipped if package auto-discovery is enabled.

```php
'providers' => [
    ...
    Flasher\Livewire\FlasherLivewireServiceProvider::class,
    ...
];
```

## Usage:

1. add  `@flasher_livewire_render` at the bottom of your blade view

    ```twig
    <!doctype html>
    <html>
        <head>
            <title>PHP Flasher</title>
            @livewireStyles
        </head>
        <body>

            @flasher_render <!-- this render all flasher notifications. -->
            @flasher_livewire_render <!-- this render livewire notifications only. -->
            @livewireScripts
        </body>
    </html>
```

2. dispatch `notifications` from your components
    ```php
    namespace App\Http\Livewire;

    use Livewire\Component;

    class MyComponent extends Component
    {
        public function someAction()
        {
            toastr()->livewire()->addSuccess('notification using toastr library');
            sweetAlert()->livewire()->addInfo('notification using sweetalert library');
        }

        public function render()
        {
            return view('livewire.my_component');
        }
    ```
