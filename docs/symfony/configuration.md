---
permalink: /docs/symfony/configuration/
title: Symfony Configuration
published_at: 2022-06-01
updated_at: 2022-06-01
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** symfony configuration file is located at `config/packages/flasher.yaml`

```yaml
# config/packages/flasher.yaml

flasher:
    # --------------------------------------------------------------------------
    #  Default PHPFlasher driver
    # --------------------------------------------------------------------------
    #  This option controls the default driver that will be used by PHPFlasher.
    # 
    #  Supported drivers: "flasher", "toastr", "noty", "sweetalert", "pnotify"
    #  
    #  Only "flasher" is supported by default, but you can install other options using composer.
    # 
    #  "toastr"     : composer require php-flasher/flasher-toastr-symfony
    #  "noty"       : composer require php-flasher/flasher-noty-symfony
    #  "notyf"      : composer require php-flasher/flasher-notyf-symfony
    #  "sweetalert" : composer require php-flasher/flasher-sweetalert-symfony
    #  "pnotify"    : composer require php-flasher/flasher-pnotify-symfony
     
    default: flasher
    
    # --------------------------------------------------------------------------
    #  Main PHPFlasher javascript file 
    # --------------------------------------------------------------------------
    # This is the main javascript file that will be included in the page ony
    # when a notification is ready to be displayed, by defaut PHPFlasher
    # use a CDN with the latest version of the library. but you
    # could download it locally or install it with npm.
    
    root_script: 'https://cdn.jsdelivr.net/npm/@flasher/flasher@1.1.1/dist/flasher.min.js'
    

    # --------------------------------------------------------------------------
    #  Translate PHPFlasher messages
    # --------------------------------------------------------------------------
    # By default PHPFlasher messages are passed to Symfony translator service
    # to disable this behavior, set this option to `false`.

    auto_translate: true
    
     # --------------------------------------------------------------------------
     #  Inject PHPFlasher in Response
     # --------------------------------------------------------------------------
     #  PHPFlasher scripts are added automatically before </body>, by listening
     #  to the Response after the App is done.

    auto_render: true
    
    flash_bag:
        # -----------------------------------------------------------------------
        #  Enable flash bag
        # -----------------------------------------------------------------------
        #  This option allows you to automatically convert Symfony's flash
        #  messages to PHPFlasher notifications. This is useful when
        #  you want to migrate from a Legacy system or another
        #  library similar to PHPFlasher.

        enabled: true
        

        # -----------------------------------------------------------------------
        #  Flash bag type mapping
        # -----------------------------------------------------------------------
        #  This option allows you to map or convert session keys to PHPFlasher
        #  notification types. on the right side are the PHPFlasher types
        #  On the left side are the Symfony session keys that you
        #  want to convert to PHPFlasher types.

        mapping:
            success: ['success']
            error: ['error', 'danger']
            warning: ['warning', 'alarm']
            info: ['info', 'notice', 'alert']
    

    # -----------------------------------------------------------------------
    #  Global Filter Criteria
    # -----------------------------------------------------------------------
    #  This option allows you to filter the notifications that are displayed
    #  by default all notifications are displayed, but you can filter
    #  them, for example to only display errors.

    filter_criteria:
        limit: 5 # Limit the number of notifications to display
```
