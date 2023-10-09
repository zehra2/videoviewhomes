@extends('admin.master.header')
@section('content')

<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.php">Admin</a></li>
                <li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
            </ol>
        </nav>

        <!-- Page Header -->
        
        <div class="col-md-12">
            @if (Session::has('message'))
            <div class="alert alert-success" role="alert">
                <div class="message">
                  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong> {{ Session::get('message') }} &nbsp;
                </div>
                </div>
                @endif


                @if (Session::has('messagedelete'))
                <div class="alert alert-danger" role="alert">
                    <div class="message">
                      <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button><strong></strong> {{ Session::get('messagedelete') }} &nbsp;
                    </div>
                    </div>
                    @endif

              </div>
        
        
        <div class="card ">
            <div class="card-header mg-b-15">

                <form action="{{ url('/viewchildcategory') }}" method="get" autocomplete="off">
                    <div class="row align-items-end">

                        

                       
                        <div class="col-md-3">
                            <label class="control-label exp-label">Select ChildCategory:</label>

                                <select name="childcat_namesearch" class="form-control select2" required> 
                                    
                                    @if (request('childcat_namesearch') != null)
                                    <option>{{ request('childcat_namesearch') }}</option>
                                @else
                                    
                                <option value="Select">Select</option>
                                @endif
                                    @foreach ($childcategorydropdown as $dropdown)
                                        <option value="{{ $dropdown->name }}">{{ $dropdown->name }}</option>
                                    @endforeach

                                  </select>  
                        </div>
                        <div class="col-md-3">
                            <label class="control-label exp-label">ChildCategory Name:</label>
                            <input type="text" name="childcategoryname" class="form-control" value="{{ request('childcategoryname') }}">
                            
                        </div>
                       
                        
                        
                        
                        <div class="col-md-1" style="margin-top: 30px;">
                            <button class="btn btn-primary" type="submit" name="btnsearch" value="btnsearch">Filter</button>
                            
                        </div>
                        <a href="{{ url('/viewchildcategory') }}" class="btn btn-primary">Empty Filter</a>


                        &nbsp;&nbsp;&nbsp;<a href="{{ url('/addchildcategory') }}" class="btn btn-primary">Add ChildCategory</a>


                    </div>
                </form>
                
            </div>

                <table class="table table-bordered" id="DivIdToPrint">
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>SubCategory Name</th>
                            <th>Image</th>
                            <th>is active</th>
                            <th>Created at</th>
                            
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <?php $i=1;?>
                        @forelse($childcategory as $item)
                        <tr>
                            <td class="blockk">
                                <?php echo $i; ?>
                            </td>
                           
                            <td class="blockk">{{ $item->name }}</td>
                            <td>
                                <img alt="" src="{{ url('/assets/revamp/images/category/', $item->category_image) }}" width="50px" height="auto">
                            </td>
                            <td class="blockk">
                                @if ($item->is_active ==1)
                                    Yes
                                @else
                                    No
                                @endif
                                
                            </td>
                            <td class="blockk">
                                {!! date('d- F, Y', strtotime($item->created_at)) !!}
                            </td>
                            
                            <td>
                                <a href="{{ url('/') }}/categoryedit/{{ $item->id }}" title="Edit" class="btn btn-success mx-2 expense-dlt-btn"><i class="far fa-edit"></i></a>
                                <a href="{{ url('/') }}/categorydelete/{{ $item->id }}" title="delete" class="btn btn-danger deleteRecord expense-dlt-btn"><i class="far fa-trash-alt"></i></a>

                            </td>                        
                        </tr>
                        
                        <?php $i++; ?>
                        @empty 
                        <tr>
                            <td class="blockk" colspan="10"><h4 class="fs_13">No Sub Category Record</h4></td>
                        </tr>
                        @endforelse
                
                    </tbody>
                </table>
                <div class="expense-pegination">
                {{ $childcategory->withQueryString()->links() }}
            </div>
           
        </div>
    </div>
</div>

@endsection