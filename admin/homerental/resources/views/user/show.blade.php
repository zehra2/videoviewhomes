@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item">Users</li>
                <li class="breadcrumb-item">{{ $user->name }}</li>
            </ol>
        </nav>

        <!-- Page Header -->
        
        <div class="col-md-12">
            @if (Session::has('success'))
            <div class="alert alert-success" role="alert">
                <div class="message text-white">
                  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong> {{ Session::get('success') }} &nbsp;
                </div>
            </div>
            @endif


            @if (Session::has('error'))
            <div class="alert alert-danger" role="alert">
                <div class="message text-white">
                  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong> {{ Session::get('error') }} &nbsp;
                </div>
            </div>
            @endif

        </div>
        
        
        <div class="card col-md-4 m-auto">
            <div class="card-header mg-b-15">
                <h3>{{ $user->name }}<h3>
            </div>
            <div class="card-body text-dark">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: {{ $user->name }}</li>
                <li class="list-group-item">Email: {{ $user->email }}</li>
                <li class="list-group-item">Added Date: {{ $user->added_date }}</li>
              </ul>

            </div>
            <div class="card-footer"></div>
           
        </div>
    </div>
</div>
@endsection