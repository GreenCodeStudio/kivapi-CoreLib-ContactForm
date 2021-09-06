<?php

namespace CoreLib\ContactForm\Service;

use CoreLib\ContactForm\Repository\ContactFormMessageRepository;


class ContactFormService
{
    public function __construct()
    {
        $this->defaultDB = new ContactFormMessageRepository();
    }

    public function getDataTable($options)
    {
        return $this->defaultDB->getDataTable($options);
    }

    public function getById(int $id)
    {
        return $this->defaultDB->getById($id);
    }

    public function insert($data)
    {
        $filtered = $this->filterData($data);
        $this->defaultDB->insert($filtered);
    }

    protected function filterData($data)
    {
        $ret = [];
        $ret['mail'] = $data->mail ?? null;
        $ret['name'] = $data->name ?? null;
        $ret['content'] = $data->content ?? null;
        $ret['stamp'] = new \DateTime();
        return $ret;
    }
}