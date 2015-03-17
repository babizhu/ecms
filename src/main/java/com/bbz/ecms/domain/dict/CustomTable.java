package com.bbz.ecms.domain.dict;

import lombok.Data;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015/3/17 23:04
 * 自定义表格
 */

@Data
public class CustomTable{
    private String  name;
    private String  desc;
    private List<CustomField>   fields;

    void add(Object obj ){

    }

    Object search( Object condition ){
        return null;
    }


    void remove(Object condition){

    }

    void update(Object obj){

    }

    List<Object> getPage( int pageNum, int pageCount){
        return null;
    }


}
