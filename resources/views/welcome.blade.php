@extends('layouts.app')
@section('content')
<div class="container">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="collapse navbar-collapse">
             <div class="navbar-nav">
                 <router-link to="/" class="nav-item nav-link">Home</router-link>
                 <router-link :to="{ name: 'PostIndex'}" class="nav-item nav-link">Posts</router-link>
             </div>
         </div>
     </nav>
     <br/>
     <router-view></router-view>
 </div>
@endsection
