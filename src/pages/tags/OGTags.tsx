const OGTags = () => {
  return (
    <>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://impetus.vercel.app/" />
      <meta property="og:site_name" content="Impetus" />

      <meta name="title" property="og:title" content="Impetus" />
      <meta
        name="description"
        property="og:description"
        content="A Momentum clone made with Next.JS and Typescript."
      />

      <meta
        name="image"
        property="og:image"
        content="https://impetus.vercel.app/preview.png"
      />
      <meta property="og:image:width" content="1880" />
      <meta property="og:image:height" content="950" />

      <meta name="author" content="@librity" />
    </>
  )
}

export default OGTags
