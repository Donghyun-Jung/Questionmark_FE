import type {
  GetRoadmapStepsResponse,
  GetRoadmapsMyResponse,
  GetRoadmapStepReferenceResponse,
  PostRoadmapsResponse,
  GetRoadmapGroupMemberResponse,
  Role,
  GetRoadmapGroupApplyResponse,
  PostRoadmapsGroupsParticipateResponse,
} from '@/api/roadmap/type';

export const getRoadmapsResponse: GetRoadmapsMyResponse = {
  success: true,
  message: 'ok',
  result: {
    categories: [
      {
        id: 1,
        name: '뉴진스는 어떻게 동국대에 오게 되었는가',
      },
      {
        id: 2,
        name: '싸이는 몇시까지 있을까',
      },
      {
        id: 3,
        name: '하지만 축제에 가지 않지',
      },
    ],
    roadmaps: {
      tils: [
        {
          id: 1,
          name: '알고리즘',
          stepNum: 88,
        },
        {
          id: 2,
          name: '자료구조',
          stepNum: 50,
        },
      ],
      groups: [
        {
          id: 3,
          name: '자알 너무 어려웡',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 5,
            name: '이하연',
            image: 'asdf.jpg',
          },
        },
        {
          id: 4,
          name: '하연님 스프링 하셔야죠',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 6,
            name: '정동현',
            image: 'asdf.jpg',
          },
        },
        {
          id: 5,
          name: '희주의 react 부수기',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 6,
            name: '이희주',
            image: 'asdf.jpg',
          },
        },
      ],
    },
  },
};

export const getRoadmapStepsResponse: GetRoadmapStepsResponse = {
  success: true,
  message: 'ok',
  result: {
    steps: [
      {
        id: 1,
        title: 'Next.js 란 무엇인가?',
        isCompleted: true,
        tilId: 1,
      },
      {
        id: 2,
        title: '설치와 실행',
        isCompleted: false,
        tilId: null,
      },
      {
        id: 3,
        title: '샘플앱 세탁',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 4,
        title: '배포',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 5,
        title: '뼈대 만들기',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 6,
        title: '라우팅',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 7,
        title: 'Single Page Application',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 8,
        title: '정적 자원 사용하기',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 9,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 10,
        title: 'css',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 11,
        title: 'backend',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 12,
        title: '글 목록 가져오기',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 13,
        title: '글 생성',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 14,
        title: 'cache',
        isCompleted: false,
        tilId: 1,
      },
    ],
    progress: 55,
    role: 'member',
  },
};

export const getRoadmapStepReferenceResponse: GetRoadmapStepReferenceResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 1,
    description: '7조 화이팅',
    youtubes: [
      {
        id: 1,
        link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9KOaR6QMb9A?si=HA3x3k-PLh9dmO03" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      },
    ],
    references: [
      {
        id: 1,
        link: 'https://nextjs.org/docs/getting-started/installation',
      },
      {
        id: 2,
        link: 'https://nextjs.org/docs/getting-started/project-structure',
      },
      {
        id: 3,
        link: 'https://nextjs.org/docs/getting-started/project-structure',
      },
      {
        id: 4,
        link: 'https://nextjs.org/docs/getting-started/project-structure',
      },
    ],
  },
};

// eslint-disable-next-line prefer-const
export let getRoadmapGroupMemberResponse: GetRoadmapGroupMemberResponse = {
  success: true,
  message: 'ok',
  result: {
    users: [
      {
        id: 1,
        name: '이희주',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'member',
      },
      {
        id: 2,
        name: '정동현',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'manager',
      },
      {
        id: 3,
        name: '이하연',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'manager',
      },
      {
        id: 4,
        name: '뉴진스',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'manager',
      },
      {
        id: 5,
        name: '박명수',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'master',
      },
    ],
    myRole: 'master',
  },
};

export const getRoadmapGroupApplyResponse: GetRoadmapGroupApplyResponse = {
  success: true,
  message: 'ok',
  result: {
    users: [
      {
        id: 1,
        name: '이희주',
        image: 'https://avatars.githubusercontent.com/u/53530683?v=4',
        date: '2024-05-11',
        content:
          '저는 동국대학교 연계전공 융합소프트웨어 4학년 재학중입니다. 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.',
      },
      {
        id: 2,
        name: '뉴진스',
        image: 'https://avatars.githubusercontent.com/u/53530683?v=4',
        date: '2024-05-11',
        content:
        '저는 동국대학교 연계전공 융합소프트웨어 4학년 재학중입니다. 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.',
      },
      {
        id: 3,
        name: '박명수',
        image: 'https://avatars.githubusercontent.com/u/53530683?v=4',
        date: '2024-05-11',
        content:
        '저는 동국대학교 연계전공 융합소프트웨어 4학년 재학중입니다. 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.',
      },
    ],
    myRole: 'master',
  },
};

export const updateFixture = (name: string) => {
  const length = getRoadmapsResponse.result.categories.length;

  getRoadmapsResponse.result.categories = [
    ...getRoadmapsResponse.result.categories,
    {
      id: length + 1,
      name,
    },
  ];
};

export const updateGetRoadmapStepsResponseFixture = (name: string) => {
  const length = getRoadmapStepsResponse.result.steps.length;

  getRoadmapStepsResponse.result.steps = [
    ...getRoadmapStepsResponse.result.steps,
    {
      id: length + 1,
      title: name,
      isCompleted: false,
      tilId: null,
    },
  ];
};

export const postRoadmapsResponse: PostRoadmapsResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 1,
  },
};

export const updateGetRoadmapGroupMemberResponseFixture = (userId: number, role: Exclude<Role, null>) => {
  getRoadmapGroupMemberResponse.result.users = getRoadmapGroupMemberResponse.result.users.map((user) =>
    user.id === userId ? { ...user, role } : user,
  );
};

export const postRoadmapsGroupsParticipateResponse: PostRoadmapsGroupsParticipateResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 5,
  },
};
