<?php

namespace CoreLib\ContactForm\Repository;

use Core\Database\DB;
use Core\Database\Repository;


class ContactFormMessageRepository extends Repository
{

    public function getDataTable($options)
    {
        $start = (int)$options->start;
        $limit = (int)$options->limit;
        $sqlOrder = $this->getOrderSQL($options);
        $rows = DB::get("SELECT * FROM contact_form_message $sqlOrder LIMIT $start,$limit");
        $total = DB::get("SELECT count(*) as count FROM contact_form_message")[0]->count;
        return ['rows' => $rows, 'total' => $total];
    }

    private function getOrderSQL($options)
    {
        if (empty($options->sort))
            return "";
        else {
            $mapping = [];
            if (empty($mapping[$options->sort->col]))
                throw new Exception();
            return ' ORDER BY ' . DB::safeKey($mapping[$options->sort->col]) . ' ' . ($options->sort->desc ? 'DESC' : 'ASC') . ' ';
        }
    }

    public function getById(int $id)
    {
        return DB::get("SELECT * FROM contact_form_message cfm WHERE cfm.id = ?", [$id])[0] ?? null;
    }

    public function defaultTable(): string
    {
        return 'contact_form_message';
    }
}