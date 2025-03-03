<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = file_get_contents(__DIR__ . '/../currencies.json');

        foreach(json_decode($currencies) as $currency) {
            Currency::create([
                'name' => $currency->name,
                'symbol' => $currency->symbol,
                'symbol_native' => $currency->symbolNative,
                'decimal_digits' => $currency->decimalDigits,
                'rounding' => $currency->rounding,
                'code' => $currency->code,
                'name_plural' => $currency->namePlural
            ]);
        }

    }
}
