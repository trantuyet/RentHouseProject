<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>"required|min:2|max:500"
        ];
    }
    public function messages()
    {
        return [
            'name.required'=>"Không được để trống tên nhà "  ,
            'name.min'=>"Phải từ 2 ký tự trở lên"  ,
            'name.max'=>"Không được quá 500 ký tự"  ,
        ];
    }
}
