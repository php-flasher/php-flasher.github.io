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
$notification = $flasher->addFlash(string $type, string $message, array $options = [])
```

param           | description                                      
----------------|------------------------------------------------- 
`$type`         | Notification type : <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc            
`$message`      | The message to be displayed                                     
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

<br />

```php
$builder = $flasher->type('error', 'An error has occurred please try again later.');
$builder->flash();
```

> As you can see, you **should** manually flash the notification, flasher has to know if your notification is ready to be rendered,
> or you still need to call methods and add more options ...etc

```php
$builder = $flasher->type(string $type, string $message = null, array $options = array())
```

param           | description                                      
----------------|------------------------------------------------- 
`$type`         | <span class="text-white bg-green-600 px-2 py-1 rounded">success</span>, <span class="text-white bg-red-600 px-2 py-1 rounded">error</span>, <span class="text-white bg-yellow-600 px-2 py-1 rounded">warning</span>, <span class="text-white bg-blue-600 px-2 py-1 rounded">info</span> ....etc            
`$message`      | your message                                     
`$options`      | Additional options to be available in javascript handlers
`$builder`      | Instance of the builder to continue chaining methods                         

---

```php
$builder = $flasher->success(string $message = null, array $options = array())
$builder = $flasher->error(string $message = null, array $options = array())
$builder = $flasher->warning(string $message = null, array $options = array())
$builder = $flasher->info(string $message = null, array $options = array())
```

| description                                      
|------------------------------------------------- 
| Shortcuts for the $flasher->type() method                                
                  

---

```php
$builder = $flasher->message(string $message);
```

param           | description                                      
----------------|------------------------------------------------- 
`$message`      | your message                                     

---

```php
$builder = $flasher->options(array $options, bool $merge = true);
```

param           | description                                      
----------------|------------------------------------------------- 
`$options`      | Array of extra options to be available in javascript handlers                                   
`$merge`        | merge options if you call the options method multiple times                                   

---

```php
$builder = $flasher->option(string $option, mixed $value);
```

param           | description                                      
----------------|------------------------------------------------- 
`$option`       | add or update an option key                                   
`$value`        | the actual value                                   

---

```php
$builder = $flasher->priority(int $priority);
```

param           | description                                      
----------------|------------------------------------------------- 
`$priority`     | use this value to filter notification at the rendering level                              

---

```php
$builder = $flasher->hops(int $hops);
```

param           | description                                      
----------------|------------------------------------------------- 
`$hops`         | he number of requests in which the message will be present                                 

---

```php
$builder = $flasher->keep();
```

| description                                      
|------------------------------------------------- 
| Adds one more hop to the current  notification                                

---

```php
$builder = $flasher->delay(int $delay);
```

param           | description                                      
----------------|------------------------------------------------- 
`$hops`         | the number of requests in which the message will be waiting to to be ready for rendering                              

---

```php
$builder = $flasher->now();
```

| description                                      
|------------------------------------------------- 
| Shortcut for $flasher->delay(0)                            

---

```php
$builder = $flasher->withStamp(StampInterface $stamp);
```

param           | description                                      
----------------|------------------------------------------------- 
`$stamp`        | Attach a StampInterface to the current notification

---

```php
$builder = $flasher->with(array $stamps);
```

param           | description                                      
----------------|------------------------------------------------- 
`$stamps`       | Attach multiple stamps at the same time to the current notification

---

```php
$builder = $flasher->handler(string $handler);
```

param           | description                                      
----------------|------------------------------------------------- 
`$handler`      | The handler name it will be used to choose to correct js library to render the notification

---

```php
$envelope = $flasher->getEnvelope();
```

param           | description                                      
----------------|------------------------------------------------- 
`$envelope`     | get the current notification with all stamps and options attached to it, in a single object instance of the Envelope class

---

> Call the flash methods when the notification is ready to be rendered


```php
$envelope = $flasher->flash(array $stamps = []);
```

param           | description                                      
----------------|-------------------------------------------------
`$stamps`       | Attach multiple stamps at the same time to the current notification
`$envelope`     | get the current notification with all stamps and options attached to it, in a single object instance of the Envelope class

---
