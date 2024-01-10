import { type RequestHandler } from "@builder.io/qwik-city";
import { getData } from "~/lib/sanity/api";

export const onRequest: RequestHandler = async (requestEvent): Promise<any> => {
  // It is assumed that prisma is a previously configured and connected Prisma object to a database.

  const BASE_URL = "https://www.bartunek.io";
  const posts = await getData(`*[_type == "post"]{"slug": slug.current, "updatedAt": _updatedAt }`);


  // for when project pages are added
//   const projects = await getData(`*[_type == "project"]{"slug": slug.current, "updatedAt": _updatedAt }`);
//   console.log(projects);
//    ${projects.map(
//       (project: { slug: string }) => `
//     <url>
//         <loc>${BASE_URL}blog/${project.slug}</loc>
//     </url>`)}

  // Next, an XML document representing a sitemap for search engines is generated.
  //   <lastmod>${post.last_publication_date}</lastmod>
  const content = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${BASE_URL}/</loc></url>
    <url><loc>${BASE_URL}/about/</loc></url>
    <url><loc>${BASE_URL}/blog/</loc></url>
    <url><loc>${BASE_URL}/projects/</loc></url>
    ${posts.map(
      (post: { slug: string, updatedAt: string }) => 
    `<url>
       <loc>${BASE_URL}/blog/${post.slug}</loc>
       <lastmod>${post.updatedAt}</lastmod>
        <priority>0.7</priority>
    </url>`)}
    </urlset>`;

  // An HTTP response with the XML content of the sitemap is created.
  const response = new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });

  return requestEvent.send(response);
};