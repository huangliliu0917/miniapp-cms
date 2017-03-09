package com.huobanplus.miniapp.web.service;

import com.huobanplus.miniapp.web.common.ApiResult;
import com.huobanplus.miniapp.web.entity.User;

import java.io.UnsupportedEncodingException;

/**
 * Created by wuxiongliu on 2017-02-10.
 */
public interface UserService {

    /**
     * 查询用户
     * @param username
     * @param password
     * @return
     */
    User findUser(String username, String password);

    /**
     * 根据用户id查找
     * @param id
     * @return
     */
    User findOne(Long id);

    /**
     * 新增用户
     * @param username
     * @param password
     * @return
     */
    ApiResult addUser(String username, String password);

    /**
     * 更新用户
     * @param id
     * @param username
     * @param password
     * @return
     */
    ApiResult updateUser(Long id, String username, String password);

    /**
     * 更新用户密码
     * @param id
     * @param oldPassword
     * @param newPassword
     * @return
     */
    ApiResult updatePassword(Long id, String oldPassword, String newPassword) throws UnsupportedEncodingException;

    /**
     * 删除用户
     * @param user
     * @return
     */
    ApiResult deleteUser(User user);
}
