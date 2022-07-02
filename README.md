<a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a>
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" width="400">

## Creating a Modern Application: Using Laravel With React.js

Laravel has come a long way, and the options for creating modern, reactive web applications using the framework are many. There's Inertia.js, Alpine.js, Livewire, and more. But the framework hasn't said goodbye to the old ways of doing things. It's still possible and very straightforward to set up Vue or React with a Laravel project.

## New Laravel Project

Let's start by creating a new Laravel project anywhere on your local computer.
by running the following command, a fresh laravel 8 project will be installed on your local machine:

```
composer create-project laravel/laravel:^8.0 laravel-react-project
```

## install npm

in order to use ReacJs we need npm:

```
npm install
```
After the installation finishes, execute the following command to test if everything's functional or not:

```
npm run dev
```

## install ReactJs

Let's go ahead and start bringing React into the scene to see the whole process of using Laravel with React.js. First, you'll have to install two new JavaScript libraries. They are the react and react-dom libraries. To do so, execute the following command:

```
npm install --save-dev react react-dom
```
t'll install the libraries as development dependencies. The reason behind installing them as development dependencies is that you'll compile all your JavaScript code into a single file and attach that with your Blade templates.
Create a new folder resources/js/components/ and put the js file of your ReactJs in there.
To make this usable throughout your entire application, you'll have to include this in your JavaScript code bundle. To do so, open the resoureces/js/app.js file and update its code as follows:

```
// put your js file created before instead of HelloReact
require('./components/HelloReact')
```
You'll have to change the Laravel Mix configuration so that it can compile the React component properly. To do so, open the webpack.mix.js file from the project root and update its code as follows:

```
mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');
/*
put your css file here in order to be used in your ReactJs components
*/
mix.styles([
    'public/css/style.css'
], 'public/css/all.css');
```
After updating the Laravel Mix configuration, execute the npm run dev command once again.
Now that the component is ready to use, you'll have to prepare a blade template. Open the resources/views/welcome.blade.php file and update its content as follows:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel React</title>

    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>
    <div id="hello-react"></div>
</body>
</html>
```
Make sure that you defer the script execution or put it just before the body tag ends. Also, make sure to match the element ID with the ID you wrote in the React component's render() function. 
Now start the development server by executing php artisan serve and visit http://localhost:8000 using your favorite browser. 
after editing the code you need to run the npm run dev,
Instead of executing the npm run dev command, again and again, you can execute the:

```
npm run watch
OR
npm run watch-poll
```
command, which keeps an eye on your files and compiles them automatically on change.

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
