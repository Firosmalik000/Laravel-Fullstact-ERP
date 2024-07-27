<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pembelian extends Model
{
    use HasFactory;
    protected $table = 'pembelians';
    protected $fillable = ['nama', 'jumlah', 'harga', 'total', 'request_by', 'catatan', 'supplier', 'status'];
    
    public function user(): BelongsTo
{
    return $this->belongsTo(User::class, 'request_by');
}
}
