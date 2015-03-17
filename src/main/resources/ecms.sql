/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50538
Source Host           : localhost:3306
Source Database       : ecms

Target Server Type    : MYSQL
Target Server Version : 50538
File Encoding         : 65001

Date: 2015-03-17 16:34:50
*/

-- ----------------------------
-- Records of system_permission
-- ----------------------------
INSERT INTO `system_permission` VALUES ('1', '*:*:*', '全部权限');
INSERT INTO `system_permission` VALUES ('2', '*:read:*', '对任何对象的浏览');
INSERT INTO `system_permission` VALUES ('3', 'user:read:*', '对用户的浏览');
INSERT INTO `system_permission` VALUES ('4', 'user:read,update:*', '对用户的浏览和编辑');
INSERT INTO `system_permission` VALUES ('5', 'user:*:*', '对用户的任意操作');
INSERT INTO `system_permission` VALUES ('6', 'user:roleAssign:*', '对用户分配角色');
INSERT INTO `system_permission` VALUES ('7', 'role:*:*', '对角色的任意操作');
INSERT INTO `system_permission` VALUES ('8', 'permission:*:*', '对权限的任意操作');
INSERT INTO `system_permission` VALUES ('9', 'role:PermissionAssign:*', '对角色分配权限');


-- ----------------------------
-- Records of system_role
-- ----------------------------
INSERT INTO `system_role` VALUES ('1', 'admin', '超级管理员：拥有全部权限的角色');
INSERT INTO `system_role` VALUES ('2', 'viewer', '审阅者：拥有任何对象的浏览权限的角色');
INSERT INTO `system_role` VALUES ('3', 'user-superadmin', '用户超级管理员：拥有对用户的任意操作权限的角色');
INSERT INTO `system_role` VALUES ('4', 'user-admin', '用户管理员：拥有对用户的浏览、增加和编辑(不包括删除)权限的角色');
INSERT INTO `system_role` VALUES ('5', 'security-admin', '安全管理员：拥有对角色和权限的任意操作，对用户分配角色及对角色分配权限的权限');

-- ----------------------------
-- Records of system_role_permission
-- ----------------------------
INSERT INTO `system_role_permission` VALUES ('1', '1');
INSERT INTO `system_role_permission` VALUES ('2', '2');
INSERT INTO `system_role_permission` VALUES ('3', '5');
INSERT INTO `system_role_permission` VALUES ('4', '4');
INSERT INTO `system_role_permission` VALUES ('5', '6');
INSERT INTO `system_role_permission` VALUES ('5', '7');
INSERT INTO `system_role_permission` VALUES ('5', '8');
INSERT INTO `system_role_permission` VALUES ('5', '9');

-- ----------------------------
-- Records of system_user
-- ----------------------------
INSERT INTO `system_user` VALUES ('1', 'admin', 'dHVjO59A3o8cK2pHMvDlvi13mMChs8Jz/yz6v97RDLQ=', '6KQfzoCuCiw2HBUjipsKCg==', null, null);
INSERT INTO `system_user` VALUES ('2', 'jack', 'dHVjO59A3o8cK2pHMvDlvi13mMChs8Jz/yz6v97RDLQ=', '6KQfzoCuCiw2HBUjipsKCg==', 'male', 'test2ete');
INSERT INTO `system_user` VALUES ('3', 'kate', 'dHVjO59A3o8cK2pHMvDlvi13mMChs8Jz/yz6v97RDLQ=', '6KQfzoCuCiw2HBUjipsKCg==', 'female', 'test2ete');
INSERT INTO `system_user` VALUES ('4', 'sawyer', 'dHVjO59A3o8cK2pHMvDlvi13mMChs8Jz/yz6v97RDLQ=', '6KQfzoCuCiw2HBUjipsKCg==', 'male', 'test2ete');
INSERT INTO `system_user` VALUES ('5', 'john', 'dHVjO59A3o8cK2pHMvDlvi13mMChs8Jz/yz6v97RDLQ=', '6KQfzoCuCiw2HBUjipsKCg==', 'male', 'test2ete');
INSERT INTO `system_user` VALUES ('6', 'ben', 'dHVjO59A3o8cK2pHMvDlvi13mMChs8Jz/yz6v97RDLQ=', '6KQfzoCuCiw2HBUjipsKCg==', 'male', 'test2ete');


-- ----------------------------
-- Records of system_user_role
-- ----------------------------
INSERT INTO `system_user_role` VALUES ('1', '1');
INSERT INTO `system_user_role` VALUES ('2', '2');
INSERT INTO `system_user_role` VALUES ('2', '3');
INSERT INTO `system_user_role` VALUES ('3', '4');
INSERT INTO `system_user_role` VALUES ('4', '2');
INSERT INTO `system_user_role` VALUES ('5', '2');
INSERT INTO `system_user_role` VALUES ('6', '5');
