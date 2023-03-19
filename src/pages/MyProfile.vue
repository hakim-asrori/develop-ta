<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm col-md col-lg-4">
        <div class="mt-3 mb-4 text-center">
          <h5>
            <span class="fw-normal">Profil&nbsp;</span>
            <span class="fw-bold">Saya</span>
          </h5>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-center mb-3">
              <img
                src="https://ui-avatars.com/api/?background=random&amp;size=100&amp;rounded=true&amp;length=2&amp;name=Dominic Keller"
                alt=""
              />
            </div>
            <h3 class="text-center">Dominic Keller</h3>
            <p class="text-muted text-center">Admin API Pusat</p>
            <hr />
            <p class="fw-semibold text-dark">Tentang Saya</p>
            <p class="text-muted">Nama Lengkap : Dominic Keller</p>
            <p class="text-muted">Jenis Kelamin : Laki-laki</p>
            <p class="text-muted">Tempat Lahir : Indramayu</p>
            <p class="text-muted">Tanggal Lahir : 24 Oktober 2001</p>
            <p class="text-muted">Email : dominic.keller@mailinator.com</p>
            <p class="text-muted">Jabatan : Administrator</p>
            <p class="text-muted">Telepon : 081234567890</p>
            <p class="text-muted">
              Alamat : Puntang, Kec. Losarang, Kabupaten Indramayu, Jawa Barat
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <ul class="nav nav-tabs nav-bordered mb-3">
            <li class="nav-item">
              <a
                href="#myBio"
                data-bs-toggle="tab"
                aria-expanded="false"
                class="nav-link active"
                title="Biodata Saya"
                ><i class="mdi mdi-account-circle d-md-none d-block"></i
                ><span class="d-none d-md-block">Biodata Saya</span></a
              >
            </li>
            <li class="nav-item">
              <a
                href="#changePassword"
                data-bs-toggle="tab"
                aria-expanded="true"
                class="nav-link"
                title="Ubah Password"
                ><i class="mdi mdi-key d-md-none d-block"></i
                ><span class="d-none d-md-block">Ubah Password</span></a
              >
            </li>
          </ul>
          <div class="card-body pt-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="myBio">
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Email</label>
                  <div class="col-9">
                    <input
                      type="email"
                      class="form-control"
                      value="dominic.keller@mailinator.com"
                      disabled
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Nama Lengkap</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      value="Dominic Keller"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Jenis Kelamin</label>
                  <div class="col-9">
                    <select name="" id="" class="form-select">
                      <option value=""></option>
                      <option value="" selected>Laki-laki</option>
                      <option value="">Perempuan</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Tempat Lahir</label>
                  <div class="col-9">
                    <input type="text" class="form-control" value="Indramayu" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Tanggal Lahir</label>
                  <div class="col-9">
                    <input
                      type="date"
                      class="form-control"
                      value="2001-10-24"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Jabatan</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      value="Administrator"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Telepon</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      value="081234567890"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-3 col-form-label">Alamat</label>
                  <div class="col-9">
                    <textarea name="" id="" class="form-control">
Puntang, Kec. Losarang, Kabupaten Indramayu, Jawa Barat</textarea
                    >
                  </div>
                </div>
                <div><button class="btn btn-success">Simpan</button></div>
                <div
                  class="modal fade"
                  id="successModal"
                  tabindex="-1"
                  aria-labelledby="successModalLabel"
                  aria-hidden="true"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="successModalLabel">
                          berhasil
                        </h5>
                      </div>
                      <div class="modal-body">data berhasil disimpan.</div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="changePassword">
                <form method="post">
                  <div class="row mb-3">
                    <label class="col-3 col-form-label">Email</label>
                    <div class="col-9">
                      <input type="email" class="form-control" disabled />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-3 col-form-label"
                      >Password Saat Ini</label
                    >
                    <div class="col-9">
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-3 col-form-label">Password Baru</label>
                    <div class="col-9">
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label class="col-3 col-form-label"
                      >Konfirmasi Password Baru</label
                    >
                    <div class="col-9">
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                  <div><button class="btn btn-success">Simpan</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
