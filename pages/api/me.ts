import type { NextApiRequest, NextApiResponse } from 'next'
import { CURRENT_USER, User } from '../../models/user'


type Error = {
  error: string
}

/**
 * @swagger
 * /api/me:
 *   get:
 *     description: User information
 *     responses:
 *       200:
 *         description: returns the current users information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User|Error>
) {
  if (req.method == 'GET') {
    res.status(200).json(CURRENT_USER)
  } else {
    res.status(500).json({ error: 'invalid http method' })
  }

}
