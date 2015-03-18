package com.bbz.ecms.domain.dict;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * user         LIUKUN
 * time         2015/3/17 23:02
 */
@Data
@AllArgsConstructor
public class FieldMeta{

    private FieldType   fieldType;
    private String      name;
    private String      desc;
}
