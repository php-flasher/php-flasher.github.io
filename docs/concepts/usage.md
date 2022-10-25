---
permalink: /docs/concepts/usage/
title: Usage
hide_title: true
published_at: 2020-11-28
updated_at: 2022-05-08
---

## <i class="fa-duotone fa-list-radio"></i> General Usage

Using this package is actually pretty easy. Adding notifications to your application actually require only one line of code.

```php
$flasher->addFlash('success', 'Data has been saved successfully!');

flash()->addFlash('success', 'Data has been saved successfully!'); // equivalent for the above but only for Laravel users
```

```php
$notification = $flasher->addFlash(string $type, string $message, string $title = null, array $options = [])
```

| param      | description                                                                                                                                                                                                                                                                                                         |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$type`    | Notification type : <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc |
| `$message` | The body of the message you want to deliver to your user. This may contain HTML. If you add links, be sure to add the appropriate classes for the framework you are using.                                                                                                                                          |
| `$title`   | The notification title, Can also include HTML                                                                                                                                                                                                                                                                       |
| `$options` | Custom options for javascript libraries (toastr, noty, notyf ...etc)                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                       |

> <span class="text-orange-900"><i class="fa-duotone fa-circle-exclamation text-red-900 fa-xl"></i> For <i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel users whenever you see `$flasher` you could use `flash()` helper method instead.</span> <br>

To make life even easier, there are four helper methods for different notification types of notification. 
So instead of manually supplying the notification type, you can simply call the type as its method name. 

```php
$flasher->addSuccess('success message');
$flasher->addError('error message');
$flasher->addWarning('warning message');
$flasher->addInfo('info message');
```

--- 

## <i class="fa-duotone fa-list-radio"></i> Fluent Builder methods

There are only __two__ main steps to display a notification using **a fluent chainable way** : __build__ and __flash__.

```php
// Step 1: create your notification and add options
$builder = $flasher->handler('toastr') // the handle() method here is optional
    ->type('success')
    ->message('your custom message')
    ->priority(2)
    ->option('timer', 5000);

// Step2 : Store the notification in the session
$builder->flash();
```

---

Its getting even better right ? it's so easy to read and still very powerful. You can omit properties that you do not care about. and only set the ones that important to you.

```php
$builder = $flasher->type('error', 'An error has occurred please try again later.');
$builder->flash();
```

> <span class="text-orange-900"><i class="fa-duotone fa-circle-exclamation text-red-900 fa-xl"></i> as you can see, you **should** manually flash the notification, flasher has to know when your notification is ready to be displayed.</span> <br>

---

<p id="method-type"><a href="#method-type" class="anchor"><i class="fa-duotone fa-link"></i> type</a></p>

```php
$builder = $flasher->type(string $type, string $message = null, string $title = null, array $options = [])
```

| param      | description                                                                                                                                                                                                                                                                                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$type`    | <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc |
| `$message` | The body of the message you want to deliver to your user. This may contain HTML. If you add links, be sure to add the appropriate classes for the framework you are using.                                                                                                                      |
| `$title`   | The notification title                                                                                                                                                                                                                                                                          |
| `$options` | Custom options for javascript libraries (toastr, noty, notyf ...etc)                                                                                                                                                                                                                            |
| `$builder` | An instance of the notification builder, so you could chain other builder methods on it                                                                                                                                                                                                         |

---

<p id="method-shortcuts"><a href="#method-shortcuts" class="anchor"><i class="fa-duotone fa-link"></i> type shortcuts</a></p>

```php
$builder = $flasher->success(string $message = null, string $title = null, array $options = [])
$builder = $flasher->error(string $message = null, string $title = null, array $options = [])
$builder = $flasher->warning(string $message = null, string $title = null, array $options = [])
$builder = $flasher->info(string $message = null, string $title = null, array $options = [])
```

| description                               |
|-------------------------------------------|
| Shortcuts for the $flasher->type() method |

---

<p id="method-message"><a href="#method-message" class="anchor"><i class="fa-duotone fa-link"></i> message</a></p>

```php
$builder = $flasher->message(string $message);
```

| param      | description                 |
|------------|-----------------------------|
| `$message` | The message to be displayed |

---

<p id="method-title"><a href="#method-title" class="anchor"><i class="fa-duotone fa-link"></i> title</a></p>

```php
$builder = $flasher->title(string $title);
```

| param    | description            |
|----------|------------------------|
| `$title` | The notification title |

---

<p id="method-options"><a href="#method-options" class="anchor"><i class="fa-duotone fa-link"></i> options</a></p>

```php
$builder = $flasher->options(array $options, bool $merge = true);
```

| param      | description                                                          |
|------------|----------------------------------------------------------------------|
| `$options` | Custom options for javascript libraries (toastr, noty, notyf ...etc) |
| `$merge`   | Merge options if you call the options method multiple times          |

---

