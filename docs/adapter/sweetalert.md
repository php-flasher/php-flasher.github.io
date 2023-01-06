---
permalink: /docs/adapter/sweetalert/
title: Sweet Alert 2 adapter for PHP flasher
handler: sweetalert
---

For more information about Sweet Alert 2 click <a href="https://sweetalert2.github.io/">here</a>.

## <i class="fa-duotone fa-list-radio"></i> Installation

**For Vanilla PHP:**
```shell
composer require php-flasher/flasher-sweetalert
```

**For Laravel:**
```shell
composer require php-flasher/flasher-sweetalert-laravel
```

**For Symfony:**
```shell
composer require php-flasher/flasher-sweetalert-symfony
```

--- 

## <i class="fa-duotone fa-list-radio"></i> Usage

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

--- 

## <i class="fa-duotone fa-list-radio"></i> Fluent Builder methods

All methods in the **[Usage](/docs/usage/)** section are available also for `SweetAlertFactory`

---

<p id="method-question"><a href="#method-question" class="anchor"><i class="fa-duotone fa-link"></i> question</a></p>

Display a question typed alert message
```php
$flasher->question(string $message = null, array $options = array())
```

---

<p id="method-title"><a href="#method-title" class="anchor"><i class="fa-duotone fa-link"></i> title</a></p>

The title of the popup, as HTML.
```php
$flasher->title(string $title)
```

---

<p id="method-titleText"><a href="#method-titleText" class="anchor"><i class="fa-duotone fa-link"></i> titleText</a></p>

The title of the popup, as text. Useful to avoid HTML injection.
```php
$flasher->titleText(string $titleText)
```

---

<p id="method-html"><a href="#method-html" class="anchor"><i class="fa-duotone fa-link"></i> html</a></p>

A HTML description for the popup.
```php
$flasher->html(string $html)
```

---

<p id="method-text"><a href="#method-text" class="anchor"><i class="fa-duotone fa-link"></i> text</a></p>

A description for the popup. If "text" and "html" parameters are provided in the same time, "text" will be used.
```php
$flasher->text(string $text)
```

---

<p id="method-icon"><a href="#method-icon" class="anchor"><i class="fa-duotone fa-link"></i> icon</a></p>

The icon of the popup. SweetAlert2 comes with 5 built-in icon which will show a corresponding icon animation:
warning, error, success, info, and question. It can either be put in the array under the key "icon" or passed as
the third parameter of the function.
```php
$flasher->icon(string $icon)
```

---

<p id="method-iconColor"><a href="#method-iconColor" class="anchor"><i class="fa-duotone fa-link"></i> iconColor</a></p>

Use this to change the color of the icon.
```php
$flasher->iconColor(string $iconColor)
```

---

<p id="method-iconHtml"><a href="#method-iconHtml" class="anchor"><i class="fa-duotone fa-link"></i> iconHtml</a></p>

The custom HTML content for an icon.
```php
$flasher->iconHtml(string $iconHtml)
```

---

<p id="method-showClass"><a href="#method-showClass" class="anchor"><i class="fa-duotone fa-link"></i> showClass</a></p>

CSS classes for animations when showing a popup (fade in)
```php
$flasher->showClass(string $showClass, string $value)
```

---

<p id="method-hideClass"><a href="#method-hideClass" class="anchor"><i class="fa-duotone fa-link"></i> hideClass</a></p>

CSS classes for animations when hiding a popup (fade out)
```php
$flasher->hideClass(string $hideClass, string $value)
```

---

<p id="method-footer"><a href="#method-footer" class="anchor"><i class="fa-duotone fa-link"></i> footer</a></p>

The footer of the popup. Can be either plain text or HTML.
```php
$flasher->footer($footer)
```

---

<p id="method-backdrop"><a href="#method-backdrop" class="anchor"><i class="fa-duotone fa-link"></i> backdrop</a></p>

Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop. Can be either a boolean or a
string which will be assigned to the CSS background property.
```php
$flasher->backdrop(bool $backdrop = true)
```

