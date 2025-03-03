<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;

class CurrencyExchangeApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton('CurrencyExchangeApiClient', function () {
           return Http::withHeaders([
               'X-RapidAPI-Host' => env('EXTERNAL_CURRENCY_EXCHANGE_HOST'),
               'X-RapidAPI-Key' => env('EXTERNAL_CURRENCY_EXCHANGE_PASSWORD'),
               'Access-Control-Allow-Origin' => '*',
               'Accept' => 'application/json'
           ]);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
