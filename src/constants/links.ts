const DUEL_LINKS = {
  intro: () => '/intro',
  home: () => '/',
  verify: () => '/auth/register/verify',
  register: () => '/auth/register/',
  login: () => '/auth/login',
  passwordVerify: () => '/auth/change-password/verify',
  changePassword: () => '/auth/change-password/',
  roadmap: () => '/roadmap?category=duel',
  roadmapDetail: (roadmapId: number) => `/roadmap/${roadmapId}`,
  roadmapCreate: () => '/roadmap/create',
  mypage: () => '/mypage',
  tilWrite: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `/tilWrite/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  tilView: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `/tilView/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  peopleTil: ({ roadmapId, stepId }: Omit<tilWriteParams, 'tilId'>) => `/roadmap/${roadmapId}/step/${stepId}`,
  manageInfo: (roadmapId: number) => `/roadmap/${roadmapId}/manage/info`,
  manageStep: (roadmapId: number) => `/roadmap/${roadmapId}/manage/step`,
  manageMember: (roadmapId: number) => `/roadmap/${roadmapId}/manage/member`,
  manageTIL: (roadmapId: number) => `/roadmap/${roadmapId}/manage/til`,
  manageApply: (roadmapId: number) => `/roadmap/${roadmapId}/manage/apply`,
};

export default DUEL_LINKS;

interface tilWriteParams {
  roadmapId: number;
  stepId: number;
  tilId: number;
}
