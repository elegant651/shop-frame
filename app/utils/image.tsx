import { ImageResponse } from "@vercel/og";


export async function generateImage(url: string, title: string, price: number) {

  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          display: "flex", // Use flex layout
          flexDirection: "row", // Align items horizontally
          alignItems: "stretch", // Stretch items to fill the container height
          width: "100%",
          height: "100vh", // Full viewport height
          backgroundColor: "white",
        }}
      >
        <img src={url} width='100%' />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "18%",
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "black",
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 40,
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              fontSize: 45,
              paddingRight: 40,
            }}
          >
            ${price.toLocaleString()}
          </div>
        </div>
      </div>
    )
  );

  const imgBuffer = await imageResponse?.arrayBuffer();
  return Buffer.from(imgBuffer);
}

export type Product = {
  id: number
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function generateImageForDetail(product: Product) {

  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          display: "flex", // Use flex layout
          flexDirection: "row", // Align items horizontally
          alignItems: "stretch", // Stretch items to fill the container height
          width: "100%",
          height: "100vh", // Full viewport height
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            left: 0,
            backgroundColor: "white",
            color: "black",
            fontSize: 35,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 45,
              paddingLeft: 40,
            }}
          >
            {product.title}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 45,
              paddingTop: 20,
              paddingLeft: 40,
            }}
          >
            ${product.price.toLocaleString()}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 30,
              paddingTop: 20,
              paddingLeft: 40,
            }}
          >
            {product.description.toLocaleString()}
          </div>
        </div>
      </div>
    )
  );

  const imgBuffer = await imageResponse?.arrayBuffer();
  return Buffer.from(imgBuffer);
}