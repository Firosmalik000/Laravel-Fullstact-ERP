<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index()
    {
        $report = Report::with('status', 'status.pembelian', 'status.user', 'status.pembelian.user','gudang', 'gudang.status', 'gudang.status.pembelian', 'gudang.status.user', 'gudang.status.pembelian.user')->orderBy('created_at', 'desc')->get();
        $total = Report::count();
        return Inertia::render('Report', [
            'report' => $report,
            'total' => $total
        ]);
    }

}
