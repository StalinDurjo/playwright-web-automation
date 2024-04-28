import path from "path";
import csvtojson from "csvtojson";

export const isFileOfType = (ext: string, filePath: string) => {
  const extension = path.extname(filePath).toLowerCase();
  return extension === ext;
};

export const jsonFromCsvFile = async (filePath: string) => {
  try {
    if (isFileOfType(".csv", filePath)) {
      return JSON.stringify(await csvtojson().fromFile(filePath));
    }
  } catch (error) {
    console.error(error);
  }
};

export const jsonToObject = async (jsonData: string) => {
  try {
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(error);
  }
};

export const csvToJsObject = async (filePath: string) => {
  try {
    const data = await jsonFromCsvFile(filePath);
    return await jsonToObject(data);
  } catch (error) {
    console.error(error);
  }
};

export const getPath = (_path: string) => {
  try {
    const rootPath = path.resolve(process.cwd());
    return path.join(rootPath, _path);
  } catch (error) {
    console.error(error);
  }
};
