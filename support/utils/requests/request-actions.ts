import Request from "./request";
import dotenv from "dotenv";
dotenv.config();

export default class RequestUtils {
  private request: Request;
  private baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
    this.request = new Request();
    this.request.setBasicAuth(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
  }

  setBasicAuth(username: string = "", password: string = "") {
    if (username && password) {
      this.request.setBasicAuth(username, password);
    }
  }

  async deletePage(id: number) {
    try {
      await this.request.delete(`${this.baseUrl}/wp-json/wp/v2/pages/${id}`);
    } catch (error) {
      console.log(`Failed to delete page with ID: ${id}`);
    }
  }

  async deletePost(id: number) {
    try {
      await this.request.delete(`${this.baseUrl}/wp-json/wp/v2/posts/${id}`);
    } catch (error) {
      console.log(`Failed to delete post with ID: ${id}`);
    }
  }
}
