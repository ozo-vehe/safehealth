const API_KEY = 'b620fad7a898130e7075aa11';

export const countryDetails = async (country:string) => {
  const req = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const res = await req.json();

  const continent = res[0].continents[0];

  return continent;
};

