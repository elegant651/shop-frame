import { getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { generateImageForDetail } from '../../utils/image';

const PRODUCT_ID = 1

const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=10")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('e', error)
  }
}

export const fetchGetProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=10")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // const randomIndex = Math.floor(Math.random() * data.length);
    return data[PRODUCT_ID];
  } catch (error) {
    console.error('e', error)
  }
}

const addNewCart = async ({ productId }: { productId: number }) => {
  try {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: "POST",
      body: JSON.stringify(
        {
          userId: 5,
          date: new Date(),
          products: [{ productId, quantity: 1 }]
        }
      )
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('e', error)
  }
}

const deleteCart = async ({ productId }: { productId: number }) => {
  try {
    const response = await fetch('https://fakestoreapi.com/carts/' + productId, {
      method: "DELETE"
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('e', error)
  }
}

async function getResponse(req: NextRequest): Promise<NextResponse> {

  // console.log(imageUrl);
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Back to the main page`,
        },
      ],
      image: `${NEXT_PUBLIC_URL}/frames/detail`,
      postUrl: `${NEXT_PUBLIC_URL}/`,
    }),
  );
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
