---
permalink: /library/pnotify/
redirect_from: /docs/adapter/pnotify/
title: Pnotify
handler: pnotify
description: Enhance your web projects with stylish and customizable notification messages using Pnotify, a popular JavaScript library. With a wide range of features and options, Pnotify is easy to install and use, making it a great choice for any project that wants to engage and inform users.
---

## <i class="fa-duotone fa-list-radio"></i> Installation

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```shell
composer require php-flasher/flasher-pnotify-laravel
```

<br />

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```shell
composer require php-flasher/flasher-pnotify-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

{% assign id = '#/ pnotify' %}
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
        pnotify()->add{{ type | capitalize }}('{{ message }}');
    }
} 
```

---

## <i class="fa-duotone fa-list-radio"></i> Modifiers

For more information on Pnotify options and usage, please refer to the original documentation at [https://sciactive.com/pnotify/](https://sciactive.com/pnotify/)

---

> The methods described in the **[Usage](/installation/#-modifiers)** section can also be used with the `pnotify` adapter.

---

<p id="method-styling"><a href="#method-styling" class="anchor"><i class="fa-duotone fa-link"></i> styling</a></p>

What styling classes to use. (Can be either `brighttheme`, `bootstrap3`, `fontawesome` or a custom style object.
See the source in the end of `pnotify.js` for the properties in a style object.)

```php
pnotify()->styling(string $styling);
```

---

<p id="method-addClass"><a href="#method-addClass" class="anchor"><i class="fa-duotone fa-link"></i> addClass</a></p>

Additional classes to be added to the notice. (For custom styling.)

```php
pnotify()->addClass(string $addClass);
```

---

<p id="method-cornerClass"><a href="#method-cornerClass" class="anchor"><i class="fa-duotone fa-link"></i> cornerClass</a></p>

Class to be added to the notice for corner styling.

```php
pnotify()->cornerClass(string $cornerClass);
```

---

<p id="method-autoDisplay"><a href="#method-autoDisplay" class="anchor"><i class="fa-duotone fa-link"></i> autoDisplay</a></p>

Display the notice when it is created. Turn this off to add notifications to the history without displaying them.

```php
pnotify()->autoDisplay(bool $autoDisplay = true);
```

---

<p id="method-timer"><a href="#method-timer" class="anchor"><i class="fa-duotone fa-link"></i> timer</a></p>

Delay in milliseconds before the notice is removed.

```php
pnotify()->timer(int $timer);
```

---

<p id="method-mouseReset"><a href="#method-mouseReset" class="anchor"><i class="fa-duotone fa-link"></i> mouseReset</a></p>

Reset the hide timer if the mouse moves over the notice.

```php
pnotify()->mouseReset(bool $mouseReset = true);
```

---

<p id="method-remove"><a href="#method-remove" class="anchor"><i class="fa-duotone fa-link"></i> remove</a></p>

Remove the notice's elements from the DOM after it is removed.

```php
pnotify()->remove(bool $remove = true);
```

---

<p id="method-insertBrs"><a href="#method-insertBrs" class="anchor"><i class="fa-duotone fa-link"></i> insertBrs</a></p>

Change new lines to br tags.

```php
pnotify()->insertBrs(bool $insertBrs = true);
```

---

<p id="method-destroy"><a href="#method-destroy" class="anchor"><i class="fa-duotone fa-link"></i> destroy</a></p>

Whether to remove the notice from the global array when it is closed.

```php
pnotify()->destroy(bool $destroy = true);
```