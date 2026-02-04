import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePost } from "@/hooks/use-content";
import { useRoute, Link } from "wouter";
import { format } from "date-fns";
import { ArrowLeft, Share2 } from "lucide-react";

export default function PostDetail() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading } = usePost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 container px-4 mx-auto max-w-3xl">
          <div className="h-8 bg-slate-100 w-24 mb-6 rounded animate-pulse" />
          <div className="h-12 bg-slate-100 w-3/4 mb-6 rounded animate-pulse" />
          <div className="h-96 bg-slate-100 w-full rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container px-4 mx-auto max-w-3xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </Link>

          <header className="mb-10">
             <div className="flex gap-4 items-center text-sm text-slate-500 mb-6">
                <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-800 font-medium">News</span>
                <span>{post.publishedAt && format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</span>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-8">
               {post.title}
             </h1>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-a:text-primary max-w-none">
            {/* In a real app, this would be rendered Markdown or HTML */}
            <div className="whitespace-pre-line text-slate-600 leading-relaxed">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
             <span className="font-display font-bold text-slate-900">Share this article:</span>
             <div className="flex gap-2">
               <button className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600">
                 <Share2 className="w-5 h-5" />
               </button>
               {/* Add social share buttons here */}
             </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
