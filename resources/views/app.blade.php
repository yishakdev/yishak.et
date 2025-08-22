<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />

    @viteReactRefresh
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>