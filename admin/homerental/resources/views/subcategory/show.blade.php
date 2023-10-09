@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item">Subcategories</li>
                <li class="breadcrumb-item">{{ $sub->name }}</li>
            </ol>
        </nav>

        <!-- Page Header -->
        
        <div class="col-md-12">
            @if (Session::has('success'))
            <div class="alert alert-success" role="alert">
                <div class="message text-white">
                  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span>{{ Session::get('success') }}</button><strong></strong>  &nbsp;
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
        
        
        <div class="card col-md-6 m-auto">
            <div class="card-header mg-b-15">
                <h3>Name:{{ $sub->name }}<h3>
                <h4>Parent: {{ $sub->parent->name }}</h4>
            </div>
            <div class="card-body text-dark">
              <img alt="" src="{{ url('/uploads/subcategory/photos/', $sub->category_image) }}" width="300" height="auto">
            </div>
            <div class="card-footer">
                {{ $sub->createdby_id }}
            </div>
           
        </div>
    </div>
</div>
@endsection