<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Currency Convert') }}</title>

        @viteReactRefresh
        @inertiaHead
        @vite(['resources/ts/app.tsx', "resources/ts/pages/{$page['component']}.tsx"])
    </head>
    <body>
    @inertia
    </body>
</html>
