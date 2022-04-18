import cache from "memory-cache";
import { v2 } from "../cloudinary";
import { CloudinaryResource } from "../types/cloudinaryResource";

export interface ProductImageData {
  href: string;
  height: number;
  width: number;
}

export const getCachedProductImages = async (productId: string) => {
  const cachedData = cache.get(productId);
  if (cachedData) {
    console.log("Found cached data.");
    return cachedData as ProductImageData[];
  } else {
    const hours = 24;
    const hour = 1000 * 60 * 60;

    const cloudinaryApiResponse = await v2.search
      .expression(`products/${productId}/*`)
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();
    const resources = cloudinaryApiResponse.resources as CloudinaryResource[];
    const imagesData = resources.map((each) => {
      return {
        height: each.height,
        width: each.width,
        href: each.url,
      };
    }) as ProductImageData[];

    cache.put(productId, imagesData, hours * hour);

    console.log("API Call Made");

    return imagesData;
  }
};
