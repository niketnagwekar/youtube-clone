import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/css/ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return <div className="channelRow">
      <Avatar className= "channelRow__logo"
        alt={channel} src={image}/>
    <div className="channelRow__text">
        <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
        <p> {subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
    </div>
  </div>;
}

export default ChannelRow;
