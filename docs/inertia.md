---
permalink: /inertia/
redirect_from: /docs/framework/inertia/
title: Inertia
description: Easily add flash notification messages to your Inertia application with PHPFlasher. Follow our step-by-step guide to install and use the library in your project, and start engaging and informing your users with powerful flash messages.
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** offers a solid integration with Inertia.js

## <i class="fa-duotone fa-list-radio"></i> Installation

Please follow the same installation steps as for the [Laravel Installation](/docs/framework/laravel) package.

You have also to install `@flasher/flasher` from npm.
```shell
npm i @flasher/flasher
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage

Dispatch `notifications` from your `HandleInertiaRequests` middleware shared data.

```php
<?php
// app/Http/Middleware/HandleInertiaRequests.php

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'messages' => flash()->render('json'),
        ]);
    }
}
```

---

Then render your `notifications` from your `Layout.vue` file like the following:

```html
// resources/js/Shared/Layout.vue
<script>
import flasher from "@flasher/flasher";

export default {
  props: {
    messages: Object,
  },
  watch: {
    messages(value) {
      flasher.render(value);
    }
  }
}
</script>
```

All you have to do now, is to trigger you notification from anywhere in your application.

```php
<?php
// app/Http/Controllers/UsersController.php
class UsersController
{
    public function store()
    {
        // your saving logic
        
        flash()->addSuccess('User created.');
        
        return Redirect::route('users');
    }
}
```
