<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    // protected $redirectTo = RouteServiceProvider::HOME;
    protected function redirectTo()
    {
        // if (auth()->user()->admin == 1) {
        //     return '/admin';
        // }
        return '/admin';
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    
    public function signin(Request $request)
    {
        /*$user = new User();
        $user->name = 'Admin';
        $user->email = 'admin@videoviewhr.com';
        $user->password = Hash::make('123456');
        $user-> role = 1;
        $user->status = 1;
        $user->added_date = date("Y-m-d");
        $user->edited_date = date("Y-m-d");
        $user->save();
        dd($request);*/
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);
        
       $credentials  = [
           'email' => $request->email,
           'password' => $request->password
       ];
       
       /*$user = User::where('email', $request->email)->first();
       $pass = $user->password;
       
        if ($request->email == $user->email && $request->password == $pass) {
            $request->session()->regenerate();

            return redirect('/viewproduct');
        } else {
            dd($user);
            return back()->withErrors([
                'email' => 'Provided credentials don\'t match our records.'
            ])->onlyInput('email');
        }*/
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // return redirect('/viewproduct');
            return redirect()->route('dashboard');
        } else {
            return back()->withErrors([
                'email' => 'Provided credentials don\'t match our records.'
            ])->onlyInput('email');
        }
    }
}
