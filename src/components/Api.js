const url = "https://www.live-rates.com/rates";

export async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
