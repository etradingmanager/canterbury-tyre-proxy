const response = await fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default async function handler(req, res) {
  const storeId = '86413255';
  const token = 'public_TyrqEQkEXtqK5u27fvLwS69RURXdfSqt';
  const apiUrl = `https://app.ecwid.com/api/v3/${storeId}/products?limit=1000`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(200).json(data);

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
