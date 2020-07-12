<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Walkel extends Model
{
    public function guru()
    {
        return $this->belongsTo('App\Guru');
    }

    public function kela()
    {
        return $this->belongsTo('App\Kela');
    }
}
