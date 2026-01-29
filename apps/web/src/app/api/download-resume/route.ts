import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pdfUrl =
      'https://github.com/MilannSharma/MilannSharma/releases/download/v1/Milan-Sharma.pdf';

    const response = await fetch(pdfUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Milan_Sharma_Resume.pdf"',
        'Content-Length': buffer.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error('PDF download error:', error);
    return NextResponse.json(
      { error: 'File not found or cannot be accessed' },
      { status: 404 }
    );
  }
}
