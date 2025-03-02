<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StaticPageController extends Controller
{
    //
    public function home(): Response
    {
        return Inertia::render('home');
    }
}
