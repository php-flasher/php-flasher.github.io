---
permalink: /docs/framework/livewire/
title: A solid integration with Laravel Livewire
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offers a solid integration with Livewire v2.

## <i class="fa-duotone fa-list-radio"></i> Requirements

> <i class="fa-brands fa-php fa-2xl text-blue-900 mr-1 mb-1"></i> **PHP** >= 7.2
> <i class="fa-brands fa-laravel fa-2xl text-red-900 mr-1 ml-4"></i> **Laravel** >= 7.0

---

## <i class="fa-duotone fa-list-radio"></i> Installation

Please follow the same installation steps as for the [Laravel Installation](/docs/framework/laravel) package.

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Dispatch `notifications` from your components

```php
namespace App\Http\Livewire;

use Livewire\Component;

class MyComponent extends Component
{
    public function someAction()
    {
        toastr()->addSuccess('notification using toastr library'); // composer require php-flasher/flasher-toastr-laravel
        sweetalert()->addInfo('notification using sweetalert library'); // composer require php-flasher/flasher-sweetalert-laravel
    }

    public function render()
    {
        return view('livewire.my_component');
    }
```

---

## <i class="fa-duotone fa-list-radio"></i> Events

For sweetalert you can listen to **Confirmed**, **Denied** and **Dismissed** from withing you component

```php
namespace App\Http\Livewire;

use Livewire\Component;

class MyComponent extends Component
{
    protected $listeners = [
        'sweetalertEvent', // for all events from sweetalert
        'sweetalertConfirmed', // only when confirm button is clicked
        'sweetalertDenied' => 'onDeny', // if you want a custom method name
        'sweetalertDismissed',
    ];

    public function someAction()
    {
        sweetalert()->showDenyButton()->addInfo('confirm or deny action');
    }

    public function sweetalertEvent(array $payload)
    {
        toastr()->closeButton()->addInfo('Event received from sweetalert');
    }

    public function sweetalertConfirmed(array $payload)
    {
        toastr()->addSuccess('The "Confirm" button was clicked');
    }

    public function onDeny(array $payload)
    {
        toastr()->addError('The "Deny" button was clicked');
    }

    public function sweetalertDismissed(array $payload)
    {
        toastr()->addWarning('The "Cancel" button was clicked');
    }

    public function render()
    {
        return view('livewire.my_component');
    }
}
```

> If the name of the event and the method you're calling match, you can leave out the key. For example: `protected $listeners = ['sweetalertConfirmed'];` will call the `sweetalertConfirmed` method when the `sweetalertConfirmed` event is emitted.

### <i class="fa-duotone fa-list-radio"></i> event handlers context

Every listener method accept an **array $data** parameter which contain the following data :

```php
public function sweetAlertConfirmed(array $payload)
{
    $promise = $payload['promise'];
    $envelope = $payload['envelope'];
}
```

> **promise** : the resolved promise from **sweetalert**.

> **envelope** : the notification where the event happened.
