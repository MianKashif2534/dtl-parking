export async function GET() {
  try {
    const response = await fetch(
      'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=US&minPopulation=100000&limit=50',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4210d91e2amsha085928b4f0056dp19da14jsn7ae7e4f02dc0',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }
    )

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'GeoDB API Error' }), { status: response.status })
    }

    const data = await response.json()
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
