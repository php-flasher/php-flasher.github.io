## <i class="fa-duotone fa-list-radio"></i> Installation

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** is modular and consists of multiple libraries, 
allowing users to install and use only the specific components they need for their project.

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** can be installed using composer :

{% if 'laravel' == framework %}

**<i class="fa-brands fa-laravel text-red-900 fa-xl"></i> Laravel**:
```shell
composer require php-flasher/flasher-laravel
```

{% else %}

**<i class="fa-brands fa-symfony text-black fa-xl"></i> Symfony**:
```shell
{{ framework }}
composer require php-flasher/flasher-symfony
```

{% endif %}

---

**<span class="text-indigo-900">PHP<span class="text-indigo-500">Flasher</span></span>** includes a default notification style <i class="fa-duotone fa-comment-captions text-yellow-600"></i>, but users can also install additional adapters to customize the appearance of notifications within their projects such as :

* **[Toastr](/library/toastr/)**
* **[Noty](/library/noty/)**
* **[Notyf](/library/notyf/)**
* **[Sweet Alert](/library/sweetalert/)**
* **[Pnotify](/library/pnotify/)**

---

{% include _usage.md %}
