@extends('admin.master.header')
@section('content')
    <div id="content-page" class="content-page account-area dashboard-page">
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Admin</a></li>
                    <li class="breadcrumb-item">User</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-sm-12">
                    <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">User</h4>
                            </div>
                        </div>
                        <div class="iq-card-body">
                        
                            <div class="table-responsive">
                                <table id="datatable" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>phone</th>
                                            <th>Register at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($user as $item)
                                        <tr>
                                            <td>{{ $item->name }}</td>
                                            <td>{{ $item->last_name }}</td>
                                            <td>{{ $item->email }}</td>
                                            <td>{{ $item->country }}</td>
                                            <td>{{ $item->state }}</td>
                                            <td>{{ $item->city }}</td>
                                            <td>{{ $item->phone }}</td>
                                            <td> {!! date('d-F,Y H:i:s', strtotime($item->created_at)) !!}</td>
                                            
                                        </tr>
                                            @empty
                                           <tr>
                                               <td colspan="6">No User Record</td>
                                               </tr> 
                                            @endforelse
                                        
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
