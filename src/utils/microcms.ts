import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
} from "microcms-js-sdk";

export type Member = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  position: string;
  profile: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  category: Category;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Member>({
      endpoint: "members",
      queries,
    });
  return listData;
};