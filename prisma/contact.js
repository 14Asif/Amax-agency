
import prisma from './prisma'
export const createUser = async (email,contactno,message) => {
    const contact = await prisma.contact.create({
      data: {
        email,
        contactno,
        message
      }
    })
    return contact
  }