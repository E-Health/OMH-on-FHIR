package org.gtri.hdap.mdata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
public class MdataServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MdataServerApplication.class, args);
	}
}
