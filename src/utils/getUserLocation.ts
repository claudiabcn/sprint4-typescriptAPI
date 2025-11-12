export async function getUserLocation(): Promise<{ lat: number; lon: number }> {
  const defaultLocation = { lat: 41.3888, lon: 2.159 }; 

  if (!navigator.geolocation) {
    return defaultLocation;
  }

  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
  } catch (error) {
    console.warn("Usando ubicación por defecto (Barcelona)", error);
    return defaultLocation;
  }
}