<?php

namespace App\Http\Controllers;

use App\Models\Pembelian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PembelianController extends Controller
{
    public function index(){
        $pembelians = Pembelian::orderBy('created_at', 'desc')->get();
        $total = Pembelian::count();
        return Inertia::render('staff/Pembelian', [
            'pembelians' => $pembelians
            ,'total' => $total
        ]);
    }

    public function create() {
        return view('staff.pembelian.create');
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
        ]);
    
        $data = Pembelian::create([
            'nama' => $request->nama,
            'jumlah' => $request->jumlah,
            'harga' => $request->harga,
            'total' => $request->total,
            'user_id' => Auth::id(),
            'catatan' => $request->catatan,
            'supplier' => $request->supplier,
        ]);
    
        if($data) {
            session()->flash('success', 'Data Berhasil Tersimpan');
            return redirect()->route('staff/pembelians');
        } else {
            session()->flash('error', 'Data Gagal Tersimpan');
            return redirect()->route('staff/pembelians/create');
        }
    }
    
}
