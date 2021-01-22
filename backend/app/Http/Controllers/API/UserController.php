<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function getAllUsers() {
        $users = User::all();

        $data = [
            'status' => 'success',
            'data' => $users,
        ];

        return response()->json($data);
    }


    function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->fill($request->all());
        $user->save();

        $data = [
            'status' => 'success',
            'message' => 'Cập nhật thông tin thành công'
        ];

        return response()->json($data);
    }
}
