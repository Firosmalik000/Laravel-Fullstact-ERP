<?php

namespace App\Http\Controllers;

use App\Models\Gudang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GudangController extends Controller
{
    public function index() {
        $gudang = Gudang::with('status', 'status.pembelian', 'status.user')->orderBy('created_at', 'desc')->get();
        $total = Gudang::count();
        return Inertia::render('Gudang', [
            'gudang' => $gudang,
            'total' => $total
        ]);
    }
}
