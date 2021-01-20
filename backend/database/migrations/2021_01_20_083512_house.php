<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class House extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('house', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('typeOfRoom');
            $table->string('address');
            $table->string('numberOfBedroom');
            $table->string('numberOfBathroom');
            $table->string('desc');
            $table->integer('pricePerDay');
            $table->string('image');
            $table->timestamp('create_post_at');
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
        //
    }
}
