import fs from "fs";
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

/**
 * Recursively searches for files with specified extensions in a directory. `Hidden files are ignored`.
 * @param {string} directory - The directory to start the search from.
 * @param {string[]} extensions - An array of file extensions to search for.
 * @param {string[]} [ignoredDirectories=[]] - An optional array of directory names to ignore.
 * @param {string[]} [storeDirectories=[]] - An optional array to store the found file paths.
 * @returns {string[]} An array of file paths matching the specified extensions.
 */
export const searchFiles = (directory: string, extensions: string[], ignoredDirectories: string[] = [], storeDirectories: string[] = []): string[] => {
  if (extensions.length === 0) return [];

  try {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      const isIgnoredDirectory = ignoredDirectories.find((directory) => stats.isDirectory() && file.includes(directory));

      if (stats.isDirectory() && !isIgnoredDirectory) {
        searchFiles(filePath, extensions, ignoredDirectories, storeDirectories);
      } else if (extensions.find((ext) => path.extname(filePath) === ext)) {
        storeDirectories.push(filePath);
      }
    });

    return storeDirectories;
  } catch (error) {
    console.log(error);
  }
};
