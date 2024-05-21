import { type CommonResponse } from '@/api/type'; // 공통 응답 형식을 가져옴.

// Auth 요청
// 이메일과 비밀번호로 로그인 요청을 보낼 때 사용되는 요청 형식
export interface PostEmailPasswordRequest {
  email: string; // 이메일
  password: string; // 비밀번호
}

// 이메일과 코드로 인증 코드 확인 요청을 보낼 때 사용되는 요청 형식
export interface PostEmailCodeCheckRequest {
  email: string; // 이메일
  code: string; // 인증 코드
}

// 이메일, 이름, 비밀번호 등을 포함한 회원 가입 요청을 보낼 때 사용되는 요청 형식
export interface PostJoinRequest {
  email: string; // 이메일
  name: string; // 이름
  password: string; // 비밀번호
  passwordConfirm: string; // 비밀번호 확인
}

// Auth 응답
// 로그인 요청에 대한 응답 형식으로, accessToken을 포함한 결과를 반환.
export interface LoginResponse extends CommonResponse {
  result: { accessToken: string }; // 로그인 결과로 받은 accessToken
}

