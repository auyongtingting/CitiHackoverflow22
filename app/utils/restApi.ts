import type { loginUserInput, loginSuccessResponse } from "~/types/login";

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
        headers: this.options.headers,
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
   * Get status of the current task in the user's smart import mapping queue.
   * @public
   * @param {loginUserInput} option Object of type getMappingStatus
   * @returns {loginSuccessResponse} Object of type mappingStatusResponse
   */
  loginUser(option: loginUserInput): Promise<loginSuccessResponse> {
    return this.#request({
      method: "POST",
      body: option,
      resource: "/api/v1/auth/login",
    });
  }
}

export default new RestApiClient(
  "https://fizzbuzz-citihackathon.herokuapp.com"
);
