<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = new User();
        $user->name = 'duc';
        $user->email = 'duc1@gmail.com';
        $user->image = 'aaaaa';
        $user->phone = '0000000';
        $user->password = Hash::make('123456');
        $user->save();

    }
}
