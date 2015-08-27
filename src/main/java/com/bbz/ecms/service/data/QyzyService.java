package com.bbz.ecms.service.data;

import com.bbz.ecms.domain.data.Qyzy;
import org.nutz.dao.Cnd;
import org.nutz.dao.Dao;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.service.IdEntityService;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-31 16:45
 */
@IocBean(args = { "refer:dao" })
//@IocBean
public class QyzyService extends IdEntityService<Qyzy>{

    public QyzyService(Dao dao) {
        super(dao);
    }
    public List<Qyzy> list( String condition) {
        return dao().query( Qyzy.class, Cnd.wrap( condition ), null );
    }

    public void insert(Qyzy qyzy) {
        dao().insert(qyzy);
    }

    public void insert( Qyzy[] qyzy){
        dao().insert( qyzy );
    }

    public void update(Qyzy qyzy) {
        dao().update( qyzy );
    }

    public void update(Qyzy[] qyzy) {
        dao().update( qyzy );
    }
    public void delete(Qyzy qyzy) {
        dao().delete( qyzy );
    }

    public void delete(Qyzy[] qyzy) {
        dao().delete( qyzy );
    }

    public String toExcel( List<Qyzy> qyzyList ){
        return null;
    }


}
