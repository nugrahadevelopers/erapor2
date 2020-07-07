<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <!-- <div class="sb-sidenav-menu-heading">Core</div> -->
          <router-link to="/" class="nav-link" exact>
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>Beranda
          </router-link>
          <div class="sb-sidenav-menu-heading">Master</div>
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>Akun
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <router-link to="/guru" class="nav-link" exact>Guru</router-link>
              <router-link to="/siswa" class="nav-link" exact>Siswa</router-link>
            </nav>
          </div>

          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>Akademik
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <router-link to="/mapel" class="nav-link" exact>Mata Pelajaran</router-link>
              <router-link to="/kelas" class="nav-link" exact>Kelas</router-link>
            </nav>
          </div>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>Start Bootstrap
      </div>
    </nav>
  </div>
</template>