---

<p id="method-toast"><a href="#method-toast" class="anchor"><i class="fa-duotone fa-link"></i> toast</a></p>

Whether or not an alert should be treated as a toast notification. This option is normally coupled with the
position parameter and a timer. Toasts are NEVER autofocused.
```php
$flasher->toast(bool $toast = true, string $position = 'top-end', bool $showConfirmButton = false)
```

---

<p id="method-target"><a href="#method-target" class="anchor"><i class="fa-duotone fa-link"></i> target</a></p>

The container element for adding popup into.
```php
$flasher->target(string $target)
```

---

<p id="method-input"><a href="#method-input" class="anchor"><i class="fa-duotone fa-link"></i> input</a></p>

Input field type, can be text, email, password, number, tel, range, textarea, select, radio, checkbox, file and url.
```php
$flasher->input(string $input)
```

---

<p id="method-width"><a href="#method-width" class="anchor"><i class="fa-duotone fa-link"></i> width</a></p>

Popup window width, including paddings (box-sizing: border-box). Can be in px or %. The default width is 32rem.
```php
$flasher->width(string $width)
```

---

<p id="method-padding"><a href="#method-padding" class="anchor"><i class="fa-duotone fa-link"></i> padding</a></p>

Popup window padding. The default padding is 1.25rem.
```php
$flasher->padding(string $padding)
```

---

<p id="method-background"><a href="#method-background" class="anchor"><i class="fa-duotone fa-link"></i> background</a></p>

Popup window background (CSS background property). The default background is '#fff'.
```php
$flasher->background(string $background)
```

---

<p id="method-position"><a href="#method-position" class="anchor"><i class="fa-duotone fa-link"></i> position</a></p>

 Popup window position, can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
```php
$flasher->position(string $position)
```

---

<p id="method-grow"><a href="#method-grow" class="anchor"><i class="fa-duotone fa-link"></i> grow</a></p>

Paired with window position, sets the direction the popup should grow in, can be set to 'row', 'column', 'fullscreen', or false.
```php
$flasher->grow(bool|string $grow)
```

---

<p id="method-customClass"><a href="#method-customClass" class="anchor"><i class="fa-duotone fa-link"></i> customClass</a></p>

A custom CSS class for the popup
```php
$flasher->customClass(string $customClass, string $value)
```

---

<p id="method-timer"><a href="#method-timer" class="anchor"><i class="fa-duotone fa-link"></i> timer</a></p>

Auto close timer of the popup. Set in ms (milliseconds).
```php
$flasher->timer(int $timer)
```

---

<p id="method-timerProgressBar"><a href="#method-timerProgressBar" class="anchor"><i class="fa-duotone fa-link"></i> timerProgressBar</a></p>

If set to true, the timer will have a progress bar at the bottom of a popup. Mostly, this feature is useful with toasts.
```php
$flasher->timerProgressBar(bool $timerProgressBar = true)
```

---

<p id="method-heightAuto"><a href="#method-heightAuto" class="anchor"><i class="fa-duotone fa-link"></i> heightAuto</a></p>

By default, SweetAlert2 sets html's and body's CSS height to auto !important. If this behavior isn't compatible with your project's layout, set heightAuto to false.
```php
$flasher->heightAuto(bool $heightAuto = true)
```

---

<p id="method-allowOutsideClick"><a href="#method-allowOutsideClick" class="anchor"><i class="fa-duotone fa-link"></i> allowOutsideClick</a></p>

If set to false, the user can't dismiss the popup by clicking outside it. You can also pass a custom function
returning a boolean value, e.g. if you want to disable outside clicks for the loading state of a popup.
```php
$flasher->allowOutsideClick(bool|string $allowOutsideClick = true)
```

---

<p id="method-allowEscapeKey"><a href="#method-allowEscapeKey" class="anchor"><i class="fa-duotone fa-link"></i> allowEscapeKey</a></p>

