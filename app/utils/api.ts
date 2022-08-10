import { json } from "@remix-run/node";

const badRequest = (data: any) => {
  return json(data, { status: 400 });
};

export default badRequest;
