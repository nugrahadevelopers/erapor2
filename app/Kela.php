<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kela extends Model
{
    public function siswa()
    {
        return $this->hasMany('App\Siswa');
    }
}
