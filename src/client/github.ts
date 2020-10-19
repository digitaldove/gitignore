import axios from "axios";
import CONFIG from "./const";
import type { GitHubAPIContentResponse } from "./models/github";

export const getAllFiles = async () => {
  try {
    const res = await axios.get<GitHubAPIContentResponse[]>(`${CONFIG.GITHUB_API}${CONFIG.GITIGNORE_CONTENT_PATH}`)
    if (res.status === 200) {
      return res.data
    }
  } catch {}
  return Promise.reject([])
};

export const getGlobalFiles = () => {
  try {
  } catch {}
};
