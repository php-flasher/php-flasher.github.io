---
permalink: /docs/adapter/pnotify/
title: Pnotify adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
---

# Installation

For more information about Pnotify click <a href="https://sciactive.com/pnotify/">here</a>.

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-pnotify</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-pnotify-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-pnotify-symfony</code></pre>

# Usage

Just instanciate the `PnotifyFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\Pnotify\Prime\PnotifyFactory;

class NotifyController
{
    public function flasher(PnotifyFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```
## Pnotify specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `PnotifyFactory`

### title :
The notice's title.
```php 
$flasher->title(bool|string $title)
```

### title :
Whether to escape the content of the title. (Not allow HTML.)
```php
$flasher->titleEscape(bool $titleEscape = true)
```

### text :
The notice's text.
```php 
$flasher->text(string $text)
```

### textEscape :
Whether to escape the content of the text. (Not allow HTML.)
```php 
$flasher->textEscape(bool $textEscape = true)
```

### styling :
What styling classes to use. (Can be either "brighttheme", "bootstrap3", "fontawesome", or a custom style object.
See the source in the end of pnotify.js for the properties in a style object.)
```php 
$flasher->styling(string $styling)
```

### addClass :
Additional classes to be added to the notice. (For custom styling.)
```php 
$flasher->addClass(string $addClass)
```

### cornerClass :
Class to be added to the notice for corner styling.
```php 
$flasher->cornerClass(string $cornerClass)
```

### autoDisplay :
Display the notice when it is created. Turn this off to add notifications to the history without displaying them.
```php 
$flasher->autoDisplay(bool $autoDisplay = true)
```

### width :
Width of the notice.
```php 
$flasher->width(int $width)
```

### minHeight :
Minimum height of the notice. It will expand to fit content.
```php 
$flasher->minHeight(int $minHeight)
```

### icon :
Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own
icon class.
```php 
$flasher->icon(bool $icon = true)
```

### animation :
The animation to use when displaying and hiding the notice. "none" and "fade" are supported through CSS. Others
are supported through the Animate module and Animate.css.
```php 
$flasher->animation(string $animation)
```

### animateSpeed :
Speed at which the notice animates in and out. "slow", "normal", or "fast". Respectively, 400ms, 250ms, 100ms.
```php 
$flasher->animateSpeed(string $animateSpeed)
```

### shadow :
Display a drop shadow.
```php 
$flasher->shadow(bool $shadow = true)
```

### hide :
After a delay, remove the notice.
```php 
$flasher->hide(bool $hide = true)
```

### timer :
Delay in milliseconds before the notice is removed.
```php 
$flasher->timer(int $timer)
```

### mouseReset :
Reset the hide timer if the mouse moves over the notice.
```php 
$flasher->mouseReset(bool $mouseReset = true)
```

### remove :
Remove the notice's elements from the DOM after it is removed.
```php 
$flasher->remove(bool $remove = true)
```

### insertBrs :
Change new lines to br tags.
```php 
$flasher->insertBrs(bool $insertBrs = true)
```

### destroy :
Whether to remove the notice from the global array when it is closed.
```php 
$flasher->destroy(bool $destroy = true)
```

### desktop :
Desktop Module
```php 
$flasher->desktop(string $desktop, mixed $value)
```

### buttons :
Buttons Module
```php 
$flasher->buttons(string $buttons, mixed $value)
```

### nonblock :
NonBlock Module
```php 
$flasher->nonblock(string $nonblock, mixed $value)
```

### mobile :
Mobile Module
```php 
$flasher->mobile(string $mobile, mixed $value)
```

### animate :
Animate Module
```php 
$flasher->animate(string $animate, mixed $value)
```

### confirm :
Confirm Module
```php 
$flasher->confirm(string $confirm, mixed $value)
```

### history :
History Module
```php
$flasher->history(string $history, mixed $value) 
```
