<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
    function changePassword(ChangePasswordRequest $request , $id): \Illuminate\Http\JsonResponse
    {
        $user = User::find($id);
        $userPassword = $user->password;
        $correctPassword = Hash::check($request->oldPassword, $userPassword);
        $correctPasswordConfirm = $request->newPassword == $request->newPasswordConfirm;
        if ($correctPassword){
            if ($correctPasswordConfirm){
                $user->password = Hash::make($request->newPassword);
                $user->save();
                return response()->json('Đổi mật khẩu thành công');
            }else{
                return response()->json('Nhập lại mật khẩu không đúng');
            }
        }

        return response()->json('Mật khẩu hiện tại không chính xác');
    }
}
