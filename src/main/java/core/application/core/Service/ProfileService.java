package core.application.core.Service;

import core.application.core.Model.Profile;

import java.util.List;
import java.util.Optional;

public interface ProfileService {

    List<Profile> getAllProfiles();
    Optional<Profile> getProfilesById(Long id);
    Profile createProfile(Profile profile);
}
