---
permalink: /docs/framework/symfony/
title: A solid integration with the Symfony framework
published_at: 2020-11-28
updated_at: 2020-11-28
---

PHP Flasher offers a solid integration with the Symfony Framework, and it also supports older versions of the framework From Symfony 2.7 to 5.2.

## Installation :

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
        new Flasher\Symfony\FlasherSymfonyBundle(),
        // ...
    );
}
```

## Usage :

1. add ``{{ "{{ flasher_render() " }}}}`` at the bottom of your base template
    ```twig
    <!doctype html>
    <html>
        <head>
            <title>Toastr.js</title>
        </head>
        <body>
            
        </body>
        {{ "{{ flasher_render() " }}}}
    </html>
    ```

2. dispatch `notifications` from anywhere in you application
    ```php
    namespace App\Controller;
   
    use Flasher\Prime\FlasherInterface;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\Response;
   
    class NotifyController extends AbstractController
    {
        public function flasher(FlasherInterface $flasher): Response
        {
            // ... 
   
            $flasher->addSuccess('Data has been saved successfully!');
  
            return $this->render('notify/index.html.twig');
        }
    }    
    ```

## Default configuration :

<pre class="snippet"><code>
flasher:
    default: template
    root_scripts:
        - 'https://cdn.jsdelivr.net/npm/@flasher/flasher@0.1.3/dist/flasher.min.js'
    template_factory:
        default: tailwindcss
        templates:
            tailwindcss:
                view: '@FlasherSymfony/tailwindcss.html.twig'
                styles:
                    - 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.1/base.min.css'
                    - 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.1/utilities.css'
            tailwindcss_bg:
                view: '@FlasherSymfony/tailwindcss_bg.html.twig'
                styles:
                    - 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.1/base.min.css'
                    - 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.1/utilities.css'
            bootstrap:
                view: '@FlasherSymfony/bootstrap.html.twig'
                styles:
                    - 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css'
    auto_create_from_session: true
    types_mapping:
        success:
            - success
        error:
            - error
            - danger
        warning:
            - warning
            - alarm
        info:
            - info
            - notice
            - alert
</code></pre>

### examples :

By default, the **template** adapter is used when creating your notification,
to use another adapter you could use the `create()` method like the following:

```php 
$adapter = $flasher->addSuccess('This notification will be rendered using the default adapter');

$adapter = $flasher->create('toastr');
$adapter->addSuccess('This notification will be rendered using the toastr adapter');
```
