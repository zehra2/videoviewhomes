<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\InvestmentController;
use App\Http\Controllers\ProductServiceController;
use App\Http\Controllers\UploadServiceController;
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
    if(\Auth::check()){
        return redirect('/viewproduct');  
    }
    else{
        return view('auth.login');
    }
    
});
Auth::routes();

Route::get('/home', function () {
    return redirect('/viewproduct');
});
/*
|--------------------------------------------------------------------------
|                                   ADMIN
|--------------------------------------------------------------------------
*/

Route::get('/admin', function () {
    if (Auth::guest()) {
        return redirect('/login');
    }
    if (Auth::user()->admin !=1) {
        return redirect('/login');
    }
    // return view('admin.product.view_productreport');
    return redirect()->route('dashboard');
});

Route::post('/login', [LoginController::class, 'signin'])->name('login');
Route::get('/admin-dashboard', [HomeController::class, 'dashboard'])->name('dashboard');

// Category 

Route::get('/addcategory', [CategoryController::class, 'addform_category'])->middleware('auth')->name('create-category');
Route::post('/addedcategory', [CategoryController::class, 'added_category'])->middleware('auth');

Route::get('/viewcategory', [CategoryController::class, 'view_categoryreport'])->middleware('auth')->name('categories');

Route::get('/categoryedit/{id}', [CategoryController::class, 'editform_category'])->middleware('auth')->name('edit-category');
Route::post('/editedcategory', [CategoryController::class, 'edited_category'])->middleware('auth');

Route::get('/categorydelete/{id}', [CategoryController::class, 'category_delete'])->middleware('auth')->name('delete-category');
// Category 

/*
|--------------------------------------------------------------------------
| SubCategory
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'sub-category'], function () {
    Route::controller(SubCategoryController::class)->group(function () {
        Route::get('data', 'index')->name('subcategories');
        Route::get('create', 'create')->name('create-subcategory');
        Route::post('create', 'store');
        Route::get('edit/{id}', 'edit')->name('edit-subcategory');
        Route::patch('edit/{id}', 'update');
        Route::get('show/{id}', 'show')->name('show-subcategory');
        Route::delete('delete/{id}', 'destroy')->name('delete-subcategory');
    });
});

/*
|--------------------------------------------------------------------------
| Product Work
|--------------------------------------------------------------------------
*/

Route::get('/addproduct', [ProductController::class, 'addform_product'])->middleware('auth')->name('create-product');
Route::post('/addedproduct', [ProductController::class, 'added_product'])->middleware('auth');

Route::get('/viewproduct', [ProductController::class, 'view_productreport'])->name('products');

Route::get('/productedit/{id}', [ProductController::class, 'editform_product'])->middleware('auth')->name('edit-product');
Route::post('/editedproduct', [ProductController::class, 'edited_product'])->middleware('auth');

Route::get('/productdelete/{id}', [ProductController::class, 'product_delete'])->middleware('auth')->name('delete-product');




Route::get('/showstates',[ProductController::class, 'states_select']);
Route::get('/showcity',[ProductController::class, 'city_select']);

/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'user'], function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('data', 'index')->name('users');
        Route::get('create', 'create')->name('create-user');
        Route::post('create', 'store');
        Route::get('edit/{id}', 'edit')->name('edit-user');
        Route::patch('edit/{id}', 'update');
        Route::get('show/{id}', 'show')->name('show-user');
        Route::delete('delete/{id}', 'destroy')->name('delete-user');
    });
});

/*
|--------------------------------------------------------------------------
| Vendors
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'vendor'], function () {
    Route::controller(VendorController::class)->group(function () {
        Route::get('data', 'index')->name('vendors');
        Route::get('create', 'create')->name('create-vendor');
        Route::post('create', 'store');
        Route::get('edit/{id}', 'edit')->name('edit-vendor');
        Route::patch('edit/{id}', 'update');
        Route::get('show/{id}', 'show')->name('show-vendor');
        Route::delete('delete/{id}', 'destroy')->name('delete-vendor');
    });
});

/*
|--------------------------------------------------------------------------
| Investments
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'investment'], function () {
    Route::controller(InvestmentController::class)->group(function () {
        Route::get('data', 'index')->name('investments');
        Route::get('create', 'create')->name('create-investment');
        Route::post('create', 'store');
        Route::get('edit/{id}', 'edit')->name('edit-investment');
        Route::patch('edit/{id}', 'update');
        Route::get('show/{id}', 'show')->name('show-investment');
        Route::delete('delete/{id}', 'destroy')->name('delete-investment');
    });
});

/*
|--------------------------------------------------------------------------
| Product Services
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'product-service'], function () {
    Route::controller(ProductServiceController::class)->group(function () {
        Route::get('data', 'index')->name('ps');
        Route::get('create', 'create')->name('create-ps');
        Route::post('create', 'store');
        Route::get('edit/{id}', 'edit')->name('edit-ps');
        Route::patch('edit/{id}', 'update');
        Route::get('show/{id}', 'show')->name('show-ps');
        Route::delete('delete/{id}', 'destroy')->name('delete-ps');
    });
});

Route::group(['prefix' => 'uploaded-service'], function () {
    Route::controller(UploadServiceController::class)->group(function () {
        Route::get('data', 'index')->name('uploads');
        Route::get('show/{id}', 'show')->name('show-product');
        Route::delete('delete/{id}', 'destroy')->name('delete-product');
    });
});
/*vendors*/
// Route::get('/addvendor', [VendorController::class, 'createvendor'])->middleware('auth');
/*
|--------------------------------------------------------------------------
| Employee Work
|--------------------------------------------------------------------------
*/

// Route::get('/employee/index', [EmployeeController::class, 'index'])->middleware('auth');

/*
|--------------------------------------------------------------------------
| Employee Work
|--------------------------------------------------------------------------
*/
