package com.vitres.vitres.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vitres.vitres.Entity.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {
    Result findByPrn(String prn);
}
