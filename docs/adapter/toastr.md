---
permalink: /docs/adapter/toastr/
title: Toastr
handler: toastr
description: Easily add customizable, stylish notification messages to your web projects with Toastr, a popular JavaScript library. With a focus on simplicity and flexibility, Toastr is easy to install and use, making it a great choice for any project that wants to engage and inform users.
---

## <i class="fa-duotone fa-list-radio"></i> Installation

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

For more information on Toastr options and usage, please refer to the original documentation at [https://github.com/CodeSeven/toastr](https://github.com/CodeSeven/toastr)

---

> The methods described in the **[Usage](/docs/usage/)** section can also be used with the `toastr` adapter.

---

<p id="method-persistent"><a href="#method-persistent" class="anchor"><i class="fa-duotone fa-link"></i> persistent</a></p>

Prevent from Auto Hiding.

```php
toastr()->persistent();
```

{% assign id = '# toastr persistent' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"timeOut": 0, "extendedTimeOut": 0, "closeButton": true}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->persistent()
    ->closeButton()
    ->add{{ type | capitalize }}('{{ message }}');
```

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

Default ⇒ `toast-close-button`

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

Default ⇒ `300` milliseconds

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

Default ⇒ `swing`

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

Default ⇒ `<button type="button">&times;</button>`

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

Default ⇒ `fadeOut`

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

Default ⇒ `false`

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

Default ⇒ `toast-container`

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

Default ⇒ `false`

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

Default ⇒ `false`

```php
toastr()->escapeHtml(bool $escapeHtml = true);
```

{% assign id = '# toastr escapeHtml false' %}
{% assign type = 'error' %}
{% assign message = '<strong>We’re sorry</strong>, but an error occurred.' %}
{% assign options = '{"escapeHtml": false}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->escapeHtml(false)
    ->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# toastr escapeHtml true' %}
{% assign options = '{"escapeHtml": true}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->escapeHtml(true)
    ->add{{ type | capitalize }}('{{ message }}');
```



---

<p id="method-extendedTimeOut"><a href="#method-extendedTimeOut" class="anchor"><i class="fa-duotone fa-link"></i> extendedTimeOut</a></p>

The time in milliseconds to keep the toast visible after the user hovers over it.

Default ⇒ `1000` milliseconds

```php
toastr()->extendedTimeOut(int $extendedTimeOut);
```

{% assign id = '# toastr extendedTimeOut' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"extendedTimeOut": 200}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->extendedTimeOut(200) // 200 milliseconds
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-hideDuration"><a href="#method-hideDuration" class="anchor"><i class="fa-duotone fa-link"></i> hideDuration</a></p>

The duration of the hide animation in milliseconds.

Default ⇒ `1000` milliseconds

```php
toastr()->hideDuration(int $hideDuration);
```

{% assign id = '# toastr hideDuration' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"hideDuration": 200}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->hideDuration(200) // 200 milliseconds
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-hideEasing"><a href="#method-hideEasing" class="anchor"><i class="fa-duotone fa-link"></i> hideEasing</a></p>

The easing function used for the hide animation.

Default ⇒ `swing`

```php
toastr()->hideEasing(string $hideEasing);
```

{% assign id = '# toastr hideEasing swing' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"hideEasing": "swing"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->hideEasing('swing')
    ->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# toastr hideEasing linear' %}
{% assign options = '{"hideEasing": "linear"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->hideEasing('linear')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-hideMethod"><a href="#method-hideMethod" class="anchor"><i class="fa-duotone fa-link"></i> hideMethod</a></p>

The method used to hide the toast, either `fadeOut` or `slideOut`.

Default ⇒ `fadeOut`

```php
toastr()->hideMethod(string $hideMethod);
```

{% assign id = '# toastr hideMethod' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"hideMethod": "fadeOut"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->hideMethod('fadeOut')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-iconClass"><a href="#method-iconClass" class="anchor"><i class="fa-duotone fa-link"></i> iconClass</a></p>

The default class applied to the toast icon.

Default ⇒ `toast-info`

```php
toastr()->iconClass(string $iconClass);
```

{% assign id = '# toastr iconClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"iconClass": "toast-info"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->iconClass('toast-info')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-messageClass"><a href="#method-messageClass" class="anchor"><i class="fa-duotone fa-link"></i> messageClass</a></p>

The class applied to the toast message element.

Default ⇒ `toast-message`

```php
toastr()->messageClass(string $messageClass);
```

{% assign id = '# toastr messageClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"messageClass": "toast-message"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->messageClass('toast-message')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-newestOnTop"><a href="#method-newestOnTop" class="anchor"><i class="fa-duotone fa-link"></i> newestOnTop</a></p>

When set to `true`, new toast notifications are displayed above older ones.

Default ⇒ `true`

```php
toastr()->newestOnTop(bool $newestOnTop = true);
```

{% assign id = '# toastr newestOnTop' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"newestOnTop": true}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->newestOnTop(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-positionClass"><a href="#method-positionClass" class="anchor"><i class="fa-duotone fa-link"></i> positionClass</a></p>

The class applied to the toast container that determines the position of the toast on the screen (e.g. `toast-top-right`, `toast-bottom-left`).

Default ⇒ `toast-top-right`

```php
toastr()->positionClass(string $positionClass);
```

{% assign id = '# toastr positionClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"positionClass": "toast-top-center"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->positionClass('toast-top-center')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-preventDuplicates"><a href="#method-preventDuplicates" class="anchor"><i class="fa-duotone fa-link"></i> preventDuplicates</a></p>

When set to `true`, prevents the display of multiple toast notifications with the same message.

Default ⇒ `false`

```php
toastr()->preventDuplicates(bool $preventDuplicates = true);
```

{% assign id = '# toastr preventDuplicates' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"preventDuplicates": true}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->preventDuplicates(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-progressBar"><a href="#method-progressBar" class="anchor"><i class="fa-duotone fa-link"></i> progressBar</a></p>

When set to `true`, displays a progress bar in the toast.

Default ⇒ `true`

```php
toastr()->progressBar(bool $progressBar = true);
```

{% assign id = '# toastr progressBar' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"progressBar": false}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->progressBar(false)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-progressClass"><a href="#method-progressClass" class="anchor"><i class="fa-duotone fa-link"></i> progressClass</a></p>

The class applied to the progress bar.

```php
toastr()->progressClass(string $progressClass);
```

Default ⇒ `toast-progress`

{% assign id = '# toastr progressClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"progressClass": "toast-progress"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->progressClass('toast-progress')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-rtl"><a href="#method-rtl" class="anchor"><i class="fa-duotone fa-link"></i> rtl</a></p>

When set to `true`, displays the toast notifications in right-to-left mode.

Default ⇒ `false`

```php
toastr()->rtl(bool $rtl = true);
```

{% assign id = '# toastr rtl' %}
{% assign type = 'info' %}
{% assign message = 'تم قفل حسابك وتم إرسال رسالة تأكيد إلكترونية.' %}
{% assign options = '{"rtl": true}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->rtl(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-showDuration"><a href="#method-showDuration" class="anchor"><i class="fa-duotone fa-link"></i> showDuration</a></p>

The duration of the show animation in milliseconds.

Default ⇒ `300` milliseconds

```php
toastr()->showDuration(int $showDuration);
```

{% assign id = '# toastr showDuration' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"showDuration": 100 }' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->showDuration(100) // 100 milliseconds
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-showEasing"><a href="#method-showEasing" class="anchor"><i class="fa-duotone fa-link"></i> showEasing</a></p>

The easing function used for the show animation, either `swing` or `linear` (built into jQuery).

Default ⇒ `swing`

```php
toastr()->showEasing(string $showEasing);
```

{% assign id = '# toastr showEasing swing' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"showEasing": "swing"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->showEasing('swing')
    ->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# toastr showEasing linear' %}
{% assign options = '{"showEasing": "linear"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->showEasing('linear')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-showMethod"><a href="#method-showMethod" class="anchor"><i class="fa-duotone fa-link"></i> showMethod</a></p>

The method used to show the toast, either `fadeIn` or `slideIn` or `show` (built into jQuery).

Default ⇒ `fadeIn`

```php
toastr()->showMethod(string $showMethod);
```

{% assign id = '# toastr showMethod' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"showMethod": "fadeIn"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->showMethod('fadeIn')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-tapToDismiss"><a href="#method-tapToDismiss" class="anchor"><i class="fa-duotone fa-link"></i> tapToDismiss</a></p>

When set to `true`, the toast can be dismissed by tapping on it.

```php
toastr()->tapToDismiss(bool $tapToDismiss = true);
```

{% assign id = '# toastr tapToDismiss' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"tapToDismiss": true}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->tapToDismiss(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-target"><a href="#method-target" class="anchor"><i class="fa-duotone fa-link"></i> target</a></p>

The element that should contain the toast notifications.

Default ⇒ `body`

```php
toastr()->target(string $target);
```

{% assign id = '# toastr target' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"target": "body"}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->target('body')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-timeOut"><a href="#method-timeOut" class="anchor"><i class="fa-duotone fa-link"></i> timeOut</a></p>

The time in milliseconds to keep the toast visible before it is automatically closed. <br />
Set `timeOut` and `extendedTimeOut` to `0` to make it sticky

Default ⇒ `5000` milliseconds

```php
toastr()->timeOut(int $timeOut, bool $extendedTimeOut = null);
```

{% assign id = '# toastr timeOut' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"timeOut": 1000}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->timeOut(1000) // 1 second
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-titleClass"><a href="#method-titleClass" class="anchor"><i class="fa-duotone fa-link"></i> titleClass</a></p>

The class applied to the toast title element.

```php
toastr()->titleClass(string $titleClass);
```

{% assign id = '# toastr titleClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"titleClass": "toastr-title"}' %}
{% include example.html %}

```php
{{ id }}

toastr()
    ->titleClass('toastr-title')
    ->add{{ type | capitalize }}('{{ message }}');
```


---

<p id="method-toastClass"><a href="#method-toastClass" class="anchor"><i class="fa-duotone fa-link"></i> toastClass</a></p>

The class applied to the toast container.

Default ⇒ `toast`

```php
toastr()->toastClass(string $toastClass);
```

{% assign id = '# toastr toastClass' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"toastClass": "toast"}' %}
{% include example.html %}


```php
{{ id }}

toastr()
    ->toastClass('toast')
    ->add{{ type | capitalize }}('{{ message }}');
```
