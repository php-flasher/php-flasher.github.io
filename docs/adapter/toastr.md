---
permalink: /docs/adapter/toastr/
title: Toastr.js adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2020-11-28
---

For more information about Toastr.js click <a href="https://github.com/CodeSeven/toastr">here</a>.

# Installation

This package can be installed through Composer.

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-toastr</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-toastr-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-toastr-symfony</code></pre>

# Usage

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

## Toastr specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `ToastrFactory`

```php

// The title of the notification
$flasher->title(string $title)

// Enable a close button
$flasher->closeButton(bool $closeButton = true)

$flasher->closeClass(string $closeClass)

$flasher->closeDuration(int $closeDuration)

$flasher->closeEasing(string $closeEasing)

// Override the close button's HTML.
$flasher->closeHtml(string $closeHtml)

$flasher->closeMethod(string $closeMethod)

$flasher->closeOnHover(bool $closeOnHover = true)

$flasher->containerId(string $containerId)

$flasher->debug(bool $debug = true)

// In case you want to escape HTML characters in title and message
$flasher->escapeHtml(bool $escapeHtml = true)

// How long the toast will display after a user hovers over it
$flasher->extendedTimeOut(int $extendedTimeOut)

// Specifies the time during which the pop-up closes in ms
$flasher->hideDuration(int $hideDuration)

// Indicates the entry transition of the pop-up
$flasher->hideEasing(string $hideEasing)

// Indicates the opening animation of the pop-up
$flasher->hideMethod(string $hideMethod)

$flasher->iconClass(string $iconClass)

$flasher->messageClass(string $messageClass)

// Show newest toast at bottom (top is default)
$flasher->newestOnTop(bool $newestOnTop = true)

// Define a callback for when the toast is hidden
$flasher->onHidden(string $onHidden)

// Define a callback for when the toast is shown
$flasher->onShown(string $onShown)

$flasher->positionClass(string $positionClass)

// Rather than having identical toasts stack, set the preventDuplicates property to true.
// Duplicates are matched to the previous toast based on their message content.
$flasher->preventDuplicates(bool $preventDuplicates = true)

// Visually indicate how long before a toast expires.
$flasher->progressBar(bool $progressBar = true)

$flasher->progressClass(string $progressClass)

// Flip the toastr to be displayed properly for right-to-left languages.
$flasher->rtl(bool $rtl = true)

// Specifies the time during which the pop-up opens in ms
$flasher->showDuration(int $showDuration)

// Indicates the entry transition of the pop-up
$flasher->showEasing(string $showEasing)

// Indicates the opening animation of the pop-up
$flasher->showMethod(string $showMethod)

// Forces the user to validate the pop-up before closing
$flasher->tapToDismiss(bool $tapToDismiss = true)

$flasher->target(string $target)

// How long the toast will display without user interaction
$flasher->timeOut(int $timeOut, bool $extendedTimeOut = null)

$flasher->titleClass(string $titleClass)

$flasher->toastClass(string $toastClass)

// Prevent from Auto Hiding
$flasher->persistent()
```