<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\UploadServiceController;

class UploadProduct extends Model
{
    use HasFactory;
    protected $table = "uploadservices";
}
