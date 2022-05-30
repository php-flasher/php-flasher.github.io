---
permalink: /docs/adapter/pnotify/
title: Pnotify adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
---

## <i class="fa-duotone fa-list-radio"></i> Installation

For more information about Pnotify click <a href="https://sciactive.com/pnotify/">here</a>.

**For Vanilla PHP:**
```shell
composer require php-flasher/flasher-pnotify
```

**For Laravel:**
```shell
composer require php-flasher/flasher-pnotify-laravel
```

**For Symfony:**
```shell
composer require php-flasher/flasher-pnotify-symfony
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Just instantiate the `PnotifyFactory` and start calling build methods

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

---

## <i class="fa-duotone fa-list-radio"></i> Pnotify specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `PnotifyFactory`

---

<p id="method-title"><a href="#method-title" class="anchor"><i class="fa-duotone fa-link"></i> title</a></p>

The notice's title.
```php 
$flasher->title(bool|string $title)
```

---

<p id="method-titleEscape"><a href="#method-titleEscape" class="anchor"><i class="fa-duotone fa-link"></i> titleEscape</a></p>

Whether to escape the content of the title. (Not allow HTML.)
```php
$flasher->titleEscape(bool $titleEscape = true)
```

---

<p id="method-text"><a href="#method-text" class="anchor"><i class="fa-duotone fa-link"></i> text</a></p>

The notice's text.
```php 
$flasher->text(string $text)
```

---

<p id="method-textEscape"><a href="#method-textEscape" class="anchor"><i class="fa-duotone fa-link"></i> textEscape</a></p>
 
Whether to escape the content of the text. (Not allow HTML.)
```php 
$flasher->textEscape(bool $textEscape = true)
```

---

<p id="method-styling"><a href="#method-styling" class="anchor"><i class="fa-duotone fa-link"></i> styling</a></p>

What styling classes to use. (Can be either "brighttheme", "bootstrap3", "fontawesome", or a custom style object.
See the source in the end of pnotify.js for the properties in a style object.)
```php 
$flasher->styling(string $styling)
```

---

<p id="method-addClass"><a href="#method-addClass" class="anchor"><i class="fa-duotone fa-link"></i> addClass</a></p>

Additional classes to be added to the notice. (For custom styling.)
```php 
$flasher->addClass(string $addClass)
```

---

<p id="method-cornerClass"><a href="#method-cornerClass" class="anchor"><i class="fa-duotone fa-link"></i> cornerClass</a></p>

Class to be added to the notice for corner styling.
```php 
$flasher->cornerClass(string $cornerClass)
```

---

<p id="method-autoDisplay"><a href="#method-autoDisplay" class="anchor"><i class="fa-duotone fa-link"></i> autoDisplay</a></p>

Display the notice when it is created. Turn this off to add notifications to the history without displaying them.
```php 
$flasher->autoDisplay(bool $autoDisplay = true)
```

---

<p id="method-width"><a href="#method-width" class="anchor"><i class="fa-duotone fa-link"></i> width</a></p>

Width of the notice.
```php 
$flasher->width(int $width)
```

---

<p id="method-minHeight"><a href="#method-minHeight" class="anchor"><i class="fa-duotone fa-link"></i> minHeight</a></p>

Minimum height of the notice. It will expand to fit content.
```php 
$flasher->minHeight(int $minHeight)
```

---

<p id="method-icon"><a href="#method-icon" class="anchor"><i class="fa-duotone fa-link"></i> icon</a></p>

Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own
icon class.
```php 
$flasher->icon(bool $icon = true)
```

---

<p id="method-animation"><a href="#method-animation" class="anchor"><i class="fa-duotone fa-link"></i> animation</a></p>

The animation to use when displaying and hiding the notice. "none" and "fade" are supported through CSS. Others
are supported through the Animate module and Animate.css.
```php 
$flasher->animation(string $animation)
```

---

<p id="method-animateSpeed"><a href="#method-animateSpeed" class="anchor"><i class="fa-duotone fa-link"></i> animateSpeed</a></p>

Speed at which the notice animates in and out. "slow", "normal", or "fast". Respectively, 400ms, 250ms, 100ms.
```php 
$flasher->animateSpeed(string $animateSpeed)
```

---

<p id="method-shadow"><a href="#method-shadow" class="anchor"><i class="fa-duotone fa-link"></i> shadow</a></p>

Display a drop shadow.
```php 
$flasher->shadow(bool $shadow = true)
```

---

<p id="method-hide"><a href="#method-hide" class="anchor"><i class="fa-duotone fa-link"></i> hide</a></p>

After a delay, remove the notice.
```php 
$flasher->hide(bool $hide = true)
```

---

<p id="method-timer"><a href="#method-timer" class="anchor"><i class="fa-duotone fa-link"></i> timer</a></p>

Delay in milliseconds before the notice is removed.
```php 
$flasher->timer(int $timer)
```

---

<p id="method-mouseReset"><a href="#method-mouseReset" class="anchor"><i class="fa-duotone fa-link"></i> mouseReset</a></p>

Reset the hide timer if the mouse moves over the notice.
```php 
$flasher->mouseReset(bool $mouseReset = true)
```

---

<p id="method-remove"><a href="#method-remove" class="anchor"><i class="fa-duotone fa-link"></i> remove</a></p>

Remove the notice's elements from the DOM after it is removed.
```php 
$flasher->remove(bool $remove = true)
```

---

<p id="method-insertBrs"><a href="#method-insertBrs" class="anchor"><i class="fa-duotone fa-link"></i> insertBrs</a></p>

Change new lines to br tags.
```php 
$flasher->insertBrs(bool $insertBrs = true)
```

---

<p id="method-destroy"><a href="#method-destroy" class="anchor"><i class="fa-duotone fa-link"></i> destroy</a></p>

Whether to remove the notice from the global array when it is closed.
```php 
$flasher->destroy(bool $destroy = true)
```

---

<p id="method-desktop"><a href="#method-desktop" class="anchor"><i class="fa-duotone fa-link"></i> desktop</a></p>

Desktop Module
```php 
$flasher->desktop(string $desktop, mixed $value)
```

---

<p id="method-buttons"><a href="#method-buttons" class="anchor"><i class="fa-duotone fa-link"></i> buttons</a></p>

Buttons Module
```php 
$flasher->buttons(string $buttons, mixed $value)
```

---

<p id="method-nonblock"><a href="#method-nonblock" class="anchor"><i class="fa-duotone fa-link"></i> nonblock</a></p>

NonBlock Module
```php 
$flasher->nonblock(string $nonblock, mixed $value)
```

---

<p id="method-mobile"><a href="#method-mobile" class="anchor"><i class="fa-duotone fa-link"></i> mobile</a></p>

Mobile Module
```php 
$flasher->mobile(string $mobile, mixed $value)
```

---

<p id="method-animate"><a href="#method-animate" class="anchor"><i class="fa-duotone fa-link"></i> animate</a></p>

Animate Module
```php 
$flasher->animate(string $animate, mixed $value)
```

---

<p id="method-confirm"><a href="#method-confirm" class="anchor"><i class="fa-duotone fa-link"></i> confirm</a></p>

Confirm Module
```php 
$flasher->confirm(string $confirm, mixed $value)
```

---

<p id="method-history"><a href="#method-history" class="anchor"><i class="fa-duotone fa-link"></i> history</a></p>

History Module
```php
$flasher->history(string $history, mixed $value) 
```
