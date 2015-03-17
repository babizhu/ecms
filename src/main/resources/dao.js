var ioc = {

	dataSource : {
		type : "com.alibaba.druid.pool.DruidDataSource",
		events : {
			depose : 'close'
		},
		fields : {
			// 请修改下面的数据库连接信息
			//url : 'jdbc:h2:~/apps/nutzdemo-shiro/db/db;CACHE_SIZE=131072;AUTO_RECONNECT=TRUE',
            url: 'jdbc:mysql://127.0.0.1:3306/ecms?',
			username : 'root',
			password : '',
			maxActive : 20,
			validationQuery : "SELECT 'x'",
			testWhileIdle : true,
			testOnBorrow : false,
			testOnReturn : false
		}
	},

	dao : {
		type : 'org.nutz.dao.impl.NutDao',
		args : [ {
			refer : 'dataSource'
		} ]
	}
};