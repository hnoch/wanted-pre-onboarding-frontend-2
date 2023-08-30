import httpService from "./httpService";

// NOTE issue 목록 가져오기
export const getIssueListApi = async ({ owner, repo, state, sort, per_page, page }) => {
  try {
    const response = await httpService.get(`/repos/${owner}/${repo}/issues`, {
      params: { state: state, sort: sort, per_page: per_page, page: page },
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// NOTE issue 상세정보 가져오기
export const getIssueDetailApi = async ({ owner, repo, issue_number }) => {
  try {
    const response = await httpService.get(`/repos/${owner}/${repo}/issues/${issue_number}`);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
