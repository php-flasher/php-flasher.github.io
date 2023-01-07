---
permalink: /
title: Home
---

<div class="text-center mb-8">
    <img id="logo" src="/dist/images/php-flasher-logo.svg" class="h-20 my-8" alt="PHPFlasher">
    <p class="pt-4 text-center">
        <a href="https://www.linkedin.com/in/younes-khoubza/">
            <img src="https://img.shields.io/badge/author-@yoeunes-blue.svg" alt="Author" />
        </a>
        <a href="https://github.com/php-flasher/php-flasher">
            <img src="https://img.shields.io/badge/source-php--flasher/php--flasher-blue.svg" alt="Source" />
        </a>
        <a href="https://github.com/php-flasher/php-flasher/releases">
            <img src="https://img.shields.io/github/tag/php-flasher/flasher.svg" alt="GitHub release" />
        </a>
        <a href="https://github.com/php-flasher/flasher/blob/master/LICENSE">
            <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License" />
        </a>
        <a href="https://packagist.org/packages/php-flasher/flasher">
            <img src="https://img.shields.io/packagist/dt/php-flasher/flasher.svg" alt="Packagist" />
        </a>
        <a href="https://packagist.org/packages/php-flasher/flasher">
            <img src="https://img.shields.io/packagist/php-v/php-flasher/flasher.svg" alt="PHP Version" />
        </a>
        <a href="https://cdn.jsdelivr.net/npm/@flasher/flasher/dist/flasher.min.js">
            <img src="https://img.badgesize.io/php-flasher/flasher-js/main/packages/flasher/dist/flasher.min.js.svg?compression=brotli&label=flasher.min.js" alt="flasher.min.js" />
        </a>
    </p>
</div>

## <i class="fa-duotone fa-list-radio"></i> Introduction

Flash messages are are a great way to quickly and easily notify users of important events or updates on your website or application. <br />
These messages can be easily implemented using the Laravel and Symfony frameworks and provide a great way to communicate with users in a clear and concise manner. 

Whether you need to alert users of a successful form submission, an error, or any other important information, flash messages are a simple and effective solution.

By using **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** in your Laravel or Symfony project, 
you can improve the user experience and engagement on your website or application. **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is simple and effective for providing feedback messages to users on your website or application. <br />
The flashing system allows you to record and store messages within the session, making it easy to retrieve and display them on the current or next page. 

---

### <i class="fa-duotone fa-list-radio"></i> Flash notification types

Flash notifications serves as a feedback & confirmation mechanism after the user takes an action.

> <div class="mt-2"><span class="text-green-700"><i class="fa-solid fa-circle-check fa-xl"></i> success : </span> Whatever was attempted did, in fact, succeed.</div>
> <div class="mt-2"><span class="text-blue-600"><i class="fa-solid fa-circle-info fa-xl"></i> info : </span> Some event occurred that the user should be aware of.</div>
> <div class="mt-2"><span class="text-yellow-600"><i class="fa-solid fa-circle-exclamation fa-xl"></i> warning : </span> Something not good happened, but it isn't an error.</div>
> <div class="mt-2"><span class="text-red-600"><i class="fa-solid fa-circle-xmark fa-xl"></i> error : </span> Some sort of program error occurred.</div>

---

## <i class="fa-duotone fa-list-radio"></i> Why use **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** ?

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** supports popular notification libraries : 
<span class="text-indigo-900">[__toastr.js__](/docs/adapter/toastr/)</span>, 
<span class="text-indigo-900">[__sweetalert 2__](/docs/adapter/sweetalert/)</span>, 
<span class="text-indigo-900">[__pnotify__](/docs/adapter/pnotify/)</span>, 
<span class="text-indigo-900">[__noty__](/docs/adapter/noty/)</span>, 
<span class="text-indigo-900">[__notyf__](/docs/adapter/notyf/)</span> and even show <span class="text-indigo-900">__desktop__</span> notifications.

You have a wide range of options to choose from to suit your specific needs. Whether you want to display simple toast messages or more sophisticated alerts, 
**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** has you covered.

Overall, **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is a versatile and easy-to-use library 
that can greatly enhance the user experience of your website or application.
Give it a try and see the difference it can make for yourself!

* Display multiple notifications at the same time
* Easily display notifications from <i class="fa-brands fa-js-square text-yellow-600 fa-xl"></i> JavaScript with a small footprint
* LTR <i class="fa-duotone fa-signs-post text-indigo-900 fa-xl"></i> and Dark-mode <i class="fa-duotone fa-circle-half-stroke text-indigo-900 fa-xl"></i> support
* Show Desktop notifications for : <i class="fa-brands fa-linux fa-xl"></i> Linux, <i class="fa-brands fa-apple fa-xl"></i> macOS, <i class="fa-brands fa-windows fa-xl"></i> Windows
* Framework-agnostic with <a href="https://laravel.com/" class="text-indigo-900"><i class="fa-brands fa-laravel text-red-900 fa-xl"></i> <strong>Laravel</strong></a> and <a href="https://symfony.com/" class="text-indigo-900"><i class="fa-brands fa-symfony text-black fa-xl"></i> <strong>Symfony</strong></a> implementations
* <i class="fa-duotone fa-sidebar text-indigo-900 fa-xl"></i> PHPSTORM Autocomplete
* You can always create an adapter yourself <i class="fa-duotone fa-screwdriver-wrench fa-xl text-indigo-900"></i> if desired
* ...and more

---

## <i class="fa-duotone fa-list-radio"></i> Getting Started

* **[Installation](/docs/installation/)**
* **[Usage](/docs/usage/)**
* **[Toastr](/docs/adapter/toastr/)**
* **[Noty](/docs/adapter/noty/)**
* **[Notyf](/docs/adapter/notyf/)**
* **[Sweet Alert](/docs/adapter/sweetalert/)**
* **[Pnotify](/docs/adapter/pnotify/)**
