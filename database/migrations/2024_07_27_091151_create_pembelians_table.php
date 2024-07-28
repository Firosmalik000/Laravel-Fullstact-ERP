<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pembelians', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->integer('jumlah')->default(0);
            $table->integer('harga')->default(0);
            $table->integer('total')->default(0);
            $table->unsignedBigInteger('request_by');
            $table->foreign('request_by')->references('id')->on('users')->onDelete('cascade');    
            $table->string('catatan')->nullable();
            $table->string('supplier');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pembelians');
    }
};
