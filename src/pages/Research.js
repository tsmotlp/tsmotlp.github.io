import React from 'react';
import { Container, Typography, Paper, Box, Grid, Divider, List, ListItem, ListItemText } from '@mui/material';

const Research = () => {
    const currentProjects = [
        { title: "Project 1", description: "Brief description of the project." },
        { title: "Project 2", description: "Brief description of the project." },
        { title: "Project 3", description: "Brief description of the project." }
    ];

    return (
        <Container maxWidth="lg">
            <Paper elevation={1} sx={{ p: 4, my: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Research Interests
                </Typography>

                <Typography variant="body1" paragraph>
                    My research focuses on [Your Research Area]. I am particularly interested in developing
                    new methodologies for [Specific Aspect of Your Research].
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" gutterBottom>
                    Current Projects
                </Typography>
                <Grid container spacing={3}>
                    {currentProjects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper elevation={2} sx={{ p: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2">
                                    {project.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Past Research
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My previous work has contributed to [Research Area]. Key findings include:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Research Finding 1"
                                secondary="Brief explanation of the significance of this finding"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Research Finding 2"
                                secondary="Brief explanation of the significance of this finding"
                            />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    );
};

export default Research;