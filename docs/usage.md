---
permalink: /docs/usage/
title: PHPFlasher Usage
hide_title: true
published_at: 2020-11-28
updated_at: 2022-05-08
---

> If you like **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** please consider giving it a <i class="fa-duotone fa-star text-yellow-700"></i> on <a href="https://github.com/php-flasher/php-flasher">github</a> or by <a href="https://twitter.com/yoeunes/status/1446792536090161153">tweeting</a> about this library or by contributing to the documentation <i class="fa-solid fa-heart text-red-600"></i>

## <i class="fa-duotone fa-list-radio"></i> General Usage

```php
$flasher->addFlash('success', 'Data has been saved successfully!');
```

```php
$notification = $flasher->addFlash(string $type, string $message, string $title = null, array $options = [])
```

param           | description                                      
----------------|------------------------------------------------- 
`$type`         | Notification type : <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc            
`$message`      | The message to be displayed                                     
`$title`        | The notification title                                     
`$options`      | Options for the javascript libraries 
`$notification` | The notification already stored in the session and ready to be rendered                      

There are also 4 shortcuts for the `addFlash()` method :

```php
$flasher->addSuccess('success message');
$flasher->addError('error message');
$flasher->addWarning('warning essage');
$flasher->addInfo('info message');
```

--- 

## <i class="fa-duotone fa-list-radio"></i> Or with Notification Builder for more flexibility

There are only __two__ main steps to render a notification  : __build__ and __flash__ 

```php
// Step 1: create your notification and add options
$builder = $flasher->handler('toastr')
    ->type('success')
    ->message('your custom message')
    ->priority(2)
    ->option('timer', 5000)
;

// Step2 : Store the notification in the session
$builder->flash();
```

---

```php
$builder = $flasher->type('error', 'An error has occurred please try again later.');
$builder->flash();
```

> As you can see, you **should** manually flash the notification, flasher has to know if your notification is ready to be rendered,
> or you still need to call methods and add more options ...etc


<p id="method-type"><a href="#method-type" class="anchor"><i class="fa-duotone fa-link"></i> Type</a></p>

```php
$builder = $flasher->type(string $type, string $message = null, string $title = null, array $options = [])
```



param           | description                                      
----------------|------------------------------------------------- 
`$type`         | <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc            
`$message`      | Your message                                     
`$title`        | Notification title                                     
`$options`      | Additional options to be available in javascript handlers
`$builder`      | Instance of the builder to continue chaining methods                         

---

```php
$builder = $flasher->success(string $message = null, string $title = null, array $options = [])
$builder = $flasher->error(string $message = null, string $title = null, array $options = [])
$builder = $flasher->warning(string $message = null, string $title = null, array $options = [])
$builder = $flasher->info(string $message = null, string $title = null, array $options = [])
```

| description                                      
|------------------------------------------------- 
| Shortcuts for the $flasher->type() method                                
                  

---

<p id="method-message"><a href="#method-message" class="anchor"><i class="fa-duotone fa-link"></i> Message</a></p>

```php
$builder = $flasher->message(string $message);
```

param           | description                                      
----------------|------------------------------------------------- 
`$message`      | Your message                                     

---

<p id="method-title"><a href="#method-title" class="anchor"><i class="fa-duotone fa-link"></i> Title</a></p>

```php
$builder = $flasher->title(string $title);
```

param           | description                                      
----------------|------------------------------------------------- 
`$title`        | Notification title                                  

---

<p id="method-options"><a href="#method-options" class="anchor"><i class="fa-duotone fa-link"></i> Options</a></p>

```php
$builder = $flasher->options(array $options, bool $merge = true);
```

param           | description                                      
----------------|------------------------------------------------- 
`$options`      | Array of extra options to be available in javascript handlers                                   
`$merge`        | merge options if you call the options method multiple times                                   

---

<p id="method-option"><a href="#method-option" class="anchor"><i class="fa-duotone fa-link"></i> Option</a></p>

```php
$builder = $flasher->option(string $option, mixed $value);
```

param           | description                                      
----------------|------------------------------------------------- 
`$option`       | add or update an option key                                   
`$value`        | the actual value                                   

---

<p id="method-priority"><a href="#method-priority" class="anchor"><i class="fa-duotone fa-link"></i> Priority</a></p>

