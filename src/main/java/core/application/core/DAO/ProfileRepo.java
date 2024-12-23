package core.application.core.DAO;

import core.application.core.Model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfileRepo  extends JpaRepository<Profile,Long> {
  Optional<Profile> findByEmail(String email);

  Optional<Profile> findById(Long id);
}
