import Cakes from "@/components/Cakes/Cakes";
import path from "path";
import fs from "fs";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async (/* context */) => {
  const generateImagePaths = (imageDir: string) => {
    return fs
      .readdirSync(path.join(process.cwd(), "public", imageDir))
      .map((filename) => (filename = `/${imageDir}/${filename}`));
  };

  const cakeImages = generateImagePaths(path.join("baking", "cakes"));
  const cupCakeImages = generateImagePaths(path.join("baking", "cupcakes"));
  const macaronImages = generateImagePaths(path.join("baking", "macarons"));

  const fileList = [...cakeImages, ...cupCakeImages, ...macaronImages];

  return { props: { fileList } };
}) satisfies GetStaticProps<{
  fileList: string[];
}>;

export default function CakePage({
  fileList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Cakes cakeImages={fileList} />;
}
