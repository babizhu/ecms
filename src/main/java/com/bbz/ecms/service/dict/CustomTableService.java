package com.bbz.ecms.service.dict;

import com.bbz.ecms.domain.dict.CustomTable;
import com.google.common.collect.Maps;

import java.util.Map;

/**
 * user         LIUKUN
 * time         2015/3/17 23:06
 */

public class CustomTableService{

    Map<String,CustomTable> tableMap = Maps.newHashMap();

    CustomTable getTable(String tableName ){
        CustomTable customTable = tableMap.get( tableName );
        if( customTable == null ){
            return null;
        }

        return customTable;

    }


}
