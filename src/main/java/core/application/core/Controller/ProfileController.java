package core.application.core.Controller;

import core.application.core.Model.Profile;
import core.application.core.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/profiles")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @GetMapping("/getall")
    public List<Profile> getProfile(){
        return profileService.getAllProfiles();
    }

    @GetMapping("getProfile/")
    public Optional<Profile> getById(@RequestParam Long id ){
        Optional<Optional<Profile>> profile = Optional.ofNullable(profileService.getProfilesById(id));
        return profile.get();
    }

    @PostMapping("/create")
    public String creteProfile(@RequestBody Profile profile) {
        Profile newProfile = profileService.createProfile(profile);
        if (Objects.nonNull(newProfile)) {
            return "New Profile is created with ID: " + newProfile.getId();
        }
        return "Error Creating Profile";
    }

}
