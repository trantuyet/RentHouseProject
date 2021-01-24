<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    use HasFactory;
<<<<<<< HEAD

=======
    public $table = "house";
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
    protected $fillable = [
        'name',
        'typeOfRoom',
        'address',
<<<<<<< HEAD
        'badRoom',
        'bathRoom',
        'description',
        'price',
        'image',
=======
        'numberOfBedroom`',
        'numberOfBathroom',
        'desc',
        'pricePerDay',
        'image',
        'create_post_at'
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
    ];
}
