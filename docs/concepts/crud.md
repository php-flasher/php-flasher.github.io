---
permalink: /docs/concepts/crud/
title: CRUD
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows to display flash messages for common CRUD operations with ease.

### <i class="fa-duotone fa-list-radio"></i> Basic usage

```php 
class BookController
{
    public function save(FlasherInterface $flasher)
    {
        $book = new Book();
        $book->setTitle('The Great Gatsby');
        
        // ...
        // some logic to save the book
        
        $flasher->addCreated(); // default message: 'The resource was created'
        $flasher->addCreated('book'); // default message: 'The book was created'
        $flasher->addCreated($book); // require the book to implement the `ResourceInterface` interface
```

---

<p id="method-addCreated"><a href="#method-addCreated" class="anchor"><i class="fa-duotone fa-link"></i> addCreated</a></p>

The `addCreated` method is used to display a success message when a new record is created.

```php
// default message: 'The resource was created'
$flash->addCreated(ResourceInterface|string|null $resource);
```

| Parameter | Type                          | Description                           |
|-----------|-------------------------------|---------------------------------------|
| $resource | ResourceInterface/string/null | Type of the resource that was created |


---

<p id="method-addUpdated"><a href="#method-addUpdated" class="anchor"><i class="fa-duotone fa-link"></i> addUpdated</a></p>

The `addUpdated` method is used to display a success message when an existing record is updated.

```php
// default message: 'The resource was updated'
$flash->addUpdated(ResourceInterface|string|null $resource);
```

| Parameter | Type                          | Description                           |
|-----------|-------------------------------|---------------------------------------|
| $resource | ResourceInterface/string/null | Type of the resource that was updated |

---

<p id="method-addSaved"><a href="#method-addSaved" class="anchor"><i class="fa-duotone fa-link"></i> addSaved</a></p>

The `addSaved` method is used to display a success message when a new record is created or an existing record is updated.

```php
// default message: 'The resource was saved'
$flash->addSaved(ResourceInterface|string|null $resource);
```

| Parameter | Type                          | Description                         |
|-----------|-------------------------------|-------------------------------------|
| $resource | ResourceInterface/string/null | Type of the resource that was saved |


---

<p id="method-addDeleted"><a href="#method-addDeleted" class="anchor"><i class="fa-duotone fa-link"></i> addDeleted</a></p>

The `addDeleted` method is used to display a success message when an existing record is deleted.

```php
// default message: 'The resource was deleted'
$flash->addDeleted(ResourceInterface|string|null $resource);
```

| Parameter | Type                          | Description                           |
|-----------|-------------------------------|---------------------------------------|
| $resource | ResourceInterface/string/null | Type of the resource that was deleted |

---

<p id="method-addOperation"><a href="#method-addOperation" class="anchor"><i class="fa-duotone fa-link"></i> addOperation</a></p>

All the above CRUD operations are in fact shortcuts for the `addOperation` method.

The `addOperation`** method is used to display a predefined message for a CRUD operation. It accepts a `$resource` parameter that can be a string or a **`ResourceInterface` instance.

```php
$flash->addOperation(string $operation, ResourceInterface|string|null $resource);
```

| Parameter  | Type                          | Description                            |
|------------|-------------------------------|----------------------------------------|
| $operation | string                        | Name of the CRUD operation             |
| $resource  | ResourceInterface/string/null | Type of the resource that was affected |

---

### <i class="fa-duotone fa-list-radio"></i> Resource interface

Behind the scenes the `addOperation` method will use the `getResourceType` and `getResourceName` methods to get the type and name of the resource that was affected.

```php
<?php

namespace Flasher\Prime\Translation;

interface ResourceInterface
{
    /**
     * Type of the resource that was affected.
     *
     * for example: 'book', 'author', 'category'
     */
    public function getResourceType(): string;

    /**
     * Name of the resource that was affected.
     * It will be used to identify the resource in the message.
     * 
     * for example: 'The Great Gatsby'
     * 
     * This could be for example:
     *    - the title of a book
     *    - the name of a user
     *    - the name of a category, product, etc.
     */
    public function getResourceName(): string;
}
```

exemple:
```php 
<?php
class Book implements ResourceInterface
{
    public function getResourceType(): string
    {
        return 'book';
    }

    public function getResourceName(): string
    {
        return 'Harry Potter';
    }
}
```

With this in place, the `addCreated` method will display the following message: **'The book Harry Potter was created'**

The format of the message is: **:resource_type** **:resource_name** was **:operation**

---

### <i class="fa-duotone fa-list-radio"></i> Custom messages

All the above CRUD operations message only **PRESET MESSAGES** that you can custom in the configuration file.

For **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```php
// config/flasher.php
return [
    'presets' => [
        'created' => [
            'type' => 'success',
            'message' => 'The resource was created',
        ],
        'updated' => [
            'type' => 'success',
            'message' => 'The resource was updated',
        ],
        'saved' => [
            'type' => 'success',
            'message' => 'The resource was saved',
        ],
        'deleted' => [
            'type' => 'success',
            'message' => 'The resource was deleted',
        ],
    ],
];
```

For **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```yaml
# config/packages/flasher.yaml
flasher:
    presets:
        created:
            type: success
            message: The resource was created
        updated:
            type: success
            message: The resource was updated
        saved:
            type: success
            message: The resource was saved
        deleted:
            type: success
            message: The resource was deleted
```

---

### <i class="fa-duotone fa-list-radio"></i> Translations

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows you to translate the default messages.

For **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:

```php
// resources/lang/vendor/flasher/en/messages.php
return [
    'The resource was created' => 'The :resource was created',
    'The resource was updated' => 'The :resource was updated',
    'The resource was saved' => 'The :resource was saved',
    'The resource was deleted' => 'The :resource was deleted',
];

// resources/lang/vendor/flasher/fr/messages.php
return [
    'The resource was created' => 'La ressource :resource a été ajoutée',
    'The resource was updated' => 'La ressource :resource a été mise à jour',
    'The resource was saved' => 'La ressource :resource a été enregistrée',
    'The resource was deleted' => 'La ressource :resource a été supprimée',
];

// resources/lang/vendor/flasher/ar/messages.php
return [
    'The resource was created' => 'تم إنشاء :resource',
    'The resource was updated' => 'تم تعديل :resource',
    'The resource was saved' => 'تم حفظ :resource',
    'The resource was deleted' => 'تم حذف :resource',

    'resource' => 'الملف',
];
```

For **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:

```yaml
# translations/flasher.en.yaml
The resource was created: The :resource was created
The resource was updated: The :resource was updated
The resource was saved: The :resource was saved
The resource was deleted: The :resource was deleted

# translations/flasher.fr.yaml
The resource was created: La ressource :resource a été ajoutée
The resource was updated: La ressource :resource a été mise à jour
The resource was saved: La ressource :resource a été enregistrée
The resource was deleted: La ressource :resource a été supprimée

# translations/flasher.ar.yaml
The resource was created: تم إنشاء :resource
The resource was updated: تم تعديل :resource
The resource was saved: تم حفظ :resource
The resource was deleted: تم حذف :resource
resource: الملف
```
