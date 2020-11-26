---
permalink: /docs/installation/
title: Installation
published_at: 2020-11-28
updated_at: 2020-11-28
---

PHP Notify consists of multiple parts. Besides the main package you'll need __producer__ and a __renderer__.

First you'll need to install the main package. This package provides the base functionality, some interfaces and a base implementation.

```bash
composer require php-notify/notify
```

Here is an example of the __producer__ and the __presenter__ for the **toastr** library

```bash
composer require php-notify/notify-toastr
```

There's also a symfony specific package which offers a solid integration with the framework.

```bash
composer require php-notify/notify-symfony-toastr
```
