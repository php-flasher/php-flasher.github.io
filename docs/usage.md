---
permalink: /docs/usage/
title: Flasher Usage
published_at: 2020-11-28
updated_at: 2020-11-28
---

The Flasher API is the most important interface Flasher describes when you want to use Flasher in your application.

> If you're using a framework like __Laravel__ or __Symfony__, just grabe an instance of __FlasherInterface__.

## Simple Usage

```php
$flasher->addFlash('success', 'Data has been saved successfully!');
```

```php
$notification = $flasher->addFlash(string $type, string $message, array $options = [])
```

param           | description                                      
----------------|------------------------------------------------- 
`$type`         | success, error, warning, info ....etc            
`$message`      | your message                                     
`$options`      | Additional options to be available in javascript 
`$notification` | the notification already stored in the session and ready to be rendered                      

There are also 4 shortcuts for the `addFlash()` method :

```php
$flasher->addSuccess('success message');
$flasher->addError('error message');
$flasher->addWarning('warning essage');
$flasher->addInfo('info message');
```

--- 

## Notification Builder 

The are only __two__ main steps to render a notification  : __build__ and __flash__ 

```php
// Step 1: create your notification and add options
$builder = $flasher->type('success')
    ->message('your custom message')
    ->priority(2)
    ->handler('toastr')
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
`$type`         | success, error, warning, info ....etc            
`$message`      | your message                                     
`$options`      | Additional options to be available in javascript 
`$notification` | The created notification                         

---