import type { GetAlarmsResponse, GetUserResponse, GetUserHistoryResponse } from '@/api/user/type';

export const userHistoryResponse: GetUserHistoryResponse = {
  success: true,
  message: 'ok',
  result: {
    gardens: [
      {
        day: '2024-05-11',
        value: 1,
      },
      {
        day: '2024-05-12',
        value: 0,
      },
      {
        day: '22024-05-13',
        value: 1,
      },
      {
        day: '2024-05-14',
        value: 1,
      },
    ],
  },
};

export const getUserResponse: GetUserResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 1,
    name: '이희주',
    email: 'lhj2778@dongguk.edu',
    image: 'https://avatars.githubusercontent.com/u/53530683?v=4',
  },
};

export const getAlarmsResponse: GetAlarmsResponse = {
  success: true,
  message: 'ok',
  result: {
    alarms: [
      {
        id: 1,
        tilId: 1,
        isChecked: false,
        roadmap: {
          id: 1,
          name: 'Next JS',
        },
        step: {
          id: 1,
          name: '6. SPA',
        },
        sender: {
          name: '이희주',
          image: 'https://avatars.githubusercontent.com/u/53530683?v=4',
        },
        createdAt: new Date(),
      },
      {
        id: 2,
        tilId: 3,
        isChecked: false,
        roadmap: {
          id: 1,
          name: 'Next JS',
        },
        step: {
          id: 1,
          name: '6. SPA',
        },
        sender: {
          name: '정동현',
          image: 'https://avatars.githubusercontent.com/u/6237',
        },
        createdAt: new Date(),
      },
    ],
  },
};

export const updateGetAlarmsResponseFixture = () => {
  getAlarmsResponse.result.alarms = getAlarmsResponse.result.alarms.map((alarm) => {
    return {
      ...alarm,
      isChecked: true,
    };
  });
};
