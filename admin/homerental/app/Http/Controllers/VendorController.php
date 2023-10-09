<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\Vendor;
use Illuminate\Support\Facades\Hash;

class VendorController extends Controller
{
    
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    
    public function index()
    {
        $vendors = Vendor::paginate(10);
        
        return view('vendor.data', [
            'vendors' => $vendors
        ]);
    }
    
    public function create()
    {
        $countries = [];
        foreach(Country::all() as $key){
            array_push($countries, $key);
        }
        return view('vendor.create', [
            'countries' => $countries    
        ]);
    }
    
    public function store(Request $request)
    {
        
        $this->validate($request, [
            'fname' => 'required|max:255',
            'email' => 'required|email:rfc',
            'password' => 'required|min:8',
        ]);
        $v1=rand(11111, 99999);
        $v2=rand(22222,88888);
        $v3=$v1.$v2;
        $code=Hash::make($v3);

        $user = new Vendor();
        $user->user_type = $request->user_type ?? 1;
        $user->name = $request->input('fname');
        $user->last_name = $request->input('lname');
        $user->phone = $request->input('phone');
        $user->email = $request->input('email');
        $user->country_id = $request->input('country_id');
        $user->state_id = $request->input('state_id')?? null;
        $user->city_id = $request->input('city_id') ?? null;
        $user->password = Hash::make($request->input('password'));
        $user->status = $request->input('status') ?? 1;
        $user->code = $code;
        $user->save();

        return redirect()->route('users')->with('success', 'User saved successfully');
    }
    public function show($id)
    {
        
        $vendor = Vendor::find($id);

        return view('vendor.show', [
            'vendor' => $vendor
        ]);
    }
    public function edit($id)
    {
        $vendor = Vendor::find($id);
        
        return view('vendor.edit', [
            'vendor' => $vendor
        ]);
    }
    public function destroy($id)
    {
        $vendor = Vendor::find($id);
        $vendor->delete();

        return redirect()->route('vendors')->with('success', 'Deleted Successfully');
    }
}
