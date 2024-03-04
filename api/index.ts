import { AxiosResponse}  from 'axios';
import fetch from '../utils/fetch';
const prefix = "bbsApi";

export const userLogin = params => {
  return fetch({
    method: 'post',
    url: prefix + '/user/login',
    data: params,
  });
};
export const userLogOut = () => {
  return fetch({
    method: 'get',
    useToken: true,
    url: prefix + '/user/logout',
  });
};

export const userRegister = params => {
  return fetch({
    method: 'post',
    url: prefix + '/user/createUser',
    data: params,
  });
};
export const changePassApi = params => {
  return fetch({
    method: 'post',
    useToken: true,
    url: prefix + '/user/changePass',
    data: params,
  });
};
export const modifyUserApi = params => {
  return fetch({
    method: 'post',
    url: prefix + '/user/updateUser',
    data: params,
  });
};

export const getUserInfo = params => {
  return fetch({
    method: 'get',
    url: prefix + '/user/getUserInfo',
    useToken: true,
    params: params,
  });
};

export const fetchTopicList = params => {
  return fetch({
    method: 'get',
    url: prefix + '/topic/getTopicList',
    params: params,
  });
};
export const updateTopicItem = params => {
  return fetch({
    method: 'get',
    url: prefix + '/topic/updateTopic',
    params: params,
  });
};

export const createTopic = params => {
  return fetch({
    method: 'post',
    useToken: true,
    url: prefix + '/topic/createTopic',
    data: params,
  });
};

export const fetchChannelList = (params:any): Promise<AxiosResponse> => {
  return fetch({
    method: 'get',
    url: prefix + '/category/getCategoryList',
    params: params,
  });
};

export const fetchCommentList = params => {
  return fetch({
    method: 'get',
    url: prefix + '/comment/getCommentList',
    params: params,
  });
};

export const addComment = params => {
  return fetch({
    method: 'post',
    useToken: true,
    url: prefix + '/comment/addComment',
    data: params,
  });
};

export const actionPraise = params => {
  return fetch({
    method: 'post',
    useToken: true,
    url: prefix + '/praise/praiseAction',
    data: params,
  });
};

export const fetchPraiseInfo = params => {
  return fetch({
    method: 'get',
    url: prefix + '/praise/getPraiseInfo',
    params: params,
  });
};

export const actionFavoriteTopic = params => {
  return fetch({
    method: 'post',
    useToken: true,
    url: prefix + '/favorite/favoriteAction',
    data: params,
  });
};

export const getFavoriteTopic = params => {
  return fetch({
    method: 'get',
    useToken: true,
    url: prefix + '/favorite/getFavoriteList',
    params: params,
  });
};