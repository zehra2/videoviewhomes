<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\ProductController;

class ProductService extends Model
{
    use HasFactory;
    protected $table = "productservices";
}
