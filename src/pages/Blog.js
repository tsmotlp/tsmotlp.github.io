import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Divider, CardActions, Button, Box } from '@mui/material';

const Blog = () => {
    const blogPosts = [
        {
            title: "Understanding Machine Learning",
            date: "2023-01-15",
            excerpt: "An introduction to the fundamentals of machine learning and its applications in various fields.",
            image: "https://via.placeholder.com/400x200?text=Machine+Learning",
        },
        {
            title: "The Future of Quantum Computing",
            date: "2023-02-10",
            excerpt: "Exploring the potential of quantum computing and its implications for technology and society.",
            image: "https://via.placeholder.com/400x200?text=Quantum+Computing",
        },
        {
            title: "Research Methodologies in Social Sciences",
            date: "2023-03-05",
            excerpt: "A comprehensive overview of various research methodologies used in social sciences.",
            image: "https://via.placeholder.com/400x200?text=Research+Methods",
        }
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ pt: 4, pb: 6 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Academic Blog
                </Typography>
                <Typography variant="subtitle1" paragraph align="center" color="text.secondary">
                    Insights, thoughts, and explorations in my field of research
                </Typography>
                <Divider sx={{ mb: 6 }} />

                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} elevation={2}>
                                <Box
                                    sx={{
                                        height: 200,
                                        backgroundImage: `url(${post.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                                        {post.date}
                                    </Typography>
                                    <Typography variant="body2">
                                        {post.excerpt}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Blog;