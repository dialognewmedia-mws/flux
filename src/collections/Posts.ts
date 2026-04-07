// src/collections/Posts.ts
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts', // This is like the 'post_type' in WP
  admin: {
    useAsTitle: 'title', // Tells the Admin UI to show the 'title' in the list view
  },
  fields: [
    {
      name: 'title',
      type: 'text', // A simple text input
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true, // Ensures no two posts have the same URL
      required: true,
    },
    {
      name: 'content',
      type: 'richText', // This is your Gutenberg/TinyMCE equivalent
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // Connects to your "Media" collection
    },
  ],
}