If set to false, the user can't dismiss the popup by pressing the Esc key. You can also pass a custom function
returning a boolean value, e.g. if you want to disable the Esc key for the loading state of a popup.
```php
$flasher->allowEscapeKey(bool $allowEscapeKey = true)
```

---

<p id="method-allowEnterKey"><a href="#method-allowEnterKey" class="anchor"><i class="fa-duotone fa-link"></i> allowEnterKey</a></p>

 If set to false, the user can't confirm the popup by pressing the Enter or Space keys, unless they manually focus
the confirm button. You can also pass a custom function returning a boolean value.
```php
$flasher->allowEnterKey(bool $allowEnterKey = true)
```

---

<p id="method-stopKeydownPropagation"><a href="#method-stopKeydownPropagation" class="anchor"><i class="fa-duotone fa-link"></i> stopKeydownPropagation</a></p>

If set to false, SweetAlert2 will allow keydown events propagation to the document.
```php
$flasher->stopKeydownPropagation(bool $stopKeydownPropagation = true)
```

---

<p id="method-keydownListenerCapture"><a href="#method-keydownListenerCapture" class="anchor"><i class="fa-duotone fa-link"></i> keydownListenerCapture</a></p>

Useful for those who are using SweetAlert2 along with Bootstrap modals. By default keydownListenerCapture is
false which means when a user hits Esc, both SweetAlert2 and Bootstrap modals will be closed. Set
keydownListenerCapture to true to fix that behavior.
```php
$flasher->keydownListenerCapture(bool $keydownListenerCapture = true)
```

---

<p id="method-showConfirmButton"><a href="#method-showConfirmButton" class="anchor"><i class="fa-duotone fa-link"></i> showConfirmButton</a></p>

If set to false, a "Confirm"-button will not be shown.
```php
$flasher->showConfirmButton(
    bool $showConfirmButton = true, 
    string $confirmButtonText = null, 
    string $confirmButtonColor = null, 
    string $confirmButtonAriaLabel = null
)
```

---

<p id="method-showDenyButton"><a href="#method-showDenyButton" class="anchor"><i class="fa-duotone fa-link"></i> showDenyButton</a></p>

If set to true, a "Deny"-button will be shown. It can be useful when you want a popup with 3 buttons.
```php
$flasher->showDenyButton(
    bool $showDenyButton = true, 
    string $denyButtonText = null, 
    string $denyButtonColor = null, 
    string $denyButtonAriaLabel = null
)
```

---

<p id="method-showCancelButton"><a href="#method-showCancelButton" class="anchor"><i class="fa-duotone fa-link"></i> showCancelButton</a></p>

If set to true, a "Cancel"-button will be shown, which the user can click on to dismiss the modal.
```php
$flasher->showCancelButton(
    bool $showCancelButton = true,
    string $cancelButtonText = null,
    string $cancelButtonColor = null,
    string $cancelButtonAriaLabel = null
)
```

---

<p id="method-confirmButtonText"><a href="#method-confirmButtonText" class="anchor"><i class="fa-duotone fa-link"></i> confirmButtonText</a></p>

Use this to change the text on the "Confirm"-button.
```php
$flasher->confirmButtonText(
    string $confirmButtonText,
    string $confirmButtonColor = null,
    string $confirmButtonAriaLabel = null
)
```

---

<p id="method-denyButtonText"><a href="#method-denyButtonText" class="anchor"><i class="fa-duotone fa-link"></i> denyButtonText</a></p>

Use this to change the text on the "Deny"-button.
```php
$flasher->denyButtonText(
    string $denyButtonText,
    string $denyButtonColor = null,
    string $denyButtonAriaLabel = null
)
```

---

<p id="method-cancelButtonText"><a href="#method-cancelButtonText" class="anchor"><i class="fa-duotone fa-link"></i> cancelButtonText</a></p>

