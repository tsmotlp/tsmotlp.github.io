import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Paper,
    Avatar,
    Divider,
    Chip,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Button,
    Link
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import CodeIcon from '@mui/icons-material/Code';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Home = () => {
    // Research interests data
    const researchInterests = [
        "Federated Learning",
        "AI in Healthcare",
        "Medical Data Privacy Protection"
    ];

    // Education history
    const education = [
        {
            degree: "Ph.D.",
            field: "Cyber Science and Engineering",
            institution: "Sichuan University",
            year: "2024 - Present"
        },
        {
            degree: "M.S.",
            field: "Computer Science",
            institution: "Sichuan University",
            year: "2018 - 2021"
        },
        {
            degree: "B.S.",
            field: "Electronics and Information Engineering",
            institution: "Sichuan University",
            year: "2014 - 2018"
        }
    ];

    // Work experience
    const experience = [
        {
            position: "Software Engineer",
            institution: "Huawei Cloud Computing Technology Co., Ltd.",
            period: "2021 - 2024"
        }
    ];

    // Helper function to format authors with bold for your name
    const formatAuthors = (authorsString) => {
        return authorsString.split('; ').map((author, index, array) => {
            const isYou = author.includes('Huang, Y.');
            return (
                <React.Fragment key={index}>
                    {isYou ? <strong>{author}</strong> : author}
                    {index < array.length - 1 ? '; ' : ''}
                </React.Fragment>
            );
        });
    };

    // Featured publications
    const featuredPublications = [
        {
            title: "FedRIR: Rethinking Information Representation in Federated Learning",
            authors: "Huang, Y.; Shao, Z.; Yang, Z.; Lu, Z.; Zhang, Y.",
            journal: "ACM Web Conference (WWW)",
            location: "Sydney, NSW, Australia",
            year: 2025,
            tier: "CCF-A",
            award: "Oral Presentation",
            paperLink: "https://arxiv.org/abs/2502.00859",
            codeLink: "https://github.com/tsmotlp/FedRIR"
        },
        {
            title: "Noise-powered disentangled representation for unsupervised speckle reduction of optical coherence tomography images",
            authors: "Huang, Y.; Xia, W.; Lu, Z.; Liu, Y.; Chen, H.; Zhou, J.; Fang, L.; Zhang, Y.",
            journal: "IEEE Transactions on Medical Imaging",
            volume: "40(10)",
            pages: "2600-2614",
            year: 2020,
            impact: "8.9",
            paperLink: "https://ieeexplore.ieee.org/document/9296372",
            codeLink: "https://github.com/tsmotlp/DRGAN-OCT"
        },
        {
            title: "Simultaneous denoising and super-resolution of optical coherence tomography images based on generative adversarial network",
            authors: "Huang, Y.; Lu, Z.; Shao, Z.; Ran, M.; Zhou, J.; Fang, L.; Zhang, Y.",
            journal: "Optics express",
            volume: "27(9)",
            pages: "12289-12307",
            year: 2019,
            impact: "3.2",
            paperLink: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-27-9-12289&id=409094",
            codeLink: "https://github.com/tsmotlp/SDSR-OCT"
        }
    ];

    // News data
    const newsItems = [
        {
            date: "2025.1.20",
            title: "My paper 'FedRIR: Rethinking Information Representation in Federated Learning' was accepted as an oral presentation at The ACM Web Conference (WWW, CCF-A).",
            icon: <CelebrationIcon color="primary" />,
            link: "https://arxiv.org/abs/2502.00859"
        },
        {
            date: "2024.9.10",
            title: "Started my Ph.D. journey at Sichuan University in the School of Cyber Science and Engineering.",
            icon: <SchoolTwoToneIcon color="primary" />
        }
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 6 }}>
                {/* Personal Introduction */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar
                            alt="Yongqiang Huang"
                            src={`${process.env.PUBLIC_URL}/avatar.jpg`}
                            sx={{
                                width: 200,
                                height: 200,
                                mb: 2,
                                bgcolor: '#1976d2' // 如果图片加载失败，显示蓝色背景
                            }}
                            imgProps={{
                                onError: (e) => {
                                    console.error('Avatar failed to load');
                                    e.target.style.display = 'none'; // 隐藏错误的图片
                                }
                            }}
                        />
                        <Typography variant="h5" component="h1" align="center" gutterBottom>
                            Yongqiang Huang
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom>
                            Ph.D. Student | Sichuan University
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                            {researchInterests.map((interest, index) => (
                                <Chip key={index} label={interest} size="small" color="primary" variant="outlined" />
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom>
                            Welcome to My Personal Website
                        </Typography>
                        <Typography variant="body1" paragraph>
                            I am a Ph.D. student in Cyber Science and Engineering at Sichuan University. My research
                            focuses on Image Generation, Federated learning, AI in Healthcare.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Prior to beginning my doctoral studies, I worked as a Software Engineer at Huawei Cloud Computing
                            Technology Co., Ltd. where I gained practical experience in cloud computing, large-scale distributed systems and data analysis.
                        </Typography>
                        <Typography variant="body1">
                            This website showcases my academic journey, research interests, and publications.
                            Feel free to explore and contact me for potential collaborations.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* News Section - 日期显示在左侧 */}
                <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <AnnouncementIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h5">News</Typography>
                    </Box>

                    <List>
                        {newsItems.map((news, index) => (
                            <ListItem key={index} sx={{ px: 0, alignItems: 'flex-start' }}>
                                <Box sx={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'flex-start'
                                }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            minWidth: '80px',
                                            mr: 2,
                                            pt: 0.3,
                                            fontWeight: 'medium',
                                            textAlign: 'right'
                                        }}
                                    >
                                        {news.date}
                                    </Typography>

                                    <Typography variant="body1">
                                        {news.title}
                                    </Typography>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Paper>

                {/* Academic Profile */}
                <Grid container spacing={4}>
                    {/* Education */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <SchoolIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h5">Education</Typography>
                            </Box>
                            <List>
                                {education.map((edu, index) => (
                                    <ListItem key={index} sx={{ px: 0 }}>
                                        <ListItemText
                                            primary={`${edu.degree} in ${edu.field}`}
                                            secondary={`${edu.institution}, ${edu.year}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    {/* Work Experience */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <WorkIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h5">Experience</Typography>
                            </Box>
                            <List>
                                {experience.map((exp, index) => (
                                    <ListItem key={index} sx={{ px: 0 }}>
                                        <ListItemText
                                            primary={exp.position}
                                            secondary={`${exp.institution}, ${exp.period}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Featured Publications */}
                <Grid item xs={12} sx={{ mt: 4 }}>
                    <Paper elevation={1} sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <BookIcon color="primary" sx={{ mr: 1 }} />
                            <Typography variant="h5">Featured Publications</Typography>
                        </Box>

                        <Grid container spacing={3}>
                            {featuredPublications.map((pub, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography variant="h6" component="h3" gutterBottom>
                                                <Link href={pub.paperLink} target="_blank" rel="noopener noreferrer" underline="hover">
                                                    {pub.title}
                                                </Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                                {formatAuthors(pub.authors)}
                                            </Typography>

                                            {/* For conference papers */}
                                            {pub.conference && (
                                                <Typography variant="body2">
                                                    <strong>{pub.conference}</strong>, {pub.location}, {pub.year}
                                                </Typography>
                                            )}

                                            {/* For journal papers */}
                                            {pub.journal && !pub.conference && (
                                                <Typography variant="body2">
                                                    <strong>{pub.journal}</strong>
                                                    {pub.volume && `, ${pub.volume}`}
                                                    {pub.pages && `, pp. ${pub.pages}`}
                                                    {`, ${pub.year}`}
                                                </Typography>
                                            )}

                                            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                    {pub.impact && (
                                                        <Chip
                                                            size="small"
                                                            label={`Impact Factor: ${pub.impact}`}
                                                            color="primary"
                                                            variant="outlined"
                                                        />
                                                    )}
                                                    {pub.tier && (
                                                        <Chip
                                                            size="small"
                                                            label={pub.tier}
                                                            color="primary"
                                                            variant="outlined"
                                                        />
                                                    )}
                                                    {pub.award && (
                                                        <Chip
                                                            size="small"
                                                            label={pub.award}
                                                            color="secondary"
                                                        />
                                                    )}
                                                </Box>

                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    <Button
                                                        size="small"
                                                        variant="outlined"
                                                        startIcon={<PictureAsPdfIcon />}
                                                        href={pub.paperLink}
                                                        target="_blank"
                                                    >
                                                        PDF
                                                    </Button>
                                                    {pub.codeLink && (
                                                        <Button
                                                            size="small"
                                                            variant="outlined"
                                                            startIcon={<CodeIcon />}
                                                            href={pub.codeLink}
                                                            target="_blank"
                                                        >
                                                            Code
                                                        </Button>
                                                    )}
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                href="#/publications"
                            >
                                View All Publications
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                {/* Contact Information */}
                <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
                    <Typography variant="h5" gutterBottom>Contact Information</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'medium' }}>
                                        Email:
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link href="mailto:yqhuang2912@gmail.com">yqhuang2912@gmail.com</Link> | <Link href="mailto:yqhuang@stu.scu.edu.cn">yqhuang@stu.scu.edu.cn</Link>
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'medium' }}>
                                        GitHub:
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link href="https://github.com/tsmotlp" target="_blank" rel="noopener noreferrer">
                                            https://github.com/tsmotlp
                                        </Link>
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'medium' }}>
                                        Scholar:
                                    </Typography>
                                    <Typography variant="body1">
                                        <Link href="https://scholar.google.com/citations?user=VmxnkI8AAAAJ" target="_blank" rel="noopener noreferrer">
                                            Google Scholar Profile
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
};

export default Home;