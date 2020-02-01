<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{

    public function register(Request $request)
    {
        // checking if user email already exists or not
        $user = User::where('email', $request->email)->first();

        if ($user)
            return response()->json(['error'=>'This type of User already exists'], 401);

        $user = $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);
        $user['password'] = bcrypt($request->password);
        $user = User::create($user);

        Auth::login($user);
        return response()->json($user, 200);
    }

    public function login(Request $request)
    {
        $user = $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt(['email'=>$request->email, 'password'=>$request->password],
            true))
            return response()->json(Auth::user(), 200);

        return response()->json(['error'=>'Your credentails does not match'], 401);
    }

    public function logout()
    {
        Auth::login(Auth::user());
    }

    public function sample(Request $request)
    {
        $user = $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        return response()->json(['success'=>'Successfully login']);
    }

}
