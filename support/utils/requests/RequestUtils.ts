import Request from "./request";
import dotenv from "dotenv";
dotenv.config();

class RequestUtils {
  private request: Request;
  private baseUrl: string;

  constructor() {
    this.request = new Request();
    this.request.setBasicAuth(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    this.baseUrl = `http://localhost:9999`;
  }

  async deletePage(id: number) {
    try {
      await this.request.delete(`${this.baseUrl}/wp-json/wp/v2/pages/${id}`);
    } catch (error) {
      console.log(`Failed to delete page with ID: ${id}`);
    }
  }
}

const requestUtils = new RequestUtils();

export default requestUtils;
