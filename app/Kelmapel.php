<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kelmapel extends Model
{
    public function mapel()
    {
        return $this->belongsTo('App\Mapel');
    }

    public function guru()
    {
        return $this->belongsTo('App\Guru');
    }

    public function kela()
    {
        return $this->belongsTo('App\Kela');
    }
}
