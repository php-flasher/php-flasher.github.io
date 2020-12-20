---
permalink: /docs/framework/symfony/
title: A solid integration with the Symfony framework
published_at: 2020-11-28
updated_at: 2020-11-28
---

PHP Flasher offers a solid integration with the Symfony Framework, and it also support older version of the framework
From laravel 2.7 to 5.2.

## Installtion :

you can install the bundle using composer

<pre class="snippet"><code>composer require php-flasher/flasher-symfony</code></pre>

## Enable the bundle :

If you are using Symfony 4+ the bundle will be registered automatically in `config/bundles.php`, otherwise enable the bundle in the kernel:

```php
<?php

// app/AppKernel.php

public function registerBundles()
{
    $bundles = array(
        // ...
        new Flasher\Symfony\FlasherBundle(),
        // ...
    );
}
```

## Default configuration :

```yaml
flasher:
    default: 'template'
    adapters:
        template:
            default: 'tailwindcss'
            templates:
                tailwindcss:
                    view: '@Flasher/tailwindcss.html.twig'
                    styles:
                        - 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'

                tailwindcss_bg:
                    view: '@Flasher/tailwindcss_bg.html.twig'
                    styles:
                        - 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'

                bootstrap:
                    view: '@Flasher/bootstrap.html.twig'
                    styles:
                        - 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css'
            scripts:
                - '/bundles/flasher/flasher-template.js'

            styles: []

            options:
                timeout: 5000
                position: 'top-right'
```