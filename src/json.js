import fs from 'fs';

export const readFile = () => {
  const data = fs.readFileSync(`${__dirname}/data.json`);
  const json = JSON.parse(data.toString());
  return json;
};
export const writeFile = (content) => {
  const re = fs.writeFileSync(
    `${__dirname}/data.json`,
    JSON.stringify(content),
  );
  return re;
};