Use this to change the text on the "Cancel"-button.
```php
$flasher->cancelButtonText(
    string $cancelButtonText,
    string $cancelButtonColor = null,
    string $cancelButtonAriaLabel = null
)
```

---

<p id="method-confirmButtonColor"><a href="#method-confirmButtonColor" class="anchor"><i class="fa-duotone fa-link"></i> confirmButtonColor</a></p>

Use this to change the background color of the "Confirm"-button. The default color is #3085d6
```php
$flasher->confirmButtonColor(string $confirmButtonColor)
```

---

<p id="method-denyButtonColor"><a href="#method-denyButtonColor" class="anchor"><i class="fa-duotone fa-link"></i> denyButtonColor</a></p>

Use this to change the background color of the "Deny"-button. The default color is #dd6b55
```php
$flasher->denyButtonColor(string $denyButtonColor)
```

---

<p id="method-cancelButtonColor"><a href="#method-cancelButtonColor" class="anchor"><i class="fa-duotone fa-link"></i> cancelButtonColor</a></p>

Use this to change the background color of the "Cancel"-button. The default color is #aaa
```php
$flasher->cancelButtonColor(string $cancelButtonColor)
```

---

<p id="method-confirmButtonAriaLabel"><a href="#method-confirmButtonAriaLabel" class="anchor"><i class="fa-duotone fa-link"></i> confirmButtonAriaLabel</a></p>

Use this to change the aria-label for the "Confirm"-button.
```php
$flasher->confirmButtonAriaLabel(string $confirmButtonAriaLabel)
```

---

<p id="method-denyButtonAriaLabel"><a href="#method-denyButtonAriaLabel" class="anchor"><i class="fa-duotone fa-link"></i> denyButtonAriaLabel</a></p>

Use this to change the aria-label for the "Deny"-button.
```php
$flasher->denyButtonAriaLabel(string $denyButtonAriaLabel)
```

---

<p id="method-cancelButtonAriaLabel"><a href="#method-cancelButtonAriaLabel" class="anchor"><i class="fa-duotone fa-link"></i> cancelButtonAriaLabel</a></p>

Use this to change the aria-label for the "Cancel"-button.
```php
$flasher->cancelButtonAriaLabel(string $cancelButtonAriaLabel)
```

---

<p id="method-buttonsStyling"><a href="#method-buttonsStyling" class="anchor"><i class="fa-duotone fa-link"></i> buttonsStyling</a></p>

Apply default styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this parameter to false.
```php
$flasher->buttonsStyling(bool $buttonsStyling = true)
```

---

<p id="method-reverseButtons"><a href="#method-reverseButtons" class="anchor"><i class="fa-duotone fa-link"></i> reverseButtons</a></p>

Set to true if you want to invert default buttons positions ("Confirm"-button on the right side).
```php
$flasher->reverseButtons(bool $reverseButtons = true)
```

---

<p id="method-focusConfirm"><a href="#method-focusConfirm" class="anchor"><i class="fa-duotone fa-link"></i> focusConfirm</a></p>

Set to false if you want to focus the first element in tab order instead of "Confirm"-button by default.
```php
$flasher->focusConfirm(bool $focusConfirm = true)
```

---

<p id="method-focusDeny"><a href="#method-focusDeny" class="anchor"><i class="fa-duotone fa-link"></i> focusDeny</a></p>

Set to true if you want to focus the "Deny"-button by default.
```php
$flasher->focusDeny(bool $focusDeny = true)
```

---

<p id="method-focusCancel"><a href="#method-focusCancel" class="anchor"><i class="fa-duotone fa-link"></i> focusCancel</a></p>

Set to true if you want to focus the "Cancel"-button by default.
```php
$flasher->focusCancel(bool $focusCancel = true)
```

---

<p id="method-showCloseButton"><a href="#method-showCloseButton" class="anchor"><i class="fa-duotone fa-link"></i> showCloseButton</a></p>

