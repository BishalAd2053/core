package core.application.core.Service;

import core.application.core.DAO.ProfileRepo;
import core.application.core.Model.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tinylog.Logger;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileServiceImp  implements  ProfileService{

    @Autowired
    ProfileRepo profileRepo;
    @Override
    public List<Profile> getAllProfiles() {
       List<Profile> profileList = profileRepo.findAll();
        return profileList;
    }

    @Override
    public Optional<Profile> getProfilesById(Long id) {
        Optional<Profile> profile = profileRepo.findById(id);
        return profile;
    }

    @Override
    public Profile createProfile(Profile profile) {
        if(dupeCheckprofile(profile)){
            return null;
        }
        return profileRepo.save(profile);
    }

    private boolean dupeCheckprofile(Profile profile) {
        Optional<Profile> dupeProfile = profileRepo.findByEmail(profile.getEmail());
        if(dupeProfile.isPresent()){
            Logger.info("Duplicate Profile : " + dupeProfile );
            return true;
        }
        return false;
    }
}
