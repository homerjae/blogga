//import fs from 'fs'
//import path from 'path'
import matter from 'gray-matter'
//import { remark } from 'remark'
//import html from 'remark-html'


export async function getNotes() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('notes');
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    //return data?.items as any[];
    const id = data.replace(/\.md$/, '');

    const matterResult = matter(data);

    const blogPost: BlogPost = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
    }

    // Combine the data with the id
    return blogPost
}
