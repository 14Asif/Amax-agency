import { PrismaClient } from '@prisma/client';
import { MongoClient } from 'mongodb';

const prisma = new PrismaClient();
const uri = "mongodb+srv://admin:Password123@cluster-asif.5k9gxfk.mongodb.net/Amaxdb";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, message, subject } = req.body;

      await prisma.contacts.create({
        data: {
          email,
          message,
          subject
        },
      });

      await client.connect();
      const db = client.db('Amaxdb');
      const collection = db.collection('contacts');
      await collection.insertOne(req.body);

      res.status(200).json({ message: 'Contact form data saved successfully.' });
    } catch (error) {
      console.error('An error occurred while saving the contact form data:', error);
      res.status(500).json({ error: 'An error occurred while saving the contact form data.' });
    } finally {
      await client.close();
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
