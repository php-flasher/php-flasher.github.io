---
permalink: /docs/installation/
title: Installation
description: Install only the specific components you need for your project with PHPFlasher, a modular PHP library for displaying flash notification messages. Simply include the library in your composer.json file and run the composer install command to get started.
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is modular and consists of multiple libraries, 
allowing users to install and use only the specific components they need for their project.

## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer :

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```shell
composer require php-flasher/flasher-laravel
```

<br />

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```shell
composer require php-flasher/flasher-symfony
```

---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** includes a default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>, but users can also install additional adapters to customize the appearance of notifications within their projects such as :

* **[Toastr](/docs/adapter/toastr/)**
* **[Noty](/docs/adapter/noty/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Sweet Alert](/docs/adapter/sweetalert/)**
* **[Pnotify](/docs/adapter/pnotify/)**

---

## <i class="fa-duotone fa-list-radio"></i> General Usage

To display a notification message, you can either use the `flash()` helper method or obtain an instance of `flasher` from the service container. 
Then, before returning a view or redirecting, call the `addSuccess()` method and pass in the desired message to be displayed.

{% assign id = '# PHPFlasher' %}
{% assign type = 'success' %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

class BookController
{
    public function saveBook()
    {
        // ...

        flash('{{ message }}');
        
        flash()->addSuccess('{{ site.data.messages["success"] | sample }}');
        
        flash()
            ->success('{{ site.data.messages["success"] | sample }}')
            ->flash();
            
        app('flasher')->addSuccess('{{ site.data.messages["success"] | sample }}');

        // ... redirect or render the view
    }
    
    /**
     * if you prefer to use dependency injection 
     */
    public function register(FlasherInterface $flasher)
    {
        // ...
        
        $flasher->addSuccess('{{ site.data.messages["success"] | sample }}');
        
        // ... redirect or render the view
    }
}
```

<br />

It's important to choose a message that is clear and concise, and that accurately reflects the outcome of the operation. <br />
In this case, `"Book has been created successfully!"` is already a good message,
but you may want to tailor it to fit the specific context and language of your application.

> Using this package is actually pretty easy. Adding notifications to your application actually require only one line of code.

{% assign id = '# usage addSuccess' %}
{% assign type = 'success' %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

flash()->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# usage addError' %}
{% assign type = 'error' %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

flash()->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# usage addWarning' %}
{% assign type = 'warning' %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

flash()->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# usage addInfo' %}
{% assign type = 'info' %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

flash()->add{{ type | capitalize }}('{{ message }}');
```

---

These four methods (`addSuccess`, `addError`, `addWarning`, `addInfo`) are simply convenience shortcuts for the `addFlash` method, 
allowing you to specify the `type` and `message` in a single method call rather than having to pass both as separate arguments to the `addFlash` method. 

```php
flash()->addFlash(string $type, string $message, string $title = null, array $options = [])
```

{% assign id = '# usage addFlash' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

flash()->addFlash('{{ type }}', '{{ message }}');
```

| param      | description                                                                                                                                                                                                                                                                                                         |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$type`    | Notification type : <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc |
| `$message` | The body of the message you want to deliver to your user. This may contain HTML. If you add links, be sure to add the appropriate classes for the framework you are using.                                                                                                                                          |
| `$title`   | The notification title, Can also include HTML                                                                                                                                                                                                                                                                       |
| `$options` | Custom options for javascript libraries (toastr, noty, notyf ...etc)                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                       |


--- 

## <i class="fa-duotone fa-list-radio"></i> Modifiers

<p id="method-options"><a href="#method-options" class="anchor"><i class="fa-duotone fa-link"></i> options</a></p>

You can specify **custom options** for the flash messages when using a JavaScript library like `toastr`, `noty`, or `notyf`. <br /><br />
The `options()` method allows you to set multiple options at once by passing an array of `key-value` pairs, 
while the `option()` method allows you to set a single option by specifying its name and value as separate arguments. <br /><br />
The optional `$merge` argument for the `options()` method can be used to specify whether the new options should be merged with any existing options, 
or whether they should overwrite them.

```php
flash()->options(array $options, bool $merge = true);
```

> Refer to the documentation for your chosen JavaScript library to see which options are available and how they should be formatted.

{% assign id = '# usage options' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"timeout": 3000, "position": "top-center"}' %}
{% include example.html %}

```php
{{ id }}

flash()
    ->options([
        'timeout' => 3000, // 3 seconds
        'position' => 'top-center',
    ])
    ->add{{ type | capitalize }}('{{ message }}');
```

| param      | description                                                                          |
|------------|--------------------------------------------------------------------------------------|
| `$options` | Custom options to be passed to the javascript libraries (toastr, noty, notyf ...etc) |
| `$merge`   | Merge options if you call the options method multiple times                          |

---

<p id="method-option"><a href="#method-option" class="anchor"><i class="fa-duotone fa-link"></i> option</a></p>

Set a single option by specifying its name and value as separate arguments.

```php
flash()->option(string $option, mixed $value);
```

{% assign id = '# usage option' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"timeout": 3000, "position": "top-center"}' %}
{% include example.html %}

```php
{{ id }}

flash()
    ->option('position', 'top-center')
    ->option('timeout', 3000)
    ->add{{ type | capitalize }}('{{ message }}');
```

| param     | description  |
|-----------|--------------|
| `$option` | Option key   |
| `$value`  | Option value |

---

<p id="method-priority"><a href="#method-priority" class="anchor"><i class="fa-duotone fa-link"></i> priority</a></p>

```php
flash()->priority(int $priority);
```

{% assign id = '# usage priority' %}
{% assign successMessage = site.data.messages['success'] | sample | prepend: 'Priority 3 → ' %}
{% assign errorMessage = site.data.messages['error'] | sample | prepend: 'Priority 1 → ' %}
{% assign warningMessage = site.data.messages['warning'] | sample | prepend: 'Priority 4 → ' %}
{% assign infoMessage = site.data.messages['info'] | sample | prepend: 'Priority 2 → ' %}

<script type="text/javascript">
    messages["{{ id }}"] = [
        {
            handler: "flasher",
            type: "warning",
            message: "{{ warningMessage }}",
            options: {},
        },
        {
            handler: "flasher",
            type: "success",
            message: "{{ successMessage }}",
            options: {},
        },
        {
            handler: "flasher",
            type: "info",
            message: "{{ infoMessage }}",
            options: {},
        },
        {
            handler: "flasher",
            type: "error",
            message: "{{ errorMessage }}",
            options: {},
        },
    ];
</script>

```php
{{ id }}

flash()
    ->priority(3)
    ->addSuccess('{{ successMessage }}');

flash()
    ->priority(1)
    ->addError('{{ errorMessage }}');

flash()
    ->priority(4)
    ->addWarning('{{ warningMessage }}');

flash()
    ->priority(2)
    ->addInfo('{{ infoMessage }}');
```

| param       | description                                                                                |
|-------------|--------------------------------------------------------------------------------------------|
| `$priority` | The priority of the notification, the higher the priority, the sooner it will be displayed |

---

<p id="method-hops"><a href="#method-hops" class="anchor"><i class="fa-duotone fa-link"></i> hops</a></p>

Sometimes you may want a flash message to persist for longer than a single request. As an example, with a multi-page form, you may want to store messages until all pages have been filled.

{% assign id = '# usage hops' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
flash()->hops(int $hops);
```

```php
flash()
    ->hops(2)
    ->add{{ type | capitalize }}('{{ message }}');
```

| param   | description                                                   |
|---------|---------------------------------------------------------------|
| `$hops` | indicate how many requests the flash message will persist for |

---

<p id="method-keep"><a href="#method-keep" class="anchor"><i class="fa-duotone fa-link"></i> keep</a></p>

```php
flash()->keep();
```

{% assign id = '# usage keep' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
flash()
    ->keep()
    ->add{{ type | capitalize }}('{{ message }}');
```

| description                                        |
|----------------------------------------------------|
| Keep the notification in the next session requests |

---

<p id="method-delay"><a href="#method-delay" class="anchor"><i class="fa-duotone fa-link"></i> delay</a></p>

```php
flash()->delay(int $delay);
```

{% assign id = '# usage delay' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
flash()
    ->delay(2)
    ->add{{ type | capitalize }}('{{ message }}');
```

| param    | description                                                                        |
|----------|------------------------------------------------------------------------------------|
| `$delay` | The number of requests in which the message will be waiting before being displayed |

---

<p id="method-now"><a href="#method-now" class="anchor"><i class="fa-duotone fa-link"></i> now</a></p>

```php
flash()->now();
```

{% assign id = '# usage now' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
flash()
    ->now()
    ->add{{ type | capitalize }}('{{ message }}');
```

| description                     |
|---------------------------------|
| Shortcut for flash()->delay(0) |

---

<p id="method-translate"><a href="#method-translate" class="anchor"><i class="fa-duotone fa-link"></i> translate</a></p>

```php
flash()->translate(string $locale = null);
```

{% assign id = '# usage translate' %}
{% assign type = 'success' %}
{% assign message = 'تمت العملية بنجاح.' %}
{% assign title = 'تهانينا' %}
{% assign options = '{"rtl": true, "position": "top-right"}' %}
{% include example.html %}

```php
{{ id }}

flash()
    ->translate('ar')
    ->add{{ type | capitalize }}('Your request was processed successfully.', 'Congratulations!');
```

{% assign id = '# usage translate with position' %}
{% assign type = 'success' %}
{% assign message = 'تمت العملية بنجاح.' %}
{% assign title = 'تهانينا' %}
{% assign options = '{"rtl": true, "position": "top-left"}' %}
{% include example.html %}

```php
{{ id }}

flash()
    ->translate('ar')
    ->option('position', 'top-left')
    ->add{{ type | capitalize }}('Your request was processed successfully.', 'Congratulations!');
```

| param     | description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `$locale` | The locale to be used for the translation or null to use the default locale |

---

<p id="method-preset"><a href="#method-preset" class="anchor"><i class="fa-duotone fa-link"></i> preset</a></p>

```php
$builder = flash()->preset(string $preset, bool $flash = true);
```

| param     | description                                                           |
|-----------|-----------------------------------------------------------------------|
| `$preset` | The preset to be used for the notification                            |
| `$flash`  | If true, the notification will be flashed after the preset is applied |

---

<p id="method-context"><a href="#method-context" class="anchor"><i class="fa-duotone fa-link"></i> context</a></p>

```php
$builder = flash()->context(array $context = []);
```

| param      | description                                    |
|------------|------------------------------------------------|
| `$context` | Custom data to be available in javascript side |

---

<p id="method-withStamp"><a href="#method-withStamp" class="anchor"><i class="fa-duotone fa-link"></i> withStamp</a></p>

```php
$builder = flash()->withStamp(StampInterface $stamp);
```

| param    | description                                |
|----------|--------------------------------------------|
| `$stamp` | Attach a stamp to the current notification |

---

<p id="method-with"><a href="#method-with" class="anchor"><i class="fa-duotone fa-link"></i> with</a></p>

```php
$builder = flash()->with(array $stamps);
```

| param     | description                                                         |
|-----------|---------------------------------------------------------------------|
| `$stamps` | Attach multiple stamps at the same time to the current notification |

---

<p id="method-handler"><a href="#method-handler" class="anchor"><i class="fa-duotone fa-link"></i> handler</a></p>

```php
$builder = flash()->handler(string $handler);
```

| param      | description                                                                                             |
|------------|---------------------------------------------------------------------------------------------------------|
| `$handler` | The handler name it will be used to choose to correct js adapter to be used to display the notification |

---

<p id="method-getEnvelope"><a href="#method-getEnvelope" class="anchor"><i class="fa-duotone fa-link"></i> getEnvelope</a></p>

```php
$envelope = flash()->getEnvelope();
```

| param       | description                                                             |
|-------------|-------------------------------------------------------------------------|
| `$envelope` | Get the current notification with all stamps and options attached to it |

---

<p id="method-flash"><a href="#method-flash" class="anchor"><i class="fa-duotone fa-link"></i> flash</a></p>

> <span class="text-orange-900">Call the **flash** method at the end when your notification is ready to be displayed</span>


```php
$envelope = flash()->flash(array $stamps = []);
```

| param       | description                                                         |
|-------------|---------------------------------------------------------------------|
| `$stamps`   | Attach multiple stamps at the same time to the current notification |
| `$envelope` | The current notification with all stamps and options attached to it |
