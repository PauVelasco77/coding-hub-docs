import path from "path";
import {getFilesRecursively} from "./modules/find-files-recusively.mjs";

interface FileNode {
  name: string;
  path: string;
  slug: string;
  type: "file" | "directory";
  children?: FileNode[];
}

export function getFileStructure() {
  const mdDir = path.join(process.cwd(), process.env.COMMON_MD_DIR);
  // Get all markdown files
  const files = getFilesRecursively(mdDir, /\.md(?:#[^\)]*)?/);

  const root: FileNode = {
    name: "Root",
    path: "",
    slug: "",
    type: "directory",
    children: [],
  };

  // Build a tree structure from the flat list of files
  for (const file of files) {
    const parts = file.split(path.sep);
    let current = root;

    // Process each part of the path
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      const fullPath = parts.slice(0, i + 1).join(path.sep);
      const slug = fullPath.replace(/\.md(?:#[^\)]*)?$/, "");

      // Check if this node already exists
      let node = current.children?.find((n) => n.name === part);

      if (!node) {
        // Create new node
        node = {
          name: part,
          path: fullPath,
          slug: slug,
          type: isFile ? "file" : "directory",
          children: isFile ? undefined : [],
        };

        // Add to parent
        current.children = current.children || [];
        current.children.push(node);
      }

      // Continue building tree
      if (!isFile) {
        current = node;
      }
    }
  }

  // Sort the structure: directories first, then files, both alphabetically
  const sortStructure = (node: FileNode) => {
    if (node.children) {
      // Recursively sort children
      node.children.forEach(sortStructure);

      // Sort current level - directories first, then files
      node.children.sort((a, b) => {
        if (a.type === b.type) {
          return a.name.localeCompare(b.name);
        }
        return a.type === "directory" ? -1 : 1;
      });
    }
  };

  sortStructure(root);
  return root;
}
