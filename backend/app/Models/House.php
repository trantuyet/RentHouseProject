<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'typeOfRoom',
        'address',
        'badRoom',
        'bathRoom',
        'description',
        'price',
        'image',
    ];
}
