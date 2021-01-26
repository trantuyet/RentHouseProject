<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    use HasFactory;

    public $table = "house";
    protected $fillable = [
        'name',
        'typeOfRoom',
        'address',
        'badRoom',
        'bathRoom',
        'description',
        'price',
        'image',
        'numberOfBedroom`',
        'numberOfBathroom',
        'desc',
        'pricePerDay',
        'image',
        'create_post_at'
    ];
}
