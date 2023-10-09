@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item">Product Service</li>
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
            

                <table class="table table-bordered table-striped" id="DivIdToPrint" style="text-align: center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Videos</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if($productservice->count())
                        <?php $i=0;?>
                        @foreach($productservice as $ps)
                        <tr>
                           <td>{{ ++$i }}</td>
                           <td>{{ $ps->product }}</td>
                           <td>{{ $ps->servicevideo }}</td>
                           <td>{{ $ps->about }}</td>
                           <td>
                               <!--<a class="btn btn-primary" href="{{ route('show-ps', $ps->id) }}">Show</a>-->
                               <form class="d-inline-block" method="post" action="{{ route('delete-ps', $ps->id) }}">
                                   @csrf
                                   @method('DELETE')
                                   <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure?')">Delete</a>
                               </form>
                           </td>
                        </tr>
                        @endforeach
                        @else
                        <tr colspan="4">No records found</tr>
                        @endif
                    </tbody>
                </table>
               
              
           

            <div class="paginatoin-area style-2 pt-35 pb-20 text-center paginationstyle">               
                {{ $productservice->links() }}
            </div> 
           
        </div>
    </div>
</div>
@endsection