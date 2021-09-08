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

## Events:

For sweet alert you can listen to **Confirmed**, **Denied** and **Dismissed** from withing you component

```php
namespace App\Http\Livewire;

use Livewire\Component;

class MyComponent extends Component
{
    protected $listeners = [
        'sweetAlertEvent', // for all events from sweet alert
        'sweetAlertConfirmed', // only when confirm button is clicked
        'sweetAlertDenied' => 'onDeny', // if you want a custom method name
        'sweetAlertDismissed',
    ];

    public function someAction()
    {
        sweetAlert()
            ->livewire([
                'context data' => 'Younes KHOUZA', // this will be available inside handlers method
            ])
            ->showDenyButton()
            ->addInfo('confirm or deny action');
    }

    public function sweetAlertEvent(array $data)
    {
        toastr()
            ->livewire()
            ->closeButton()
            ->addInfo('Event received from sweet alert');
    }

    public function sweetAlertConfirmed(array $data)
    {
        toastr()
            ->livewire()
            ->addSuccess('The "Confirm" button was clicked');
    }

    public function onDeny(array $data)
    {
        toastr()
            ->livewire()
            ->addError('The "Deny" button was clicked');
    }

    public function sweetAlertDismissed(array $data)
    {
        toastr()
            ->livewire()
            ->addWarning('The "Cancel" button was clicked');
    }

    public function render()
    {
        return view('livewire.my_component');
    }
}
```

> If the name of the event and the method you're calling match, you can leave out the key. For example: `protected $listeners = ['sweetAlertConfirmed'];` will call the `sweetAlertConfirmed` method when the `sweetAlertConfirmed` event is emitted.

### event handlers context :

Every listener method accept an `array $data` parameter which contain the following data :

```php
    public function sweetAlertConfirmed(array $data)
    {
        $context = $data['context'];
        $promise = $data['promise'];
        $response = $data['response'];
    }
```

> **context** : the same context data passed to `->livewire(['context' => 'value'])` .

> **promise** : the resolved promise from **sweet alert**.

> **response** : the notification where the event happened.
