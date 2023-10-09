<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Session;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    //
    public function index(Request $request)
    {
        if (isset($request->btnsearch)) {
                
                $base_query=User::query();
                if ($request->brandsearch != "Select") {
                    $base_query=$base_query->where('brand', '=', $request->brandsearch);
                }

                $domains=$base_query->orderBy('created_at','DESC')->paginate(15);
               
                return view('admin.employee.index', compact('user'));

        }

        $user = User::orderBy('created_at', 'DESC')->get();
        return view('admin.employee.index', compact('user'));
    }

    public function add()
    {
        return view('auth.register');
    }

    public function added(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        $latest = User::max('id');
        if ($latest == null) {
            $latest = 1;
        }
        $latest=$latest+1;
        if (!empty($request['image'])) {
            $file=$request['image'];
            $destinationPath = 'assets/revamp/images/users';
            $filename=$latest.'.'.$file->getClientOriginalExtension();
            $file->move($destinationPath,$filename);
        } 
        else {
            $filename='default.jpg';
        }
        $user=User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'admin' => 1,
            'image' => $filename,
        ]);
        return back()->with('message', 'User Added Successfully!');
    }
}
