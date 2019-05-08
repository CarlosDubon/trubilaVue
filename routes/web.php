<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/Categories', function () {
    return view('categories');
});

Route::get('/Post/{id}', function () {
    return view('postDetails');
});

Route::get('/Dashboard',function(){
    return view('dashboard');
});
