import type { MarkdownNode, MarkdownRoot } from "@nuxt/content/dist/runtime/types";
import { Ref } from "vue";

// Possible header level
type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
interface HeadingItem {
  title: string;
  url: string;
  level: number;
}

const TITLE_REGEX = new RegExp("^h[1-6]$", "g");
const isHeadingTagValid = (node: MarkdownNode): boolean => {
  TITLE_REGEX.lastIndex = 0;
  
  return "tag" in node && TITLE_REGEX.test(node.tag as string);
};

/**
 * Utility for getting heading nodes from markdown content
 * @param body Markdown content
 * @param levels Possible level of headings
 * @returns Heading nodes
 */
const getHeadingList = (body: MarkdownRoot, levels: TitleLevel[]): MarkdownNode[] => {
  return body.children.filter(element => {
    const isTagValid = isHeadingTagValid(element);
    const isLevelValid = levels.includes(
      +((element.tag as string).at(1) ?? 0) as TitleLevel
    );
    
    return isTagValid && isLevelValid;
  });
};

/**
 * Utility in order to find the header level
 * @param node Heading node
 * @returns Level of heading
 */
const getHeadingLevel = (node: MarkdownNode): number => {
  const isTagValid = isHeadingTagValid(node);
  if (!isTagValid) {
    return 0;
  }
  
  return +(node.tag?.at(-1) as string);
};

/**
 * Utility in order to find the header title
 * @param node Heading node
 * @returns Title of heading
 */
const getHeadingTitle = (node: MarkdownNode): string => {
  let title = "";
  
  if (node.children) {
    const textNodeList = node.children?.map(child => {
      
      if (child.children) {
        return child.children.map(getHeadingTitle).join("");
      }

      return child.value as string;

    });
    
    if (textNodeList) {
      title = textNodeList.join("") ?? "";
    }
    return title;
    
  } else if (node.value) {
    return node.value;
  }
  
  return "";
};

/**
 * Utility in order to find the header url
 * @param node Heading node
 * @returns URL of heading
 */
const getHeadingUrl = (node: MarkdownNode): string => {
  let url = "#";
  if (node.props) {
    url = "id" in node.props ? `#${node.props["id"]}` : url;
  }
  return url;
};


/**
 * Utility for transforming markdown nodes to HeadingItem interface
 * @param nodes Markdown heading nodes
 * @returns Heading items for navigation
 */
const transformNodeToHeadingItem = (nodes: MarkdownNode[]): HeadingItem[] => {
  return nodes.map(node => {
    return {
      title: getHeadingTitle(node),
      level: getHeadingLevel(node),
      url: getHeadingUrl(node)
    };
  });
};

/**
 * Consumes Markdown Content and returns the headlines of the desired level
 * @param content Markdown content body
 * @param levels Possible levels of headings
 * @returns Titles navigation list
 */
export const useContentNavigation = (content: MarkdownRoot, levels: TitleLevel[]): Ref<HeadingItem[]> => {
  const navigationHeadings = ref<HeadingItem[]>([]);
  const headings = getHeadingList(content, levels);
  navigationHeadings.value = transformNodeToHeadingItem(headings);
  return navigationHeadings;
};