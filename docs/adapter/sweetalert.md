---
permalink: /docs/adapter/sweetalert/
title: Sweet Alert 2 adapter for PHP flasher
published_at: 2020-11-28
updated_at: 2022-05-08
---

For more information about Sweet Alert 2 click <a href="https://sweetalert2.github.io/">here</a>.

# Installation

**For Vanilla PHP:**
<pre class="snippet"><code>composer require php-flasher/flasher-sweetalert</code></pre>

**For Laravel:**
<pre class="snippet"><code>composer require php-flasher/flasher-sweetalert-laravel</code></pre>

**For Symfony:**
<pre class="snippet"><code>composer require php-flasher/flasher-sweetalert-symfony</code></pre>

# Usage

Just grave an instance of `SweetAlertFactory` and start calling build methods

```php
namespace App\Controller;

use Flasher\SweetAlert\Prime\SweetAlertFactory;

class NotifyController
{
    public function flasher(SweetAlertFactory $flasher)
    {
        // ... 
        $flasher->addSuccess('Data has been saved successfully!');
        
        // ... redirect or render a view here
    }
}    
```
## Sweet Alert specific method builders

All methods in the **[Usage](/docs/usage/)** section are available also for `SweetAlertFactory`


### question :
Display a question typed alert message
```php
$flasher->question(string $message = null, array $options = array())
```

### title :
The title of the popup, as HTML.
```php
$flasher->title(string $title)
```

### titleText :

The title of the popup, as text. Useful to avoid HTML injection.
```php
$flasher->titleText(string $titleText)
```

### html :
A HTML description for the popup.
```php
$flasher->html(string $html)
```

### text :
A description for the popup. If "text" and "html" parameters are provided in the same time, "text" will be used.
```php
$flasher->text(string $text)
```

### icon :
The icon of the popup. SweetAlert2 comes with 5 built-in icon which will show a corresponding icon animation:
warning, error, success, info, and question. It can either be put in the array under the key "icon" or passed as
the third parameter of the function.
```php
$flasher->icon(string $icon)
```

### iconColor :
Use this to change the color of the icon.
```php
$flasher->iconColor(string $iconColor)
```

### iconHtml :
The custom HTML content for an icon.
```php
$flasher->iconHtml(string $iconHtml)
```

### showClass :
CSS classes for animations when showing a popup (fade in)
```php
$flasher->showClass(string $showClass, string $value)
```

### hideClass :
CSS classes for animations when hiding a popup (fade out)
```php
$flasher->hideClass(string $hideClass, string $value)
```

### footer :
The footer of the popup. Can be either plain text or HTML.
```php
$flasher->footer($footer)
```

### backdrop :
Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop. Can be either a boolean or a
string which will be assigned to the CSS background property.
```php
$flasher->backdrop(bool $backdrop = true)
```

### toast :
Whether or not an alert should be treated as a toast notification. This option is normally coupled with the
position parameter and a timer. Toasts are NEVER autofocused.
```php
$flasher->toast(bool $toast = true, string $position = 'top-end', bool $showConfirmButton = false)
```

### target :
The container element for adding popup into.
```php
$flasher->target(string $target)
```

### input :
Input field type, can be text, email, password, number, tel, range, textarea, select, radio, checkbox, file and url.
```php
$flasher->input(string $input)
```

### width :
Popup window width, including paddings (box-sizing: border-box). Can be in px or %. The default width is 32rem.
```php
$flasher->width(string $width)
```

### padding :
Popup window padding. The default padding is 1.25rem.
```php
$flasher->padding(string $padding)
```

### background :
Popup window background (CSS background property). The default background is '#fff'.
```php
$flasher->background(string $background)
```

### position :
 Popup window position, can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
```php
$flasher->position(string $position)
```

### grow :
Paired with window position, sets the direction the popup should grow in, can be set to 'row', 'column', 'fullscreen', or false.
```php
$flasher->grow(bool|string $grow)
```

### customClass :
A custom CSS class for the popup
```php
$flasher->customClass(string $customClass, string $value)
```

### timer :
Auto close timer of the popup. Set in ms (milliseconds).
```php
$flasher->timer(int $timer)
```

### timerProgressBar :
If set to true, the timer will have a progress bar at the bottom of a popup. Mostly, this feature is useful with toasts.
```php
$flasher->timerProgressBar(bool $timerProgressBar = true)
```

### heightAuto :
By default, SweetAlert2 sets html's and body's CSS height to auto !important. If this behavior isn't compatible with your project's layout, set heightAuto to false.
```php
$flasher->heightAuto(bool $heightAuto = true)
```

