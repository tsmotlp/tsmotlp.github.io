import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Link,
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  Grid,
  Chip,
  Button
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Publications = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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

  // Journal publications
  const journalPublications = [
    {
      title: "Noise-powered disentangled representation for unsupervised speckle reduction of optical coherence tomography images",
      authors: "Huang, Y.; Xia, W.; Lu, Z.; Liu, Y.; Chen, H.; Zhou, J.; Fang, L.; Zhang, Y.",
      journal: "IEEE Transactions on Medical Imaging",
      volume: "40(10)",
      pages: "2600-2614",
      year: 2020,
      impact: "8.9",
      doi: "10.1109/TMI.2020.XXX",
      paperLink: "https://doi.org/10.1109/TMI.2020.XXX",
      codeLink: "https://github.com/yourusername/OCT-Denoising"
    },
    {
      title: "Simultaneous denoising and super-resolution of optical coherence tomography images based on generative adversarial network",
      authors: "Huang, Y.; Lu, Z.; Shao, Z.; Ran, M.; Zhou, J.; Fang, L.; Zhang, Y.",
      journal: "Optics express",
      volume: "27(9)",
      pages: "12289-12307",
      year: 2019,
      impact: "3.2",
      doi: "10.1364/OE.27.XXX",
      paperLink: "https://doi.org/10.1364/OE.27.XXX",
      codeLink: "https://github.com/yourusername/OCT-Super-Resolution"
    },
    {
      title: "M3NAS: Multi-Scale and Multi-Level Memory-Efficient Neural Architecture Search for Low-Dose CT Denoising",
      authors: "Lu Z.; Xia, W.; Huang, Y.; Hou, M.; Chen, H.; Zhou, J.; Shan, H.; Zhang, Y.",
      journal: "IEEE Transactions on Medical Imaging",
      volume: "42(3)",
      pages: "850-863",
      year: 2022,
      impact: "8.9",
      doi: "10.1109/TMI.2022.XXX",
      paperLink: "https://doi.org/10.1109/TMI.2022.XXX"
    },
    {
      title: "MAGIC: Manifold and graph integrative convolutional network for low-dose CT reconstruction",
      authors: "Xia, W.; Lu, Z.; Huang, Y.; Sun, H.; Liu, Y.; Chen, H.; Chen, Y.; Zhou, J.; Zhang, Y.",
      journal: "IEEE Transactions on Medical Imaging",
      volume: "40(12)",
      pages: "3459-3472",
      year: 2021,
      impact: "8.9",
      doi: "10.1109/TMI.2021.XXX",
      paperLink: "https://doi.org/10.1109/TMI.2021.XXX"
    },
    {
      title: "CT reconstruction with PDF: Parameter-dependent framework for data from multiple geometries and dose levels",
      authors: "Xia, W.; Lu, Z.; Huang, Y.; Liu, Y.; Chen, H.; Zhou, J.; Zhang, Y.",
      journal: "IEEE Transactions on Medical Imaging",
      volume: "40(11)",
      pages: "3065-3076",
      year: 2021,
      impact: "8.9",
      doi: "10.1109/TMI.2021.XXX",
      paperLink: "https://doi.org/10.1109/TMI.2021.XXX"
    },
    {
      title: "MD-Recon-Net: a parallel dual-domain convolutional neural network for compressed sensing MRI",
      authors: "Ran, M.; Xia, W.; Huang, Y.; Lu, Z.; Bao, P.; Liu, Y.; Sun, H.; Zhou, J.; Zhang, Y.",
      journal: "IEEE Transactions on Radiation and Plasma Medical Sciences",
      volume: "5(1)",
      pages: "120-135",
      year: 2020,
      doi: "10.1109/TRPMS.2020.XXX",
      paperLink: "https://doi.org/10.1109/TRPMS.2020.XXX"
    },
    {
      title: "Multi-task short-term reactive and active load forecasting method based on attention-LSTM model",
      authors: "Qin, J.; Zhang, Y.; Fan, S.; Hu, X.; H.; Huang, Y.; Lu, Z.; Liu, Y.",
      journal: "International Journal of Electrical Power & Energy Systems",
      volume: "135",
      pages: "107517",
      year: 2022,
      doi: "10.1016/j.ijepes.2022.XXX",
      paperLink: "https://doi.org/10.1016/j.ijepes.2022.XXX"
    }
  ];

  // Conference publications
  const conferencePublications = [
    {
      title: "FedRIR: Rethinking Information Representation in Federated Learning",
      authors: "Huang, Y.; Shao, Z.; Yang, Z.; Lu, Z.; Zhang, Y.",
      conference: "ACM Web Conference (WWW)",
      location: "Sydney, NSW, Australia",
      year: 2025,
      note: "Oral Presentation",
      tier: "CCF-A",
      award: "Oral Presentation",
      paperLink: "https://example.com/paper1",
      codeLink: "https://github.com/yourusername/FedRIR"
    },
    {
      title: "Disentanglement network for unsupervised speckle reduction of optical coherence tomography images",
      authors: "Huang, Y.; Xia, W.; Lu, Z.; Liu, Y.; Chen, H.; Zhou, J.; Fang, L.; Zhang, Y.",
      conference: "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)",
      location: "Lima, Peru",
      year: 2020,
      tier: "CCF-B",
      paperLink: "https://doi.org/10.1007/XXX",
      codeLink: "https://github.com/yourusername/OCT-Disentanglement"
    },
    {
      title: "Dual-domain adaptive-scaling non-local network for CT metal artifact reduction",
      authors: "Wang, T.; Xia, W.; Huang, Y.; Sun, H.; Liu, Y.; Chen, H.; Zhou, J.; Zhang, Y.",
      conference: "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)",
      location: "Strasbourg, France",
      year: 2021,
      tier: "CCF-B",
      paperLink: "https://doi.org/10.1007/XXX"
    },
    {
      title: "One network to solve them all: A sequential multi-task joint learning network framework for MR imaging pipeline",
      authors: "Wang, Z.; Xia, W.; Lu, Z.; Huang, Y.; Liu, Y.; Chen, H.; Zhou, J.; Zhang, Y.",
      conference: "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)",
      location: "Strasbourg, France",
      year: 2021,
      tier: "CCF-B",
      paperLink: "https://doi.org/10.1007/XXX"
    },
    {
      title: "Low-dose CT denoising via neural architecture search",
      authors: "Lu, Z.; Xia, W.; Huang, Y.; Hou, M.; Chen, H.; Shan, H.; Zhang, Y.",
      conference: "IEEE International Symposium on Biomedical Imaging (ISBI)",
      location: "Kolkata, India",
      year: 2022,
      paperLink: "https://doi.org/10.1109/ISBI.2022.XXX"
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
                      <Link href={pub.paperLink} target="_blank" rel="noopener noreferrer" underline="hover">
                        {pub.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {formatAuthors(pub.authors)}
                    </Typography>
                    <Typography variant="body2">
                      <strong>{pub.journal}</strong>, {pub.volume}, pp. {pub.pages}, {pub.year}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                      {pub.impact && (
                        <Chip
                          size="small"
                          label={`Impact Factor: ${pub.impact}`}
                          color="primary"
                          variant="outlined"
                        />
                      )}
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
                      <Link href={pub.paperLink} target="_blank" rel="noopener noreferrer" underline="hover">
                        {pub.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {formatAuthors(pub.authors)}
                    </Typography>
                    <Typography variant="body2">
                      <strong>{pub.conference}</strong>, {pub.location}, {pub.year}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
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
        )}
      </Box>
    </Paper>
  );
};

export default Publications;