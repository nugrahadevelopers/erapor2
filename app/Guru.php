<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    protected $fillable = [
        'nip', 
        'name',
        'phone',
        'address'
        /* 'matpel_id',
        'kelas_id',
        'walkel_id' */
    ];
}
