package com.bbz.ecms.domain.user;

import org.nutz.dao.entity.annotation.*;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-17 16:11
 */
@Table("SYSTEM_ROLE")
public class Role {
    @Id
    private Long id;
    @Column
    @ColDefine(type = ColType.VARCHAR, width = 200)
    private String name;
    @Column
    @ColDefine(type = ColType.VARCHAR, width = 500)
    private String description;
    @ManyMany(target = User.class, relation = "SYSTEM_USER_ROLE", from = "ROLEID", to = "USERID")
    private List<User> users;
    @ManyMany(target = Permission.class, relation = "SYSTEM_ROLE_PERMISSION", from = "ROLEID", to = "PERMISSIONID")
    private List<Permission> permissions;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public List<User> getUsers() {
        return users;
    }
    public void setUsers(List<User> users) {
        this.users = users;
    }
    public List<Permission> getPermissions() {
        return permissions;
    }
    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }
}
