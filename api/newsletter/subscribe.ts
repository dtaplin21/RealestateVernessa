import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';
import { insertNewsletterSchema } from '@shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = insertNewsletterSchema.parse(req.body);

    // Check if email already exists
    const existingSubscription = await storage.getNewsletterByEmail(email);
    if (existingSubscription) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newsletter = await storage.createNewsletterSubscription({ email });
    res.status(201).json({ message: "Successfully subscribed to newsletter", newsletter });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
}