<p id="method-option"><a href="#method-option" class="anchor"><i class="fa-duotone fa-link"></i> option</a></p>

```php
$builder = $flasher->option(string $option, mixed $value);
```

| param     | description  |
|-----------|--------------|
| `$option` | Option key   |
| `$value`  | Option value |

---

<p id="method-priority"><a href="#method-priority" class="anchor"><i class="fa-duotone fa-link"></i> priority</a></p>

```php
$builder = $flasher->priority(int $priority);
```

| param       | description                                                                                |
|-------------|--------------------------------------------------------------------------------------------|
| `$priority` | The priority of the notification, the higher the priority, the sooner it will be displayed |

---

<p id="method-hops"><a href="#method-hops" class="anchor"><i class="fa-duotone fa-link"></i> hops</a></p>

Sometimes you may want a flash message to persist for longer than a single request. As an example, with a multi-page form, you may want to store messages until all pages have been filled.

```php
$builder = $flasher->hops(int $hops);
```

| param   | description                                                   |
|---------|---------------------------------------------------------------|
| `$hops` | indicate how many requests the flash message will persist for |

---

<p id="method-keep"><a href="#method-keep" class="anchor"><i class="fa-duotone fa-link"></i> keep</a></p>

```php
$builder = $flasher->keep();
```

| description                                        |
|----------------------------------------------------|
| Keep the notification in the next session requests |

---

<p id="method-delay"><a href="#method-delay" class="anchor"><i class="fa-duotone fa-link"></i> delay</a></p>

```php
$builder = $flasher->delay(int $delay);
```

| param    | description                                                                        |
|----------|------------------------------------------------------------------------------------|
| `$delay` | The number of requests in which the message will be waiting before being displayed |

---

<p id="method-now"><a href="#method-now" class="anchor"><i class="fa-duotone fa-link"></i> now</a></p>

```php
$builder = $flasher->now();
```

| description                     |
|---------------------------------|
| Shortcut for $flasher->delay(0) |

---

<p id="method-translate"><a href="#method-translate" class="anchor"><i class="fa-duotone fa-link"></i> translate</a></p>

```php
$builder = $flasher->translate(string $locale = null);
```

| param     | description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `$locale` | The locale to be used for the translation or null to use the default locale |

---

<p id="method-preset"><a href="#method-preset" class="anchor"><i class="fa-duotone fa-link"></i> preset</a></p>

```php
$builder = $flasher->preset(string $preset, bool $flash = true);
```

| param     | description                                                           |
|-----------|-----------------------------------------------------------------------|
| `$preset` | The preset to be used for the notification                            |
| `$flash`  | If true, the notification will be flashed after the preset is applied |

---

<p id="method-context"><a href="#method-context" class="anchor"><i class="fa-duotone fa-link"></i> context</a></p>

```php
$builder = $flasher->context(array $context = []);
```

| param      | description                                    |
|------------|------------------------------------------------|
| `$context` | Custom data to be available in javascript side |

---

<p id="method-withStamp"><a href="#method-withStamp" class="anchor"><i class="fa-duotone fa-link"></i> withStamp</a></p>

```php
$builder = $flasher->withStamp(StampInterface $stamp);
```

| param    | description                                |
|----------|--------------------------------------------|
| `$stamp` | Attach a stamp to the current notification |

---

<p id="method-with"><a href="#method-with" class="anchor"><i class="fa-duotone fa-link"></i> with</a></p>

```php
$builder = $flasher->with(array $stamps);
```

| param     | description                                                         |
|-----------|---------------------------------------------------------------------|
| `$stamps` | Attach multiple stamps at the same time to the current notification |

---

<p id="method-handler"><a href="#method-handler" class="anchor"><i class="fa-duotone fa-link"></i> handler</a></p>

```php
$builder = $flasher->handler(string $handler);
```

| param      | description                                                                                             |
|------------|---------------------------------------------------------------------------------------------------------|
| `$handler` | The handler name it will be used to choose to correct js adapter to be used to display the notification |

---

<p id="method-getEnvelope"><a href="#method-getEnvelope" class="anchor"><i class="fa-duotone fa-link"></i> getEnvelope</a></p>

```php
$envelope = $flasher->getEnvelope();
```

| param       | description                                                             |
|-------------|-------------------------------------------------------------------------|
| `$envelope` | Get the current notification with all stamps and options attached to it |

---

<p id="method-flash"><a href="#method-flash" class="anchor"><i class="fa-duotone fa-link"></i> flash</a></p>

> <span class="text-orange-900">Call the **flash** method at the end when your notification is ready to be displayed</span>


```php
$envelope = $flasher->flash(array $stamps = []);
```

| param       | description                                                         |
|-------------|---------------------------------------------------------------------|
| `$stamps`   | Attach multiple stamps at the same time to the current notification |
| `$envelope` | The current notification with all stamps and options attached to it |