Set to true to show close button in top right corner of the popup.
```php
$flasher->showCloseButton(bool $showCloseButton = true)
```

---

<p id="method-closeButtonHtml"><a href="#method-closeButtonHtml" class="anchor"><i class="fa-duotone fa-link"></i> closeButtonHtml</a></p>

Use this to change the content of the close button.
```php
$flasher->closeButtonHtml(string $closeButtonHtml)
```

---

<p id="method-closeButtonAriaLabel"><a href="#method-closeButtonAriaLabel" class="anchor"><i class="fa-duotone fa-link"></i> closeButtonAriaLabel</a></p>

Use this to change the aria-label for the close button.
```php
$flasher->closeButtonAriaLabel(string $closeButtonAriaLabel)
```

---

<p id="method-loaderHtml"><a href="#method-loaderHtml" class="anchor"><i class="fa-duotone fa-link"></i> loaderHtml</a></p>

Use this to change the HTML content of the loader.
```php
$flasher->loaderHtml(string $loaderHtml)
```

---

<p id="method-showLoaderOnConfirm"><a href="#method-showLoaderOnConfirm" class="anchor"><i class="fa-duotone fa-link"></i> showLoaderOnConfirm</a></p>

Set to true to disable buttons and show that something is loading. Use it in combination with the preConfirm parameter.
```php
$flasher->showLoaderOnConfirm(bool $showLoaderOnConfirm = true)
```

---

<p id="method-scrollbarPadding"><a href="#method-scrollbarPadding" class="anchor"><i class="fa-duotone fa-link"></i> scrollbarPadding</a></p>

Set to false to disable body padding adjustment when the page scrollbar gets hidden while the popup is shown
```php
$flasher->scrollbarPadding(bool $scrollbarPadding = true)
```

---

<p id="method-preConfirm"><a href="#method-preConfirm" class="anchor"><i class="fa-duotone fa-link"></i> preConfirm</a></p>

Function to execute before confirming, may be async (Promise-returning) or sync.
Returned (or resolved) value can be:
 - false to prevent a popup from closing
 - anything else to pass that value as the result.value of Swal.fire()
 - undefined to keep the default result.value
```php
$flasher->preConfirm(bool|string $preConfirm)
```

---

<p id="method-preDeny"><a href="#method-preDeny" class="anchor"><i class="fa-duotone fa-link"></i> preDeny</a></p>

Function to execute before denying, may be async (Promise-returning) or sync.
Returned (or resolved) value can be:
 - false to prevent a popup from closing
 - anything else to pass that value as the result.value of Swal.fire()
 - undefined to keep the default result.value
```php
$flasher->preDeny(string $preDeny)
```

---

<p id="method-returnInputValueOnDeny"><a href="#method-returnInputValueOnDeny" class="anchor"><i class="fa-duotone fa-link"></i> returnInputValueOnDeny</a></p>

If you want to return the input value as result.value when denying the popup, set to true. Otherwise, the denying
will set result.value to false.
```php
$flasher->returnInputValueOnDeny(bool $returnInputValueOnDeny = true)
```

---

<p id="method-imageUrl"><a href="#method-imageUrl" class="anchor"><i class="fa-duotone fa-link"></i> imageUrl</a></p>

Add a customized icon for the popup. Should contain a string with the path or URL to the image.
```php
$flasher->imageUrl(
    string $imageUrl,
    int $imageWidth = null,
    int $imageHeight = null,
    string $imageAlt = null
)
```

---

<p id="method-imageWidth"><a href="#method-imageWidth" class="anchor"><i class="fa-duotone fa-link"></i> imageWidth</a></p>

If imageUrl is set, you can specify imageWidth to describes image width in px.
```php
$flasher->imageWidth(int $imageWidth)
```

---

<p id="method-imageHeight"><a href="#method-imageHeight" class="anchor"><i class="fa-duotone fa-link"></i> imageHeight</a></p>

