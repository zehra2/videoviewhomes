<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investment;

class InvestmentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);        
    }
    
    public function index()
    {
        $inv = Investment::paginate(5);

        return view('investment.data', [
            'inv' => $inv
        ]);
    }
    
    public function create()
    {
        return view('investment.create');
    }
    
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'youtube_link' => 'required',
        ]);

        $inv = new Investment();
        $inv->name = $request->name;
        $inv->youtube_link = $request->youtube_link;
        $inv->save();

        return redirect()->route('investments')->with('success', 'Investment saved successfully');
    }
    
    public function show($id)
    {
        
        $inv = Investment::find($id);

        return view('investment.show', [
            'inv' => $inv
        ]);
    }
    
    public function edit($id)
    {
        $inv = Investment::find($id);
        
        return view('investment.edit', [
            'inv' => $inv
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'youtube_link' => 'required',
        ]);
        
        $inv = Investment::find($id);
        $inv->name = $request->name;
        $inv->youtube_link = $request->youtube_link;
        $inv->save();
        
        return redirect()->route('investments')->with('success', 'Investment updated successfully');
    }
    
    public function destroy($id)
    {
        $inv = Investment::find($id);
        $inv->update(['status'=>0]);
        $inv->delete();

        return redirect()->route('investments')->with('success', 'Deleted Successfully');
    }
}
