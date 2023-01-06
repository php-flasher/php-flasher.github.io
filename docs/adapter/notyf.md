---
permalink: /docs/adapter/notyf/
title: Notyf
handler: notyf
---

## <i class="fa-duotone fa-list-radio"></i> Installation

For more information about notyf click <a href="https://github.com/caroso1222/notyf">here</a>.

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```shell
composer require php-flasher/flasher-notyf-laravel
```

<br />

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```shell
composer require php-flasher/flasher-notyf-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

{% assign id = '# notyf' %}
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
        notyf()->add{{ type | capitalize }}('{{ message }}');
    }
} 
```

---

## <i class="fa-duotone fa-list-radio"></i> Modifiers

> The methods described in the **[Usage](/docs/usage/)** section can also be used with the `notyf` adapter.

---

<p id="method-duration"><a href="#method-duration" class="anchor"><i class="fa-duotone fa-link"></i> duration</a></p>

Number of milliseconds before hiding the notification. Use 0 for infinite duration.

```php
notyf()->duration(int $duration);
```

{% assign id = '# notyf duration' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"duration": 2000}' %}
{% include example.html %}

```php
{{ id }}

notyf()
    ->duration(2000) // 2 seconds
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-ripple"><a href="#method-ripple" class="anchor"><i class="fa-duotone fa-link"></i> ripple</a></p>

Whether to show the notification with a ripple effect

```php
notyf()->ripple(bool $ripple);
```

{% assign id = '# notyf ripple true' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"ripple": true}' %}
{% include example.html %}

```php
{{ id }}

notyf()
    ->ripple(true)
    ->add{{ type | capitalize }}('{{ message }}');
```

{% assign id = '# notyf ripple false' %}
{% assign options = '{"ripple": false}' %}
{% include example.html %}

```php
{{ id }}

notyf()
    ->ripple(false)
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-position"><a href="#method-position" class="anchor"><i class="fa-duotone fa-link"></i> position</a></p>

Viewport location where notifications are rendered

```php
notyf()->position(string $position, string $value);
```

{% assign id = '# notyf position' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"position": {"x": "center", "y":"top"}}' %}
{% include example.html %}

```php
{{ id }}

notyf()
    ->position('x', 'center')
    ->position('y', 'top')
    ->add{{ type | capitalize }}('{{ message }}');
```

---

<p id="method-dismissible"><a href="#method-dismissible" class="anchor"><i class="fa-duotone fa-link"></i> dismissible</a></p>

Whether to allow users to dismiss the notification with a button

```php
notyf()->dismissible(bool $dismissible);
```

{% assign id = '# notyf dismissible' %}
{% assign type = site.data.messages.types | sample %}
{% assign message = site.data.messages[type] | sample %}
{% assign options = '{"dismissible": true}' %}
{% include example.html %}

```php
{{ id }}

notyf()
    ->dismissible(true)
    ->add{{ type | capitalize }}('{{ message }}');
```
