package com.ibm.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ibm.user.entity.UserDetails;

public interface UserDetailsRepository extends CrudRepository<UserDetails, Integer> {

	Optional<UserDetails> findByEmailAndPassword(String email, String password);
	
	Optional<UserDetails> findByEmail(String email);

	@Modifying
	@Query(value = "update user_details u set u.front_license_image_url= :front where u.email= :email", nativeQuery = true)
	int updateFront(@Param("front") byte front[], @Param("email") String email);

	@Modifying
	@Query(value = "update user_details u set u.back_license_image_url= :back where u.email= :email", nativeQuery = true)
	int updateBack(@Param("back") byte back[], @Param("email") String email);

}
