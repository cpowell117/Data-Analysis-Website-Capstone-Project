import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface TeamMemberProps {
  name: string;
  role: string;
  education: string;
  major: string;
  bio: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  education,
  major,
  bio,
  image,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{
          height: 140, // Fixed height
          objectFit: "contain", // This will ensure that the image covers the area, maintaining its aspect ratio
          width: "100%", // This will make sure the width is always 100% of the card width
        }}
        image={image}
        alt={`Image of ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role} - {education}, {major}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {bio}
        </Typography>
        {/* Add more content or links here if needed */}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
