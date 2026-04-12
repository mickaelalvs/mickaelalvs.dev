import type { MDXComponents } from "mdx/types";
import { ImageExpandable } from "@/modules/articles/components/swc/ImageExpandable";
import { SideBySide } from "@/modules/articles/components/swc/SideBySide";
import { KbdKey } from "@/modules/articles/components/alt-tab/KbdKey";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ImageExpandable,
    SideBySide,
    KbdKey,
    ...components,
  };
}