Custom int height in px.
```php
$flasher->imageHeight(int $imageHeight)
```

---

<p id="method-imageAlt"><a href="#method-imageAlt" class="anchor"><i class="fa-duotone fa-link"></i> imageAlt</a></p>

An alternative text for the custom image icon.
```php
$flasher->imageAlt(string $imageAlt)
```

---

<p id="method-image"><a href="#method-image" class="anchor"><i class="fa-duotone fa-link"></i> image</a></p>

```php
$flasher->image(
    string $title,
    string $text,
    string $imageUrl,
    int $imageWidth = 400,
    int $imageHeight = 200,
    string $imageAlt = null
)
```

---

<p id="method-addImage"><a href="#method-addImage" class="anchor"><i class="fa-duotone fa-link"></i> addImage</a></p>

Shortcut to add and flush an image
```php
$flasher->addImage(
    string $title,
    string $text,
    string $imageUrl,
    int $imageWidth = 400,
    int $imageHeight = 200,
    string $imageAlt = null
)
```

---

<p id="method-inputLabel"><a href="#method-inputLabel" class="anchor"><i class="fa-duotone fa-link"></i> inputLabel</a></p>

Input field label.
```php
$flasher->inputLabel(string $inputLabel)
```

---

<p id="method-inputPlaceholder"><a href="#method-inputPlaceholder" class="anchor"><i class="fa-duotone fa-link"></i> inputPlaceholder</a></p>

Input field placeholder.
```php
$flasher->inputPlaceholder(string $inputPlaceholder)
```

---

<p id="method-inputValue"><a href="#method-inputValue" class="anchor"><i class="fa-duotone fa-link"></i> inputValue</a></p>

Input field initial value.
 - If the input type is select, inputValue will represent the selected <option> tag.
 - If the input type is checkbox, inputValue will represent the checked state.
 - If the input type is text, email, number, tel or textarea a Promise can be accepted as inputValue.
```php
$flasher->inputValue(string $inputValue)
```

---

<p id="method-inputOptions"><a href="#method-inputOptions" class="anchor"><i class="fa-duotone fa-link"></i> inputOptions</a></p>

If input parameter is set to "select" or "radio", you can provide options. Can be a Map or a plain object, with
keys that represent option values and values that represent option text. You can also provide plain object or Map
as values that will represented a group of options, being the label of this <optgroup> the key. Finally, you can
also provide a Promise that resolves with one of those types.
```php
$flasher->inputOptions(string $inputOptions)
```

---

<p id="method-inputAutoTrim"><a href="#method-inputAutoTrim" class="anchor"><i class="fa-duotone fa-link"></i> inputAutoTrim</a></p>

Automatically remove whitespaces from both ends of a result string. Set this parameter to false to disable auto-trimming.
```php
$flasher->inputAutoTrim(bool $inputAutoTrim = true)
```

---

<p id="method-inputAttributes"><a href="#method-inputAttributes" class="anchor"><i class="fa-duotone fa-link"></i> inputAttributes</a></p>

HTML input attributes (e.g. min, max, autocomplete, accept), that are added to the input field. Object keys will
represent attributes names, object values will represent attributes values.
```php
$flasher->inputAttributes(string $inputAttributes)
```

---

<p id="method-inputValidator"><a href="#method-inputValidator" class="anchor"><i class="fa-duotone fa-link"></i> inputValidator</a></p>

Validator for input field, may be async (Promise-returning) or sync.
Returned (or resolved) value can be:
 - a falsy value (undefined, null, false) for indicating success
 - a string value (error message) for indicating failure

```php
$flasher->inputValidator(string $inputValidator)
```

---

<p id="method-validationMessage"><a href="#method-validationMessage" class="anchor"><i class="fa-duotone fa-link"></i> validationMessage</a></p>

A custom validation message for default validators (email, url).
```php
$flasher->validationMessage(string $validationMessage)
```
