<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddHouseRequest;
use App\Http\Requests\UpdateHouseRequest;
use App\Models\House;
use Illuminate\Http\Request;

class HouseController extends Controller
{
    function index()
    {
        $house = House::all();
        return response()->json($house, 200);
    }

    public function store(AddHouseRequest $request)
    {
        $house = new House();
        $house->fill($request->all());
        $house->save();
        $statusCode = 201;
        if (!$house)
            $statusCode = 404;
        return response($house, $statusCode);

    }

    public function show($id)
    {
        $house = House::findOrFail($id);
        $statusCode = 200;
        if (!$house)
            $statusCode = 404;
        return response()->json($house, $statusCode);

    }
    public function update(UpdateHouseRequest $request, $id)
    {
        $categories = House::findOrFail($id);
        $categories->fill($request->all());
        $categories->save();
        $statusCode = 200;
        if (!$categories)
            $statusCode = 404;
        return response()->json($categories, $statusCode);
    }

    public
    function destroy($id)
    {
        $customer = House::find($id);

        if (is_null($customer)) {
            return response()->json([
                'error' => true,
                'message' => "Record with id # $id not found",
            ], 404);
        }

        $customer->delete();

        return response()->json([
            'error' => false,
            'message' => "Customer record successfully deleted id # $id",
        ], 200);
    }
}
