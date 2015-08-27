package com.bbz.ecms.domain.data;

import lombok.Data;
import org.nutz.dao.entity.annotation.*;

/**
 * user         LIUKUN
 * time         2015-3-17 16:11
 */

@Table("Qyzy")
@Data
public class Qyzy{
    @Id
    private Integer id;

    @Column
    @ColDefine(type = ColType.VARCHAR, width = 20)
    private String name;

    /**
     *占地面积
     */
    @Column
    @ColDefine(type = ColType.FLOAT)
    private Float zdmj;

    /**
     * 已招商面积
     */
    @Column
    @ColDefine(type = ColType.FLOAT)
    private Float yzsmj;

    /**
     * 建成面积
     */
    @Column
    @ColDefine(type = ColType.FLOAT)
    private Float jcmj;

    /**
     * 建成剩余面积
     */
    @Column
    @ColDefine(type = ColType.FLOAT)
    private Float jcsymj;

    /**
     * 使用情况
     */
    @Column
    @ColDefine(type = ColType.FLOAT)
    private Float syqk;

    /**
     * 规划总面积
     */
    @Column
    @ColDefine(type = ColType.FLOAT)
    private Float ghzmj;

}
