<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;
use App\Models\Investment;
use App\Models\Product;
use App\Models\Category;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    
    public function dashboard()
    {
        $vendors = Vendor::all();
        $investments = Investment::all();
        $products = Product::all();
        $categories = Category::all();
        
        return view('dashboard', compact('vendors', 'investments', 'products', 'categories'));
    }
}
