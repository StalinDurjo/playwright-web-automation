import path from "path";

export const ROOT_DIR = path.resolve(process.cwd());
export const TEST_DIRECTORY = `${ROOT_DIR}/tests`;
export const RESOURCE_DIRECTORY = `${ROOT_DIR}/resources`;
export const SEED_DATA_DIRECTORY = `${RESOURCE_DIRECTORY}/seed-data`;

// The following directories are created during application runtime
export const OUT_DIR = `${ROOT_DIR}/out`;
export const WP_DIR = `${OUT_DIR}/wp`;
export const REPORT_DIRECTORY = `${ROOT_DIR}/playwright/reports`;
