import { _get } from './index'
export const getUsers = params => _get(`/user/users`, params)
