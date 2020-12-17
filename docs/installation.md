---
permalink: /docs/installation/
title: Installation
published_at: 2020-11-28
updated_at: 2020-11-28
---

PHP flasher consists of multiple parts. Besides the main package every **library** has its own github repository.

First you'll need to install the main package. This package provides the base functionality, some interfaces and a base implementation.

```bash
composer require php-flasher/flasher
```

PHP Flasher also offers a solid integration with Laravel and Symfony :

### For Laravel:
```bash
composer require php-flasher/flasher-laravel
```

### For Symfony:

```bash
composer require php-flasher/flasher-symfony
```

By default PHP Flasher came with a __Template__ based adapter wich provide a __tailwindcss__ and __bootstrap__ notification templates,
and you can also download others implementations : __toastr__, __noty__, __notyf__, __pnotify__ and __sweet alert__.
