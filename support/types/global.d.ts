export type Mode = "API" | "UI";
export type ContentType = "application/json" | "multipart/form-data";
export interface MockUtilityDefault {
  useMode(mode: Mode): void;
  setBasicAuth(username: string, password: string): void;
  setContentType(contentType: ContentType): void;
}
