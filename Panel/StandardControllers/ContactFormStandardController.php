<?php

namespace CoreLib\ContactForm\Panel\StandardControllers;

use Authorization\Permissions;
use Core\ComponentManager\Page;
use Core\Exceptions\NotFoundException;
use Core\Panel\Infrastructure\PanelStandardController;
use CoreLib\Article\Service\ArticleService;

class ContactFormStandardController extends PanelStandardController
{
    function index()
    {
        $this->will('ContactForm', 'show');
        $this->addView('CoreLib/ContactForm', 'ContactFormList');
        $this->pushBreadcrumb(['title' => 'ContactForm', 'url' => 'ContactForm']);
    }
}
