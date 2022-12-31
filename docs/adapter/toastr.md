---
permalink: /docs/adapter/toastr/
title: Toastr.js adapter for PHP flasher
---

For more information about Toastr.js click <a href="https://github.com/CodeSeven/toastr">here</a>.

## <i class="fa-duotone fa-list-radio"></i> Installation

This package can be installed through Composer.

**For Vanilla PHP:**
```shell
composer require php-flasher/flasher-toastr
```

**For Laravel:**
```shell
composer require php-flasher/flasher-toastr-laravel
```

**For Symfony:**
```shell
composer require php-flasher/flasher-toastr-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Just grave an instance of `ToastrFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\Toastr\Prime\ToastrFactory;

class NotifyController
{
    public function flasher(ToastrFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```

---

## <i class="fa-duotone fa-list-radio"></i> Fluent Builder methods

All methods in the **[Usage](/docs/usage/)** section are available also for `ToastrFactory`

<p id="method-title"><a href="#method-title" class="anchor"><i class="fa-duotone fa-link"></i> title</a></p>

The title of the notification
```php
$flasher->title(string $title)
```

<p id="method-closeButton"><a href="#method-closeButton" class="anchor"><i class="fa-duotone fa-link"></i> closeButton</a></p>

Enable a close button
```php
$flasher->closeButton(bool $closeButton = true)
```

<p id="method-closeClass"><a href="#method-closeClass" class="anchor"><i class="fa-duotone fa-link"></i> closeClass</a></p>

```php
$flasher->closeClass(string $closeClass)
```

<p id="method-closeDuration"><a href="#method-closeDuration" class="anchor"><i class="fa-duotone fa-link"></i> closeDuration</a></p>

```php
$flasher->closeDuration(int $closeDuration)
```

<p id="method-closeEasing"><a href="#method-closeEasing" class="anchor"><i class="fa-duotone fa-link"></i> closeEasing</a></p>

```php
$flasher->closeEasing(string $closeEasing)
```

<p id="method-closeHtml"><a href="#method-closeHtml" class="anchor"><i class="fa-duotone fa-link"></i> closeHtml</a></p>

Override the close button's HTML.
```php
$flasher->closeHtml(string $closeHtml)
```

<p id="method-closeMethod"><a href="#method-closeMethod" class="anchor"><i class="fa-duotone fa-link"></i> closeMethod</a></p>

```php
$flasher->closeMethod(string $closeMethod)
```

<p id="method-closeOnHover"><a href="#method-closeOnHover" class="anchor"><i class="fa-duotone fa-link"></i> closeOnHover</a></p>

```php
$flasher->closeOnHover(bool $closeOnHover = true)
```

<p id="method-containerId"><a href="#method-containerId" class="anchor"><i class="fa-duotone fa-link"></i> containerId</a></p>

```php
$flasher->containerId(string $containerId)
```

<p id="method-debug"><a href="#method-debug" class="anchor"><i class="fa-duotone fa-link"></i> debug</a></p>

```php
$flasher->debug(bool $debug = true)
```

<p id="method-escapeHtml"><a href="#method-escapeHtml" class="anchor"><i class="fa-duotone fa-link"></i> escapeHtml</a></p>

In case you want to escape HTML characters in title and message
```php
$flasher->escapeHtml(bool $escapeHtml = true)
```

<p id="method-extendedTimeOut"><a href="#method-extendedTimeOut" class="anchor"><i class="fa-duotone fa-link"></i> extendedTimeOut</a></p>

How long the toast will display after a user hovers over it
```php
$flasher->extendedTimeOut(int $extendedTimeOut)
```

<p id="method-hideDuration"><a href="#method-hideDuration" class="anchor"><i class="fa-duotone fa-link"></i> hideDuration</a></p>

Specifies the time during which the pop-up closes in ms
```php
$flasher->hideDuration(int $hideDuration)
```

<p id="method-hideEasing"><a href="#method-hideEasing" class="anchor"><i class="fa-duotone fa-link"></i> hideEasing</a></p>

Indicates the entry transition of the pop-up
```php
$flasher->hideEasing(string $hideEasing)
```

<p id="method-hideMethod"><a href="#method-hideMethod" class="anchor"><i class="fa-duotone fa-link"></i> hideMethod</a></p>

Indicates the opening animation of the pop-up
```php
$flasher->hideMethod(string $hideMethod)
```

<p id="method-iconClass"><a href="#method-iconClass" class="anchor"><i class="fa-duotone fa-link"></i> iconClass</a></p>

```php
$flasher->iconClass(string $iconClass)
```

<p id="method-messageClass"><a href="#method-messageClass" class="anchor"><i class="fa-duotone fa-link"></i> messageClass</a></p>

```php
$flasher->messageClass(string $messageClass)
```

<p id="method-newestOnTop"><a href="#method-newestOnTop" class="anchor"><i class="fa-duotone fa-link"></i> newestOnTop</a></p>

Show newest toast at bottom (top is default)
```php
$flasher->newestOnTop(bool $newestOnTop = true)
```

<p id="method-onHidden"><a href="#method-onHidden" class="anchor"><i class="fa-duotone fa-link"></i> onHidden</a></p>

Define a callback for when the toast is hidden
```php
$flasher->onHidden(string $onHidden)
```

<p id="method-onShown"><a href="#method-onShown" class="anchor"><i class="fa-duotone fa-link"></i> onShown</a></p>

Define a callback for when the toast is shown
```php
$flasher->onShown(string $onShown)
```

<p id="method-positionClass"><a href="#method-positionClass" class="anchor"><i class="fa-duotone fa-link"></i> positionClass</a></p>

```php
$flasher->positionClass(string $positionClass)
```

<p id="method-preventDuplicates"><a href="#method-preventDuplicates" class="anchor"><i class="fa-duotone fa-link"></i> preventDuplicates</a></p>

Rather than having identical toasts stack, set the preventDuplicates property to true.
Duplicates are matched to the previous toast based on their message content.
```php
$flasher->preventDuplicates(bool $preventDuplicates = true)
```

<p id="method-progressBar"><a href="#method-progressBar" class="anchor"><i class="fa-duotone fa-link"></i> progressBar</a></p>

Visually indicate how long before a toast expires.
```php
$flasher->progressBar(bool $progressBar = true)
```

<p id="method-progressClass"><a href="#method-progressClass" class="anchor"><i class="fa-duotone fa-link"></i> progressClass</a></p>

```php
$flasher->progressClass(string $progressClass)
```

<p id="method-rtl"><a href="#method-rtl" class="anchor"><i class="fa-duotone fa-link"></i> rtl</a></p>

Flip the toastr to be displayed properly for right-to-left languages.
```php
$flasher->rtl(bool $rtl = true)
```

<p id="method-showDuration"><a href="#method-showDuration" class="anchor"><i class="fa-duotone fa-link"></i> showDuration</a></p>

Specifies the time during which the pop-up opens in ms
```php
$flasher->showDuration(int $showDuration)
```

<p id="method-showEasing"><a href="#method-showEasing" class="anchor"><i class="fa-duotone fa-link"></i> showEasing</a></p>

Indicates the entry transition of the pop-up
```php
$flasher->showEasing(string $showEasing)
```

<p id="method-showMethod"><a href="#method-showMethod" class="anchor"><i class="fa-duotone fa-link"></i> showMethod</a></p>

Indicates the opening animation of the pop-up
```php
$flasher->showMethod(string $showMethod)
```

<p id="method-tapToDismiss"><a href="#method-tapToDismiss" class="anchor"><i class="fa-duotone fa-link"></i> tapToDismiss</a></p>

Forces the user to validate the pop-up before closing
```php
$flasher->tapToDismiss(bool $tapToDismiss = true)
```

<p id="method-target"><a href="#method-target" class="anchor"><i class="fa-duotone fa-link"></i> target</a></p>

```php
$flasher->target(string $target)
```

<p id="method-timeOut"><a href="#method-timeOut" class="anchor"><i class="fa-duotone fa-link"></i> timeOut</a></p>

How long the toast will display without user interaction
```php
$flasher->timeOut(int $timeOut, bool $extendedTimeOut = null)
```

<p id="method-titleClass"><a href="#method-titleClass" class="anchor"><i class="fa-duotone fa-link"></i> titleClass</a></p>

```php
$flasher->titleClass(string $titleClass)
```

<p id="method-toastClass"><a href="#method-toastClass" class="anchor"><i class="fa-duotone fa-link"></i> toastClass</a></p>

```php
$flasher->toastClass(string $toastClass)
```

<p id="method-persistent"><a href="#method-persistent" class="anchor"><i class="fa-duotone fa-link"></i> persistent</a></p>

Prevent from Auto Hiding
```php
$flasher->persistent()
```
