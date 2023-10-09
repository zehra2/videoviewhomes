
@extends('admin.master.header')
@section('content')


<style>

   
    .catcolor{
      background: #ffbc3424 
    }
    .pricecolor{
      background: #ed1c2414 
    }
    .expense-dlt-btn {
    font-size: 20px;
    padding: 5px 5px;
    line-height: 1;
}

input.form-control {
    height: 35px;
}

.select2-container .select2-selection--single {
    height: 34px;
}

</style>
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Admin</a></li>
                <li class="breadcrumb-item">Product view</li>
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

                <form action="{{ url('/viewproduct') }}" method="get" autocomplete="off">
                    <div class="row align-items-end">

                        

                       
                        <div class="col-md-3">
                            <label class="control-label exp-label">Select Product:</label>

                                <select name="product_namesearch" class="form-control select2" required> 
                                    
                                    @if (request('product_namesearch') != null)
                                    <option>{{ request('product_namesearch') }}</option>
                                @else
                                    
                                <option value="Select">Select</option>
                                @endif
                                    @foreach ($productdropdown as $dropdown)
                                        <option value="{{ $dropdown->product_name }}">{{ $dropdown->product_name }}</option>
                                    @endforeach

                                  </select>  
                        </div>
                        <div class="col-md-3">
                            <label class="control-label exp-label">Product Name:</label>
                            <input type="text" name="productname" class="form-control" value="{{ request('productname') }}">
                            
                        </div>
                       
                        
                        
                        
                        <div class="col-md-1" style="margin-top: 30px;">
                            <button class="btn btn-primary" type="submit" name="btnsearch" value="btnsearch">Filter</button>
                            
                        </div>
                        <a href="{{ url('/viewproduct') }}" class="btn btn-primary">Empty Filter</a>


                        &nbsp;&nbsp;&nbsp;<a href="{{ url('/addproduct') }}" class="btn btn-primary">Add Product</a>


                    </div>
                </form>
                
            </div>

                <table class="table table-bordered" id="DivIdToPrint" style="text-align: center">
                    <thead>
                        <tr>
                            <th colspan="3"></th>
                            
                            <th colspan="1" class="catcolor">Category</th>
                            <th colspan="3"></th>
                            
                            <th colspan="3" class="pricecolor">Price</th>
                            <th colspan="3"></th>
                        </tr>
                        <tr>
                            <th>Sno.</th>
                            <th>Image</th>
                            <th>Video</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Buying</th>
                            <th>Selling</th>
                            <th>Discount</th>
                            <th>Description</th>
                            <th>is active</th>
                            <th>Created at</th>
                            
                            <th style="width: 129px;">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <?php $i=1;?>
                        @forelse($products as $item)
                        <tr>
                            <td class="blockk">
                                <?php echo $i; ?>
                            </td>
                            <td class="blockk">
                                   @if (!empty($item->product_image))   
                                   @foreach (json_decode($item->product_image) as $img)
                                   <a href="{{ url('/uploads/products/'. $img) }}"
                                    data-fancybox='gallery' data-caption='{{ $item->id }}'>
                                   <img alt="" src="{{ url('/uploads/products/'. $img) }}" width="50px" height="auto">
                                   </a>
                                   @endforeach 
                                   @endif
                            </td>
                            <td class="blockk">
                                @if (!empty($item->video))
                                <a href="{{ $item->video }}"
                                    data-fancybox='gallery' data-caption='{{ $item->id }}'>
                                {{-- <video
                                src="{{ $item->video }}"
                                width="140" height="170" controls controlsList='nodownload'>
                                Your browser does not support the video tag.
                                </video> --}}
                                <iframe width="300" height="250" src="{{ $item->video }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </a>
                                @else
                                    -------
                                @endif
                            </td>
                            <td class="blockk">{{ $item->product_name }}</td>
                            <td class="blockk catcolor">{{ $item->cat_name }}</td>
                           
                            <td class="blockk"> {{ $item->quantity }}</td>

                            <td class="blockk pricecolor"> {{ $item->buying_price }}</td>
                            <td class="blockk pricecolor"> {{ $item->selling_price }}</td>
                            <td class="blockk pricecolor"> {{ $item->discount_price }}</td>
                            <td class="blockk pricecolor"> {{ $item->description }}</td>
                            <td class="blockk">
                                @if ($item->is_active == 1)
                                    Yes
                                @else
                                    No
                                @endif
                                
                            </td>
                            <td class="blockk">
                                {!! date('d- F, Y', strtotime($item->created_at)) !!}
                            </td>
                            
                            <td>
                                <a href="{{ url('/') }}/productedit/{{ $item->id }}" title="Edit" class="btn btn-success mx-2 expense-dlt-btn"><i class="far fa-edit"></i></a>
                                <a href="{{ url('/') }}/productdelete/{{ $item->id }}" title="delete" class="btn btn-danger deleteRecord expense-dlt-btn"><i class="far fa-trash-alt"></i></a>
                            </td>                        
                        </tr>
                        <?php $i++; ?>
                        @empty 
                        <tr>
                            <td class="blockk" colspan="10"><h4 class="fs_13">No Products Record</h4></td>
                        </tr>
                        @endforelse
                
                    </tbody>
                </table>
               
              
           

            <div class="paginatoin-area style-2 pt-35 pb-20 text-center paginationstyle">               
                {{ $products->withQueryString()->links() }}
            </div> 
           
        </div>
    </div>
</div>
@endsection


