<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\House;

class HouseController extends Controller
{
    public function index() {
        $house = House::all();
        return response()->json($house, 200);
    }

    public function create(Request $request): \Illuminate\Http\JsonResponse
    {
        $house = new House();
        $house->fill($request->all());
        $house->save();
        $response =[
            'status' => 'success',
            'message' => 'Add new post successful!'
        ];




        return response()->json($response);
    }
}
