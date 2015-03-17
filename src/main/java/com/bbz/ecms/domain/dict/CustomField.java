package com.bbz.ecms.domain.dict;

import lombok.Data;

/**
 * user         LIUKUN
 * time         2015/3/17 23:02
 */
@Data
public class CustomField{

    private FieldType   fieldType;
    private String      name;
    private String      desc;
}
