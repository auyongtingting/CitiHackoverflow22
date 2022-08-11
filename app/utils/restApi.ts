import { optional } from "zod";
import type {
  loginUserInput,
  loginSuccessResponse,
  course,
  courseResponseDTO,
  courseTier,
} from "~/types/login";

interface RequestProps {
  resource: string;
  method: "POST" | "GET" | "PUT";
  body: any;
}

/**
 * RestApiClient Class
 */
class RestApiClient {
  /**
   * @param {string} base_url - Property to hold the base url of the REST endpoint
   * @param {RequestInit} options - Property for setHeaders method to store headers
   */
  private base_url: string;

  private options: RequestInit;

  constructor(baseUrl: string) {
    this.base_url = baseUrl;
    this.options = {};
  }

  /**
   * To store key pair value in the request headers
   * @public
   * @param {string} key - Key of the object. E.g. "Authorization"
   * @param {string} value - Value of the object. E.g. Bearer token
   * @returns Class object
   */
  setHeader(key: string, value: string): RestApiClient {
    this.options.headers = { [key]: value };
    return this;
  }

  /**
   * Calls fetch request to specified endpoint with the passed body, method.
   * setHeaders method must be called otherwise request may not be authorized.
   * @private
   * @param {RequestProps} req Object containing method, body and resource values.
   * @returns JSON of response
   */
  async #request(req: RequestProps) {
    try {
      const options: RequestInit = {
        headers: {
          ...this.options.headers,
          "Content-Type": "application/json",
        },
        method: req.method,
        body: JSON.stringify(req.body),
      };
      const response = await fetch(`${this.base_url}${req.resource}`, options);
      return await response.json();
    } catch (err) {
      return err;
    }
  } // Private method

  /**
   * Login user and receive JWT
   * @public
   * @param {loginUserInput} option Object of type loginUserInput
   * @returns {loginSuccessResponse} Object of type loginSuccessResponse
   */
  loginUser(option: loginUserInput): Promise<loginSuccessResponse> {
    return this.#request({
      method: "POST",
      body: option,
      resource: "/api/v1/auth/login",
    });
  }

  addCourse(option: course): Promise<courseResponseDTO> {
    return this.#request({
      method: "POST",
      body: option,
      resource: "/api/v1/course",
    });
  }

  getCourse(option: courseTier): Promise<courseResponseDTO[]> {
    return this.#request({
      method: "GET",
      body: optional,
      resource: "/api/v1/course",
    });
  }
}

export default new RestApiClient(
  "https://fizzbuzz-citihackathon.herokuapp.com"
);
