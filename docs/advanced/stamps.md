---
permalink: /docs/advanced/stamps/
title: Attach extra information to your notification
published_at: 2020-11-28
updated_at: 2020-11-28
---

If you need to add metadata to a notification, wrap it with the __Flasher\Prime\Envelope__ class and add stamps.

For example, you can add __Priority__ to your notification and sort by priority in your views like this :

```php 
public function someAction(FlasherInterface $flasher)
{
    // attach custom stamps
    $flasher->success('Data has been saved successfully!')
            ->addStamp(new PriorityStamp(1))
            ->flash();
    
    $flasher->error('Storage limit reached 98% and soon exceed its limit.')
            ->priority(2) // is a shortcut for ->addStamp(new PriorityStamp(2))
            ->flash();
            
    // redirect or render your view here
}
```

Update your twig template : 

{% raw %}
```twig
{{ flasher_render(
    order_by: {
        'Flasher\\Prime\\Stamp\\PriorityStamp': 'DESC'
    }
) }}
```
{% endraw %}

Update your blade template :

{% raw %}
```twig
@flasher_render(array(
    order_by => array(
        'Flasher\\Prime\\Stamp\\PriorityStamp' => 'DESC'
    )
))
```
{% endraw %}