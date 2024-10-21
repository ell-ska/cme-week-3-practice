import { type QueryData } from '@supabase/supabase-js'

import { createClient } from './client'

export const getHomePosts = (supabase: ReturnType<typeof createClient>) => {
  return supabase
    .from('posts')
    .select('id, title, slug, users("email")')
    .order('created_at', { ascending: false })
}

export type HomePostsType = QueryData<ReturnType<typeof getHomePosts>>

export const getPostsByQuery = (query: string) => {
  const supabase = createClient()

  return supabase
    .from('posts')
    .select('id, title, slug')
    .textSearch('title', query.replace(/ /g, '+'))
}
