<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->String('product_name');
            $table->String('cat_id');
            $table->String('cat_name');
            $table->String('subcat_id');
            $table->String('subcat_name');
            $table->String('childcat_id');
            $table->String('childcat_name');
            $table->Integer('qty');
            $table->String('color');
            $table->String('size');
            $table->Integer('buying_price');
            $table->Integer('selling_price');
            $table->Integer('is_discounted');
            $table->Integer('discount_price');
            $table->String('product_image');
            $table->Integer('is_deleted');
            $table->Integer('is_active');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
