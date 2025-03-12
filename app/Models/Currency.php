<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected array $filled = [
        'name',
        'symbol',
        'symbol_native',
        'decimal_digits',
        'rounding',
        'code',
        'name_plural'
    ];

    protected function casts(): array
    {
        return [
            "created_at" => 'datetime',
            "updated_at" => 'datetime'
        ];
    }


}
