<?php

namespace App\Http\Controllers;

use App\Models\Gudang;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

    public function getGudang($id)
    {
        $gudang = Gudang::with('status', 'status.user')->findOrFail($id);
        return response()->json($gudang);
    }

    public function updateGudang(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required|string',
            'code' => 'required|string',
            'kedatangan' => 'required|date',
            'lokasi' => 'required|string',
            'kondisi' => 'required|string',
            'catatan' => 'required|string',
        ]);

        $gudang = Gudang::findOrFail($id);
        DB::beginTransaction();
        
        try {
            $gudang->update([
                'nama' => $request->nama,
                'code' => $request->code,
                'lokasi' => $request->lokasi,
                'kedatangan' => $request->kedatangan,
                'kondisi' => $request->kondisi,
                'catatan' => $request->catatan,
            ]);

            Report::create([
                'gudang_id' => $gudang->id
            ]);

            DB::commit();

            session()->flash('success', 'Data Berhasil Tersimpan');
            return redirect()->route('report');
        } catch (Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Status Gagal Diubah: ' . $e->getMessage());
            return redirect()->route('status');
        }
    }
}
