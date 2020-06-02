<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| BACKEND Routes
|--------------------------------------------------------------------------
|
| Here is where you can register BACKEND routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "backend" middleware group. Enjoy building your BACKEND!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::apiResources([
        'user' => 'Backend\UserController'
    ]);
    Route::apiResources([
        'role' => 'Backend\RoleController'
    ]);
    Route::apiResources([
        'category' => 'Backend\CategoryController'
    ]);
    Route::apiResources([
        'product' => 'Backend\ProductController'
    ]);
});

