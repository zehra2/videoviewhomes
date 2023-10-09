<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\SubCategory;
use View;
use Carbon\Carbon;
use Session;
use Auth;

class CategoryController extends Controller
{
    
// Category 

    function addform_category()
    {
        return view('category.addform_category');
    }

    function added_category(Request $request)
    {
        $this->validate($request, [
            'category_name' => 'required',
            'category_image' => 'required|mimes:jpg,png',


        ],
        [
            'category_name.required' => 'Category Name is Required',
        ]
    );

        $latest = Category::max('id');
        if ($latest == null) {
            $latest = 1;
        }
        $latest=$latest+1;
        if($request->category_image!=null){
			$filename=$this->upload_file($request->category_image,$latest);
		}
        $category = new Category();
        $category->name = $request->category_name;

        $category->parent_id = "0";
        $category->child_parent_id = "0";

        if(isset($request->category_image)){
            $category->category_image = $filename;
            }
        if(isset($request->is_active)){
            $category->is_active = $request->is_active;
            }

        $category->createdby_id = Auth::user()->id;
        $category->save();
        return back()->with('message', 'Record Added Successfully!');

    }


    public function view_categoryreport(Request $request)
    {
        if (isset($request->btnsearch)) {
                
                $base_query=Category::query();
            
                if ($request->cat_namesearch != "Select") {
                    $base_query=$base_query->where('name', '=', $request->cat_namesearch);
                }


                if ($request->categoryname != "") {
                    $base_query=$base_query->where('name', 'like', '%' . $request->categoryname . '%');
                }

                $categorydropdown=Category::where('parent_id','=',"0")
                ->where('child_parent_id','=',"0")
                ->where('is_deleted',0)
                ->where('createdby_id',Auth::user()->id)
                ->get();
                $category=$base_query->where('parent_id','=',"0")
                ->where('child_parent_id','=',"0")
                ->where('is_deleted',0)
                ->where('createdby_id',Auth::user()->id)
                ->orderBy('created_at','DESC')->paginate(15);
                return view('category.view_categoryreport', compact('category','categorydropdown'));

        }
        $categorydropdown=Category::where('parent_id','=',"0")
        ->where('child_parent_id','=',"0")
        ->where('is_deleted',0)
        ->where('createdby_id',Auth::user()->id)
        ->get();
        /*$category = Category::where('parent_id','=',"0")
        ->where('child_parent_id','=',"0")
        ->where('is_deleted',0)
        ->where('createdby_id',Auth::user()->id)
        ->orderBy('created_at', 'DESC')->paginate(15);*/
        
        $category = Category::where('is_deleted', 0)->paginate(15);
        return view('category.view_categoryreport', compact('category','categorydropdown'));
    }



    public function category_delete($id)
    {
        
        $category=Category::find($id);
        
        $subcategory = SubCategory::where('parent_id', $category->id)->get();
        foreach ($subcategory as $key) {
            $key->is_deleted=1;
            $key->delete();
        }
        
        $category->is_deleted=1;
        $category->save();
        
        
        Session::flash('messagedelete','Record Deleted Successfully');
        return back();
    }

    public function editform_category($id)
    {
        $category = Category::find($id);
        return view('category.editform_category', compact('category'));
    }

    public function edited_category(Request $request)
    {
        $this->validate($request, [
            'category_name' => 'required',
            // 'category_image' => 'required|mimes:jpg,png',


        ],
        [
            'category_name.required' => 'Category Name is Required',
        ]
    );

        if($request->category_image!=null){
			$filename=$this->upload_file($request->category_image,$request->id);
		}
        $category = Category::find($request->id);
        $category->name = $request->category_name;
        if(isset($request->category_image)){
            $category->category_image = $filename;
            }
        if(isset($request->is_active)){
            $category->is_active = 1;
            } 
        else{
            $category->is_active = 0;
        }       
        $category->createdby_id = Auth::user()->id;
        $category->save();
        return redirect('/viewcategory')->with('message', 'Record Updated Successfully!');
    }

// Image Upload 

    public function upload_file($file,$id) {
		$destinationPath = 'uploads/category';
		// $filename=$id.'.'.$file->getClientOriginalExtension();
        $filename=$id.date('ymdis').'-'.rand(0,999).'.'.$file->getClientOriginalExtension();
		$file->move($destinationPath,$filename);
		return $filename;
	}
}
