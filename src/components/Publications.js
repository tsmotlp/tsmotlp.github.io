import React, { useState } from 'react';
import {
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Link,
    Box,
    Tabs,
    Tab,
    Divider,
    Card,
    CardContent,
    Grid,
    Chip
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';

const Publications = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Journal publications
    const journalPublications = [
        {
            title: "Advances in Machine Learning for Scientific Research",
            authors: "Your Name, Colleague A, Colleague B",
            journal: "Nature Machine Intelligence",
            volume: "5",
            pages: "234-245",
            year: 2023,
            impact: "9.8",
            link: "https://link-to-journal-publication-1.com",
            doi: "10.1038/xxx-xxx-xxxx"
        },
        {
            title: "Deep Learning Applications in Quantum Computing",
            authors: "Your Name, Colleague C",
            journal: "Science Advances",
            volume: "4",
            pages: "125-137",
            year: 2022,
            impact: "8.5",
            link: "https://link-to-journal-publication-2.com",
            doi: "10.1126/xxx-xxx-xxxx"
        },
        {
            title: "Quantum Machine Learning: A Survey",
            authors: "Your Name, Colleague D, Colleague E",
            journal: "Reviews of Modern Physics",
            volume: "93",
            pages: "1540-1565",
            year: 2021,
            impact: "10.2",
            link: "https://link-to-journal-publication-3.com",
            doi: "10.1103/xxx-xxx-xxxx"
        }
    ];

    // Conference publications
    const conferencePublications = [
        {
            title: "Real-time Quantum Computing Optimization",
            authors: "Your Name, Colleague F",
            conference: "International Conference on Machine Learning (ICML)",
            location: "Vienna, Austria",
            pages: "2345-2351",
            year: 2023,
            link: "https://link-to-conference-publication-1.com",
            award: "Best Paper Award"
        },
        {
            title: "Novel Approaches to Neural Network Architecture",
            authors: "Your Name, Colleague G, Colleague H",
            conference: "Neural Information Processing Systems (NeurIPS)",
            location: "Vancouver, Canada",
            pages: "4578-4590",
            year: 2022,
            link: "https://link-to-conference-publication-2.com"
        },
        {
            title: "Vision Transformer Architectures for Scientific Image Analysis",
            authors: "Your Name, Colleague I",
            conference: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
            location: "Montreal, Canada",
            pages: "8976-8985",
            year: 2021,
            link: "https://link-to-conference-publication-3.com"
        }
    ];

    return (
        <Paper elevation={1} sx={{ p: { xs: 2, md: 4 }, my: 4 }}>
            <Typography variant="h4" gutterBottom>
                Publications
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
                My research has been published in leading journals and presented at major international conferences.
            </Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="publication tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab
                        icon={<ArticleIcon />}
                        iconPosition="start"
                        label="Journal Articles"
                        id="tab-0"
                    />
                    <Tab
                        icon={<GroupsIcon />}
                        iconPosition="start"
                        label="Conference Papers"
                        id="tab-1"
                    />
                </Tabs>
            </Box>

            {/* Journal Publications Tab */}
            <Box role="tabpanel" hidden={tabValue !== 0} id="tabpanel-0">
                {tabValue === 0 && (
                    <Grid container spacing={3}>
                        {journalPublications.map((pub, index) => (
                            <Grid item xs={12} key={index}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            <Link href={pub.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                                {pub.title}
                                            </Link>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            {pub.authors}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>{pub.journal}</strong>, {pub.volume}, pp. {pub.pages}, {pub.year}
                                        </Typography>
                                        <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Chip
                                                size="small"
                                                label={`Impact Factor: ${pub.impact}`}
                                                color="primary"
                                                variant="outlined"
                                            />
                                            <Typography variant="caption">
                                                DOI: {pub.doi}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>

            {/* Conference Publications Tab */}
            <Box role="tabpanel" hidden={tabValue !== 1} id="tabpanel-1">
                {tabValue === 1 && (
                    <Grid container spacing={3}>
                        {conferencePublications.map((pub, index) => (
                            <Grid item xs={12} key={index}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            <Link href={pub.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                                {pub.title}
                                            </Link>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            {pub.authors}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>{pub.conference}</strong>, {pub.location}, pp. {pub.pages}, {pub.year}
                                        </Typography>
                                        {pub.award && (
                                            <Box sx={{ mt: 1 }}>
                                                <Chip
                                                    size="small"
                                                    label={pub.award}
                                                    color="secondary"
                                                />
                                            </Box>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </Paper>
    );
};

export default Publications;