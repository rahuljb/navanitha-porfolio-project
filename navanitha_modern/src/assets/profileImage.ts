// Navanitha Vijayakumar - Profile Photo Manager
// Calls the profile image directly from the dedicated folder: /images/profile.jpg

export const defaultPhotographicPortrait = '/images/profile.jpg';
export const navanithaStudioPortrait = '/images/profile.jpg';

export const getProfileImageUrl = (): string => {
  try {
    const saved = localStorage.getItem('navanitha_custom_profile_image');
    if (saved) return saved;
  } catch (e) {
    // ignore
  }
  return defaultPhotographicPortrait;
};
