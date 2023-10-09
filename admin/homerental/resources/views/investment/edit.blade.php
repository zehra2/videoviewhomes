@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item">Investments</li>
                <li class="breadcrumb-item">Edit Investment</li>
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
                <form method="post" action="{{ route('edit-investment', $inv->id) }}">
                  @csrf
                  @method('PATCH')
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" placeholder="Investment Name"
                      class="form-control @error('name') border border-danger @enderror" value="{{ $inv->name }}">
                    </div>

                    
                    <div class="form-group">
                      <label for="youtube_link">Youtube Link</label>
                      <textarea id="youtube_link" name="youtube_link" rows="3"
                      class="form-control @error('name') border border-danger @enderror">{{ $inv->youtube_link }}</textarea>
                    </div>

                  </div>
                  
                  <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
           
        </div>
    </div>
</div>
@endsection