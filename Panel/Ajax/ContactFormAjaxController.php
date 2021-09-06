<?php
namespace CoreLib\ContactForm\Panel\Ajax;

use Core\Panel\Infrastructure\PanelAjaxController;
use CoreLib\ContactForm\Service\ContactFormService;

class ContactFormAjaxController extends PanelAjaxController
{
    public function getTable($options)
    {
        $this->will('ContactForm', 'show');
        $service = new ContactFormService();
        return $service->getDataTable($options);
    }
}