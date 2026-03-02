import { NextResponse } from 'next/server';

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  
  // Curated Artists (Drake, The Weeknd, Travis Scott, Kendrick Lamar, Post Malone)
  const ARTIST_IDS = [
    '3TVXtAsR1Inumwj472S9r4',
    '1XkoF8ryArs86LZvFOkbyr',
    '0Y5tJX1MQlPlqiwlOH1tJY',
    '2YZyLoL8N0Wb9xBt1NhZWg',
    '246dkjvS1zLTtiykXe5h60'
  ];

  if (!client_id || !client_secret) {
    return NextResponse.json({ error: 'Spotify credentials missing' }, { status: 400 });
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  
  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      next: { revalidate: 3600 }
    });

    if (!tokenResponse.ok) {
        throw new Error('Failed to get token');
    }

    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;

    // Fetch Multiple Artists
    const artistsResponse = await fetch(`https://api.spotify.com/v1/artists?ids=${ARTIST_IDS.join(',')}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 3600 }
    });

    if (!artistsResponse.ok) {
       throw new Error(`Failed to fetch artists: ${artistsResponse.status}`);
    }

    const artistsData = await artistsResponse.json();
    
    // Format for our the "Nice Cards"
    const formattedData = artistsData.artists.map((artist: any) => ({
      id: artist.id,
      name: artist.name,
      images: artist.images,
      genres: artist.genres,
      popularity: artist.popularity,
      followers: artist.followers.total,
      url: artist.external_urls.spotify
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Spotify API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch from Spotify' }, { status: 500 });
  }
}
