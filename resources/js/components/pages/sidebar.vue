<template>
  <div>
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div class="logo"><a href="" class="simple-text logo-normal">
          Laravel Vue
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">

          <li class="nav-item active  ">
            <router-link :to="{ name:'Dashboard' }" class="nav-link">
              <i class="material-icons">dashboard</i>Dashboard
            </router-link>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li class="nav-item ">
            <router-link :to="{ name: 'PostIndex'}" class="nav-link">
              <i class="material-icons">person</i>Posts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
