---
permalink: /docs/concepts/presets/
title: Presets allow you to use predefined messages
published_at: 2022-06-01
updated_at: 2022-06-01
---

Let's say you have a custom notification that you want to use in multiple places. 
You can create a preset for it and then use it in multiple places.

> You can think of a preset as a pre-defined message that you can use in multiple places. <br>

For **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```php
// config/flasher.php
return [
    'default' => 'flasher',
    'presets' => [
        'entity_saved' => [
            'type' => 'success',
            'message' => 'Entity saved successfully',
            'title' => 'Entity saved',
        ],
    ],
];
```

---

For **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```yaml
# config/packages/flasher.yaml
flasher:
    default: theme.bootstrap
    presets:
        entity_saved:
            type: success
            message: Entity saved successfully
            title: Entity saved
```

And then use it in your controller:

```php
class BookController
{
    public function save(FlasherInterface $flasher)
    {
        $flasher->addPreset('entity_saved')
```
