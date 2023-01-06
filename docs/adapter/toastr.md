---
permalink: /docs/adapter/toastr/
title: Toastr
handler: toastr
---

## <i class="fa-duotone fa-list-radio"></i> Installation

For more information about Toastr.js click <a href="https://github.com/CodeSeven/toastr">here</a>.

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```shell
composer require php-flasher/flasher-toastr-laravel
```

<br />

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```shell
composer require php-flasher/flasher-toastr-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

{% assign id = '# toastr' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{}' %}
{% include example.html %}

```php
{{ id }}

namespace App\Controller;

class AppController
{
    public function save()
    {        
        toastr()->add{{ type | capitalize }}('{{ message }}');
    }
} 
```

---

## <i class="fa-duotone fa-list-radio"></i> Modifiers

> The methods described in the **[Usage](/docs/usage/)** section can also be used with the `toastr` adapter.

---

<p id="method-closeButton"><a href="#method-closeButton" class="anchor"><i class="fa-duotone fa-link"></i> closeButton</a></p>

When set to `true`, a close button is displayed in the toast notification.

```php
toastr()->closeButton(bool $closeButton = true);
```

{% assign id = '# toastr closeButton' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeButton": true}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->closeButton(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-closeClass"><a href="#method-closeClass" class="anchor"><i class="fa-duotone fa-link"></i> closeClass</a></p>

The class applied to the close button.

Default: `toast-close-button`

```php
toastr()->closeClass(string $closeClass);
```

{% assign id = '# toastr closeClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeClass": "toast-close-button"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->closeClass('toastr')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-closeDuration"><a href="#method-closeDuration" class="anchor"><i class="fa-duotone fa-link"></i> closeDuration</a></p>

The duration of the close animation in milliseconds. <br />

Default: `300` milliseconds

```php
toastr()->closeDuration(int $closeDuration);
```

{% assign id = '# toastr closeDuration' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeDuration": 3000}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->closeDuration(3000)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-closeEasing"><a href="#method-closeEasing" class="anchor"><i class="fa-duotone fa-link"></i> closeEasing</a></p>

The easing function used for the close animation. <br />

Default: `swing`

```php
toastr()->closeEasing(string $closeEasing);
```

{% assign id = '# toastr closeEasing' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeEasing": "swing"}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->closeEasing('swing')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-closeHtml"><a href="#method-closeHtml" class="anchor"><i class="fa-duotone fa-link"></i> closeHtml</a></p>

The HTML content of the close button.

Default: `<button type="button">&times;</button>`

```php
toastr()->closeHtml(string $closeHtml);
```

{% assign id = '# toastr closeHtml' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeButton": true, "closeHtml":"<button>⛑</button>"}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->closeButton(true)
    ->closeHtml('⛑')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-closeMethod"><a href="#method-closeMethod" class="anchor"><i class="fa-duotone fa-link"></i> closeMethod</a></p>

The method used to close the toast, either `fadeOut` or `slideOut`.

Default: `fadeOut`

```php
toastr()->closeMethod(string $closeMethod);
```

{% assign id = '# toastr closeMethod' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeMethod": "fadeOut"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->closeMethod('fadeOut')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-closeOnHover"><a href="#method-closeOnHover" class="anchor"><i class="fa-duotone fa-link"></i> closeOnHover</a></p>

When set to `true`, the toast will close when the user hovers over it.

Default: `false`

```php
toastr()->closeOnHover(bool $closeOnHover = true);
```

{% assign id = '# toastr closeOnHover' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"closeOnHover": true, "closeDuration": 10}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->closeOnHover(true)
    ->closeDuration(10)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-containerId"><a href="#method-containerId" class="anchor"><i class="fa-duotone fa-link"></i> containerId</a></p>

The ID of the element that should contain the toast notifications.

Default: `toast-container`

```php
toastr()->containerId(string $containerId);
```

{% assign id = '# toastr containerId' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"containerId": "toast-container"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->containerId('toast-container')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-debug"><a href="#method-debug" class="anchor"><i class="fa-duotone fa-link"></i> debug</a></p>

When set to `true`, enables debug mode which logs messages to the console.

Default: `false`

```php
toastr()->debug(bool $debug = true);
```

{% assign id = '# toastr debug' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"debug": true}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->debug(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-escapeHtml"><a href="#method-escapeHtml" class="anchor"><i class="fa-duotone fa-link"></i> escapeHtml</a></p>

When set to `true`, HTML in the toast message will be escaped.

Default: `false`

```php
toastr()->escapeHtml(bool $escapeHtml = true)
```

---

<p id="method-extendedTimeOut"><a href="#method-extendedTimeOut" class="anchor"><i class="fa-duotone fa-link"></i> extendedTimeOut</a></p>

The time in milliseconds to keep the toast visible after the user hovers over it.

Default: `1000` milliseconds

```php
toastr()->extendedTimeOut(int $extendedTimeOut)
```

---

<p id="method-hideDuration"><a href="#method-hideDuration" class="anchor"><i class="fa-duotone fa-link"></i> hideDuration</a></p>

The duration of the hide animation in milliseconds.

Default: `1000` milliseconds

```php
toastr()->hideDuration(int $hideDuration)
```

---

<p id="method-hideEasing"><a href="#method-hideEasing" class="anchor"><i class="fa-duotone fa-link"></i> hideEasing</a></p>

The easing function used for the hide animation.

Default: `swing`

```php
toastr()->hideEasing(string $hideEasing)
```

---

<p id="method-hideMethod"><a href="#method-hideMethod" class="anchor"><i class="fa-duotone fa-link"></i> hideMethod</a></p>

The method used to hide the toast, either `fadeOut` or `slideOut`.

Default: `fadeOut`

```php
toastr()->hideMethod(string $hideMethod)
```

---

<p id="method-iconClass"><a href="#method-iconClass" class="anchor"><i class="fa-duotone fa-link"></i> iconClass</a></p>

The default class applied to the toast icon.

Default: `toast-info`

```php
toastr()->iconClass(string $iconClass)
```

---

<p id="method-messageClass"><a href="#method-messageClass" class="anchor"><i class="fa-duotone fa-link"></i> messageClass</a></p>

The class applied to the toast message element.

Default: `toast-message`

```php
toastr()->messageClass(string $messageClass)
```

---

<p id="method-newestOnTop"><a href="#method-newestOnTop" class="anchor"><i class="fa-duotone fa-link"></i> newestOnTop</a></p>

When set to `true`, new toast notifications are displayed above older ones.

Default: `true`

```php
toastr()->newestOnTop(bool $newestOnTop = true)
```

---

<p id="method-onHidden"><a href="#method-onHidden" class="anchor"><i class="fa-duotone fa-link"></i> onHidden</a></p>

A callback function that is called when the toast is fully hidden.

```php
toastr()->onHidden(string $onHidden)
```

---

<p id="method-onShown"><a href="#method-onShown" class="anchor"><i class="fa-duotone fa-link"></i> onShown</a></p>

A callback function that is called when the toast is fully shown.

```php
toastr()->onShown(string $onShown)
```

---

<p id="method-positionClass"><a href="#method-positionClass" class="anchor"><i class="fa-duotone fa-link"></i> positionClass</a></p>

The class applied to the toast container that determines the position of the toast on the screen (e.g. `toast-top-right`, `toast-bottom-left`).

Default: `toast-top-right`

```php
toastr()->positionClass(string $positionClass)
```

---

<p id="method-preventDuplicates"><a href="#method-preventDuplicates" class="anchor"><i class="fa-duotone fa-link"></i> preventDuplicates</a></p>

When set to `true`, prevents the display of multiple toast notifications with the same message.

Default: `false`

```php
toastr()->preventDuplicates(bool $preventDuplicates = true)
```

---

<p id="method-progressBar"><a href="#method-progressBar" class="anchor"><i class="fa-duotone fa-link"></i> progressBar</a></p>

When set to `true`, displays a progress bar in the toast.

Default: `true`

```php
toastr()->progressBar(bool $progressBar = true)
```

---

<p id="method-progressClass"><a href="#method-progressClass" class="anchor"><i class="fa-duotone fa-link"></i> progressClass</a></p>

The class applied to the progress bar.

```php
toastr()->progressClass(string $progressClass)
```

Default: `toast-progress`

---

<p id="method-rtl"><a href="#method-rtl" class="anchor"><i class="fa-duotone fa-link"></i> rtl</a></p>

When set to `true`, displays the toast notifications in right-to-left mode.

Default: `false`

```php
toastr()->rtl(bool $rtl = true)
```

---

<p id="method-showDuration"><a href="#method-showDuration" class="anchor"><i class="fa-duotone fa-link"></i> showDuration</a></p>

The duration of the show animation in milliseconds.

Default: `300` milliseconds

```php
toastr()->showDuration(int $showDuration)
```

---

<p id="method-showEasing"><a href="#method-showEasing" class="anchor"><i class="fa-duotone fa-link"></i> showEasing</a></p>

The easing function used for the show animation, either `swing` or `linear` (built into jQuery).

Default: `swing`

```php
toastr()->showEasing(string $showEasing)
```

---

<p id="method-showMethod"><a href="#method-showMethod" class="anchor"><i class="fa-duotone fa-link"></i> showMethod</a></p>

The method used to show the toast, either `fadeIn` or `slideIn` or `show` (built into jQuery).

Default: `fadeIn`

```php
toastr()->showMethod(string $showMethod)
```

---

<p id="method-tapToDismiss"><a href="#method-tapToDismiss" class="anchor"><i class="fa-duotone fa-link"></i> tapToDismiss</a></p>

When set to `true`, the toast can be dismissed by tapping on it.

```php
toastr()->tapToDismiss(bool $tapToDismiss = true)
```

---

<p id="method-target"><a href="#method-target" class="anchor"><i class="fa-duotone fa-link"></i> target</a></p>

The element that should contain the toast notifications.

Default: `body`

```php
toastr()->target(string $target)
```

---

<p id="method-timeOut"><a href="#method-timeOut" class="anchor"><i class="fa-duotone fa-link"></i> timeOut</a></p>

The time in milliseconds to keep the toast visible before it is automatically closed. <br />
Set `timeOut` and `extendedTimeOut` to `0` to make it sticky

Default: `5000` milliseconds

```php
toastr()->timeOut(int $timeOut, bool $extendedTimeOut = null)
```

---

<p id="method-titleClass"><a href="#method-titleClass" class="anchor"><i class="fa-duotone fa-link"></i> titleClass</a></p>

The class applied to the toast title element.

```php
toastr()->titleClass(string $titleClass)
```

---

<p id="method-toastClass"><a href="#method-toastClass" class="anchor"><i class="fa-duotone fa-link"></i> toastClass</a></p>

The class applied to the toast container.

Default: `toast`

```php
toastr()->toastClass(string $toastClass)
```

---

<p id="method-persistent"><a href="#method-persistent" class="anchor"><i class="fa-duotone fa-link"></i> persistent</a></p>

Prevent from Auto Hiding.

```php
toastr()->persistent()
```