### allowOutsideClick :
If set to false, the user can't dismiss the popup by clicking outside it. You can also pass a custom function
returning a boolean value, e.g. if you want to disable outside clicks for the loading state of a popup.
```php
$flasher->allowOutsideClick(bool|string $allowOutsideClick = true)
```

### allowEscapeKey :
If set to false, the user can't dismiss the popup by pressing the Esc key. You can also pass a custom function
returning a boolean value, e.g. if you want to disable the Esc key for the loading state of a popup.
```php
$flasher->allowEscapeKey(bool $allowEscapeKey = true)
```

### allowEnterKey :
 If set to false, the user can't confirm the popup by pressing the Enter or Space keys, unless they manually focus
the confirm button. You can also pass a custom function returning a boolean value.
```php
$flasher->allowEnterKey(bool $allowEnterKey = true)
```

### stopKeydownPropagation :
If set to false, SweetAlert2 will allow keydown events propagation to the document.
```php
$flasher->stopKeydownPropagation(bool $stopKeydownPropagation = true)
```

### keydownListenerCapture :
Useful for those who are using SweetAlert2 along with Bootstrap modals. By default keydownListenerCapture is
false which means when a user hits Esc, both SweetAlert2 and Bootstrap modals will be closed. Set
keydownListenerCapture to true to fix that behavior.
```php
$flasher->keydownListenerCapture(bool $keydownListenerCapture = true)
```

### showConfirmButton :
If set to false, a "Confirm"-button will not be shown.
```php
$flasher->showConfirmButton(bool $showConfirmButton = true, string $confirmButtonText = null, string $confirmButtonColor = null, string $confirmButtonAriaLabel = null)
```

### showDenyButton :
If set to true, a "Deny"-button will be shown. It can be useful when you want a popup with 3 buttons.
```php
$flasher->showDenyButton(bool $showDenyButton = true, string $denyButtonText = null, string $denyButtonColor = null, string $denyButtonAriaLabel = null)
```

### showCancelButton :
If set to true, a "Cancel"-button will be shown, which the user can click on to dismiss the modal.
```php
$flasher->showCancelButton(bool $showCancelButton = true, string $cancelButtonText = null, string $cancelButtonColor = null, string $cancelButtonAriaLabel = null)
```

### confirmButtonText : 
Use this to change the text on the "Confirm"-button.
```php
$flasher->confirmButtonText(string $confirmButtonText, string $confirmButtonColor = null, string $confirmButtonAriaLabel = null)
```

### denyButtonText :
Use this to change the text on the "Deny"-button.
```php
$flasher->denyButtonText(string $denyButtonText, string $denyButtonColor = null, string $denyButtonAriaLabel = null)
```

### cancelButtonText :
Use this to change the text on the "Cancel"-button.
```php
$flasher->cancelButtonText(string $cancelButtonText, string $cancelButtonColor = null, string $cancelButtonAriaLabel = null)
```

### confirmButtonColor :
Use this to change the background color of the "Confirm"-button. The default color is #3085d6
```php
$flasher->confirmButtonColor(string $confirmButtonColor)
```

### denyButtonColor :
Use this to change the background color of the "Deny"-button. The default color is #dd6b55
```php
$flasher->denyButtonColor(string $denyButtonColor)
```

### cancelButtonColor :
Use this to change the background color of the "Cancel"-button. The default color is #aaa
```php
$flasher->cancelButtonColor(string $cancelButtonColor)
```

### confirmButtonAriaLabel :
Use this to change the aria-label for the "Confirm"-button.
```php
$flasher->confirmButtonAriaLabel(string $confirmButtonAriaLabel)
```

### denyButtonAriaLabel :
Use this to change the aria-label for the "Deny"-button.
```php
$flasher->denyButtonAriaLabel(string $denyButtonAriaLabel)
```

### cancelButtonAriaLabel :
Use this to change the aria-label for the "Cancel"-button.
```php
$flasher->cancelButtonAriaLabel(string $cancelButtonAriaLabel)
```

### buttonsStyling :
Apply default styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this parameter to false.
```php
$flasher->buttonsStyling(bool $buttonsStyling = true)
```

### reverseButtons :
Set to true if you want to invert default buttons positions ("Confirm"-button on the right side).
```php
$flasher->reverseButtons(bool $reverseButtons = true)
```

### focusConfirm :
Set to false if you want to focus the first element in tab order instead of "Confirm"-button by default.
```php
$flasher->focusConfirm(bool $focusConfirm = true)
```

### focusDeny :
Set to true if you want to focus the "Deny"-button by default.
```php
$flasher->focusDeny(bool $focusDeny = true)
```

### focusCancel :
Set to true if you want to focus the "Cancel"-button by default.
```php
$flasher->focusCancel(bool $focusCancel = true)
```

