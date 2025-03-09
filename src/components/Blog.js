import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Machine Learning",
      date: "2023-01-15",
      excerpt: "An introduction to the fundamentals of machine learning and its applications in various fields."
    },
    {
      title: "The Future of Quantum Computing",
      date: "2023-02-10",
      excerpt: "Exploring the potential of quantum computing and its implications for technology and society."
    }
  ];

  return (
    <div className="blog-section">
      <Typography variant="h4" gutterBottom>Latest Posts</Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="body2">{post.excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;