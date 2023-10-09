@extends('admin.master.header')
@section('content')
<div id="content-page" class="content-page account-area dashboard-page">
    <div class="container-fluid">
        <div class="row">
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info rounded p-3">
                  <div class="inner">
                    @if($vendors->count())
                    <h2 class="text-white">{{ $vendors->count() }}</h2>
                    @else
                    <h3>{{ 0 }}</h3>
                    @endif
    
                    <h4 class="text-white">Vendors <i class="ion ion-person-add"></i></h4>
                  </div>
                  <a href="{{ route('vendors') }}" class="small-box-footer text-white">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success rounded p-3 text-white">
                  <div class="inner">
                    @if($investments->count())
                    <h2 class="text-white">{{ $investments->count() }}</h3>
                    @else
                    <h3>{{ 0 }}</h3>
                    @endif
                    <h4 class="text-white">Investment Projects <i class="ion ion-stats-bars"></i></h4>
                  </div>
                  <a href="{{ route('investments') }}" class="small-box-footer text-white">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-primary rounded p-3 text-white">
                  <div class="inner">
                    @if($products->count())
                    <h2 class="text-white">{{ $products->count() }}</h2>
                    @else
                    <h3>{{ 0 }}</h3>
                    @endif
    
                    <h4 class="text-white">Products <i class="ion ion-bag"></i></h4>
                  </div>
                  <a href="{{ route('products') }}" class="small-box-footer text-white">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-danger rounded p-3 text-white">
                  <div class="inner">
                    @if($categories->count())
                    <h2 class="text-white">{{ $categories->count() }}</h2>
                    @else
                    <h3>{{ 0 }}</h3>
                    @endif
    
                    <h4 class="text-white">Categories <i class="ion ion-pie-graph"></i></h4>
                  </div>
                  <a href="{{ route('categories') }}" class="small-box-footer text-white">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <!-- ./col -->
            </div>
    </div>
</div>
@endsection