```php
$builder = $flasher->priority(int $priority);
```

param           | description                                      
----------------|------------------------------------------------- 
`$priority`     | use this value to filter notification at the rendering level                              

---

<p id="method-hops"><a href="#method-hops" class="anchor"><i class="fa-duotone fa-link"></i> Hops</a></p>

```php
$builder = $flasher->hops(int $hops);
```

param           | description                                      
----------------|------------------------------------------------- 
`$hops`         | he number of requests in which the message will be present                                 

---

<p id="method-keep"><a href="#method-keep" class="anchor"><i class="fa-duotone fa-link"></i> Keep</a></p>

```php
$builder = $flasher->keep();
```

| description                                      
|------------------------------------------------- 
| Adds one more hop to the current  notification                                

---

<p id="method-delay"><a href="#method-delay" class="anchor"><i class="fa-duotone fa-link"></i> Delay</a></p>

```php
$builder = $flasher->delay(int $delay);
```

param           | description                                      
----------------|------------------------------------------------- 
`$hops`         | the number of requests in which the message will be waiting to to be ready for rendering                              

---

<p id="method-now"><a href="#method-now" class="anchor"><i class="fa-duotone fa-link"></i> Now</a></p>

```php
$builder = $flasher->now();
```

| description                                      
|------------------------------------------------- 
| Shortcut for $flasher->delay(0)                            

---

<p id="method-translate"><a href="#method-translate" class="anchor"><i class="fa-duotone fa-link"></i> Translate</a></p>

```php
$builder = $flasher->translate(string $locale = null);
```

param           | description                                      
----------------|------------------------------------------------- 
`$locale`       | The locale to be used for the translation or null to use the default locale     

---

<p id="method-preset"><a href="#method-preset" class="anchor"><i class="fa-duotone fa-link"></i> Preset</a></p>

```php
$builder = $flasher->preset(string $preset, bool $flash = true);
```

param           | description                                      
----------------|------------------------------------------------- 
`$preset`       | The preset to be used for the notification                              
`$flash`        | If true, the notification will be flashed after the preset is applied     

---

<p id="method-context"><a href="#method-context" class="anchor"><i class="fa-duotone fa-link"></i> Context</a></p>

```php
$builder = $flasher->context(array $context = []);
```

param           | description                                      
----------------|------------------------------------------------- 
`$context`      | Custom data to be available in javascript side

---

<p id="method-withStamp"><a href="#method-withStamp" class="anchor"><i class="fa-duotone fa-link"></i> WithStamp</a></p>

```php
$builder = $flasher->withStamp(StampInterface $stamp);
```

param           | description                                      
----------------|------------------------------------------------- 
`$stamp`        | Attach a StampInterface to the current notification

---

<p id="method-with"><a href="#method-with" class="anchor"><i class="fa-duotone fa-link"></i> With</a></p>

```php
$builder = $flasher->with(array $stamps);
```

param           | description                                      
----------------|------------------------------------------------- 
`$stamps`       | Attach multiple stamps at the same time to the current notification

---

<p id="method-handler"><a href="#method-handler" class="anchor"><i class="fa-duotone fa-link"></i> Handler</a></p>

```php
$builder = $flasher->handler(string $handler);
```

param           | description                                      
----------------|------------------------------------------------- 
`$handler`      | The handler name it will be used to choose to correct js library to render the notification

---

<p id="method-getEnvelope"><a href="#method-getEnvelope" class="anchor"><i class="fa-duotone fa-link"></i> Getnvelope</a></p>

```php
$envelope = $flasher->getEnvelope();
```

param           | description                                      
----------------|------------------------------------------------- 
`$envelope`     | get the current notification with all stamps and options attached to it, in a single object instance of the Envelope class

---

<p id="method-flash"><a href="#method-flash" class="anchor"><i class="fa-duotone fa-link"></i> Flash</a></p>

> Call the flash methods when the notification is ready to be rendered


```php
$envelope = $flasher->flash(array $stamps = []);
```

param           | description                                      
----------------|-------------------------------------------------
`$stamps`       | Attach multiple stamps at the same time to the current notification
`$envelope`     | get the current notification with all stamps and options attached to it, in a single object instance of the Envelope class

---
