import { revalidatePath } from 'next/cache';

export async function revalidatePages(paths: string[]) {
  try {
    for (const path of paths) {
      revalidatePath(path, 'layout');
    }
  } catch (error) {
    console.error('Error revalidating paths:', error);
  }
}

export async function revalidateSitePages() {
  const pathsToRevalidate = [
    '/',
    '/blog',
    '/services',
  ];
  
  await revalidatePages(pathsToRevalidate);
}

export async function revalidateBlog() {
  const pathsToRevalidate = [
    '/blog',
  ];
  
  await revalidatePages(pathsToRevalidate);
}

export async function revalidateBlogPost(slug: string) {
  const pathsToRevalidate = [
    '/blog',
    `/blog/${slug}`,
  ];
  
  await revalidatePages(pathsToRevalidate);
}

export async function revalidateServices() {
  const pathsToRevalidate = [
    '/',
    '/services',
  ];
  
  await revalidatePages(pathsToRevalidate);
}

export async function revalidateAllPages() {
  await revalidatePages(['/']);
}
