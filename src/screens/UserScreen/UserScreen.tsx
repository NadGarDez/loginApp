import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Skeleton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  type TypographyProps,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { MainErrorCard } from '../../components/error/MainErrorCard';
import { MainNavBar } from '../../components/nav/MainNavBar';
import { useGetUser } from '../../hooks/user/useGetUser';
const PrimaryTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const BoldTypography = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 600,
  fontSize: 20,
}));

const BoldTypographyTitle = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  fontSize: 22,
}));

export const UserScreen = (): JSX.Element => {
  const { data, loading, error, errorMessage } = useGetUser();

  const theme = useTheme();

  const match = useMediaQuery(theme.breakpoints.down('md'));

  const avatarTextGenerator = (): string => {
    if (data === undefined) return '';
    return `${data?.names?.charAt(0)}${data?.surnames?.charAt(0)}`;
  };

  if (error) return <MainErrorCard errorMessage={errorMessage} />;

  return (
    <>
      <MainNavBar loading={loading} avatarText={avatarTextGenerator()} />
      <AppBar />
      <Container maxWidth="xl" sx={{ minHeight: '100vh', paddingBottom: 2 }}>
        <Box display="flex" flexDirection="column" mt={2}>
          <Box
            flexDirection="column"
            display="flex"
            alignItems={match ? 'center' : 'flex-start'}
          >
            {loading ? (
              <>
                <Skeleton
                  sx={{ width: '100%', height: 56 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '80%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 30, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '80%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 56 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '80%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 30, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '80%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 56 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '80%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 30, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '100%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ width: '80%', height: 56, marginTop: 1 }}
                  variant="rectangular"
                />
              </>
            ) : (
              <>
                <Box>
                  <PrimaryTypography
                    variant="h3"
                    textAlign={match ? 'center' : 'left'}
                  >
                    {` Welcome ${data?.names} ${data?.surnames}`}
                  </PrimaryTypography>
                </Box>
                <Box>
                  <PrimaryTypography
                    variant="subtitle1"
                    textAlign={match ? 'center' : 'left'}
                  >
                    {data?.email}
                  </PrimaryTypography>
                </Box>
                <Box mt={3}>
                  <BoldTypographyTitle>General Information</BoldTypographyTitle>
                </Box>
                {Object.entries(data)
                  .filter((item) => {
                    return (
                      typeof item[1] === 'string' || typeof item[1] === 'number'
                    );
                  })
                  .map((filteredItem, filteredIndex) => (
                    <Box
                      mt={2}
                      width="100%"
                      key={`general-information-${filteredIndex}`}
                    >
                      <Accordion
                        aria-controls="panel1a-content"
                        id={`panel${filteredIndex}a-header`}
                        sx={{ width: '100%' }}
                      >
                        <AccordionSummary>
                          <BoldTypography>{filteredItem[0]}</BoldTypography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box
                            display="flex"
                            flexDirection="row"
                            flexWrap="wrap"
                            overflow="scroll"
                          >
                            <Typography variant="body1">
                              {filteredItem[1]}
                            </Typography>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  ))}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};
