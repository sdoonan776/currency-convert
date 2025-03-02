<?php

namespace App\Providers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;

class RestClientServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
            $this->app->singleton(Client::class, function() {
                return new Client(
                    [
                        'base_url' => env('CURRENCY_EXCHANGE_BASE_URL'),
                        'headers' => [
                            'Authorization' => "Bearer " . env('CURRENCY_EXCHANGE_PASSWORD'),
                            'Access-Control-Allow-Origin' => '*',
                            'Accept' => 'application/json',
                        ]
                    ]
                );
            }
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
