export default async function fetchApi(url: string, params?: any) {
  const baseUrl: string = `${process.env.REACT_APP_BASE_URL}`;
  const apiKey: string = `${process.env.REACT_APP_API_KEY}`;

  const route = `${baseUrl}${url}?api_key=${apiKey}`;

  const result = await fetch(route, params);

  return await result.json();
}
