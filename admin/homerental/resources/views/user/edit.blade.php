@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item">Users</li>
                <li class="breadcrumb-item">Edit User</li>
            </ol>
        </nav>

        <!-- Page Header -->
        
        <div class="col-md-12">
            @if (Session::has('success'))
            <div class="alert alert-success" role="alert">
                <div class="message">
                  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong> {{ Session::get('success') }} &nbsp;
                </div>
            </div>
            @endif


            @if (Session::has('error'))
            <div class="alert alert-danger" role="alert">
                <div class="message">
                  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong> {{ Session::get('error') }} &nbsp;
                </div>
            </div>
            @endif

        </div>
        
        
        <div class="card col-md-8 m-auto">
            <div class="card-header mg-b-15">
                
            </div>

            <div class="card-body">
                <form method="post" action="{{ route('edit-user', $user->id) }}">
                  @csrf
                  @method('PATCH')
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="name">Name</label>
                      <input type="text" id="name" name="name" class="form-control @error('name')
                      border border-danger @enderror" value="{{ $user->name }}">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" class="form-control @error('email')
                      border border-danger @enderror" value="{{ $user->email }}">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="password">Password</label>
                      <input type="password" name="password" class="form-control" id="password"
                      class="form-control @error('password') border border-danger @enderror">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="password_confirmation">Repeat Password</label>
                      <input type="password" name="password_confirmation" id="password_confirmation"
                      class="form-control @error('password_confirmation') border border-danger @enderror">
                    </div>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
           
        </div>
    </div>
</div>
@endsection