<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KelKel extends Model
{
    public function kela()
    {
        return $this->belongsTo('App\Kela');
    }

    public function siswa()
    {
        return $this->belongsTo('App\Siswa');
    }
}
