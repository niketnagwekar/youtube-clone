import React from "react";
import "../styles/css/SearchPage.css";
import "../styles/css/ChannelRow.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'; 
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow 
      image ="https://avatars2.githubusercontent.com/u/75846216?s=400&amp;u=b5ab77cd35a3552ada8e17da907a68fe3a86c63c&amp;v=4"
      channel = "NN Programming"
      verified
      subs="700K"
      noOfVideos={382}
      description ="You can find awesome programming lessons here!!!  Also expect programming tips Guys that will pump your coding skills insanely!!!"
      />


      <hr />
      <VideoRow
      views = "1.4M"
      subs = "732K"
      description ="YouTube Clone Guyssss!!!!"
      timestamp ="59 seconds ago"
      channel = "NN Programming"
      title ="Build  a YouTube Clone with react JS"
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9N7cndRfHHxOzLOIymz-cIJu6cXCOkcPsDw&usqp=CAU"
      />
      <VideoRow
      views = "1.4M"
      subs = "732K"
      description ="YouTube Clone Guyssss!!!!"
      timestamp ="59 seconds ago"
      channel = "NN Programming"
      title ="Build  a YouTube Clone with react JS"
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguM5CSJzKhZ6FUZAiwnXaP0AH0Lsy_u4VDw&usqp=CAU"
      />
      <VideoRow
      views = "1.4M"
      subs = "732K"
      description ="YouTube Clone Guyssss!!!!"
      timestamp ="59 seconds ago"
      channel = "NN Programming"
      title ="Build  a YouTube Clone with react JS"
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1zUL87YN0qRPc4bZR_Vh9Y8O4sHY1G78Rw&usqp=CAU"
      />
      <VideoRow
      views = "1.4M"
      subs = "732K"
      description ="YouTube Clone Guyssss!!!!"
      timestamp ="59 seconds ago"
      channel = "NN Programming"
      title ="Build  a YouTube Clone with react JS"
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrqsgwSfFk3F0mH7MiEii43uj51ViM9VP3g&usqp=CAU"
      />
      <VideoRow
      views = "1.4M"
      subs = "732K"
      description ="YouTube Clone Guyssss!!!!"
      timestamp ="59 seconds ago"
      channel = "NN Programming"
      title ="Build  a YouTube Clone with react JS"
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9N7cndRfHHxOzLOIymz-cIJu6cXCOkcPsDw&usqp=CAU"
      />
    

    </div>
  );
}

export default SearchPage;
