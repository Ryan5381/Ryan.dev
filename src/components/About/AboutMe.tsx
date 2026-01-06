import { Box } from "@mui/material";
import { useProfiles } from "../../hooks/useProfiles";

const AboutMe = () => {
  const { data: profiles = [], isLoading } = useProfiles();

  if (isLoading) return <Box>Loading...</Box>;

  // 安全檢查：確保有資料才讀取
  const profile = profiles[0];
  if (!profile) return <Box>尚未設定個人檔案資料</Box>;

  console.log("profile", profile.full_name);

  return (
    <Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia
      consectetur laudantium quidem sed debitis doloribus. Quia quod pariatur
      temporibus ratione quis aliquid esse natus dolore id voluptas minima
      magnam cupiditate, voluptate veritatis optio quae sit animi ipsam ut nemo
      architecto explicabo libero nobis? Incidunt voluptatibus quae totam,
      provident qui quod illum aspernatur porro eum iure odio ab neque? Maxime
      ea ad quo harum id facilis tempora asperiores ex? Voluptas explicabo at
      unde cumque officiis velit corrupti et soluta reprehenderit aperiam modi
      facilis, nulla possimus nostrum ducimus numquam voluptatem enim adipisci!
      Dolore sequi omnis perspiciatis corrupti molestiae eos provident id error
      labore esse ad minus quae, dolorum dolor cupiditate doloribus modi
      excepturi illum quod placeat deserunt. Alias quibusdam ut nostrum
      distinctio reprehenderit cupiditate tenetur corrupti possimus id? Autem
      exercitationem nemo minima maiores corporis laborum aut officiis cum
      laboriosam amet iure animi iste earum reprehenderit omnis, eligendi
      suscipit. Quo, reprehenderit maiores.
    </Box>
  );
};

export default AboutMe;
