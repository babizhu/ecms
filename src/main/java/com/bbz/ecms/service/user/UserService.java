package com.bbz.ecms.service.user;

import com.bbz.ecms.domain.user.Role;
import com.bbz.ecms.domain.user.User;
import org.nutz.dao.Cnd;
import org.nutz.dao.Dao;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.lang.Lang;
import org.nutz.service.IdEntityService;

import java.util.ArrayList;
import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-17 16:50
 */

@IocBean(args = { "refer:dao" })
public class UserService extends IdEntityService<User>{

    public UserService(Dao dao) {
        super(dao);
    }

    public List<User> list() {
        return query(null, null);
    }

    public void update(User user) {
        dao().update(user);
    }

    public void insert(User user) {
        dao().insert(user);
    }

    public User view(Long id) {
        return dao().fetchLinks(fetch(id), "roles");
    }

    public User fetchByName(String name) {
        return fetch( Cnd.where( "NAME", "=", name ));
    }

    public List<String> getRoleNameList(User user) {
        dao().fetchLinks(user, "roles");
        List<String> roleNameList = new ArrayList<String>();
        for (Role role : user.getRoles()) {
            roleNameList.add(role.getName());
        }
        return roleNameList;
    }

    public void addRole(Long userId, Long roleId) {
        User user = fetch(userId);
        Role role = new Role();
        role.setId(roleId);
        user.setRoles( Lang.list( role ));
        dao().insertRelation(user, "roles");
    }

    public void removeRole(Long userId, Long roleId) {
        dao().clear("SYSTEM_USER_ROLE", Cnd.where("USERID", "=", userId).and("ROLEID", "=", roleId));

    }
}