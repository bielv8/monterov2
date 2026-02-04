import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePosts } from "@/hooks/use-content";
import { format } from "date-fns";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Blog() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div className="pt-32 pb-12 bg-white border-b border-slate-100">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Latest news, insurance tips, and updates from the Monteiro team.
          </p>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts?.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group cursor-pointer h-full flex flex-col"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                      Article
                    </div>
                    <h2 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-1">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400">
                      <span>{post.publishedAt ? format(new Date(post.publishedAt), 'MMMM dd, yyyy') : 'Draft'}</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
