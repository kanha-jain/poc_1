import { CARS_API } from "../../config";
`
STEPS INVOLVED:
1. Fetch data from CMS or MD file.
2. Refine the data and generate routes for them.
3. Define routes for your local pages you want to include.
4. Combine them in a single array of routes
5. For each route, create the url tag of xml and next them all inside one urlset
6. Write the sitemap to a file. In this case, check the next.config file in root directory
`;
export default async (req, res) => {
  // Fetch data from a CMS.
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const externalPosts = await resp.json();
  const carsRes = await fetch(CARS_API);
  const cars = await carsRes.json();
  const carsData = cars.data.content;

  const postRoutes = externalPosts.map((post) => `/posts/${post.id}`);
  const carRoutes = carsData.map((car) => {
    const carUrl = `${car.carName.split(" ").join("-")}-${
      car.year
    }-cars-${car.city.split(" ").join("-")}-${car.carId}`;
    return `/cars/${carUrl}`;
  });
  const routes = [...postRoutes, ...carRoutes];
  const localRoutes = ["/index"];

  const pages = routes.concat(localRoutes);

  const urlSet = pages
    .map((page) => {
      // Remove none route related parts of filename.
      // Remove the word index from route
      const route = page === "/index" ? "" : page;
      // Build url portion of sitemap.xml
      const server =
        process.env.NODE_ENV === "production"
          ? "https://charzer.com"
          : "htttp:localhost:3000";
      return `<url><loc>http://${server}${route}</loc></url>`;
    })
    .join("");

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // set response content header to xml
  res.setHeader("Content-Type", "text/xml");
  // write the sitemap
  res.write(sitemap);
  res.end();
};
