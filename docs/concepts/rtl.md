---
permalink: /docs/concepts/rtl/
title: RTL Support
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** 
supports right-to-left languages like Arabic and Hebrew which are written from right to left.

## <i class="fa-duotone fa-list-radio"></i> RTL Option

```php 
class BookController
{
    public function save(FlasherInterface $flasher)
    {
        $flasher
            ->option('rtl', true)
            ->addSuccess('تم حفظ الكتاب بنجاح'); // "Book saved successfully" in Arabic
```

---

## <i class="fa-duotone fa-list-radio"></i> Frameworks

For Frameworks like **<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony** 
and **<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**, you don't to worry about text direction because
**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** will detect it automatically.

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** rely on the `translation` service
to determine the current language and then determine its direction.

So all you need to do is to enable the `translation` service in your framework's config file if it's not already enabled.

---

## <i class="fa-duotone fa-list-radio"></i> Configuration

<p id="method-symfony"><a href="#method-symfony" class="anchor"><i class="fa-brands fa-symfony text-black fa-xl"></i> symfony</a></p>

```yaml
# config/packages/translation.yaml
framework:
  default_locale: 'en' # 'ar', 'fr' etc. (default: 'en')
  translator:
    enabled: true # enable or disable the translator (default: true)
    default_path: '%kernel.project_dir%/translations' # where to look for translation files
    fallbacks:
        - en # fallback to 'en' if translation is not found for the current locale
```

---

<p id="method-laravel"><a href="#method-laravel" class="anchor"><i class="fa-brands fa-laravel text-red-900 fa-xl"></i> laravel</a></p>

```php
# config/app.php
return [
    
    /*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by the translation service provider. You are free to set this value
    | to any of the locales which will be supported by the application.
    |
    */
    
    'locale' => 'en',
    
    /*
    |--------------------------------------------------------------------------
    | Application Fallback Locale
    |--------------------------------------------------------------------------
    |
    | The fallback locale determines the locale to use when the current one
    | is not available. You may change the value to correspond to any of
    | the language folders that are provided through your application.
    |
    */
    
    'fallback_locale' => 'en',
];
```

---

## <i class="fa-duotone fa-list-radio"></i> Usage 

Let's say at this point you already have the `translator` service enabled in your config file and the `locale` is set.

```php
class BookController
{
    public function save(FlasherInterface $flasher)
    {
        $flasher
            ->addSuccess('Book saved successfully')
```


**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** will automatically detect the current language and then determine its direction.
