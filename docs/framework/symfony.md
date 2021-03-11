---
permalink: /docs/framework/symfony/
title: A solid integration with the Symfony framework
published_at: 2020-11-28
updated_at: 2020-11-28
---

PHP Flasher offers a solid integration with the Symfony Framework, and it also support older version of the framework
From laravel 2.7 to 5.2.

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
        new Flasher\Symfony\FlasherBundle(),
        // ...
    );
}
```

## Default configuration :

<pre class="snippet"><code>flasher:
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
</code></pre>

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
    <?php

    namespace App\Controller;

    use Flasher\Prime\FlasherInterface;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\Routing\Annotation\Route;

    class NotifyController extends AbstractController
    {
       /**
        * @param FlasherInterface $flasher
        *
        * @return Response
        */
        public function flasher(FlasherInterface $flasher): Response
        {
            // ... 

            $flasher->addSuccess('Data has been saved successfully!');

            // ...

            return $this->render('notify/index.html.twig');
        }
    }    
    ```
   
## options

By default the `template` adapter is used when creating your notification,
if you want to render another type of notification use the `create()` method of use the specific factory
instead for more options and autocompletion

### exemple :

```php 
$adapter = $flasher->addSuccess('This notification will be rendered using the default adapter');


$adapter = $flasher->create('toastr');
$adapter->addSuccess('This notification will be rendered using the toastr adapter');
```
