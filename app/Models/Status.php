<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Status extends Model
{
    use HasFactory;
    protected $table = 'statuses';
    protected $fillable = [
        'pembelian_id', 'status', 'updated_by'
    ];
    
    public function user(): BelongsTo
{
    return $this->belongsTo(User::class, 'updated_by');
}
}


