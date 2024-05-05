export type Mode = "API" | "UI";
export type ContentType = "application/json" | "multipart/form-data";

export interface WoocommerceMockMethods {
  createProduct(requestBody?: FormData): unknown;
  enableTax(isEnabled?: boolean): unknown;
}
