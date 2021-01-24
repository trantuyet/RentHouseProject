<?php

use App\Http\Controllers\API\HouseController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\HouseController;
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'index']);
Route::post('login', [UserController::class, 'login']);
Route::get('users', [UserController::class, 'index']);

Route::group(['middleware' => 'auth.jwt'], function () {
<<<<<<< HEAD
    Route::get('users', [UserController::class, 'index']);
    Route::get('house',[HouseController::class,'index']);
=======
     });
Route::prefix('house')->group(function () {
    Route::get('/', [HouseController::class, 'index']);
    Route::get('/{id}', [HouseController::class, 'show']);
    Route::post('/', [HouseController::class, 'store']);
    Route::put('/{id}', [HouseController::class, 'update']);
    Route::delete('/{id}', [HouseController::class, 'destroy']);
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
});
//Route::prefix('post')->group(function (Request $request) {
//    Route::post('/create', [HouseController::class, 'create']);
//});




