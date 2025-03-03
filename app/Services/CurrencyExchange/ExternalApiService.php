<?php

namespace App\Services\CurrencyExchange;

use App\Interfaces\ExternalApiServiceInterface;
use Exception;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class ExternalApiService implements ExternalApiServiceInterface
{

    protected string $baseUrl;

    protected mixed $client;

    public function __construct()
    {
        $this->baseUrl = env('CURRENCY_EXCHANGE_BASE_URL');
        $this->client = app('CurrencyExchangeApiClient');
    }

    /**
     * @return Response
     * @throws ConnectionException
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function getExchange(): Response
    {
        try {
            return $this->client->get($this->baseUrl . '/exchange?from=' . request()->query('from') . '&to=' . request()->query('to'));
         } catch (Exception $e) {
            throw new Exception($e->getMessage());
         }

    }

}