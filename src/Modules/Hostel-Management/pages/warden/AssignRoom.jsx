import { Paper, Button, Title, Grid, Stack, Box } from "@mantine/core";
import { CloudArrowUp, CloudArrowDown } from "@phosphor-icons/react";
import { useState } from "react";

export default function AssignRoomsComponent() {
  const [setFile] = useState(null);

  const handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      console.log("Uploaded file:", event.target.files[0]);
    }
  };

  const handleDownload = () => {
    console.log("Downloading batch sheet template");
  };

  return (
    <Box p="md">
      <Title order={2} mb="xl" weight={500}>
        Assign Rooms
      </Title>

      <Grid gutter="lg">
        {/* Upload Card */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper
            p="xl"
            radius="md"
            sx={{
              backgroundColor: "#f0f0f0",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing="lg" align="center">
              <CloudArrowUp size={64} weight="thin" />
              <Title order={3} weight={400} size="h4">
                Upload batch sheet
              </Title>

              <input
                type="file"
                id="batchSheet"
                style={{ display: "none" }}
                onChange={handleUpload}
                accept=".xlsx,.xls,.csv"
              />

              <Button
                component="label"
                htmlFor="batchSheet"
                variant="filled"
                size="md"
                styles={(theme) => ({
                  root: {
                    backgroundColor: theme.colors.cyan[4],
                    "&:hover": {
                      backgroundColor: theme.colors.cyan[5],
                    },
                    minWidth: "120px",
                    borderRadius: "4px",
                  },
                })}
              >
                Upload
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>

        {/* Download Card */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper
            p="xl"
            radius="md"
            sx={{
              backgroundColor: "#f0f0f0",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing="lg" align="center">
              <CloudArrowDown size={64} weight="thin" />
              <Title order={3} weight={400} size="h4">
                Download batch sheet
              </Title>

              <Button
                variant="filled"
                size="md"
                onClick={handleDownload}
                styles={(theme) => ({
                  root: {
                    backgroundColor: theme.colors.cyan[4],
                    "&:hover": {
                      backgroundColor: theme.colors.cyan[5],
                    },
                    minWidth: "120px",
                    borderRadius: "4px",
                  },
                })}
              >
                Download
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
