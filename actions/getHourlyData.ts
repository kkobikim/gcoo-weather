export const getHourlyData = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  )
  if (!data.ok) {
    throw new Error(`Failed to fetch data: Status Code ${data.status}`)
  }

  return data.json()
}
