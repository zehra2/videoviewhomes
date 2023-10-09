<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Product extends Model
{
    use HasFactory;

    public static function getcolor()
    {
        $color=Color::select('name')->distinct()->pluck('name');
        return $color;
    }

    public static function getsize()
    {
        $size=Size::select('name')->distinct()->pluck('name');
        return $size;
    }
    public static function getstate($id)
    {
        $state=DB::table('region')->where('country_id',$id)->get();
        // return $state->region;
        return $state;
    }

    public static function getcity($id)
    {
        $city=DB::table('city')->where('region_id',$id)->get();
        // return $city->city;
        return $city;
    }
}
