<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
<<<<<<< HEAD
use Illuminate\Http\RedirectResponse;
=======
use App\Http\Requests\AddHouseRequest;
use App\Http\Requests\UpdateHouseRequest;
use App\Models\House;
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
use Illuminate\Http\Request;
use App\Models\House;

class HouseController extends Controller
{
<<<<<<< HEAD
    public function index() {
=======
    function index()
    {
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
        $house = House::all();
        return response()->json($house, 200);
    }

<<<<<<< HEAD
    public function create(Request $request): \Illuminate\Http\JsonResponse
=======
    public function store(AddHouseRequest $request)
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
    {
        $house = new House();
        $house->fill($request->all());
        $house->save();
<<<<<<< HEAD
        $response =[
            'status' => 'success',
            'message' => 'Add new post successful!'
        ];




        return response()->json($response);
=======
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
>>>>>>> 424a4fa5b01cc49f61d9480730b03cfb7dbca27d
    }
}
