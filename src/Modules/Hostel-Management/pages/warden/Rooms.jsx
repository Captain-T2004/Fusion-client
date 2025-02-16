"use client";

import {
  Container,
  Title,
  TextInput,
  Select,
  Paper,
  Box,
  Button,
  Group,
  Stack,
} from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react";

const roomData = [
  { name: "Vinayak", room: "TA-201" },
  { name: "Ashutosh", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
  { name: "Mayank", room: "TA-201" },
];

export default function ViewRooms() {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between" mb="md">
        <Title order={2}>View-Rooms</Title>

        <Group>
          <TextInput
            placeholder="Search"
            leftSection={<MagnifyingGlass size={16} weight="bold" />}
            style={{ width: "300px" }}
          />

          <Select
            placeholder="Block A"
            data={["Block A", "Block B", "Block C"]}
            style={{ width: "150px" }}
          />
        </Group>
      </Group>

      <Paper shadow="xs" p="md" style={{ overflowY: "scroll" }}>
        <Stack spacing="xs">
          {roomData.map((item, index) => (
            <Box
              key={index}
              p="sm"
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box style={{ flex: 2 }}>{item.name}</Box>
              <Box style={{ flex: 2, textAlign: "right" }}>{item.room}</Box>
              <Box style={{ flex: 1, textAlign: "right" }}>
                <Button
                  variant="filled"
                  bg="#868E96"
                  size="xs"
                  style={{
                    minWidth: "60px",
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
}
