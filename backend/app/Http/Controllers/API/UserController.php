<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
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

    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }
}
