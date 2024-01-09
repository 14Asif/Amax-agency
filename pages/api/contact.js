// 
import {
  createUser,
} from '../../prisma/contact.js'

export default async function handle (req, res) {
  try {
    switch (req.method) {
      case 'POST': {
        const formData = req.body;
        if (!formData.message || !formData.email || !formData.contactno) {
          return res.status(400).json({ message: "Missing required fields" });
        }
  // const { email, message, contactno } = req.body
  const user = await createUser(formData.email,formData.contactno,formData.message,)
  return res.json(user)
      }
      default:
        break;
    }
}
catch (error) {
  return res.status(500).json({ ...error, message: error.message })
}
}