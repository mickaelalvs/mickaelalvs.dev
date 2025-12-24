import type { MDXComponents } from "mdx/types";
import { ImageExpandable } from "@/modules/articles/components/ImageExpandable";
import { SideBySide } from "@/modules/articles/components/SideBySide";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ImageExpandable,
    SideBySide,
    ...components,
  };
}

