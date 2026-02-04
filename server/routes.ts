import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Posts
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  const servicesList = await storage.getServices();
  if (servicesList.length === 0) {
    await storage.createService({
      title: "Seguro Auto",
      description: "Proteção completa para seu veículo contra roubo, colisão e terceiros.",
      icon: "Car",
    });
    await storage.createService({
      title: "Seguro de Vida",
      description: "Garanta a segurança financeira da sua família em momentos difíceis.",
      icon: "Heart",
    });
    await storage.createService({
      title: "Plano de Saúde",
      description: "As melhores opções de planos de saúde para você e sua família.",
      icon: "Stethoscope",
    });
    await storage.createService({
      title: "Seguro Residencial",
      description: "Proteja seu lar contra incêndios, roubos e danos elétricos.",
      icon: "Home",
    });
  }

  const postsList = await storage.getPosts();
  if (postsList.length === 0) {
    await storage.createPost({
      title: "Por que contratar um seguro auto?",
      slug: "por-que-contratar-seguro-auto",
      summary: "Descubra a importância de ter seu veículo protegido e evite dores de cabeça.",
      content: "Ter um seguro auto é essencial para quem busca tranquilidade no trânsito...",
      coverImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createPost({
      title: "Dicas para economizar no seguro",
      slug: "dicas-economizar-seguro",
      summary: "Saiba como reduzir o valor do seu seguro sem perder coberturas importantes.",
      content: "Muitas pessoas não sabem, mas pequenas atitudes podem diminuir o valor do seguro...",
      coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000",
    });
  }

  return httpServer;
}
