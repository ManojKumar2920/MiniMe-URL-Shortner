import { NextResponse } from 'next/server';

export async function POST(request) {
  const { link } = await request.json();

  const data = {
    "domain": "fm6i.short.gy", 
    "originalURL": link,
    "allowDuplicates": false
  };

  try {
    const response = await fetch('https://api.short.cm/links/public', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'pk_2N9FfN6tAIgyyvUP'  // Replace with your actual API key
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to shorten URL' }, { status: 500 });
  }
}

