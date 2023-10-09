<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;
use App\Models\Category;
use App\Models\Product;
use Session;
use DB;
use Auth;


class ProductController extends Controller
{
    function addform_product()
    {
        return "aaaaaaaaaaaaa"; exit;
        $categorydropdown=Category::where('parent_id','=',"0")
        ->where('child_parent_id','=',"0")
        ->where('is_deleted',0)->where('createdby_id',Auth::user()->id)->get();

        $country=DB::table('country')->get();
        // $state=DB::table('region')->get();
        // $city=DB::table('city')->get();
        return view('product.addform_product',compact('categorydropdown','country'));
    }

    function added_product(Request $request)
    {
        // dd($request);
        $this->validate($request, [
            'product_name' => 'required',
            'product_image.*' => 'required|mimes:jpg,jpeg,png',


        ],
        [
            'product_name.required' => 'Product Name is Required',
        ]
    );
    $latest = Product::max('id');
	if ($latest == null) {
		$latest = 1;
	}
	$latest=$latest+1;
	
    

        $product = new Product();
        $product->product_name = $request->product_name;

        // Category 
        $cat=Category::find($request->cat_id);
        $categoryname=$cat->name;
        $product->cat_id = $request->cat_id;
        $product->cat_name = $categoryname;

        $product->quantity = $request->quantity;
        // $product->color = json_encode($request->color);
        // $product->size = json_encode($request->size);
        $product->buying_price = $request->buying_price;
        $product->selling_price = $request->selling_price;
        if(isset($request->is_discounted)){
        $product->is_discounted = $request->is_discounted;
        $product->discount_price = $request->discount_price;
        }
         
            if ($request->hasfile('product_image')) {
                foreach ($request->file('product_image') as $file) {
                    $destinationPath = 'uploads/products';
                    // $name = $file->getClientOriginalName();
                    $name = date('ymdis').'-'.rand(0,999).$file->getClientOriginalName();
                    $file->move($destinationPath,$name);
                    $imgData[] =$name;
                }
                $product->product_image = json_encode($imgData);
            }
        if($request->video!=null){

            $product->video = $request->video;
            
        }    

        if(isset($request->is_active)){
            $product->is_active = $request->is_active;
            }

        $product->description = $request->description;    
        $product->country_id = $request->country_id;    
        $product->state_id = $request->state_id;    
        $product->city_id = $request->city_id;    
        $product->createdby_id = Auth::user()->id;        
        $product->save();
        return back()->with('message', 'Record Added Successfully!');

    }



    public function view_productreport(Request $request)
    {
        if (isset($request->btnsearch)) {
                
                $base_query=Product::query();
            
                if ($request->product_namesearch != "Select") {
                    $base_query=$base_query->where('product_name', '=', $request->product_namesearch);
                }


                if ($request->productname != "") {
                    $base_query=$base_query->where('product_name', 'like', '%' . $request->productname . '%');
                }

                $productdropdown=Product::where('is_deleted',0)->where('createdby_id',Auth::user()->id)->get();
                $products=$base_query->where('is_deleted',0)->where('createdby_id',Auth::user()->id)->orderBy('created_at','DESC')->paginate(15);
                return view('product.view_productreport', compact('products','productdropdown'));

        }
        $productdropdown=Product::where('is_deleted',0)->where('createdby_id',Auth::user()->id)->get();
        $products = Product::where('is_deleted',0)->where('createdby_id',Auth::user()->id)->orderBy('created_at', 'DESC')->paginate(15);
        return view('product.view_productreport', compact('products','productdropdown'));
    }

    public function product_delete($id)
    {        
        $product=Product::find($id);
        $product->is_deleted=1;
        $product->save();
        Session::flash('messagedelete','Record Deleted Successfully');
        return back();
    }

    public function editform_product($id)
    {
        $categorydropdown=Category::where('parent_id','=',"0")
        ->where('child_parent_id','=',"0")
        ->where('is_deleted',0)->where('createdby_id',Auth::user()->id)->get();
        $products = Product::find($id);
        $country=DB::table('country')->get();
        return view('product.editform_product', compact('products','categorydropdown','country'));
    }

    public function edited_product(Request $request)
    {
        // dd($request);
        $product = Product::find($request->id);
        $product->product_name = $request->product_name;

        // Category 
        $cat=Category::find($request->cat_id);
        $categoryname=$cat->name;
        $product->cat_id = $request->cat_id;
        $product->cat_name = $categoryname;
        $product->quantity = $request->quantity;
        $product->buying_price = $request->buying_price;
        $product->selling_price = $request->selling_price;
        if(isset($request->is_discounted)){
        $product->is_discounted = $request->is_discounted;
        $product->discount_price = $request->discount_price;
        }
        else {
            $product->is_discounted = null;
            $product->discount_price = null;
        }
         
        if ($request->attach=="Images") {
            if ($request->hasfile('product_image')) {
                foreach ($request->file('product_image') as $file) {
                    $destinationPath = 'uploads/products';
                    // $name = $file->getClientOriginalName();
                    $name = date('ymdis').'-'.rand(0,999).$file->getClientOriginalName();
                    $file->move($destinationPath,$name);
                    $imgData[] =$name;
                }
                $product->product_image = json_encode($imgData);
            }
            $product->video = null;
        } 
        
        else {
            $product->video = $request->video;
            $product->product_image =null;
        }
        
        if(isset($request->is_active)){
            $product->is_active = $request->is_active;
            }
        else {
            $product->is_active = 0;
        }    
        $product->description = $request->description; 
        $product->country_id = $request->country_id;    
        $product->state_id = $request->state_id;    
        $product->city_id = $request->city_id;    
        $product->createdby_id = Auth::user()->id;  
        $product->save();
        return redirect('/viewproduct')->with('message', 'Record Updated Successfully!');
    }
 
//    Country State City
    public function states_select()
    {
        $output='<option value="">Select</option>';
        if($_GET['query']!=''){
        $getvalue=$_GET['query'];
        $state=DB::table('region')->where("country_id",$getvalue)
        ->get();
        foreach ($state as $item) {
            
        $output.='

        <option value="'. $item->id .'">'. $item->region .'</option>
        
    ';

        }

        
        $data['output']=$output;
    echo json_encode($data);
    }else{
        echo json_encode('none');
    }


    }


    public function city_select()
    {
        $output='<option value="">Select</option>';
        if($_GET['query']!=''){
        $getvalue=$_GET['query'];
        $city=DB::table('city')->where("region_id",$getvalue)
        ->get();
        foreach ($city as $item) {
            
        $output.='

        <option value="'. $item->id .'">'. $item->city .'</option>
        
    ';

        }

        
        $data['output']=$output;
    echo json_encode($data);
    }else{
        echo json_encode('none');
    }


    }
//    Country State City
}
