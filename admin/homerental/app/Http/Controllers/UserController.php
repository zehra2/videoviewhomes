<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);        
    }
    
    public function index()
    {
        $users = User::paginate(20);

        return view('user.data', [
            'users' => $users
        ]);
    }
    
    public function create()
    {
        return view('user.create');
    }
    
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email:rfc|max:255',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = new User();
        $user->role = 1;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->added_date = date("Y-m-d H:i:s");
        $user->status = 1;
        $user->save();

        return redirect()->route('users')->with('success', 'User saved successfully');
    }
    
    public function show($id)
    {
        
        $user = User::find($id);

        return view('user.show', [
            'user' => $user
        ]);
    }
    
    public function edit($id)
    {
        $user = User::find($id);
        
        return view('user.edit', [
            'user' => $user
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email:rfc|max:255',
            'password' => 'required|confirmed|min:8',
        ]);
        
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->edited_date = date("Y-m-d H:i:s");
        $user->save();
        
        return redirect()->route('users')->with('success', 'User updated successfully');
    }
    
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return redirect()->route('users')->with('success', 'Deleted Successfully');
    }
}
