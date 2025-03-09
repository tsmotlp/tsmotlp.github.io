import React from 'react';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Avatar, Box } from '@mui/material';

const Profile = () => {
    return (
        <Card elevation={2}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <Avatar
                        alt="Your Name"
                        src="/path-to-your-image.jpg"
                        sx={{ width: 120, height: 120, mb: 2 }}
                    />
                    <Typography variant="h5" component="h1">
                        Your Name
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        Your Position
                    </Typography>
                </Box>

                <Typography variant="h6" gutterBottom>
                    Education
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="Ph.D. in Your Field"
                            secondary="University Name, Year"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="M.Sc. in Your Field"
                            secondary="University Name, Year"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="B.Sc. in Your Field"
                            secondary="University Name, Year"
                        />
                    </ListItem>
                </List>

                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Experience
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="Position"
                            secondary="Institution Name, Year - Present"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Position"
                            secondary="Institution Name, Year - Year"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Position"
                            secondary="Institution Name, Year - Year"
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default Profile;