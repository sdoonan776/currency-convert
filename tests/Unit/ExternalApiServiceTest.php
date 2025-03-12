<?php

namespace Tests\Unit;

use App\Interfaces\ExternalApiServiceInterface;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class ExternalApiServiceTest extends TestCase
{
    protected ExternalApiServiceInterface $externalApiServiceMock;
    protected function setUp(): void
    {
        parent::setUp();
        $this->externalApiServiceMock = Http::fake([
            "http://api.com/exchange" => Http::response(['exchange_rate' => 1.44644996, 200]),
        ]);
    }

    /**
     * @test
     */
    public function it_should_return_a_200_response(): void
    {


    }
}
