<?php

namespace App\Providers;

use App\Interfaces\ExternalApiServiceInterface;
use App\Services\CurrencyExchange\ExternalApiService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(
            ExternalApiServiceInterface::class,
            ExternalApiService::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
