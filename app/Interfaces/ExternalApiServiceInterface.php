<?php

namespace App\Interfaces;


use Illuminate\Http\Client\Response;

interface ExternalApiServiceInterface
{
    public function getExchange(): Response;
}