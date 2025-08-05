import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
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
  });

  // Get all newsletter subscriptions (for admin purposes)
  app.get("/api/newsletter/subscriptions", async (req, res) => {
    try {
      const newsletters = await storage.getAllNewsletters();
      res.json(newsletters);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
