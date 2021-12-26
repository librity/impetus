import { useContext } from 'react'
import { NextSeo } from 'next-seo'

import { NameCtx } from '@/contexts/Name'

export const Title = () => {
  const { name } = useContext(NameCtx)

  if (!name) return <NextSeo title="Impetus." />

  return <NextSeo title={`${name}'s Impetus.`} />
}

export default Title
