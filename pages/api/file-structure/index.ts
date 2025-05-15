import {NextApiRequest, NextApiResponse} from "next";
import {getFileStructure} from "../../../lib/getFileStructure";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const structure = getFileStructure();
    res.status(200).json(structure);
  } catch (error) {
    console.error("Error generating file structure:", error);
    res.status(500).json({error: "Failed to generate file structure"});
  }
}
