
import prisma from './prisma'
export const createUser = async (email,message,subject) => {
    const contact = await prisma.contact.create({
      data: {
        email,
        message,
        subject
      }
    })
    return contact
  }