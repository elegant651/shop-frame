import { fetchGetProduct } from "../../api/prs/route";
import { generateImage } from "../../utils/image";

// Headers needed for CORS (in a web XMTP Client)

const HEADERS = {
  "Content-Type": "image/png",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  Vary: "Origin",
  "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT,OPTIONS",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
};

export async function GET(request: Request) {
  const dataParam = new URL(request.url).searchParams.get("data");
  const data = JSON.parse(dataParam!);
  const product = await fetchGetProduct()
  const url = product.image
  const productTitle = product.title
  const price = product.price
  // console.log('product', product)
  const imagePng = await generateImage(url, productTitle, price);
  return new Response(imagePng, { headers: HEADERS });
}

// OPTIONS needed for CORS (in a web XMTP Client)

export async function OPTIONS() {
  return new Response("", {
    headers: HEADERS,
  });
}