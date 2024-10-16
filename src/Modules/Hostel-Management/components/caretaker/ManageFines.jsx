import React, { useState } from "react";
import {
  Box,
  Text,
  Paper,
  Group,
  Avatar,
  Button,
  Stack,
  Flex,
  Select,
} from "@mantine/core";

const managefines = [
  {
    id: "1",
    name: "Vishal Keshari",
    hall: "Hall-2",
    finedDate: "2023-06-15",
    status: "unpaid",
  },
  {
    id: "2",
    name: "Tushar Sharma",
    hall: "Hall-1",
    finedDate: "2023-06-18",
    status: "paid",
  },
  {
    id: "3",
    name: "Akshay Behl",
    hall: "Hall-3",
    finedDate: "2023-06-21",
    status: "unpaid",
  },
  {
    id: "4",
    name: "Ayodhya",
    hall: "Hall-2",
    finedDate: "2023-06-24",
    status: "unpaid",
  },
  {
    id: "5",
    name: "Devanshi Gupta",
    hall: "Maa Saraswati Hostel",
    finedDate: "2023-07-01",
    status: "paid",
  },
];

export default function ManageFines() {
  const [selectedHall, setSelectedHall] = useState("");

  const handleMarkPaid = (id) => {
    console.log(`Marked fine as paid for id: ${id}`);
  };

  const handleMarkUnpaid = (id) => {
    console.log(`Marked fine as unpaid for id: ${id}`);
  };

  const handleHallChange = (value) => {
    setSelectedHall(value);
  };

  // Filter fines by the selected hall
  const filteredFines = selectedHall
    ? managefines.filter((fine) => fine.hall === selectedHall)
    : managefines;

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
      })}
    >
      <Text size="xl" weight={500} mb="md">
        Manage Fines
      </Text>

      {/* Dropdown for selecting a hall */}
      <Select
        label="Filter by Hostel"
        placeholder="Select a hostel"
        data={[
          { value: "Hall-1", label: "Hall-1" },
          { value: "Hall-2", label: "Hall-2" },
          { value: "Hall-3", label: "Hall-3" },
          { value: "Hall-4", label: "Hall-4" },
          { value: "Hall-5", label: "Hall-5" },
          { value: "Maa Saraswati Hostel", label: "Maa Saraswati Hostel" },
        ]}
        value={selectedHall}
        onChange={handleHallChange}
        mb="md"
      />

      <Paper p="md" radius="md">
        <Stack spacing="md">
          {filteredFines.length > 0 ? (
            filteredFines.map((fine) => (
              <Paper key={fine.id} p="md" withBorder>
                <Flex wrap="wrap" align="center" justify="space-between">
                  <Group
                    spacing="md"
                    noWrap
                    style={{
                      minWidth: "200px",
                      flex: "1 1 25%",
                      marginBottom: "8px",
                    }}
                  >
                    <Avatar color="cyan" radius="xl">
                      {fine.name[0]}
                    </Avatar>
                    <Text weight={500} size="sm" lineClamp={1}>
                      {fine.name}
                    </Text>
                  </Group>
                  <Text
                    color="dimmed"
                    size="sm"
                    style={{
                      flex: "1 1 15%",
                      textAlign: "center",
                      marginBottom: "8px",
                    }}
                  >
                    {fine.hall}
                  </Text>
                  <Flex
                    direction="column"
                    align="flex-start"
                    style={{ flex: "1 1 30%", marginBottom: "8px" }}
                  >
                    <Group spacing="xs" noWrap>
                      <Text size="xs" color="dimmed">
                        Fined Date:
                      </Text>
                      <Text size="sm">{fine.finedDate}</Text>
                    </Group>
                    <Group spacing="xs" noWrap>
                      <Text size="xs" color="dimmed">
                        Status:
                      </Text>
                      <Text
                        size="sm"
                        color={fine.status === "paid" ? "green" : "red"}
                      >
                        {fine.status}
                      </Text>
                    </Group>
                  </Flex>
                  <Group
                    spacing="xs"
                    noWrap
                    style={{
                      flex: "1 1 25%",
                      justifyContent: "flex-end",
                      marginBottom: "8px",
                    }}
                  >
                    {fine.status === "unpaid" ? (
                      <Button
                        color="green"
                        variant="filled"
                        size="xs"
                        onClick={() => handleMarkPaid(fine.id)}
                      >
                        Mark as Paid
                      </Button>
                    ) : (
                      <Button
                        color="red"
                        variant="filled"
                        size="xs"
                        onClick={() => handleMarkUnpaid(fine.id)}
                      >
                        Mark as Unpaid
                      </Button>
                    )}
                  </Group>
                </Flex>
              </Paper>
            ))
          ) : (
            <Text>No fines for the selected hostel.</Text>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
