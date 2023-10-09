@extends('admin.master.header')
@section('content')
   <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Admin</a></li>
                    <li class="breadcrumb-item">Add vendors</li>
                </ol>
            </nav>
            <div class="row">
                @if (session()->has('message'))
                    <div class="col-md-12">
                        <div class="alert text-white bg-success" role="alert">
                            <div class="iq-alert-text">{{ Session::get('message') }} <a
                                    href="{{ url('/viewvendors') }}">Show</a></div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <i class="ri-close-line"></i>
                            </button>
                        </div>
                    </div>
                @endif

                <div class="card col-md-8 m-auto">
                 <div class="card-header mg-b-15">
                        <div class="iq-card-header" style="min-height: 285px;">

                            <h2>Add Vendor</h2>

                            <form action="{{ route('create-vendor') }}" method="post" autocomplete="off"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="name">First Name</label>
                                    <input type="text" class="form-control" name="fname"
                                        placeholder="First Name" value="{{ old('category_name') }}" required>
                                    
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Last Name</label>
                                    <input type="text" class="form-control" name="lname"
                                        placeholder="Last Name" value="{{ old('category_name') }}" required>
                                    
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Phone Number</label>
                                    <input type="phone" class="form-control" name="phone"
                                        placeholder="Phone Number" value="{{ old('category_name') }}" required>
                                    
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Email</label>
                                    <input type="email" class="form-control" name="email"
                                        placeholder="Email Address" value="{{ old('category_name') }}" required>
                                    
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Country*</label>
                                    <select name="country_id" id="user_type" class="form-control" required>
                                        @foreach($countries as $key){
                                        <option value="{{$key->id}}">{{$key->country}}</option>}
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Region*</label>
                                    <select name="state_id" id="state_id" class="form-control" >
                                        
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">City*</label>
                                    <select name="city_id" id="city_id" class="form-control" >
                                        
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">User Type</label>
                                    <select name="user_type" id="user_type" class="form-control" required>
            						<option value="">--Select Type--</option>
            						<option value="1">Product Provider</option>
            						<option value="2">Service Provider</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Password</label>
                                    <input type="password" class="form-control"  name="password" placeholder="Password"required>
                                    
                                </div>
                                
                                

                                

                                
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

