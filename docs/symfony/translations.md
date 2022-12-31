---
permalink: /docs/symfony/translations/
title: Symfony Translations
---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** allows you to translate your notification messages, presets and automatically detect RTL support.

By default **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** came with Arabic, English and French translations, but you can add your own easily.

For example, if you need to override the English translation strings for **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**, 
you should place a language file at: `translations/flasher.en.yaml` . Within this file, 
you should only define the translation strings you wish to override. 
Any translation strings you don't override will still be loaded from the **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**'s original language files.

Here is the list of the default translation keys for **<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>**:

```yaml
# translations/flasher.ar.yaml
success: 'نجاح'
error: 'خطأ'
warning: 'تحذير'
info: 'معلومة'

The resource was created: 'تم إنشاء :resource'
The resource was updated: 'تم تعديل :resource'
The resource was saved: 'تم حفظ :resource'
The resource was deleted: 'تم حذف :resource'

resource: 'الملف'
```

```yaml
# translations/flasher.en.yaml
success: 'Success'
error: 'Error'
warning: 'Warning'
info: 'Info'

The resource was created: 'The :resource was created'
The resource was updated: 'The :resource was updated'
The resource was saved: 'The :resource was saved'
The resource was deleted: 'The :resource was deleted'

resource: 'resource'
```

```yaml
# translations/flasher.fr.yaml
success: 'Succès'
error: 'Erreur'
warning: 'Avertissement'
info: 'Information'

The resource was created: 'La ressource :resource a été ajoutée'
The resource was updated: 'La ressource :resource a été mise à jour'
The resource was saved: 'La ressource :resource a été enregistrée'
The resource was deleted: 'La ressource :resource a été supprimée'

resource: ''
```
