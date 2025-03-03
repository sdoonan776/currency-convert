<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

class BaseApiException extends Exception
{
    protected $message;

    public function __construct($message)
    {
        $this->message = $message;

    }

    public function report()
    {
        Log::error($this->message);
    }
}
