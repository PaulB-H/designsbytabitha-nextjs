import Cakes from "@/components/Cakes/Cakes";
import path from "path";
import fs from "fs";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async (context) => {
  const directoryPath = path.join(process.cwd(), "public", "cakes");
  const files = fs.readdirSync(directoryPath);

  return { props: { files } };
}) satisfies GetStaticProps<{
  files: string[];
}>;

export default function CakePage({
  files,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Cakes cakeImages={files} />;
}
