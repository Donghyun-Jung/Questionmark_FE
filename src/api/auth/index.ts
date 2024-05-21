import { axiosInstance } from '@/api';
import type {
  PostEmailCodeCheckRequest,
  PostJoinRequest,
  PostEmailPasswordRequest,
  LoginResponse,
} from '@/api/auth/type';
import type { NullResultResponse } from '@/api/type';

// 로그인 함수
export const postLogin = async (req: { body: PostEmailPasswordRequest }) => {
  const { body } = req;

  // 서버에 로그인 요청을 보내고 응답을 받아옴
  const { data } = await axiosInstance.request<LoginResponse>({
    method: 'POST',
    url: '/login',
    data: body,
  });

  return data; 
};

// 이메일 중복 확인 함수
export const postEmailCheck = async (req: { body: { email: string } }) => {
  const { body } = req;

  // 서버에 이메일 중복 확인 요청을 보내고 응답을 받아옴
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/check',
    data: body,
  });

  return data; 
};

// 인증 코드 발송 함수
export const postEmailCode = async (req: { body: { email: string } }) => {
  const { body } = req;

  // 서버에 인증 코드 발송 요청을 보내고 응답을 받아옴
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code',
    data: body,
  });

  return data; 
};

// 인증 코드 일치 여부 확인 함수
export const postEmailCodeCheck = async (req: { body: PostEmailCodeCheckRequest }) => {
  const { body } = req;

  // 서버에 인증 코드 일치 여부 확인 요청을 보내고 응답을 받아옴
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/email/code/check',
    data: body,
  });

  return data; 
};

// 비밀번호 재설정 함수
export const postPasswordChange = async (req: { body: PostEmailPasswordRequest }) => {
  const { body } = req;

  // 서버에 비밀번호 재설정 요청을 보내고 응답을 받아옴
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/password/change',
    data: body,
  });

  return data; 
};

// 회원 가입 함수
export const postJoin = async (req: { body: PostJoinRequest }) => {
  const { body } = req;

  // 서버에 회원 가입 요청을 보내고 응답을 받아옴
  const { data } = await axiosInstance.request<NullResultResponse>({
    method: 'POST',
    url: '/join',
    data: body,
  });

  return data;
};
