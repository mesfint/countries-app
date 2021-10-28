export default async function fetchData() {
  try {
    const response = await fetch('https://restcountries.com/v2/all')
    const countries = await response.json()
    return countries
  } catch (error) {
    console.log(error)
  }
}
