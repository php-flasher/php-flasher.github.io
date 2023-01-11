---
permalink: /livewire/
redirect_from: /docs/framework/livewire/
title: Livewire
description: Easily add flash notification messages to your Livewire application with PHPFlasher. Follow our step-by-step guide to install and use the library in your project, and start engaging and informing your users with powerful flash messages.
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

{% assign id = '#/ livewire' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

namespace App\Http\Livewire;

use Livewire\Component;

class MyComponent extends Component
{
    public function save()
    {
        flash()->add{{ type | capitalize }}('{{ message }}');
    }

    public function render()
    {
        return view('livewire.my_component');
    }
```

---

## <i class="fa-duotone fa-list-radio"></i> Events

For sweetalert you can listen to **Confirmed**, **Denied** and **Dismissed** from withing you component

<script type="text/javascript">
    messages["#/ livewire events"] = {
        handler: "sweetalert",
        type: "info",
        message: "confirm or deny action",
        options: { 
            showDenyButton: true,
            preConfirm: function() {
                toastr.success('sweetalert was confirmed');
            },
            preDeny: function() {
                toastr.error('sweetalert was denied');
            },
        },
    };
</script>

```php
#/ livewire events

namespace App\Http\Livewire;

use Livewire\Component;

class MyComponent extends Component
{
    protected $listeners = [
        'sweetalertConfirmed',
        'sweetalertDenied',
    ];

    public function delete()
    {
        sweetalert()
            ->showDenyButton()
            ->addInfo('confirm or deny action');
    }

    public function sweetalertConfirmed(array $payload)
    {
        toastr()->addSuccess('sweetalert was confirmed');
    }

    public function sweetalertDenied(array $payload)
    {
        toastr()->addError('sweetalert was denied');
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
public function sweetalertConfirmed(array $payload)
{
    $promise = $payload['promise'];
    $envelope = $payload['envelope'];
}
```

> **promise** : the resolved promise from **sweetalert**.

> **envelope** : the notification where the event happened.
