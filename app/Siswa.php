<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    public function kela()
    {
        return $this->belongsTo('App\Kela');
    }
}
