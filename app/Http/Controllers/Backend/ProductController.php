<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:191',
            'desc' => 'required|string|max:2000',
            'image' => 'required|mimes:jpg,jpeg,png,bmp|dimensions:max_width=1080,height=1080',
        ]);
        
        $image = $request->image;
        $image_new_name =  "HPDSKP_".rand(10,1000000).".".$image->getClientOriginalExtension();
        $image->move('assets/uploads/product/', $image_new_name);
        $image_new_name = 'assets/uploads/product/'.$image_new_name;

        $product = Product::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'image' => $image_new_name,
            'type' => 1
        ]);

        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        dd($request->all());
        $product = Product::findOrfail($id);

        $this->validate($request, [
            'name' => 'required|string|max:191'
        ]);

        $product->update($request->all());

        return ['message'   => 'Updated the product data'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrfail($id);

        $product->delete();
        return ['message' => 'Product Deleted'];
    }
}
