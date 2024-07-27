<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pembelian extends Model
{
    use HasFactory;
    protected $table = 'pembelians';
    protected $fillable = ['nama', 'jumlah', 'harga', 'total', 'user_id', 'catatan', 'supplier'];
    
    public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}
}
