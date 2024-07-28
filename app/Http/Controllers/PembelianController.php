<?php

namespace App\Http\Controllers;

use App\Models\Pembelian;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PembelianController extends Controller
{
    public function index(){
        $pembelians = Pembelian::with('user')->orderBy('created_at', 'desc')->get();
        $total = Pembelian::count();
        return Inertia::render('staff/Pembelian', [
            'pembelians' => $pembelians
            ,'total' => $total
        ]);
    }

    public function create() {
        return Inertia::render('staff/pembelian/Create');
    }

    public function save(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'jumlah' => 'required|integer',
            'harga' => 'required|integer',
            'total' => 'required|integer',
            'catatan' => 'nullable|string|max:255',
            'supplier' => 'required|string|max:255',
            'riwayat' => 'required|string|max:255',
        ]);
    
        DB::beginTransaction(); // Memulai transaksi
    
        try {
            $pembelian = Pembelian::create([
                'nama' => $request->nama,
                'jumlah' => $request->jumlah,
                'harga' => $request->harga,
                'total' => $request->total,
                'request_by' => Auth::id(),
                'catatan' => $request->catatan,
                'supplier' => $request->supplier,
                'riwayat' => $request->riwayat,
            ]);
    
            Status::create([
                'pembelian_id' => $pembelian->id, 
            ]);
    
            DB::commit(); 
    
            session()->flash('success', 'Data Berhasil Tersimpan');
            return redirect()->route('status');
        } catch (\Exception $e) {
            DB::rollBack(); // Membatalkan transaksi jika ada kesalahan
            session()->flash('error', 'Data Gagal Tersimpan: ' . $e->getMessage());
            return redirect()->route('staff.pembelian.create');
        }
    }
    
}