### showCloseButton :
Set to true to show close button in top right corner of the popup.
```php
$flasher->showCloseButton(bool $showCloseButton = true)
```

### closeButtonHtml :
Use this to change the content of the close button.
```php
$flasher->closeButtonHtml(string $closeButtonHtml)
```

### closeButtonAriaLabel :
Use this to change the aria-label for the close button.
```php
$flasher->closeButtonAriaLabel(string $closeButtonAriaLabel)
```

### loaderHtml :
Use this to change the HTML content of the loader.
```php
$flasher->loaderHtml(string $loaderHtml)
```

### showLoaderOnConfirm :
Set to true to disable buttons and show that something is loading. Use it in combination with the preConfirm parameter.
```php
$flasher->showLoaderOnConfirm(bool $showLoaderOnConfirm = true)
```

### scrollbarPadding :
Set to false to disable body padding adjustment when the page scrollbar gets hidden while the popup is shown
```php
$flasher->scrollbarPadding(bool $scrollbarPadding = true)
```

### preConfirm :
Function to execute before confirming, may be async (Promise-returning) or sync.
Returned (or resolved) value can be:
 - false to prevent a popup from closing
 - anything else to pass that value as the result.value of Swal.fire()
 - undefined to keep the default result.value
```php
$flasher->preConfirm(bool|string $preConfirm)
```

### preDeny :
Function to execute before denying, may be async (Promise-returning) or sync.
Returned (or resolved) value can be:
 - false to prevent a popup from closing
 - anything else to pass that value as the result.value of Swal.fire()
 - undefined to keep the default result.value
```php
$flasher->preDeny(string $preDeny)
```

### returnInputValueOnDeny :
If you want to return the input value as result.value when denying the popup, set to true. Otherwise, the denying
will set result.value to false.
```php
$flasher->returnInputValueOnDeny(bool $returnInputValueOnDeny = true)
```

### imageUrl :
Add a customized icon for the popup. Should contain a string with the path or URL to the image.
```php
$flasher->imageUrl(string $imageUrl, int $imageWidth = null, int $imageHeight = null, string $imageAlt = null)
```

### imageWidth :
If imageUrl is set, you can specify imageWidth to describes image width in px.
```php
$flasher->imageWidth(int $imageWidth)
```

### imageHeight :
Custom int height in px.
```php
$flasher->imageHeight(int $imageHeight)
```

### imageAlt :
An alternative text for the custom image icon.
```php
$flasher->imageAlt(string $imageAlt)
```

### image :
```php
$flasher->image(string $title, string $text, string $imageUrl, int $imageWidth = 400, int $imageHeight = 200, string $imageAlt = null)
```

### addImage :
Shortcut to add and flush an image
```php
$flasher->addImage(string $title, string $text, string $imageUrl, int $imageWidth = 400, int $imageHeight = 200, string $imageAlt = null)
```

### inputLabel :
Input field label.
```php
$flasher->inputLabel(string $inputLabel)
```

### inputPlaceholder :
Input field placeholder.
```php
$flasher->inputPlaceholder(string $inputPlaceholder)
```

### inputValue :
Input field initial value.
 - If the input type is select, inputValue will represent the selected <option> tag.
 - If the input type is checkbox, inputValue will represent the checked state.
 - If the input type is text, email, number, tel or textarea a Promise can be accepted as inputValue.
```php
$flasher->inputValue(string $inputValue)
```

### inputOptions :
If input parameter is set to "select" or "radio", you can provide options. Can be a Map or a plain object, with
keys that represent option values and values that represent option text. You can also provide plain object or Map
as values that will represented a group of options, being the label of this <optgroup> the key. Finally, you can
also provide a Promise that resolves with one of those types.
```php
$flasher->inputOptions(string $inputOptions)
```

### inputAutoTrim :
Automatically remove whitespaces from both ends of a result string. Set this parameter to false to disable auto-trimming.
```php
$flasher->inputAutoTrim(bool $inputAutoTrim = true)
```

### inputAttributes :
HTML input attributes (e.g. min, max, autocomplete, accept), that are added to the input field. Object keys will
represent attributes names, object values will represent attributes values.
```php
$flasher->inputAttributes(string $inputAttributes)
```

### inputValidator :
Validator for input field, may be async (Promise-returning) or sync.
Returned (or resolved) value can be:
 - a falsy value (undefined, null, false) for indicating success
 - a string value (error message) for indicating failure

```php
$flasher->inputValidator(string $inputValidator)
```

### validationMessage :
A custom validation message for default validators (email, url).
```php
$flasher->validationMessage(string $validationMessage)
```
