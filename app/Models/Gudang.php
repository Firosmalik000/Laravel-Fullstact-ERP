<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Gudang extends Model
{
    use HasFactory;
    protected $table = 'gudangs';
    protected $fillable = [
        'status_id', 'status', 'nama', 'code', 'kedatangan', 'lokasi', 'kondisi', 'catatan',
    ];

    public function status(): BelongsTo
{
    return $this->belongsTo(Status::class, 'status_id');
}
}
