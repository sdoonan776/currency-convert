<?php

use App\Http\Api\Controllers\CurrencyController;
use Illuminate\Support\Facades\Route;

Route::resource('currencies', CurrencyController::class);