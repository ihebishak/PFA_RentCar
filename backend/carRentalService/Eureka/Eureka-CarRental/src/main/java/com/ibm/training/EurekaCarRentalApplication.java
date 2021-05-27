package com.ibm.training;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaCarRentalApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaCarRentalApplication.class, args);
	}

}
