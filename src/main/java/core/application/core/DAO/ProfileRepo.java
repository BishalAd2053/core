package core.application.core.DAO;

import core.application.core.Model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepo  extends JpaRepository<Profile,Long> {

}
