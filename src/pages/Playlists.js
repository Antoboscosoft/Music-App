import React from 'react'

function Playlists() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">

                        <div class="list-group">
                            <a class="list-group-item list-group-item-action active">

                                <i class="fas fa-star"></i> Favorite Songs
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <i class="fas fa-headphones"></i> Most Played
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <i class="fas fa-ban"></i> Never Played
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <i class="fas fa-plus"></i> Recently Added
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <i class="fas fa-clock"></i> Recently Played
                            </a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Favorite Songs</h5>
                                        <p class="card-text">This is a list of your favorite songs.</p>
                                        <a class="btn btn-primary">View All</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Orasaadha Usurathan</h5>
                                        <p class="card-text">MassTamilan.com</p>
                                        <p class="card-text">Vivek-Mervin-MassTamilan.com</p>
                                        <p class="card-text">Orasaadha-MassTamilan.com</p>
                                        <p class="card-text">4:01</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Vena Vena</h5>
                                        <p class="card-text">MassTamilan.com</p>
                                        <p class="card-text">Udit Narayan, 5... assTamilan.com</p>
                                        <p class="card-text">0:02</p>
                                        <p class="card-text">4:42</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Playlists