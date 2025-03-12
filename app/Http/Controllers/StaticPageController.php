<?php

namespace App\Http\Controllers;

use App\Services\CurrencyExchange\ExternalApiService;
use App\Services\CurrencyService;
use Illuminate\Http\Client\ConnectionException;
use Inertia\Inertia;
use Inertia\Response;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class StaticPageController extends Controller
{
    protected ExternalApiService $service;
    protected Currency $model;
    public function __construct(
        ExternalApiService $service,
        Currency $model
    )
    {
        $this->model = $model;
        $this->service = $service;
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     * @throws ConnectionException
     */
    public function home(): Response
    {
        $exchange = $this->service->getExchange();
        $currencies = $this->model->all();
        return Inertia::render('home', compact(
            'exchange',
        'currencies'
        ));
    }

    public function about(): Response
    {
        return Inertia::render('about');
    }

    public function contact(): Response
    {
        return Inertia::render('contact');
    }
}
