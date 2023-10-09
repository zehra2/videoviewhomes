@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item">Investments</li>
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
        
        
        <div class="card ">
            <div class="card-header mg-b-15">
                <a href={{ route('create-subcategory') }} class="btn btn-primary">Add Subcategory</a>
            </div>

                <table class="table table-bordered table-striped" id="DivIdToPrint" style="text-align: center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Parent Category</th>
                            <th>Image</th>
                            <th></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if($sub->count())
                        <?php $i=0;?>
                        @foreach($sub as $key)
                        
                        <tr>
                          <td>{{ ++$i }}</td>
                          <td>{{ $key->name }}</td>
                          <td>{{ $key->parent->name ?? '' }}<td>
                          <td>
                                <img alt="" src="{{ url('/uploads/subcategory/photos/', $key->category_image) }}" width="50" height="auto">
                           </td>
                           <td>
                               <a class="btn btn-primary" href="{{ route('show-subcategory', $key->id) }}">Show</a>
                               <a class="btn btn-warning" href="{{ route('edit-subcategory', $key->id) }}">Edit</a>
                               <form class="d-inline-block" method="post" action="{{ route('delete-subcategory', $key->id) }}">
                                   @csrf
                                   @method('DELETE')
                                   <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure?')">Delete</a>
                               </form>
                           </td>
                        </tr>
                        @endforeach
                        @else
                        <tr><td colspan="5">No records found<td></tr>
                        @endif
                    </tbody>
                </table>
               
              
           

            <div class="paginatoin-area style-2 pt-35 pb-20 text-center paginationstyle">               
                {{ $sub->links() }}
            </div> 
           
        </div>
    </div>
</div>
@endsection