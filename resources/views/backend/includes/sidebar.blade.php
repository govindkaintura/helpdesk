<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
    <img src="{{ asset('img/logo.png') }}" alt="Logo" class="brand-image img-circle elevation-3"
        style="opacity: .8">
    <span class="brand-text font-weight-light">HELPDESK</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
        <img src="{{ asset('img/profile.png') }}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
        <a href="#" class="d-block">
            {{ Auth::user()->name }}
        </a>
        </div>
    </div>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library -->
            <li class="nav-item">
                <router-link to="/dashboard" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt blue"></i>
                    <p>
                        Dashboard
                    </p>
                </router-link>
            </li>
            <li class="nav-item has-treeview">
                <a href="#" class="nav-link ">
                    <i class="nav-icon fas fa-cog green"></i>
                    <p>
                        Management
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/users" class="nav-link">
                            <i class="fas fa-users nav-icon"></i>
                            <p>Users</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/roles" class="nav-link">
                            <i class="fas fa-user-tag nav-icon"></i>
                            <p>Roles</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview">
                <a href="#" class="nav-link ">
                    <i class="nav-icon fas fa-heartbeat purple"></i>
                    <p>
                        Helpdesk
                        <i class="right fas fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/categories" class="nav-link">
                            <i class="fas fa-box-open nav-icon"></i>
                            <p>Categories</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link">
                            <i class="fas fa-box nav-icon"></i>
                            <p>Products</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/tickets" class="nav-link">
                            <i class="fas fa-ticket-alt nav-icon"></i>
                            <p>Tickets</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link to="/developer" class="nav-link">
                    <i class="nav-icon fas fa-cogs"></i>
                    <p>
                        Developer
                    </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                    <i class="nav-icon fas fa-user orange"></i>
                    <p>
                        Profile
                    </p>
                </router-link>
            </li>
            <li class="nav-item">
                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="nav-link">
                    <i class="nav-icon fas fa-power-off red"></i>
                    <p>
                        Logout
                    </p>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>

