<?php

namespace App\Http\Controllers;

use App\Models\Gudang;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Exception;

class StatusController extends Controller
{
    public function index()
    {
        $status = Status::orderBy('created_at', 'desc')->get();
        $total = Status::count();
        return Inertia::render('Status', [
            'status' => $status,
            'total' => $total
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string|in:Accepted,Rejected',
        ]);

        $status = Status::findOrFail($id);
        DB::beginTransaction();
        
        try {
            $status->update([
                'status' => $request->status,
            ]);

            if ($status->status == 'Accepted') {
                Gudang::create([
                    'status' => $request->status,
                    'status_id' => $status->id
                ]);
            }

            DB::commit();

            session()->flash('success', 'Data Berhasil Tersimpan');
            return redirect()->route('staff.pembelian');
        } catch (Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Status Gagal Diubah: ' . $e->getMessage());
            return redirect()->route('status');
        }
    }
}
