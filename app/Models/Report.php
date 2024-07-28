<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Report extends Model
{
    use HasFactory;

    protected $table = 'reports';
    protected $fillable = [
        'status_id', 'status', 
    ];
    
    public function status(): BelongsTo
{
    return $this->belongsTo(Status::class, 'status_id');
}
}
