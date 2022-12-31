---
permalink: /docs/concepts/usage/
title: Usage
---

## <i class="fa-duotone fa-list-radio"></i> General Usage

Using this package is actually pretty easy. Adding notifications to your application actually require only one line of code.

```php
flash()->addFlash(string $type, string $message, string $title = null, array $options = [])
```

Example:

```php
# success
flash()->addFlash('success', 'Your request has been submitted successfully.');
```

| param      | description                                                                                                                                                                                                                                                                                                         |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$type`    | Notification type : <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc |
| `$message` | The body of the message you want to deliver to your user. This may contain HTML. If you add links, be sure to add the appropriate classes for the framework you are using.                                                                                                                                          |
| `$title`   | The notification title, Can also include HTML                                                                                                                                                                                                                                                                       |
| `$options` | Custom options for javascript libraries (toastr, noty, notyf ...etc)                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                       |

To make life even easier, there are four helper methods for different notification types of notification. 
So instead of manually supplying the notification type, you can simply call the type as its method name. 

Examples:

```php
# success
flash()->addSuccess('Your request has been submitted successfully');
```

```php
# error
flash()->addError('Sorry, we encountered an error. Please try again');
```

```php
# warning
flash()->addWarning('Are you sure you want to delete this item? This action cannot be undone.');
```

```php
# info
flash()->addInfo('Your account has been successfully created. Please check your email for a confirmation message.');
```

--- 

## <i class="fa-duotone fa-list-radio"></i> Fluent Builder methods

There are only __two__ main steps to display a notification using **a fluent chainable way** : __build__ and __flash__.

```php
// Step 1: create your notification and add options
$builder = flash()
    ->handler('toastr') // the handle() method here is optional
    ->type('success')
    ->title('your custom title')
    ->message('your custom message')
    ->priority(2)
    ->option('timer', 10000);

// Step2 : Store the notification in the session
$builder->flash();
```

Example:

```php
# notification builder with toastr

// Step 1: create your notification and add options
$builder = flash()
    ->handler('toastr') // the handle() method here is optional
    ->type('success')
    ->title('Great!')
    ->message('The action was completed successfully.')
    ->priority(2)
    ->option('timeOut', 10000); // 10 seconds

// Step2 : Store the notification in the session
$builder->flash();
```

---

Its getting even better right ? it's so easy to read and still very powerful. You can omit properties that you do not care about. and only set the ones that important to you.

> <span class="text-orange-900"><i class="fa-duotone fa-circle-exclamation text-red-900 fa-xl"></i> as you can see, you **should** manually flash the notification, flasher has to know when your notification is ready to be displayed.</span> <br>

---

<p id="method-type"><a href="#method-type" class="anchor"><i class="fa-duotone fa-link"></i> type</a></p>

```php
flash()->type(string $type, string $message = null, string $title = null, array $options = []);
```

Example:

```php
# example with type

flash()
    ->type('error', 'An error has occurred please try again later.')
    ->flash();
```

| param      | description                                                                                                                                                                                                                                                                                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$type`    | <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc |
| `$message` | The body of the message you want to deliver to your user. This may contain HTML. If you add links, be sure to add the appropriate classes for the framework you are using.                                                                                                                      |
| `$title`   | The notification title                                                                                                                                                                                                                                                                          |
| `$options` | Custom options to be passed to the javascript libraries (toastr, noty, notyf ...etc)                                                                                                                                                                                                            |

---

<p id="method-shortcuts"><a href="#method-shortcuts" class="anchor"><i class="fa-duotone fa-link"></i> type shortcuts</a></p>

```php
flash()->success(string $message = null, string $title = null, array $options = []);
flash()->error(string $message = null, string $title = null, array $options = []);
flash()->warning(string $message = null, string $title = null, array $options = []);
flash()->info(string $message = null, string $title = null, array $options = []);
```

example :

```php
# success type with title

flash()
    ->success('The action was completed successfully.', 'Congratulations!')
    ->flash();
```

---

<p id="method-message"><a href="#method-message" class="anchor"><i class="fa-duotone fa-link"></i> message</a></p>

```php
flash()->message(string $message);
```

Example:

```php
# error message

flash()
    ->message('This may take some time. Do not refresh the page.')
    ->error()
    ->flash();
```

---

<p id="method-title"><a href="#method-title" class="anchor"><i class="fa-duotone fa-link"></i> title</a></p>

```php
flash()->title(string $title);
```

Example:

```php
# error message with title

flash()
    ->title('Oops!')
    ->message('This may take some time. Do not refresh the page.')
    ->error()
    ->flash();
```

---

<p id="method-options"><a href="#method-options" class="anchor"><i class="fa-duotone fa-link"></i> options</a></p>

```php
flash()->options(array $options, bool $merge = true);
```

Example:

```php
# error message with options

flash()
    ->title('Oops!')
    ->message('This may take some time. Do not refresh the page.')
    ->error()
    ->options([
        'timeout' => 10000, // 10 seconds
        'position' => 'top-center',
    ])
    ->flash();
```

| param      | description                                                                          |
|------------|--------------------------------------------------------------------------------------|
| `$options` | Custom options to be passed to the javascript libraries (toastr, noty, notyf ...etc) |
| `$merge`   | Merge options if you call the options method multiple times                          |

---

<p id="method-option"><a href="#method-option" class="anchor"><i class="fa-duotone fa-link"></i> option</a></p>

```php
flash()->option(string $option, mixed $value);
```

| param     | description  |
|-----------|--------------|
| `$option` | Option key   |
| `$value`  | Option value |

---

<p id="method-priority"><a href="#method-priority" class="anchor"><i class="fa-duotone fa-link"></i> priority</a></p>

```php
$builder = flash()->priority(int $priority);
```

| param       | description                                                                                |
|-------------|--------------------------------------------------------------------------------------------|
| `$priority` | The priority of the notification, the higher the priority, the sooner it will be displayed |

---

<p id="method-hops"><a href="#method-hops" class="anchor"><i class="fa-duotone fa-link"></i> hops</a></p>

Sometimes you may want a flash message to persist for longer than a single request. As an example, with a multi-page form, you may want to store messages until all pages have been filled.

```php
$builder = flash()->hops(int $hops);
```

| param   | description                                                   |
|---------|---------------------------------------------------------------|
| `$hops` | indicate how many requests the flash message will persist for |

---

<p id="method-keep"><a href="#method-keep" class="anchor"><i class="fa-duotone fa-link"></i> keep</a></p>

```php
$builder = flash()->keep();
```

| description                                        |
|----------------------------------------------------|
| Keep the notification in the next session requests |

---

<p id="method-delay"><a href="#method-delay" class="anchor"><i class="fa-duotone fa-link"></i> delay</a></p>

```php
$builder = flash()->delay(int $delay);
```

| param    | description                                                                        |
|----------|------------------------------------------------------------------------------------|
| `$delay` | The number of requests in which the message will be waiting before being displayed |

---

<p id="method-now"><a href="#method-now" class="anchor"><i class="fa-duotone fa-link"></i> now</a></p>

```php
$builder = flash()->now();
```

| description                     |
|---------------------------------|
| Shortcut for flash()->delay(0) |

---

<p id="method-translate"><a href="#method-translate" class="anchor"><i class="fa-duotone fa-link"></i> translate</a></p>

```php
$builder = flash()->translate(string $locale = null);
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
