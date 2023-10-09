<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\SubCategory;
use App\Models\Category;

class SubCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);        
    }
    
    public function index()
    {
        $sub = SubCategory::paginate(15);

        return view('subcategory.data', [
            'sub' => $sub
        ]);
    }
    
    public function create()
    {
        $categories = [];
        foreach(Category::where('is_deleted', 0)->get() as $key){
            array_push($categories, $key);
        }
        
        return view('subcategory.create', [
            'categories' => $categories
        ]);
    }
    
    public function store(Request $request)
    {
        // dd($request);
        $this->validate($request, [
            'parent_id' => 'required',
            'name' => 'required',
            'category_image' => 'required|mimes:jpg,png',
        ]);
        
        $latest = SubCategory::max('id');
        if ($latest == null) {
            $latest = 1;
        }
        $latest=$latest+1;
        
        $sub = new SubCategory();
        $sub->parent_id = $request->parent_id;
        $sub->name = $request->name;
        
        /*if ($request->hasFile('category_image')) {
            $destinationPath = 'uploads/subcategory/photos';
            $photo = $request->file('category_image');
            $name = date('ymdis').'-'.rand(0,999).$photo->getClientOriginalName();
            $path = $request->file('category_image')->storeAs($destinationPath,$name);
                    
            $sub->category_image = $name;
        }*/
        
        if($request->category_image!=null){
			$filename=$this->upload_file($request->category_image,$latest);
		}
		
		if(isset($request->category_image)){
            $sub->category_image = $filename;
        }
        
        if(isset($request->is_deleted)){
            $sub->is_deleted = $request->is_deleted;
        }

        if(isset($request->is_active)){
            $sub->is_active = $request->is_active;
        }
        
        $sub->createdby_id = Auth::user()->id;
        $sub->save();

        return redirect()->route('subcategories')->with('success', 'Subcategory saved successfully');
    }
    
    public function show($id)
    {
        
        $sub = SubCategory::find($id);

        return view('subcategory.show', [
            'sub' => $sub
        ]);
    }
    
    public function edit($id)
    {
        $sub = SubCategory::find($id);
        $categories = [];
        foreach(Category::all() as $key){
            array_push($categories, $key);
        }
        
        return view('subcategory.edit', [
            'sub' => $sub,
            'categories' => $categories
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'parent_id' => 'required',
            'name' => 'required',
        ]);
        
        $sub = SubCategory::find($id);
        $sub->parent_id = $request->parent_id;
        $sub->name = $request->name;
        
        if($request->category_image!=null){
			$filename=$this->upload_file($request->category_image,$id);
		}
		
        /*if ($request->hasFile('category_image')) {
            $destinationPath = 'uploads/subcategory/photos';
            $photo = $request->file('category_image');
            $name = date('ymdis').'-'.rand(0,999).$photo->getClientOriginalName();
            $path = $request->file('category_image')->storeAs($destinationPath,$name);
                    
            $sub->category_image = $name;
        }*/
        if(isset($request->category_image)){
            $sub->category_image = $filename;
        }
        
        if(isset($request->is_deleted)){
            $sub->is_deleted = $request->is_deleted;
        } else {
            $sub->is_deleted = 0;
        }

        if(isset($request->is_active)){
            $sub->is_active = $request->is_active;
        } else {
            $sub->is_active = 0;
        }
        
        $sub->createdby_id = Auth::user()->id;
        $sub->save();
        
        return redirect()->route('subcategories')->with('success', 'Subcategory updated successfully');
    }
    
    public function destroy($id)
    {
        $sub = SubCategory::find($id);
        $sub->delete();

        return redirect()->route('subcategories')->with('success', 'Deleted Successfully');
    }
    
    // Image Upload 

    public function upload_file($file,$id) {
		$destinationPath = 'uploads/subcategory/photos';
        $filename=$id.date('ymdis').'-'.rand(0,999).'.'.$file->getClientOriginalExtension();
		$file->move($destinationPath,$filename);
		return $filename;
	}
}
