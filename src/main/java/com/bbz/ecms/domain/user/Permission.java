package com.bbz.ecms.domain.user;

import org.nutz.dao.entity.annotation.*;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-17 16:12
 */

@Table("SYSTEM_PERMISSION")
public class Permission {
    @Id
    private Long id;
    @Column
    @ColDefine(type = ColType.VARCHAR, width = 200)
    private String name;
    @Column
    @ColDefine(type = ColType.VARCHAR, width = 500)
    private String description;
    @ManyMany(target = Role.class, relation = "SYSTEM_ROLE_PERMISSION", from = "PERMISSIONID", to = "ROLEID")
    private List<Role> roles;

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
    public List<Role> getRoles() {
        return roles;
    }
    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }
}