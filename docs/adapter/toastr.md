---
permalink: /docs/adapter/toastr/
title: Toastr.js adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
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

### title :
The title of the notification
```php
$flasher->title(string $title)
```

### closeButton :
Enable a close button
```php
$flasher->closeButton(bool $closeButton = true)
```

### closeClass :

```php
$flasher->closeClass(string $closeClass)
```

### closeDuration :

```php
$flasher->closeDuration(int $closeDuration)
```

### closeEasing :

```php
$flasher->closeEasing(string $closeEasing)
```

### closeHtml :
Override the close button's HTML.
```php
$flasher->closeHtml(string $closeHtml)
```

### closeMethod :

```php
$flasher->closeMethod(string $closeMethod)
```

### closeOnHover :

```php
$flasher->closeOnHover(bool $closeOnHover = true)
```

### containerId :

```php
$flasher->containerId(string $containerId)
```

### debug :

```php
$flasher->debug(bool $debug = true)
```

### escapeHtml :
In case you want to escape HTML characters in title and message
```php
$flasher->escapeHtml(bool $escapeHtml = true)
```

### extendedTimeOut :
How long the toast will display after a user hovers over it
```php
$flasher->extendedTimeOut(int $extendedTimeOut)
```

### hideDuration :
Specifies the time during which the pop-up closes in ms
```php
$flasher->hideDuration(int $hideDuration)
```

### hideEasing :
Indicates the entry transition of the pop-up
```php
$flasher->hideEasing(string $hideEasing)
```

### hideMethod :
Indicates the opening animation of the pop-up
```php
$flasher->hideMethod(string $hideMethod)
```

### iconClass :

```php
$flasher->iconClass(string $iconClass)
```

### messageClass :

```php
$flasher->messageClass(string $messageClass)
```

### newestOnTop :
Show newest toast at bottom (top is default)
```php
$flasher->newestOnTop(bool $newestOnTop = true)
```

### onHidden :
Define a callback for when the toast is hidden
```php
$flasher->onHidden(string $onHidden)
```

### onShown :
Define a callback for when the toast is shown
```php
$flasher->onShown(string $onShown)
```

### positionClass :

```php
$flasher->positionClass(string $positionClass)
```

### preventDuplicates :
Rather than having identical toasts stack, set the preventDuplicates property to true.
Duplicates are matched to the previous toast based on their message content.
```php
$flasher->preventDuplicates(bool $preventDuplicates = true)
```

### progressBar :
Visually indicate how long before a toast expires.
```php
$flasher->progressBar(bool $progressBar = true)
```

### progressClass :

```php
$flasher->progressClass(string $progressClass)
```

### rtl :
Flip the toastr to be displayed properly for right-to-left languages.
```php
$flasher->rtl(bool $rtl = true)
```

### showDuration :
Specifies the time during which the pop-up opens in ms
```php
$flasher->showDuration(int $showDuration)
```

### showEasing :
Indicates the entry transition of the pop-up
```php
$flasher->showEasing(string $showEasing)
```

### showMethod :
Indicates the opening animation of the pop-up
```php
$flasher->showMethod(string $showMethod)
```

### tapToDismiss :
Forces the user to validate the pop-up before closing
```php
$flasher->tapToDismiss(bool $tapToDismiss = true)
```

### target :
```php
$flasher->target(string $target)
```

### timeOut :
How long the toast will display without user interaction
```php
$flasher->timeOut(int $timeOut, bool $extendedTimeOut = null)
```

### titleClass :
```php
$flasher->titleClass(string $titleClass)
```

### toastClass :
```php
$flasher->toastClass(string $toastClass)
```

### persistent :
Prevent from Auto Hiding
```php
$flasher->persistent()
```
