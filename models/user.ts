import { NextApiRequest } from "next";

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *        name:
 *          type: string
 *        email:
 *          type: string
 */


export interface User {
  id: string;
  name: string;
  email: string
}


export const CURRENT_USER: User = {
  id: '',
  name: '',
  email: '',
}


export function getUser(req: NextApiRequest) {
  return CURRENT_USER
}
