import { blogs } from "../../../data/blogs";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function LearnRedirectPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
