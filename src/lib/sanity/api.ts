import { client } from "./pico"

export async function getData( query: string ) {
    const dataQuery = query
    const response = await client
        .fetch(dataQuery)
        .then((data) => data)
        .catch((err) => console.error('Oh noes: %s', err.message))
    return response
}


export async function getPosts( slug?: string, order?: "asc" | "desc", slice?: `[${number}]` | `[${number}...${number}]`) {
    const postQuery = `
    *[_type == "post"  ${slug ? `&& slug.current == "${slug}" ` : ''}]${
      slice ? slice : ''
  }${order ? `| order(date ${order})`: ''} 
    {
        _id,
        title,
        "slug": slug.current,
        date,
        categories[] {
        _type == 'reference' => @->{_id, name},
      },
       authors[] {
        _type == 'reference' => @->{
          _id,
          name, 
          image {
                alt,
                "src": image.asset->url,
                "blurhash": image.asset->metadata.blurHash,
                "lqip": image.asset->metadata.lqip,
                "colorDominant": image.asset->metadata.palette.dominant{
                background, foreground, title
                },
                "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
                }
              },
            },
          },
        mainImage {
        alt,
        "src": image.asset->url,
        "blurhash": image.asset->metadata.blurHash,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
        short,
        mainContent
    }
    `
    const response = await client
        .fetch(postQuery)
        .then((posts) => posts)
        .catch((err) => console.error('Oh noes: %s', err.message))
    return response
}


export async function getProjects(order?: "asc" | "desc", slice?: `[${number}]` | `[${number}...${number}]`, isNotInProgress?: boolean) {
    const projectQuery = `
  *[_type == "project" ${isNotInProgress ? "&& dates.isInProgress" : ''}]${
      slice ? slice : ''
  }${order ? `| order(dates.startDate ${order})`: ''}{
      _id,
      _createdAt,
      _updatedAt,
      name,
      mainImage{
        alt,
        "src": image.asset->url,
        "blurhash": image.asset->metadata.blurHash,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
          },
        "colorVibrant": image.asset->metadata.palette.vibrant{
            background, foreground, title
          }
        },
      codeUrl{
        isPrivate,
        link
      },
      liveUrl{
        isPrivate,
        link
      },
      dates{
        isInProgress,
        startDate,
        endDate,
      },
      "employer": employer->{
        _id,
        name,
      image{
        alt,
        "src": image.asset->url,
        "blurhash": image.asset->metadata.blurHash,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      },
      "technologies": techList[] {
        _type == 'reference' => @->{_id,title,description},
      },
      short,
      description,
      "self": *[_type == "author" && name == "Edwin Bartunek"][0]{
        name,
        image{
        alt,
        "src": image.asset->url,
        "blurhash": image.asset->metadata.blurHash,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
      }
    }
    `
    const response = await client
        .fetch(projectQuery)
        .then((projects) => projects)
        .catch((err) => console.error('Oh noes: %s', err.message))
    return response
}

export async function getAuthor(authorName?: string, slice: number = 0) {
    const authorQuery = `*[_type == "author" ${authorName ? `&& name == "${authorName}"` : ''}] [${slice}] 
    {
        name,
        image {
        alt,
        "src": image.asset->url,
        "blurhash": image.asset->metadata.blurHash,
        "lqip": image.asset->metadata.lqip,
        "colorDominant": image.asset->metadata.palette.dominant{
          background, foreground, title
        },
        "colorVibrant": image.asset->metadata.palette.vibrant{
          background, foreground, title
        }
        },
    }
  `
    const response = await client
        .fetch(authorQuery)
        .then((author) => author)
        .catch((err) => console.error('Oh noes: %s', err.message))
    return response
}