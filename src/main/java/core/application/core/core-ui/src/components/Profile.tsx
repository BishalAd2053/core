import { useEffect, useState } from "react";
import { httpUtills } from "../utill/httpUtils";

interface Profile{
    id: number;
    name: string;
    email: string;
    bio:string;

}

const Profile: React.FC  =() => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [error, seterror ] = useState<string | null>(null);

    //Fetch all profile
    const fetchProfiles = async () => {
        try {
            const data : any= await httpUtills<undefined| Profile[]>({
                method: 'GET',
                url: 'http://localhost:8080/api/profiles/getall',
            });
            setProfiles(data);
            seterror(null);
            } catch (error) {

                seterror('Failerd to fetch profiles Please try again later: ')
                console.error('Failed to fetch profiles Please try again later');
            }
            };
            useEffect(()=> {
                fetchProfiles();
            },[]);

            return (
                <div style={{ margin: "20px" }}>
                  <h2>All Profiles</h2>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  {profiles.length === 0 && !error && <p>No profiles found.</p>}
                  <ul>
                    {profiles.map((profile) => (
                      <li key={profile.id} style={{ marginBottom: "15px", listStyle: "none" }}>
                        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                          <p><strong>ID:</strong> {profile.id}</p>
                          <p><strong>Name:</strong> {profile.name}</p>
                          <p><strong>Email:</strong> {profile.email}</p>
                          <p><strong>Bio:</strong> {profile.bio}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            };

            export default Profile;