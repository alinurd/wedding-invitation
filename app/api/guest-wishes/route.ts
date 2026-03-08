import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Config database
const pool = mysql.createPool({
  host: process.env.DB_HOST  || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER  || 'root',
  password: process.env.DB_PASSWORD  || '$$admin$$',
  database: process.env.DB_NAME  || 'sistem_undangan',  
});

export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, message, image, created_at as timestamp FROM guest_wishes ORDER BY created_at DESC'
    );

    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Gagal mengambil data ucapan' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, message, image } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: 'Nama dan pesan wajib diisi' }, { status: 400 });
    }

    const [result] = await pool.query(
      'INSERT INTO guest_wishes (name, message, image) VALUES (?, ?, ?)',
      [name, message, image || null]
    );

    const insertedId = (result as any).insertId;

    return NextResponse.json({
      id: insertedId,
      name,
      message,
      image,
      timestamp: new Date(),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Gagal menyimpan ucapan' }, { status: 500 });
  }
}