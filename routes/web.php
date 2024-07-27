<?php

use App\Http\Controllers\PembelianController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// routes/web.php
Route::get('/staff/pembelian', [PembelianController::class, 'index'])->name('staff.pembelian');
Route::get('/staff/pembelian/create', [PembelianController::class, 'create'])->name('staff.pembelian.create');
Route::post('/staff/pembelian/save', [PembelianController::class, 'save'])->name('staff.pembelian.save');
Route::post('/staff/pembelian/{pembelian}/update-status', [PembelianController::class, 'updateStatus'])->name('staff.pembelian.update-status');

Route::get('/manager/users', [UserController::class, 'index'])->name('manager.users');


// Route::middleware(['auth', 'can:admin'])->group(function () {
//     Route::get('/manager/users', [UserController::class, 'index'])->name('manager.users');
//     Route::delete('/manager/users/{id}', [UserController::class, 'destroy'])->name('manager.users.destroy');
// });